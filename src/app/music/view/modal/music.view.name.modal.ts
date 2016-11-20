import { MusicService } from './../../music.service';
import { Component, ViewChild } from '@angular/core';
import { MdDialogRef }          from '@angular/material';

@Component({
    selector: 'change-name-modal',
    templateUrl: './dev/app/music/view/modal/music.view.name.modal.html',
    styleUrls: ['./dev/app/music/view/modal/music.view.name.modal.css']
})

export class ChangeNameDialog {
    constructor(public dialogRef: MdDialogRef<ChangeNameDialog>) {}

    saveAndClose(trackName: string): void {        
        this.dialogRef.close(trackName);
    }
}