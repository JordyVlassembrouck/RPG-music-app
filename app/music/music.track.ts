export class Track {
     public customName: string

    constructor(public name: string, public audioElement: HTMLAudioElement) {
        this.customName = name;
    }
}