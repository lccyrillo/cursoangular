import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtivoListComponent } from './ativo-list/ativo-list.component';
import { AtivoFormComponent } from './ativo-form/ativo-form.component';


const routes: Routes = [
  { path: '', component: AtivoListComponent },
  { path: 'new', component: AtivoFormComponent },
  { path: ':id/edit', component: AtivoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtivosRoutingModule { }