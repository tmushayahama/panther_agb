import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MetabolCommonModule} from '../metabol.common';

import {
  VisualizationComponent,
  FullScreenableSvgComponent,
  SubsystemComponent,
  MetaboliteComponent,
  ReactionComponent,
  LinkComponent,
  NodeTextComponent,
  AllNetworkVisualizationComponent,
  CoreVisualizationComponent
} from './components';

import {
  RelatedToVisualizationService,
  AllNetworkVisualizationService,
} from './services';

@NgModule({
  imports: [
    CommonModule,
    MetabolCommonModule
  ],
  providers: [
    RelatedToVisualizationService,
    AllNetworkVisualizationService,
  ],
  declarations: [
    VisualizationComponent,
    FullScreenableSvgComponent,
    MetaboliteComponent,
    ReactionComponent,
    SubsystemComponent,
    LinkComponent,
    AllNetworkVisualizationComponent,
    CoreVisualizationComponent,
    NodeTextComponent,
  ],
  exports: [
    VisualizationComponent,
    FullScreenableSvgComponent,
    AllNetworkVisualizationComponent
  ]
})
export class MetabolVisualizationModule { }
