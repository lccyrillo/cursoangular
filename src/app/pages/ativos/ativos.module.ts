import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtivosRoutingModule } from './ativos-routing.module';
import { AtivoListComponent } from './ativo-list/ativo-list.component';
import { AtivoFormComponent } from './ativo-form/ativo-form.component';


@NgModule({
  declarations: [
    AtivoListComponent,
    AtivoFormComponent
  ],
  imports: [
    CommonModule,
    AtivosRoutingModule
  ]
})
export class AtivosModule { }