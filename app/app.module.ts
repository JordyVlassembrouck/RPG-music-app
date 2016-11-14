import { NgModule }             from '@angular/core';
import { MaterialModule }       from '@angular/material';
import { BrowserModule }        from '@angular/platform-browser';

import { AppComponent }         from './app.component';
import { MusicComponent }       from './music/music.component';
import { MusicViewComponent }   from './music/view/music.view.component';
import { MusicImportComponent } from './music/import/music.import.component';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
        MusicComponent,
        MusicViewComponent,
        MusicImportComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}