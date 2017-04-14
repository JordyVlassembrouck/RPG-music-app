import { NgModule }             from '@angular/core';
import { MaterialModule }       from '@angular/material';
import { BrowserModule }        from '@angular/platform-browser';

import { MusicComponent }       from './music.component';
import { MusicViewComponent }   from './view/music.view.component';
import { MusicImportComponent } from './import/music.import.component';
import { ChangeNameDialog }     from './view/modal/music.view.name.modal';

@NgModule({
    imports: [ 
        BrowserModule,
        MaterialModule
 ],
    declarations: [
        MusicComponent,
        MusicViewComponent,
        MusicImportComponent,
        ChangeNameDialog
    ],
    exports: [
        MusicComponent,
        MusicViewComponent,
        MusicImportComponent,
        ChangeNameDialog
    ],
    entryComponents: [ ChangeNameDialog ]
})

export class MusicModule {}