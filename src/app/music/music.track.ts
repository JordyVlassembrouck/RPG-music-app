export class Track {
     public customName: string

    constructor(private name: string, private audioElement: HTMLAudioElement) {
        this.customName = name;
    }

    public getName(): String {
        return this.name;
    }

    public getAudioElement(): HTMLAudioElement {
        return this.audioElement;
    }
}