import { Component }        from '@angular/core';

import { MusicService }     from './music.service';
import { Track }            from './music.track';

@Component({
    selector: 'music',
    templateUrl: 'dev/music/music.component.html',
    providers: [
        MusicService
    ],
})

export class MusicComponent {
    tracks: Track[] = [];

    constructor(private musicService: MusicService) {
        musicService.trackAdded$.subscribe(track => {
            this.tracks.push(track);
        });
        musicService.trackRemoved$.subscribe(track => {
            let trackPosition = this.tracks.indexOf(track);
            this.tracks.splice(trackPosition, 1);
        });
    }
}