import { NgModule, Component } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { TelaConsultaComponent } from './tela-consulta.component';
import { TelaViewlaudoComponent } from './tela-viewlaudo/tela-viewlaudo.component';

const routes: Routes = [
  {
    path: 'tela-viewlaudo.component/:id',
    component: TelaViewlaudoComponent,
  },

  {
    path: '',
    component: TelaConsultaComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaConsultaRoutingModule { }

export default class TelaviewlaudoRoutingModule { }