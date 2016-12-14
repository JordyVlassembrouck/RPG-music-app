import { Injectable }   from '@angular/core';
import { Subject }      from 'rxjs/Subject';

import { Track }        from './music.track'; 

@Injectable()
export class MusicService {
    private trackAdded = new Subject<Track>();
    private trackRemoved = new Subject<Track>();

    trackAdded$ = this.trackAdded.asObservable();
    trackRemoved$ = this.trackRemoved.asObservable();

    addTrack(track: Track): void {
        this.trackAdded.next(track);
    }

    removeTrack(track: Track): void {
        this.trackRemoved.next(track);
    }
}