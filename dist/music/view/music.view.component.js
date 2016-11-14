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
var MusicViewComponent = (function () {
    function MusicViewComponent(musicService, mdIconRegistry) {
        this.musicService = musicService;
        this.mdIconRegistry = mdIconRegistry;
        this.trackPlaying = false;
        mdIconRegistry.addSvgIcon('play', '../app/music/view/play.svg');
        mdIconRegistry.addSvgIcon('pause', '../app/music/view/pause.svg');
    }
    MusicViewComponent.prototype.removeTrack = function () {
        this._pause();
        this.musicService.removeTrack(this.track);
    };
    MusicViewComponent.prototype.changeSongState = function () {
        if (this.trackPlaying == false) {
            this._play();
            this.trackPlaying = true;
        }
        else if (this.trackPlaying == true) {
            this._pause();
            this.trackPlaying = false;
        }
    };
    MusicViewComponent.prototype._play = function () {
        this.track.audioElement.play();
    };
    MusicViewComponent.prototype._pause = function () {
        this.track.audioElement.pause();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', music_track_1.Track)
    ], MusicViewComponent.prototype, "track", void 0);
    MusicViewComponent = __decorate([
        core_1.Component({
            selector: 'music-view',
            templateUrl: '../app/music/view/music.view.component.html',
            styleUrls: ['../app/music/view/music.view.component.css']
        }), 
        __metadata('design:paramtypes', [music_service_1.MusicService, material_1.MdIconRegistry])
    ], MusicViewComponent);
    return MusicViewComponent;
}());
exports.MusicViewComponent = MusicViewComponent;
//# sourceMappingURL=music.view.component.js.map