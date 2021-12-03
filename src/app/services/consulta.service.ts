import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ObterDossie } from '@models/obterDossie.model'
import { SolicitarDossie } from '@models/solicitarDossie.model'
import { StatusDossie } from '@models/statusDossie.model'
import { Observable, throwError } from 'rxjs'
import { catchError, map, shareReplay, take, tap } from 'rxjs/operators'

import { EnvService } from './env.service'

@Injectable({
    providedIn: 'root'
})
export class ConsultaService {
    //
    public headers: HttpHeaders
    public solicitardossie: SolicitarDossie
    public statusdossie: StatusDossie
    public parametro: string = ''

    constructor(private http: HttpClient, private env: EnvService) {
        //
        this.statusdossie = new StatusDossie()
        this.solicitardossie = new SolicitarDossie()

        this.headers = new HttpHeaders()
        this.headers = this.headers.append('Content-Type', 'application/json')
        this.headers = this.headers.append('X-PDPJ-CPF-USUARIO-OPERADOR', '93758798412')
        this.headers = this.headers.append('Cache-Control', 'no-cache')
    }

    public findByCpf(filtro: string): Observable<ObterDossie> {


        /*
        1 - Cpf para consulta, incluido no campo cpf do objeto
        2 - Montagem do corpo da resquisição
        3 - Realiza a consulta com o Cpf para para obter o protocolo do dossie
        4 - Com o protocolo definido realiza a consulta para ter o dossie médico
            retornando para a tela-consulta o objeto obterDossie

        5 - Função de tratamento de erro da requisição
        6 - Função para extrair o corpo da resposta
        */

        /*1*/ this.solicitardossie.cpf = filtro

        /*2*/ let body = JSON.stringify(this.solicitardossie)

        /*3*/ this.findProtocolo(filtro)

        /*4*/ return this.http.get(`${this.env.obterLink}?protocolo=${this.parametro}`).pipe(
            catchError(this.handlerror),
            shareReplay(),
            // map(data => data as ObterDossie)
            tap(x => console.log(x))
        )
    }

    findProtocolo(parametro: string) {
        return this.http
            .get(`${this.env.solicitarLink}?parametro=${parametro}`)
            .pipe(
                catchError(this.handlerror),
                shareReplay(),
                tap(x => console.log(x))
            )
            .subscribe(
                res => (this.statusdossie = this.extractData(res)),
                err => this.handlerror(err),
                () => {
                    this.parametro = this.statusdossie.protocolo
                }
            )
    }

    findByNomeMaeData(nome: string, nomeMae: string, dataNascimento: string) {
        // return [];
        //TODO: implementar
        return this.http
    }

    /*5*/ public handlerror(handlerror: any): Observable<any> {
        console.log('Erro na requisição=>', handlerror)
        return throwError(handlerror)
    }

    /*6*/ public extractData(res: any) {
        let body = res
        return body
    }
}
