import { ListaLaudo } from './listaLaudo.model'

export class ListaLaudoSABITO {
    constructor(
        public listaLaudoSABITO?: ListaLaudo[],
        public mensagemTO = class {
            httpCode?: number
            result?: string
        }
    ) {}
}
