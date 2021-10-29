export class obterDossie {
    public cabecalho: {
        dataSolicitacao: string
        nomeCliente: string
        parametro: string
        protocolo: string
        status: string
        tipoDossie: string
        tipoParametro: string
        urlRetorno: string
    }
    public dossieMedico: {
        laudos: {
            listaLaudoSABITO: [
                {
                    cdBeneficio: 0
                    cdLaudo: 0
                    cdOrdem: 0
                    cdProtocolo: string
                    cdRequerimento: 0
                    dsAcidenteTrabalho: string
                    dsAuxilioAcidente: string
                    dsConsideracoes: string
                    dsExameFisico: string
                    dsHistoria: string
                    dsInvalidez: string
                    dsIsencaoCarencia: string
                    dsJustNTEP: string
                    dsProtocolo: string
                    dsRP: string
                    dsResultadoIncapacidade: string
                    dtCessacaoBeneficio: Date
                    dtInicioDoencaDID: Date
                    dtInicioIncapacidadeDII: Date
                    dtRealizExame: Date
                    medicoSABITO: {
                        nmMedico: string
                        nuCRM: string
                        nuMatInss: 0
                    }
                    origemCadastro: 0
                    requerimentoSABITO: {
                        beneficioSABITO: {
                            dsBeneficio: string
                        }
                        requerenteSABITO: {
                            dtNascimento: Date
                            nmRequerente: string
                            nuIdentidade: string
                            ocupacao: string
                            sexo: string
                        }
                    }
                }
            ]
            mensagemTO: {
                httpCode: 0
                result: string
            }
        }
    }
    public dossieMedicoPDF: string
    public processamentoTO: {
        consultasRealizadas: 0
        tempoProcessamento: 0
        volumeRetorno: 0
    }
}
