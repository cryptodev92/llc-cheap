import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesComponent } from './resources.component';



@NgModule({
  declarations: [
    ResourcesComponent
  ],
  exports: [
    ResourcesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResourcesModule { }
