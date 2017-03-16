import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {SubsystemAnalyzeModule} from '../metabol.subsystem-analyze';

import {
  PanelComponent,
  ProfileComponent,
  PastAnalysisComponent,
  ChangePasswordComponent,
  PastAnalysisDetailComponent
} from "./components";

import {LoginService} from '../metabol.auth/services/login/login.service';
import {PanelRoutesRoutingProviders, PanelRoutesRouting} from './metabol.panel.routes';

@NgModule({
  declarations: [
    PanelComponent,
    ProfileComponent,
    ChangePasswordComponent,
    PastAnalysisComponent,
    PastAnalysisDetailComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,

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
