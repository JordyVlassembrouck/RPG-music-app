import { Component, Input } from '@angular/core';

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

    constructor(private musicService: MusicService) {
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
        var track = this.track.audioElement;
        track.volume = 0;
        track.play();
        var fade = setInterval(function() {
            if (track.volume > 0.95) {
                track.volume = 1;
                clearInterval(fade);
                return;
            }
            track.volume += 0.05;
        }, 50);
    }

    _pause() {
        var track = this.track.audioElement;
        track.volume = 1;
        var fade = setInterval(function() {
            if (track.volume < 0.05) {
                track.volume = 0;
                track.pause();
                clearInterval(fade);
                return;
            }
            track.volume -= 0.05;
        }, 50);
    }
}