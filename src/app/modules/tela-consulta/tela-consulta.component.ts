import { Component, OnInit } from '@angular/core'
import { Cabecalho } from '@models/cabecalho.model'
import { DossieMedico } from '@models/dossieMedico.model'
import { ListaLaudoSABITO } from '@models/listaLaudoSABITO.model'
import { ObterDossie } from '@models/obterDossie.model'
import { ProcessamentoTO } from '@models/processamentoTO.model'
import { async } from 'rxjs/internal/scheduler/async'
import { isEmpty } from 'rxjs/operators'
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
    public laudos: ListaLaudoSABITO

    constructor(protected consultaService: ConsultaService) {
        this.dossie = new ObterDossie()
    }

    ngOnInit() {}

    public findByCpf() {
        if (!this.filtro.trim()) {
            alert('Informe um cpf')
        } else {
            this.consultaService.findByCpf(this.filtro).subscribe(dossie => (this.dossie = dossie))
        }
    }

    public findByNomeMaeData() {}
}
