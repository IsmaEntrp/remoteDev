import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { WallPeaperComponent } from './wallpeaper/wallpeaper.component';
@NgModule({
  declarations: [WallPeaperComponent],
  imports: [SharedModule],
  providers: [],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
