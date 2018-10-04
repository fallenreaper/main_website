import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ApplicationRouterModule} from "./routes";
import {MainComponent} from "./pages/main/main.component";

@NgModule({
    declarations: [
        AppComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        ApplicationRouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
