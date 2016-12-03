import { Component, Input, ViewContainerRef, OnInit }               from '@angular/core';
import { MdIconRegistry, MdDialogRef, MdDialog, MdDialogConfig }    from '@angular/material';

import { MusicService }                                             from '../music.service';
import { Track }                                                    from '../music.track';
import { ChangeNameDialog }                                         from './modal/music.view.name.modal';

@Component({
    selector: 'music-view',
    templateUrl: './dev/app/music/view/music.view.component.html',
    styleUrls: ['./dev/app/music/view/music.view.component.css']
})

export class MusicViewComponent implements OnInit {    
    @Input() track: Track;
    private trackPlaying: boolean = false;
    private fadeEffect: NodeJS.Timer;
    dialogRef: MdDialogRef<ChangeNameDialog>;

    constructor(private musicService: MusicService, mdIconRegistry: MdIconRegistry, public dialog: MdDialog, public viewContainerRef: ViewContainerRef) {
        mdIconRegistry.addSvgIcon('more', './dev/images/more.svg');
    }

    ngOnInit() {
        this.track.getAudioElement().volume = 0;
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
        this._removeRemainingFadeEffect();
        let track = this.track.getAudioElement();
        
        track.play();
        this.fadeEffect = setInterval(function() {
            if (track.volume <= 0.99) {
                track.volume += 0.01;
            } else {
                track.volume = 1;
                clearInterval(this.fadeEffect);
                return;
            }
        }, 20);
    }

    _pause(): void {
        this._removeRemainingFadeEffect();
        let track = this.track.getAudioElement();
        
        this.fadeEffect = setInterval(function() {
            if (track.volume >= 0.01) {
                track.volume -= 0.01;
            } else {
                track.volume = 0;
                track.pause();
                clearInterval(this.fadeEffect);
                return;
            }
        }, 20);
    }

    _removeRemainingFadeEffect() {
        clearInterval(this.fadeEffect);
    }
}