import { Injectable }   from '@angular/core';
import { Subject }      from 'rxjs/Subject';

import { Track }        from './music.track'; 

@Injectable()
export class MusicService {
    private _tracks: Track[] = [];

    getTracks(): Track[] {
        return this._tracks;
    }

    addTrack(track: Track): void {
        this._tracks.push(track);
    }

    removeTrack(track: Track): void {
        let trackPosition = this._tracks.indexOf(track);
        this._tracks.splice(trackPosition, 1);
    }
}