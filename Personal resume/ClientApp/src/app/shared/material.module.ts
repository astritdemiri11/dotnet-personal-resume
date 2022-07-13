import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [
  FlexLayoutModule,
  MatButtonModule,
  MatToolbarModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})

export class MaterialModule {}
