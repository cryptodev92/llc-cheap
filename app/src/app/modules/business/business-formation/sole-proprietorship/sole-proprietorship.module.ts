import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoleProprietorshipComponent } from './sole-proprietorship.component';



@NgModule({
  declarations: [
    SoleProprietorshipComponent
  ],
  exports: [
    SoleProprietorshipComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SoleProprietorshipModule { }
