import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ApplicationRouterModule} from './routes';
import {MainComponent} from './pages/main/main.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { WorkComponent } from './pages/work/work.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        ResumeComponent,
        WorkComponent
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
