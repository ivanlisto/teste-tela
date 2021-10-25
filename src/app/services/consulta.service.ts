import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cabecalho } from '@models/cabecalho.model';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  //
  public cabecalhoUrl: string = 'http://localhost:3000/cabecalho';
  public processamentoTOUrl: string = 'http://localhost:3000/processamentoTO';
  public dossiePrevidenciario: string =
    'http://localhost:3000/dossiePrevidenciario';
  public dossiePrevidenciarioAPI: string =
    'http://localhost:8880/api/v1/dossie-previdenciario/obterDossiePrevidenciario?protocolo=';

  constructor(private http: HttpClient, private env: EnvService) {}

  findByCpf(cpf: Cabecalho) {
    // return [];
    //TODO: implementar
    // return this.http
    //   .get<any[]>(`${this.env.apiUrl}/consulta`)
    //   .pipe(shareReplay());
    return this.http
      .get<any>(`${this.cabecalhoUrl}?parametro=${cpf.parametro}`)
      .pipe(shareReplay());
  }

  findByNomeMaeData(nome: string, nomeMae: string, dataNascimento: string) {
    // return [];
    //TODO: implementar
    return this.http;
  }
}
