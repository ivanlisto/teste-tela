import {
    HttpClient,
    HttpHeaders,
    HttpParams
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { shareReplay } from 'rxjs/internal/operators/shareReplay'
import { EnvService } from './env.service'
import { Observable, throwError } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'
import { statusDossie } from '@models/statusDossie.model'
import { obterDossie } from '@models/obterDossie.model'
import { solicitarDossie } from '@models/solicitarDossie.model'


@Injectable({
    providedIn: 'root'
})
export class ConsultaService {
    //
    public headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-PDPJ-CPF-USUARIO-OPERADOR': '93758798412'
    })
    public solicitardossie: solicitarDossie
    public statusdossie: statusDossie
    public obterdossie: obterDossie
    public protocolo: string = 'e6725b2a-aae2-409c-a5d8-91708'


    constructor(private http: HttpClient, private env: EnvService) {
      this.statusdossie = new statusDossie()
      this.solicitardossie = new solicitarDossie()
      this.obterdossie = new obterDossie()
    }

  findByCpf(filtro: string): Observable<obterDossie> {
     //  this.solicitardossie.cpf = filtro
    // let body = JSON.stringify({ this.solicitardossie })

        let body = JSON.stringify({
            cpf: '11077466714',
            nomeCliente: 'string',
            urlRetorno: 'string'
        })

        // let teste: Observable<statusDossie> = this.http
        //     .post(this.solicitarLink, body, {
        //         headers: this.headers
        //     })
        //     .pipe(catchError(this.handlerror), shareReplay(3))



        // teste.subscribe(res=> this.protocolo = res.protocolo)

        // this.env.statusLink = this.env.statusLink + this.protocolo

        // this.http
        //     .get(this.statusLink, {
        //         headers: this.headers
        //     })
        //     .pipe(catchError(this.handlerror), shareReplay(3))

        this.env.obterLink = this.env.obterLink + this.protocolo + '/false'
        console.log('link da consulta  '+this.env.obterLink);

        return this.http
            .get(this.env.obterLink, {headers: this.headers})
            .pipe(catchError(this.handlerror), shareReplay())
    }

    findByNomeMaeData(
        nome: string,
        nomeMae: string,
        dataNascimento: string
    ) {
        // return [];
        //TODO: implementar
        return this.http
    }

    handlerror(handlerror: any): Observable<any> {
        console.log('Erro na requisição=>', handlerror)
        return throwError(handlerror)
    }
}

