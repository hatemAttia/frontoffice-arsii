import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { BaseComponent } from './components/base/base.component';

@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [CommonModule, PrivateRoutingModule],
  providers: [],
})
export class PrivateModule {}
