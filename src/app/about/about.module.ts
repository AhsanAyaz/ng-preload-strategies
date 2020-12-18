import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [AboutComponent],
  imports: [QuicklinkModule, CommonModule, AboutRoutingModule],
})
export class AboutModule {}
