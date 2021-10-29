import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { obterDossie } from '@models/obterDossie.model';
import { EnvService } from '@services/env.service';
import { first, map, shareReplay, take, tap } from 'rxjs/operators';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
    selector: 'app-tela-consulta',
    templateUrl: './tela-consulta.component.html',
    styleUrls: ['./tela-consulta.component.scss']
})
export class TelaConsultaComponent implements OnInit {
    //

     public headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-PDPJ-CPF-USUARIO-OPERADOR': '93758798412'
     })
      public protocolo: string = 'e6725b2a-aae2-409c-a5d8-91708'

    public dossie: obterDossie
    public filtro: string = '11077466714'

    constructor(protected consultaService: ConsultaService, protected http:HttpClient, private env: EnvService) {}

    ngOnInit() {

    }

    public findByCpf() {
        // if (!this.filtro.trim()) {
        //     alert('Informe um cpf')
        // } else {
      this.env.obterLink = this.env.obterLink + this.protocolo + '/false'

      let teste = this.http
        .get<any>( this.env.obterLink, { headers:this.headers})
        .pipe(
          first(), shareReplay())

      // let teste = this.http
      //   .get<any>('https://swapi.dev/api/people/80')
      //   .pipe(
      //     first(),shareReplay())

      teste.subscribe(
            resultado => (console.log(resultado)),
            (error) => console.log('Ocorreu um erro='+error)
      )

      //   this.consultaService.findByCpf(this.filtro).subscribe(
      //       resultado => (this.dossie = resultado),
      //       () => console.log('Ocorreu um erro')
      // )

        // console.log(this.dossie.dossieMedico.laudos.listaLaudoSABITO);


        this.filtro = ''
        // }
    }

    public findByNomeMaeData() {}
}
