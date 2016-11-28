import { NgModule }         from '@angular/core';
import { MaterialModule }   from '@angular/material';
import { BrowserModule }    from '@angular/platform-browser';

import { AppComponent }     from './app.component';
import { MusicModule }      from './music/music.module';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        MusicModule
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}