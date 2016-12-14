import { Track }    from '../music.track'; 

describe('Music track', () => {
    describe('constructor()', () => {
        it('constructs correctly', () => {
            let audioElement = document.createElement('audio');
            let songName = 'Yakety Sax';

            let track = new Track(songName, audioElement);

            expect(track.name).toEqual(songName);
            expect(track.audioElement).toEqual(audioElement);
            expect(track.customName).toEqual(songName);
        });
    });
});