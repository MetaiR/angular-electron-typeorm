import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { DatabaseService } from './data-access/database.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        // BrowserAnimationsModule,
        FormsModule
    ],
    providers: [DatabaseService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
