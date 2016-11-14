import { Component, Input } from '@angular/core';
import { MdIconRegistry }   from '@angular/material';

import { MusicService }     from '../music.service';
import { Track }            from '../music.track';

@Component({
    selector: 'music-view',
    templateUrl: '../app/music/view/music.view.component.html',
    styleUrls: ['../app/music/view/music.view.component.css']
})

export class MusicViewComponent {
    @Input() track: Track;
    private trackPlaying: boolean = false;

    constructor(private musicService: MusicService, private mdIconRegistry: MdIconRegistry) {
        mdIconRegistry.addSvgIcon('play', '../app/music/view/play.svg');
        mdIconRegistry.addSvgIcon('pause', '../app/music/view/pause.svg');
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