import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cabecalho } from '@models/cabecalho.model';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';
import { EnvService } from './env.service';

@Injectable()
export class ConsultaService {
  //
  public cabecalhoUrl: string = 'http://localhost:3000/cabecalho';
  public processamentoTOUrl: string = 'http://localhost:3000/processamentoTO';
  public dossiePrevidenciario: string =
    'http://localhost:3000/dossiePrevidenciario';
  // public dossiePrevidenciarioAPI: string =
  //   'http://localhost:8880/api/v1/dossie-previdenciario/obterDossiePrevidenciario?protocolo=';
  public dossiePrevidenciarioAPI: string =
    'https://gateway.stg.cloud.pje.jus.br/previdenciario-api/api/v1/dossiePrevidenciario/1.0.0/obterDossie/f01c41de-da59-427b-8142-f41be';

  constructor(private http: HttpClient, private env: EnvService) {}

  findByCpf(filtro: string) {
    return this.http
      .get<Cabecalho>(`${this.cabecalhoUrl}?parametro=${filtro}`)
      .pipe(shareReplay());
  }

  findByNomeMaeData(nome: string, nomeMae: string, dataNascimento: string) {
    // return [];
    //TODO: implementar
    return this.http;
  }
}
