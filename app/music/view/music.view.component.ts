import { Component, Input } from '@angular/core';
import { MdIconRegistry }   from '@angular/material';


import { MusicService }     from '../music.service';
import { Track }            from '../music.track';

@Component({
    selector: 'music-view',
    templateUrl: 'dev/music/view/music.view.component.html',
    styleUrls: ['dev/music/view/music.view.component.css']
})

export class MusicViewComponent {
    @Input() track: Track;
    private trackPlaying: boolean = false;

    constructor(private musicService: MusicService, mdIconRegistry: MdIconRegistry) {
        mdIconRegistry.addSvgIcon('more', 'dev/music/view/img/more.svg');
    }

    removeTrack(): void {
        this._pause();
        this.musicService.removeTrack(this.track);
    }

    changeSongState() {
        if (this.trackPlaying == false) {
            this._play();
            this.trackPlaying = true;
        } else if (this.trackPlaying == true) {
            this._pause();
            this.trackPlaying = false;
        }
    }

    _play() {
        this.track.audioElement.play();
    }

    _pause() {
        this.track.audioElement.pause();
    }
}