import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BarHeadComponent } from './component/barestick/barestick.component';
import { SharedComponent } from './shared.component';

@NgModule({
  declarations: [BarHeadComponent],
  imports: [],
  providers: [],
  bootstrap: [SharedComponent],
  exports: [BarHeadComponent],
})
export class SharedModule {}
