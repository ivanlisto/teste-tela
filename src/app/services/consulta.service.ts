import {
    HttpClient,
    HttpHeaders,
    HttpParams
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Cabecalho } from '@models/cabecalho.model'
import { shareReplay } from 'rxjs/internal/operators/shareReplay'
import { EnvService } from './env.service'
import { Observable, throwError } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

@Injectable()
export class ConsultaService {
    //
    public protocolo: string = 'e6725b2a-aae2-409c-a5d8-91708'

    public link1: string =
        'https://gateway.stg.cloud.pje.jus.br/previdenciario-api/api/v1/dossiemedico/2.0.0/solicitarDossie/cpf'

    public link2: string = `https://gateway.stg.cloud.pje.jus.br/previdenciario-api/api/v1/dossiemedico/2.0.0/statusDossie/${this.protocolo}`

    public link3: string = `https://gateway.stg.cloud.pje.jus.br/previdenciario-api/api/v1/dossiemedico/2.0.0/obterDossie/${this.protocolo}/false`

    constructor(private http: HttpClient, private env: EnvService) {}

    findByCpf(filtro: string): Observable<Cabecalho> {
        let headers = new HttpHeaders({
            'Content-Type': 'Application/json',
            'X-PDPJ-CPF-USUARIO-OPERADOR': '93758798412'
        })

        let params = new HttpParams()
        params = params.append('cpf', '11077466714')
        params = params.append('nomeCliente', 'string')
        params = params.append('urlRetorno', 'string')

        return this.http.post(this.link1, { headers, params }).pipe(
            catchError(this.handlerror),
            shareReplay(3)
            //map((res: any) => res.json() as Cabecalho)
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

    handlerror(handlerror: any): Observable<any> {
        console.log('Erro na requisição=>', handlerror)
        return throwError(handlerror)
    }
}
