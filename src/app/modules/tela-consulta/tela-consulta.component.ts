import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-tela-consulta',
  templateUrl: './tela-consulta.component.html',
  styleUrls: ['./tela-consulta.component.scss'],
})
export class TelaConsultaComponent implements OnInit {

  constructor(protected consultaService: ConsultaService) { }

  ngOnInit() {

  }
}
