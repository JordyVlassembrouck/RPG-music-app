import { Component }        from '@angular/core';
import { MdIconRegistry }   from '@angular/material';

import { MusicService }     from '../music.service';
import { Track }            from '../music.track';

@Component({
    selector: 'music-import',
    templateUrl: './dev/app/music/import/music.import.component.html',
    styleUrls: ['./dev/app/music/import/music.import.component.css']
})

export class MusicImportComponent {
    
    constructor(private musicService: MusicService, private mdIconRegistry: MdIconRegistry) {
        mdIconRegistry.addSvgIcon('music', './dev/images/music.svg');
    }
    
    triggerInputClick() {
        document.getElementById('invisible-input').click()
    }

    importTrack() {
        let importedTrack = this._retrieveTrackFromInputElement();
        this._clearInputElement();
        let reader: any = new FileReader();
        let _this = this;
        reader.onload = function(progressEvent) {
            let audioElement = _this._createAudioElement(progressEvent, importedTrack);
            console.log(audioElement);
            let trackName = _this._removeFileExtentionFromSongName(importedTrack.name);
            let track = new Track(trackName, audioElement);
            _this.musicService.addTrack(track);

            let textFile = null;
            var data = new Blob([audioElement.outerHTML], {type: 'text/plain'});
            if (textFile !== null) {
                window.URL.revokeObjectURL(textFile);
            }

            textFile = window.URL.createObjectURL(data);
            window.open(textFile);
        };
        reader.readAsDataURL(importedTrack);
    }

    _removeFileExtentionFromSongName(trackName: string) {
        return trackName.substring(0, trackName.lastIndexOf('.'));
    }

    _retrieveTrackFromInputElement(): any {
        return (<HTMLInputElement>document.getElementById('invisible-input')).files[0];
    }

    _clearInputElement(): void {
        (<HTMLInputElement>document.getElementById('invisible-input')).value = '';
    }

    _createAudioElement(progressEvent: any, importedTrack: any): HTMLAudioElement {
        let audioElement = document.createElement("audio");
        audioElement.src = progressEvent.target.result;
        audioElement.setAttribute("type", importedTrack.type);
        audioElement.setAttribute("loop", "loop");
        return audioElement;
    }
}