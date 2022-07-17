import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { SharedService } from './services/shared.service';
import { LayoutService } from './services/layout/layout.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [
    LayoutService,
    SharedService
  ]
})
export class SharedModule { }
