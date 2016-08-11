import { Component } from "@angular/core";
import { HTTP_PROVIDERS, Http, ConnectionBackend, Request } from "@angular/http"

import { Observable } from "rxjs";
import "rxjs/add/operator/map";

import * as reddit from "./models/reddit";
import { SubmissionComponent } from "./submission/submission.component"

@Component({
    providers: [HTTP_PROVIDERS],
    directives: [SubmissionComponent],
    selector: "my-app",
    template: `
    <my-submission *ngFor="let entry of feedData | async; let i = index"
        [position]="i"
        [data]="entry">
    </my-submission>`,
})
export class AppComponent {
    feedData: Observable<reddit.Submission[]>;

    constructor(private http: Http) {}
    ngOnInit() {
        this.feedData =
            this.http
            .get("http://localhost:8000/r/aww.json")
            // Read out the JSON.
            .map(response => response.json())
            // Flatten out each response to a list of submissions.
            .map(response => response.data.children.map(child => child.data));
    }
}


