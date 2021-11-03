export class StatusDossie {
    constructor(
        public dataSolicitacao?: Date,
        public parametro?: string,
        public protocolo?: string,
        public statusDossie?: string,
        public tipoDossie?: string,
        public tipoParametro?: string
    ) {}
}
