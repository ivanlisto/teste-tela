import { Component, OnInit } from '@angular/core'
import { ListaLaudo } from '@models/listaLaudo.model'
import { ObterDossie } from '@models/obterDossie.model'
import { ConsultaService } from 'src/app/services/consulta.service'

@Component({
    selector: 'app-tela-consulta',
    templateUrl: './tela-consulta.component.html',
    styleUrls: ['./tela-consulta.component.scss']
})
export class TelaConsultaComponent implements OnInit {
    //

    public dossie: ObterDossie
    public filtro: string = '11077466714'
    public laudos: ListaLaudo[]

    constructor(protected consultaService: ConsultaService) {
        this.dossie = new ObterDossie()
    }

    ngOnInit() {}

    public findByCpf() {
        if (!this.filtro.trim()) {
            alert('Informe um cpf')
        } else {
            this.consultaService.findByCpf(this.filtro).subscribe(
                dossie => (this.dossie = dossie)
                // err => console.log(err),
                // () => {
                //     this.dossie.dossieMedico.laudos.listaLaudoSABITO.forEach(element => {
                //         this.laudos.push(element)
                //         console.log(element)
                //     })
                // }
            )
        }
    }

    public findByNomeMaeData() {}
}
