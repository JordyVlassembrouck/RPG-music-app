"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var material_1 = require('@angular/material');
var music_service_1 = require('../music.service');
var music_track_1 = require('../music.track');
var MusicImportComponent = (function () {
    function MusicImportComponent(musicService, mdIconRegistry) {
        this.musicService = musicService;
        this.mdIconRegistry = mdIconRegistry;
        mdIconRegistry.addSvgIcon('music', '../app/music/import/music.svg');
    }
    MusicImportComponent.prototype.triggerInputClick = function () {
        document.getElementById('invisible-input').click();
    };
    MusicImportComponent.prototype.importTrack = function () {
        var importedTrack = this._retrieveTrackFromInputElement();
        this._clearInputElement();
        var reader = new FileReader();
        var _thisImportComponent = this;
        reader.onload = function (progressEvent) {
            var audioElement = _thisImportComponent._createAudioElement(progressEvent, importedTrack);
            var track = new music_track_1.Track(importedTrack.name, audioElement);
            _thisImportComponent.musicService.addTrack(track);
        };
        reader.readAsDataURL(importedTrack);
    };
    MusicImportComponent.prototype._retrieveTrackFromInputElement = function () {
        return document.getElementById('invisible-input').files[0];
    };
    MusicImportComponent.prototype._clearInputElement = function () {
        document.getElementById('invisible-input').value = '';
    };
    MusicImportComponent.prototype._createAudioElement = function (progressEvent, importedTrack) {
        var audioElement = document.createElement("audio");
        audioElement.src = progressEvent.target.result;
        audioElement.setAttribute("type", importedTrack.type);
        audioElement.setAttribute("controls", "controls");
        return audioElement;
    };
    MusicImportComponent = __decorate([
        core_1.Component({
            selector: 'music-import',
            templateUrl: '../app/music/import/music.import.component.html',
            styleUrls: ['../app/music/import/music.import.component.css']
        }), 
        __metadata('design:paramtypes', [music_service_1.MusicService, material_1.MdIconRegistry])
    ], MusicImportComponent);
    return MusicImportComponent;
}());
exports.MusicImportComponent = MusicImportComponent;
//# sourceMappingURL=music.import.component.js.map