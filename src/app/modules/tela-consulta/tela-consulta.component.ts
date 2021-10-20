import { Component, OnInit } from '@angular/core';
import { cabecalho } from '@models/cabecalho.model';

import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-tela-consulta',
  templateUrl: './tela-consulta.component.html',
  styleUrls: ['./tela-consulta.component.scss'],
})
export class TelaConsultaComponent implements OnInit {
  //
  public cpf: cabecalho;

  constructor(protected consultaService: ConsultaService) {}

  ngOnInit() {}

  public findByCpf() {
    this.consultaService.findByCpf(this.cpf.protocolo);
  }

  public findByNomeMaeData() {}
}
