import { Component, OnInit } from '@angular/core';
import { Cabecalho } from '@models/cabecalho.model';
import { DossiePrevidenciario } from '@models/dossieprevidenciario.model';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-tela-consulta',
  templateUrl: './tela-consulta.component.html',
  styleUrls: ['./tela-consulta.component.scss'],
})
export class TelaConsultaComponent implements OnInit {
  //
  public cpf: Cabecalho;
  public cpf2: Cabecalho;
  public dossiePrevidenciario: DossiePrevidenciario;

  constructor(protected consultaService: ConsultaService) {
    this.cpf = new Cabecalho();
  }

  ngOnInit() {}

  public findByCpf() {
    if (!this.cpf.parametro.trim()) {
      alert('Informe um cpf');
    } else {
      this.consultaService
        .findByCpf(this.cpf)
        .subscribe((param) => (this.cpf2.parametro = param));
      console.log(this.cpf.parametro);
      // this.cpf.parametro = '';
    }
  }

  public findByNomeMaeData() {}
}
