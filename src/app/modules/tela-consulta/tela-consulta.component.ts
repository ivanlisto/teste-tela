import { Component, OnInit } from '@angular/core'
import { obterDossie } from '@models/obterDossie.model'
import { isEmpty } from 'rxjs/operators'
import { ConsultaService } from 'src/app/services/consulta.service'

@Component({
    selector: 'app-tela-consulta',
    templateUrl: './tela-consulta.component.html',
    styleUrls: ['./tela-consulta.component.scss']
})
export class TelaConsultaComponent implements OnInit {
    //

    public dossie: obterDossie
    public filtro: string = '83428542720'

    constructor(protected consultaService: ConsultaService) {
        // this.dossie = new obterDossie()
    }

    ngOnInit() {}

    public findByCpf() {
        if (!this.filtro.trim()) {
            alert('Informe um cpf')
        } else {
            this.consultaService
                .findByCpf(this.filtro)
                .subscribe(dossie => (this.dossie = dossie))
            console.log(this.dossie)
        }
    }

    public findByNomeMaeData() {}
}
