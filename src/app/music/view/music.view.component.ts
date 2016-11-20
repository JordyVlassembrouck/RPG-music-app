import { Component, Input, ViewContainerRef }                       from '@angular/core';
import { MdIconRegistry, MdDialogRef, MdDialog, MdDialogConfig }    from '@angular/material';

import { MusicService }                                             from '../music.service';
import { Track }                                                    from '../music.track';
import { ChangeNameDialog }                                         from './modal/music.view.name.modal';

@Component({
    selector: 'music-view',
    templateUrl: './dev/app/music/view/music.view.component.html',
    styleUrls: ['./dev/app/music/view/music.view.component.css']
})

export class MusicViewComponent {
    @Input() track: Track;
    private trackPlaying: boolean = false;
    dialogRef: MdDialogRef<ChangeNameDialog>;

    constructor(private musicService: MusicService, mdIconRegistry: MdIconRegistry, public dialog: MdDialog, public viewContainerRef: ViewContainerRef) {
        mdIconRegistry.addSvgIcon('more', './dev/images/more.svg');
    }

    removeTrack(): void {
        this._pause();
        this.musicService.removeTrack(this.track);
    }

    changeSongState(): void {
        if (this.trackPlaying == false) {
            this._play();
            this.trackPlaying = true;
        } else if (this.trackPlaying == true) {
            this._pause();
            this.trackPlaying = false;
        }
    }

    changeName(): void {
        this._openChangeNameDialog(); 
    }

    _openChangeNameDialog(): void {
        let config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;

        this.dialogRef = this.dialog.open(ChangeNameDialog, config);
        this.dialogRef.afterClosed().subscribe(newTrackName => {
            this.dialogRef = null;
            if (newTrackName != undefined) {
                this.track.customName = newTrackName;
            } 
        });
    }    

    _play() {
        this.track.audioElement.play();
    }

    _pause() {
        this.track.audioElement.pause();
    }
}