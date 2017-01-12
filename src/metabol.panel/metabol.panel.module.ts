import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MetabolVisualizationModule} from '../metabol.visualizations';
import {SubsystemAnalyzeModule} from '../metabol.subsystem-analyze';

import {PanelComponent} from './components'
import {LoginService} from '../metabol.auth/services/login/login.service';
import {PanelRoutesRoutingProviders, PanelRoutesRouting} from './metabol.panel.routes';
import {ChangePasswordComponent} from './components/panel/profile/change-password/change-password.component';
import {ProfileComponent} from './components/panel/profile/profile.component'
import {PastAnalysisComponent} from "./components/panel/past-analysis";
import {CompareAnalysisComponent} from "./components/panel/compare-analysis";
import {PastAnalysisDetailComponent} from "./components/panel/past-analysis-detail";


@NgModule({
  declarations: [
    PanelComponent,
    ProfileComponent,
    ChangePasswordComponent,
    PastAnalysisComponent,
    CompareAnalysisComponent,
    PastAnalysisDetailComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,

    MetabolVisualizationModule,
    PanelRoutesRouting,
    SubsystemAnalyzeModule
  ],
  providers: [
    LoginService,
    PanelRoutesRoutingProviders,
  ],
  exports: [

  ]
})
export class MetabolPanelModule { }
