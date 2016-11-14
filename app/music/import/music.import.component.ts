import { Component }        from '@angular/core';
import { MdIconRegistry }   from '@angular/material';

import { MusicService }     from '../music.service';
import { Track }            from '../music.track';

@Component({
    selector: 'music-import',
    templateUrl: '../app/music/import/music.import.component.html',
    styleUrls: ['../app/music/import/music.import.component.css']
})

export class MusicImportComponent {
    
    constructor(private musicService: MusicService, private mdIconRegistry: MdIconRegistry) {
        mdIconRegistry.addSvgIcon('music', '../app/music/import/music.svg');
    }
    
    triggerInputClick() {
        document.getElementById('invisible-input').click()
    }

    importTrack() {
        var importedTrack = this._retrieveTrackFromInputElement();
        this._clearInputElement();
        var reader: any = new FileReader();
        var _thisImportComponent = this;
        reader.onload = function(progressEvent) {
            var audioElement = _thisImportComponent._createAudioElement(progressEvent, importedTrack);
            var track = new Track(importedTrack.name, audioElement);
            _thisImportComponent.musicService.addTrack(track);
        };
        reader.readAsDataURL(importedTrack);
    }

    _retrieveTrackFromInputElement(): any {
        return (<HTMLInputElement>document.getElementById('invisible-input')).files[0];
    }

    _clearInputElement(): void {
        (<HTMLInputElement>document.getElementById('invisible-input')).value = '';
    }

    _createAudioElement(progressEvent: any, importedTrack: any): HTMLAudioElement {
        var audioElement = document.createElement("audio");
        audioElement.src = progressEvent.target.result;
        audioElement.setAttribute("type", importedTrack.type);
        audioElement.setAttribute("controls", "controls");
        return audioElement;
    }
}