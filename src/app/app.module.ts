import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';

@NgModule({
    declarations: [
        AppComponent,
        SanitizeHtmlPipe
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    providers: [SanitizeHtmlPipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}
