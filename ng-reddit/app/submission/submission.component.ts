
import * as reddit from "../models/reddit";
import { Component, Input } from "@angular/core";

@Component({
    selector: "my-submission",
    templateUrl: "app/submission/submission.component.html",
    styleUrls: ["app/submission/submission.component.css"]
})
export class SubmissionComponent {
    @Input() position: number;
    @Input() data: reddit.Submission;
}


