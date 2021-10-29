import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { shareReplay } from 'rxjs/internal/operators/shareReplay'
import { EnvService } from './env.service'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { statusDossie } from '@models/statusDossie.model'
import { obterDossie } from '@models/obterDossie.model'
import { solicitarDossie } from '@models/solicitarDossie.model'

@Injectable({
    providedIn: 'root'
})
export class ConsultaService {
    //
    public headers = new HttpHeaders()
    public solicitardossie: solicitarDossie
    public statusdossie: statusDossie
    public obterdossie: obterDossie

    constructor(private http: HttpClient, private env: EnvService) {
        //
        this.statusdossie = new statusDossie()
        this.solicitardossie = new solicitarDossie('', 'string', 'string')
        this.obterdossie = new obterDossie()

        this.headers = this.headers.append('Content-Type', 'application/json')
        this.headers = this.headers.append('X-PDPJ-CPF-USUARIO-OPERADOR', '93758798412')
    }

    findByCpf(filtro: string): Observable<obterDossie> {
        this.solicitardossie.cpf = filtro
        let body = JSON.stringify(this.solicitardossie)

        this.http
            .post<statusDossie>(this.env.solicitarLink, body, {
                headers: this.headers
            })
            .pipe(catchError(this.handlerror), shareReplay())
            .subscribe(dados => (this.statusdossie = dados.json()))

        // console.log(body)
        // console.log(this.statusdossie)

        // console.log(this.env.solicitarLink)
        // console.log(`${this.env.obterLink}${this.statusdossie.protocolo}/false`)

        return this.http
            .get<obterDossie>(`${this.env.obterLink}${this.statusdossie.protocolo}/false`, {
                headers: this.headers
            })
            .pipe(
                catchError(this.handlerror),
                map(dados => (this.obterdossie = dados.json()))
            )
    }

    findByNomeMaeData(nome: string, nomeMae: string, dataNascimento: string) {
        // return [];
        //TODO: implementar
        return this.http
    }

    handlerror(handlerror: any): Observable<any> {
        console.log('Erro na requisição=>', handlerror)
        return throwError(handlerror)
    }
}
