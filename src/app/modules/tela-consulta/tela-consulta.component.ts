import { Component, OnInit } from '@angular/core'
import { Cabecalho } from '@models/cabecalho.model'
import { ConsultaService } from 'src/app/services/consulta.service'

@Component({
    selector: 'app-tela-consulta',
    templateUrl: './tela-consulta.component.html',
    styleUrls: ['./tela-consulta.component.scss']
})
export class TelaConsultaComponent implements OnInit {
    //
    public cpf: Cabecalho
    public filtro: string = '11077466714'

    constructor(protected consultaService: ConsultaService) {}

    ngOnInit() {}

    public findByCpf() {
        // this.cpf = new Cabecalho();

        // if (!this.filtro.trim()) {
        //     alert('Informe um cpf')
        // } else {
        this.consultaService.findByCpf(this.filtro).subscribe(
            resultado => (this.cpf = resultado),
            () => console.log('Ocorreu um erro')
        )
        // console.log(this.cpf.parametro)
        console.log(this.filtro)

        // this.filtro
        this.filtro = ''
        // }
    }

    public findByNomeMaeData() {}
}
