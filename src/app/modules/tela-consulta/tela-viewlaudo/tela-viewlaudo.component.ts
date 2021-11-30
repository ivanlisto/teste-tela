import { Component, OnInit } from '@angular/core'
import { ObterDossie } from '@models/obterDossie.model'
import { ConsultaService } from 'src/app/services/consulta.service'

@Component({
    selector: 'app-tela-viewlaudo',
    templateUrl: './tela-viewlaudo.component.html',
    styleUrls: ['./tela-viewlaudo.component.scss']
})
export class TelaViewlaudoComponent implements OnInit {
    public dossie: ObterDossie
    public filtro: string = '11077466714'
    public laudos: number[] = []

    constructor(protected consultaService: ConsultaService) {
        this.dossie = new ObterDossie()
    }
    ngOnInit() {
        this.consultaService.findByCpf(this.filtro).subscribe(
            dossie => {
                this.dossie = dossie
            },
            err => console.log(err),
            () => {
                console.log('requisição completa')
            }
        )
    }
}
