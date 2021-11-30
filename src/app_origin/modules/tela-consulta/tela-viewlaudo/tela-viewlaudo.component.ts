import { Component, OnInit } from '@angular/core';
import { ObterDossie } from '@models/obterDossie.model'
import { ConsultaService } from 'src/app/services/consulta.service'

import { ActivatedRoute, Params } from '@angular//router'

@Component({
  selector: 'app-tela-viewlaudo',
  templateUrl: './tela-viewlaudo.component.html',
  styleUrls: ['./tela-viewlaudo.component.scss']
})
export class TelaViewlaudoComponent implements OnInit {

  public dossie: ObterDossie
  public filtro: string = '11077466714'
  public laudos: number[] = []
  task: any;

  constructor(protected consultaService: ConsultaService) {
    this.dossie = new ObterDossie()
}
ngOnInit() {}

public findByCpf() {
    if (!this.filtro.trim()) {
        alert('Informe um cpf')
    } else {
        this.consultaService.findByCpf(this.filtro).subscribe(
            dossie => {
                ;(this.dossie = dossie), this.ordena(this.dossie)
            },
            err => console.log(err),
            () => {
                console.log('requisição completa')
            }
        )
    }
}

public ngOnInit() {
  this.route.params
    .switchMap((params: Params) =>
      this.consultaService.getTask(+params['id'])
    )
    .subscribe(
      arg => (this.task = arg),
      error => alert(error)
    )
}

ordena(dossie: ObterDossie) {
    this.dossie.dossieMedico.laudos.listaLaudoSABITO.forEach(
        (element, index) => {
            this.laudos.push(element.cdRequerimento)
            // console.log(this.laudos[index])
        }
    )

    let laudos = this.laudos.filter(
        (element, index) => this.laudos.indexOf(element) === index
    )
    console.log(laudos)
}

public findByNomeMaeData() {}
}




