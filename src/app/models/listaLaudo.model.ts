export class ListaLaudo {
    constructor(
        public cdBeneficio: number,
        public cdLaudo: number,
        public cdOrdem: number,
        public cdProtocolo: string,
        public cdRequerimento: number,
        public dsAcidenteTrabalho: string,
        public dsAuxilioAcidente: string,
        public dsConsideracoes: string,
        public dsExameFisico: string,
        public dsHistoria: string,
        public dsInvalidez: string,
        public dsIsencaoCarencia: string,
        public dsJustNTEP: string,
        public dsProtocolo: string,
        public dsRP: string,
        public dsResultadoIncapacidade: string,
        public dtCessacaoBeneficio: Date,
        public dtInicioDoencaDID: Date,
        public dtInicioIncapacidadeDII: Date,
        public dtRealizExame: Date,
        public medicoSABITO = class {
            nmMedico: string | undefined
            nuCRM: string | undefined
            nuMatInss: number | undefined
        },
        public origemCadastro: number,
        public requerimentoSABITO = class {
            public beneficioSABITO = class {
                dsBeneficio: string | undefined
            }
            public requerenteSABITO = class {
                dtNascimento: Date | undefined
                nmRequerente: string | undefined
                nuIdentidade: string | undefined
                ocupacao: string | undefined
                sexo: string | undefined
            }
        }
    ) {}
}
