export class ListaLaudoSABITO {
    constructor(
        public listaLaudo?: ListaLaudo[],
        public mensagemTO? = class {
            httpCode: number
            result: string
        }
    ){}
}
