import { Component, Input, ViewContainerRef, OnInit }               from '@angular/core';
import { MdIconRegistry, MdDialogRef, MdDialog, MdDialogConfig }    from '@angular/material';
import { DomSanitizer }                                             from '@angular/platform-browser';

import { MusicService }                                             from '../music.service';
import { Track }                                                    from '../music.track';
import { ChangeNameDialog }                                         from './modal/music.view.name.modal';

@Component({
    selector: 'music-view',
    styleUrls: ['./dev/app/music/view/music.view.component.css'],
    template: `
        <md-card>
            <div class="card-content">
                <div class="play-button-outer" (click)="changeSongState()">
                    <a class="play-button" id="play" href="#">
                        <div [class.paused]="!trackPlaying" class="left"></div>
                        <div [class.paused]="!trackPlaying" class="right"></div>
                        <div [class.paused]="!trackPlaying" class="triangle-1"></div>
                        <div [class.paused]="!trackPlaying" class="triangle-2"></div>
                    </a>
                </div>
                <div class="card-name">
                    <span>{{ track.customName }}</span> &nbsp; <span class="custom-track-name">({{ track.name }})</span>
                </div>
                <div class="more-button-outer">
                    <button md-icon-button [md-menu-trigger-for]="menu">
                        <md-icon svgIcon="more"></md-icon>
                    </button>
                    <md-menu #menu="mdMenu" x-position="before">
                        <button md-menu-item (click)="changeName()"> Change name </button>
                        <button md-menu-item (click)="removeTrack()"> Remove </button>
                    </md-menu>
                </div>
            </div>
        </md-card>`
})

export class MusicViewComponent implements OnInit {    
    @Input() track: Track;

    private trackPlaying: boolean = false;
    private fadeEffect: NodeJS.Timer;
    private dialogRef: MdDialogRef<ChangeNameDialog>;

    constructor(private musicService: MusicService, mdIconRegistry: MdIconRegistry, public dialog: MdDialog, public viewContainerRef: ViewContainerRef, private sanitizer: DomSanitizer) {
        mdIconRegistry.addSvgIcon('more', sanitizer.bypassSecurityTrustResourceUrl('./dev/images/more.svg'));
    }

    ngOnInit() {
        this.track.audioElement.volume = 0;
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

        this.dialogRef = this.dialog.open(ChangeNameDialog);
        this.dialogRef.afterClosed().subscribe(newTrackName => {
            this.dialogRef = null;
            if (newTrackName != undefined) {
                this.track.customName = newTrackName;
            } 
        });
    }    

    _play() {
        this._removeRemainingFadeEffect();
        let track = this.track.audioElement;
        
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
        let track = this.track.audioElement;
        
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