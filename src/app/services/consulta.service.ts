import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { obterDossie } from '@models/obterDossie.model'
import { solicitarDossie } from '@models/solicitarDossie.model'
import { statusDossie } from '@models/statusDossie.model'
import { Observable, throwError } from 'rxjs'
import { catchError, map, shareReplay } from 'rxjs/operators'

import { EnvService } from './env.service'

@Injectable({
    providedIn: 'root'
})
export class ConsultaService {
    //
    public headers: HttpHeaders
    public solicitardossie: solicitarDossie
    public statusdossie: statusDossie
    public obterdossie: obterDossie
    public laudos: Array<any>[]
    public requerimentos: Array<any>[]

    constructor(private http: HttpClient, private env: EnvService) {
        //
        this.statusdossie = new statusDossie()
        this.solicitardossie = new solicitarDossie(
            '',
            'string',
            'string'
        )
        this.obterdossie = new obterDossie()

        this.headers = new HttpHeaders()
        this.headers = this.headers.append(
            'Content-Type',
            'application/json'
        )
        this.headers = this.headers.append(
            'X-PDPJ-CPF-USUARIO-OPERADOR',
            '93758798412'
        )
    }

    findByCpf(filtro: string): Observable<obterDossie> {
        /*
        1 - Cpf para consulta, incluido no campo cpf do objeto
        2 - Montagem do corpo da resquisição
        3 - Realiza a consulta com o Cpf para para obter o protocolo do dossie
        4 - Com o protocolo definido realiza a consulta para ter o dossie médico
            retornando para a tela-consulta o objeto obterDossie

        5 - Função de tratamento de erro da requisição
        */

        /*1*/ this.solicitardossie.cpf = filtro

        /*2*/ let body = JSON.stringify(this.solicitardossie)

        /*3*/ this.http
            .post(this.env.solicitarLink, body, {
                headers: this.headers
            })
            .pipe(
                catchError(this.handlerror),
                shareReplay(3),
                map(response => response.json() as statusDossie)
            )
            .subscribe(next => (this.statusdossie = next))

        // console.log(body)
        // console.log(this.statusdossie)

        // console.log(this.env.solicitarLink)
        // console.log(`${this.env.obterLink}${this.statusdossie.protocolo}/false`)

        /*4*/ return this.http
            .get(
                `${this.env.obterLink}${this.statusdossie.protocolo}/false`,
                {
                    headers: this.headers
                }
            )
            .pipe(
                catchError(this.handlerror),
                shareReplay(3),
                map(response => response.json() as obterDossie)
            )
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

    /*5*/ handlerror(handlerror: any): Observable<any> {
        console.log('Erro na requisição=>', handlerror)
        return throwError(handlerror)
    }
}
