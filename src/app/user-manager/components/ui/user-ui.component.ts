import {Component, Input, Output, EventEmitter, OnInit, SimpleChanges, OnChanges} from "@angular/core";

@Component({
    selector : "user-ui",
    template :`
    <div>
     
        <h5>Default</h5>
        <p-editor [(ngModel)]="text1" [style]="{'height':'320px'}"></p-editor>
        <p>Value: {{text1||'empty'}}</p>

        <h5>Custom Toolbar</h5>
        <p-editor [(ngModel)]="text2" [style]="{'height':'320px'}">
            <ng-template pTemplate="header">
        <span class="ql-formats">
            <button type="button" class="ql-bold" aria-label="Bold"></button>
            <button type="button" class="ql-italic" aria-label="Italic"></button>
            <button type="button" class="ql-underline" aria-label="Underline"></button>
        </span>
            </ng-template>
        </p-editor>

    </div>
    `
})
export class UserUiComponent
{
    text1!: string;
    text2!: string;
    constructor() {
    }
}
