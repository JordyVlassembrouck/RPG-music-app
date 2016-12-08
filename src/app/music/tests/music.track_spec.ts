import { Track }    from '../music.track'; 

describe('Music track', () => {
    describe('constructor()', () => {
        it('constructs correctly', () => {
            let audioElement = document.createElement('audio');
            let songName = 'Yakety Sax';

            let track = new Track(songName, audioElement);

            expect(track.getName()).toEqual(songName);
            expect(track.getAudioElement()).toEqual(audioElement);
            expect(track.customName).toEqual(songName);
        });
    });
});