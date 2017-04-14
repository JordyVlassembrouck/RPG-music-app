import { Component }        from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <md-toolbar color="primary">
            <span>RPG Music App</span>
        </md-toolbar>
        <music></music>`
})

export class AppComponent {}