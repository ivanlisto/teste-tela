import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  constructor(private http: HttpClient, private env: EnvService) {}

  findByCpf(cpf: string) {
    // return [];
    //TODO: implementar
    //return this.http.get<any[]>(`${this.env.apiUrl}/consulta`).pipe(shareReplay());
    return this.http;
  }

  findByNomeMaeData(nome: string, nomeMae: string, dataNascimento: string) {
    // return [];
    //TODO: implementar
    return this.http;
  }
}
