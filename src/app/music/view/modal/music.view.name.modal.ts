import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'change-name-modal',
    styleUrls: ['./dev/app/music/view/modal/music.view.name.modal.css'],
    template: `
        <md-input-container>
            <input mdInput class="white-text" dividerColor="accent" #trackName placeholder="name">
        </md-input-container>
        <button class="white-text" md-button (click)="saveAndClose(trackName.value)"> Save </button>`
})

export class ChangeNameDialog {
    constructor(public dialogRef: MdDialogRef<ChangeNameDialog>) {
    }

    saveAndClose(trackName: string): void {
        this.dialogRef.close(trackName);
    }
}