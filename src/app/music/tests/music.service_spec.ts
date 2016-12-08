import { MusicService }     from '../music.service';
import { Track }            from '../music.track';

describe('Music service', () => {
    describe('addTrack()', () => {
        it('adds track to list of tracks', () => {
            let audioElement = document.createElement('audio');
            let track = new Track('Yakety Sax', audioElement);
            
            let musicService: MusicService = new MusicService();

            expect(musicService.getTracks().length).toEqual(0);

            musicService.addTrack(track);

            expect(musicService.getTracks().length).toEqual(1);
            expect(musicService.getTracks()[0]).toEqual(track);
        });
    });
});