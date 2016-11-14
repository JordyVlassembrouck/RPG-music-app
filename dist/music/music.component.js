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
var music_service_1 = require('./music.service');
var MusicComponent = (function () {
    function MusicComponent(musicService) {
        var _this = this;
        this.musicService = musicService;
        this.tracks = [];
        musicService.trackAdded$.subscribe(function (track) {
            _this.tracks.push(track);
        });
        musicService.trackRemoved$.subscribe(function (track) {
            var trackPosition = _this.tracks.indexOf(track);
            _this.tracks.splice(trackPosition, 1);
        });
    }
    MusicComponent = __decorate([
        core_1.Component({
            selector: 'music',
            templateUrl: '../app/music/music.component.html',
            providers: [
                music_service_1.MusicService
            ],
        }), 
        __metadata('design:paramtypes', [music_service_1.MusicService])
    ], MusicComponent);
    return MusicComponent;
}());
exports.MusicComponent = MusicComponent;
//# sourceMappingURL=music.component.js.map