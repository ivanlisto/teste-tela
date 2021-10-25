export interface Cabecalho {
  protocolo: string;
  nomeCliente: string;
  urlRetorno: string;
  tipoParametro: string;
  parametro: number;
  tipoDossie: string;
  dataSolicitacao: string;
  status: string;
  ProcessamentoTO: [
    {
      consultasRealizadas: number;
      tempoProcessamento: number;
      volumeRetorno: number;
    }
  ];
  dossiePrevidenciario: {
    consultaFiliadoTO: {
      filiadoTO: {
        nit: number;
        fonteOrigem: string;
        administrador: string;
        fonteCadastramento: string;
        dataInicAdministrador: Date;
        dataCadastroFonte: Date;
        nome: string;
        nomeMae: string;
        nomePai: string;
        sexo: string;
        codigoSexo: number;
        estadoCivil: string;
        codigoEstadoCivil: number;
        grauInstrucao: string;
        codigoGrauInstrucao: number;
        etnia: string;
        codigoEtnia: number;
        dataNascimento: Date;
        dataObito: Date;
        dataUltimaAtualizacao: Date;
        nacionalidade: string;
        codigoNacionalidade: number;
        dataChegada: Date;
        paisOrigem: string;
        codigoPaisOrigem: number;
        ufOrigem: string;
        codigoUfOrigem: string;
        municipioOrigem: string;
        codigoMunicipioOrigem: number;
        nuMunicipioIBGE: number;
        cpf: number;
        listaIdentidadeTO: [
          {
            id: number;
            numero: string;
            serie: string;
            dataEmissao: Date;
            uf: string;
            idUFPrev: string;
            csOrgaoEmissorIdentidade: number;
            orgaoEmissorIdentidade: string;
            csTipoDocumentoCivil: number;
          }
        ];
        identidades: string;
        inconsistente: true;
        mortePresumida: true;
        listaCtpsTO: [
          {
            id: number;
            numero: string;
            serie: string;
            dataEmissao: Date;
            uf: string;
            idUFPrev: string;
            csTipoDocumentoCivil: number;
          }
        ];
        ctpss: string;
        tituloEleitorTO: {
          id: number;
          numero: string;
          serie: string;
          dataEmissao: Date;
          uf: string;
          csTipoDocumentoCivil: number;
          tituloAsString: string;
        };
        numeroTitulo: string;
        ufTitulo: string;
        dataEmissaoTitulo: Date;
        cnhTO: {
          id: number;
          numero: string;
          serie: string;
          dataEmissao: Date;
          uf: string;
          csTipoDocumentoCivil: number;
          cnhAsString: string;
        };
        numeroCnh: string;
        ufCnh: string;
        dataEmissaoCnh: Date;
        documentoEstrangeiroTO: {
          id: number;
          numero: string;
          dataEmissao: Date;
          csTipoDocumentoCivil: number;
          idPais: number;
          docEstrangeiroAsString: string;
        };
        numeroDocEstrangeiro: string;
        dataEmissaoDocEstrangeiro: Date;
        listaMaritimoTO: [
          {
            id: number;
            numero: string;
            dataEmissao: Date;
            uf: string;
            csTipoDocumentoCivil: number;
          }
        ];
        maritimos: string;
        passaporteTO: {
          id: number;
          numero: string;
          serie: string;
          dataEmissao: Date;
          csTipoDocumentoCivil: number;
          passaporteAsString: string;
        };
        numeroPassaporte: string;
        seriePassaporte: string;
        dataEmissaoPassaporte: Date;
        listaCertidaoCivilTO: [
          {
            tipo: string;
            cartorioTO: {
              nome: string;
              municipio: string;
              uf: string;
            };
            folha: string;
            livro: string;
            termo: string;
            dataEvento: Date;
            dataRegistro: Date;
            dataEmissao2via: Date;
          }
        ];
        certidoesCivis: string;
        enderecoPrincipalTO: {
          tipoLogradouro: string;
          csTipoLogradouro: number;
          logradouro: string;
          numero: string;
          complemento: string;
          bairro: string;
          cep: number;
          municipio: string;
          uf: string;
          codigoUf: string;
          siglaUf: string;
          pais: string;
          codigoPais: number;
          codigoMunicipio: number;
          nuMunicipioIBGE: number;
          enderecoAsString: string;
        };
        enderecoPrincipal: string;
        enderecoSecundarioTO: {
          tipoLogradouro: string;
          csTipoLogradouro: number;
          logradouro: string;
          numero: string;
          complemento: string;
          bairro: string;
          cep: number;
          municipio: string;
          uf: string;
          codigoUf: string;
          siglaUf: string;
          pais: string;
          codigoPais: number;
          codigoMunicipio: number;
          nuMunicipioIBGE: number;
          enderecoAsString: string;
        };
        enderecoSecundario: string;
        telComercialTO: {
          ddi: number;
          ddd: number;
          numero: number;
        };
        telResidencialTO: {
          ddi: number;
          ddd: number;
          numero: number;
        };
        celularTO: {
          ddi: number;
          ddd: number;
          numero: number;
        };
        telResidencial: string;
        telComercial: string;
        celular: string;
        email: string;
        anoAdministracao: number;
        anoAdministracaoAsString: string;
        dataCadastroFonteAsString: string;
        dataNascimentoAsString: string;
        dataObitoAsString: string;
        dataUltimaAtualizacaoAsString: string;
        dataChegadaAsString: string;
        titulo: string;
        tituloEleitorAsString: string;
        cnh: string;
        cnhAsString: string;
        docEstrangeiro: string;
        docEstrangeiroAsString: string;
        listaMaritimosAsString: string;
        passaporte: string;
        passaporteAsString: string;
        listaCertidoesAsString: string;
        enderecoPrincipalAsString: string;
        enderecoSecundarioAsString: string;
        nitFormatado: string;
        listaIdentidadesAsString: string;
        listaCtpsAsString: string;
        cpfFormatado: string;
      };
      listaEloTO: [
        {
          nitPrincipal: number;
          nitSecundario: number;
          dataFormacao: string;
          idTipoElo: number;
          descricaoFonteOrigem: string;
          nitPrincipalFormatado: string;
          nitSecundarioFormatado: string;
        }
      ];
      mensagemTO: {
        result: string;
        httpCode: number;
      };
    };
    beneficios: {
      nomeCompleto: string;
      rg: string;
      cpfFormatado: string;
      dataNascimento: string;
      listaBeneficios: [
        {
          indiceBeneficio: number;
          numero: string;
          especie: string;
          codigoEspecie: number;
          situacao: string;
          dataInicio: Date;
          dataCessacao: Date;
          valorRendaReajustadaMesAtual: number;
          valorMensalidadeReajustadaPaga: number;
          indicaDCA: true;
          valorSalarioBeneficio: number;
          descricaoDoDiagnostico: string;
          dataInicioPagamento: Date;
          dataInicioIncapacidade: Date;
          dataInicioDoenca: Date;
          codigoMotivoCessacao: number;
          codigoMotivoSuspensao: number;
          codigoTipoDespacho: number;
          descricaoTipoDespacho: string;
          codigoMotivoDespacho: number;
          descricaoMotivoDespacho: string;
          codigoFormaFiliacao: number;
          descricaoFormaFiliacao: string;
          idRamoAtividade: number;
          descricaoRamoAtividade: string;
          codigoTipoSegurado: number;
          descricaoTipoSegurado: string;
          codigoTipoMeioPagamento: number;
          descricaoTipoMeioPagamento: string;
          numeroContaCorrente: string;
          inAcordoInternacional: true;
          valorAposentadoriaBase: number;
          valorRendaMensalInicial: number;
          inRMIInformadaPeloPosto: true;
          valorMaisVantajosoPorAcidenteTrabalho: number;
          valorAposentadoriaReajustadaMesAtual: number;
          dataCompetenciaCalculo: Date;
          taxaAcrescimoRMI: number;
          nuGruposContribuintes: number;
          dataDespachoBeneficio: Date;
          dataAcidenteDesligamento: Date;
          dataEntradaRequerimento: Date;
          dataRegularizacaoDocumentacao: Date;
          dataObitoReclusao: Date;
          nuSequencialTitular: number;
          dataProcessoIndeferido: Date;
          codigoMotivoIndeferimento: number;
          descricaoMotivoIndeferimento: string;
          codigoMotivoIndeferimento2: number;
          descricaoMotivoIndeferimento2: string;
          codigoDesistencia: number;
          descricaoDesistencia: string;
          nuOLConcessao: number;
          nuOLManutencao: number;
          nuNit: number;
          nuNitDV: number;
          dataUltimaAlteracao: Date;
          codigoTipoRepresentanteLegal: number;
          descricaoTipoRepresentanteLegal: string;
          nomeRepresentante: string;
          nomeMaeRepresentante: string;
          dataTermoGuarda: Date;
          nuNitRepresentante: number;
          nuNitDVRepresentante: number;
          dataNascimentoRepresentante: Date;
          inBeneficioPendente: number;
          dataInicioBeneficioAnterior: Date;
        }
      ];
      mensagemTO: {
        result: string;
        httpCode: number;
      };
    };
    cartaConcessao: {
      listaRespostaConcalTO: [
        {
          beneficioPosReforma2number19: true;
          cabecalhoConcalTO: {
            infoBeneficioTO: {
              nome: string;
              nit: string;
              idAps: string;
              numeroENomeAps: string;
              numeroBeneficio: string;
              dataConcessaoBeneficio: string;
              tipoBeneficio: string;
              dataRequerimento: string;
              valorRendaMensal: string;
              inicioVigencia: string;
              diaUtilPagamento: string;
              infoDependenteInvalido: string;
              codigoBeneficio: string;
              valorRendaMensalSemMoeda: string;
              tipoBeneficioSemCodigo: string;
              dataInicioPagamento: string;
              sexo: string;
              cpf: string;
              instituidor: string;
              percentualPensao: string;
              salarioBeneficio: string;
              valorBaseCalculo: string;
              coeficiente: string;
              nbAnterior: string;
              nbBase: string;
              getnDependentes: string;
              numeroDependentes: string;
              tpCalculo: string;
              tpCalculoDescricao: string;
              cpfFormatado: string;
              numeroBeneficioFormatado: string;
              nbAnteriorFormatado: string;
              nbBaseFormatado: string;
            };
            orgaoPagadorTO: {
              banco: string;
              agencia: string;
              agenciaNumero: string;
              agenciaDescricao: string;
              endereco: string;
              bairro: string;
            };
            conNuFtPrev: string;
            exibeNormaCorrecaoSalContrib: true;
            benNuNorma: string;
            benDtEmiNor: string;
            carencia1: string;
            anosTempoContrib1: string;
            mesesTempoContrib1: string;
            diasTempoContrib1: string;
            anosIdade1: string;
            mesesIdade1: string;
            diasIdade1: string;
            pontos1: string;
            carencia2: string;
            anosTempoContrib2: string;
            mesesTempoContrib2: string;
            diasTempoContrib2: string;
            anosIdade2: string;
            mesesIdade2: string;
            diasIdade2: string;
            pontos2: string;
          };
          detalheConcalTO: {
            atividadesTO: [
              {
                tpCalculo: string;
                tipoAtividade: string;
                tituloAtividade: string;
                tituloAtividadePosReforma2number19: string;
                tituloAtividadePosReforma2number19B42: string;
                dataInicioContribuicoes: string;
                dataFimContribuicoes: string;
                contribuicoesTO: [
                  {
                    numSequencia: string;
                    data: string;
                    salario: string;
                    indice: string;
                    salCor: string;
                    obs: string;
                    carencia: string;
                    t1: string;
                    t2: string;
                    t3: string;
                  }
                ];
                resumoTO: {
                  tempoContribuicao: string;
                  valorSalarioAtividade: string;
                  quantidadeSalAtiv: string;
                  salarioDeBeneficio: string;
                  formulaSalarioDeBeneficio: string;
                  imagemFormulaSalarioBeneficio: true;
                  somaSalarioDeBeneficio: string;
                  rendaMensalInicial: string;
                  exibeRendaMensalInicial: true;
                  coeficiente: string;
                  tipoResumo: string;
                  fator: string;
                  conVlSBAtiv: string;
                  complementoFormulaSalarioDeBeneficio: string;
                  expectativaVida: string;
                  idade: string;
                  mediaFinalContribuicao: string;
                  diaAdicionalContrib: string;
                  mesAdicionalContrib: string;
                  anoAdicionalContrib: string;
                  calculoFatorPrevidenciario: string;
                  aliquota: string;
                  numeroMesesAposPublicacaoLei: string;
                  somatorioSalariosCorrigidos: string;
                  fatorMultiplicacaoNumerador: string;
                  fatorMultiplicacaoDenominador: string;
                  fatorMultiplicacaoSalarioBeneficios: string;
                  numeroDependentes: string;
                  exibirDetalheObservacao: true;
                  rendaMensalInicialSemCoeficiente: string;
                };
              }
            ];
            dependentesTO: [
              {
                seq: string;
                nome: string;
                dtnasc: string;
                vinculo: string;
                dtexti: string;
                causa: string;
              }
            ];
            descartes: [
              {
                salarioCorrigido: string;
                fator: string;
                coeficiente: string;
                data: string;
                seq: string;
                descarte: string;
                media: string;
                rmi: string;
              }
            ];
            indices: [
              {
                seq: string;
                data: string;
                salario: string;
                indice: string;
                salarioCorrig: string;
                obs: string;
                ehUltimoIndice: true;
              }
            ];
            regras: {
              additionalProp1: {
                regra: string;
                tempoExigido: string;
                tempoCumprido: string;
                idadeExigida: string;
                pontosExigidos: string;
                pontosCumpridos: string;
                fator: string;
                rmiSemDescartes: string;
                info: string;
                anosTempoCumprido: string;
                mesesTempoCumprido: string;
                diasTempoCumprido: string;
                anosPontosCumpridos: string;
                mesesPontosCumpridos: string;
                diasPontosCumpridos: string;
                anosTempoExigido: string;
                mesesTempoExigido: string;
                diasTempoExigido: string;
                anosPontosExigidos: string;
                mesesPontosExigidos: string;
                diasPontosExigidos: string;
                fatorPercentual: string;
              };
              additionalProp2: {
                regra: string;
                tempoExigido: string;
                tempoCumprido: string;
                idadeExigida: string;
                pontosExigidos: string;
                pontosCumpridos: string;
                fator: string;
                rmiSemDescartes: string;
                info: string;
                anosTempoCumprido: string;
                mesesTempoCumprido: string;
                diasTempoCumprido: string;
                anosPontosCumpridos: string;
                mesesPontosCumpridos: string;
                diasPontosCumpridos: string;
                anosTempoExigido: string;
                mesesTempoExigido: string;
                diasTempoExigido: string;
                anosPontosExigidos: string;
                mesesPontosExigidos: string;
                diasPontosExigidos: string;
                fatorPercentual: string;
              };
              additionalProp3: {
                regra: string;
                tempoExigido: string;
                tempoCumprido: string;
                idadeExigida: string;
                pontosExigidos: string;
                pontosCumpridos: string;
                fator: string;
                rmiSemDescartes: string;
                info: string;
                anosTempoCumprido: string;
                mesesTempoCumprido: string;
                diasTempoCumprido: string;
                anosPontosCumpridos: string;
                mesesPontosCumpridos: string;
                diasPontosCumpridos: string;
                anosTempoExigido: string;
                mesesTempoExigido: string;
                diasTempoExigido: string;
                anosPontosExigidos: string;
                mesesPontosExigidos: string;
                diasPontosExigidos: string;
                fatorPercentual: string;
              };
            };
            comDescarteTO: {
              somaSalarios: string;
              qtContrib: string;
              mediaSalariosContrib: string;
              carencia: string;
            };
            semDescarteTO: {
              somaSalarios: string;
              qtContrib: string;
              mediaSalariosContrib: string;
              carencia: string;
            };
            qtDescartes: string;
            idade: string;
            possuiEC1number3: true;
            possuiADQ: true;
            dirAdqProporcional: true;
            indiceAtividadeDireitoAdquirido: number;
            indiceAtividadeEC1number3: number;
            carenciaExigida: string;
            tempoCumpridoAposDescartes: string;
          };
          erro: string;
        }
      ];
      mensagemTO: [
        {
          result: string;
          httpCode: number;
        }
      ];
    };
    extratoPrevidenciario: {
      listaVinculosTO: [
        {
          sequencia: number;
          nit: number;
          tipoFiliado: string;
          csTipoFiliado: 'Não Informado';
          fonteInformacao: string;
          csTipoFonteInformacao: 'GFIP';
          numeroDocumento: number;
          nuEventoESocial: number;
          dataInicio: '2number21-1number-14T2number:13:43.798Z';
          dataFim: '2number21-1number-14T2number:13:43.798Z';
          indicadores: string;
          relacaoTrabalhistaTO: {
            empregadorTO: {
              codigoEmpregador: number;
              tipoEmpregador: string;
              nomeEmpregador: string;
              dataInicioAtividades: '2number21-1number-14T2number:13:43.798Z';
              dataEncerramentoAtividades: '2number21-1number-14T2number:13:43.798Z';
              situacaoEmpresa: string;
              cnae: string;
              mei: true;
              codigoEmpregadorFormatado: string;
              empregadorCPF: true;
              empregadorCNPJ: true;
              empregadorCEI: true;
              empregadorIndeterminado: true;
              empregadorIgnorado: true;
              empregadorCAEPF: true;
              empregadorCNO: true;
              empregadorCNPJRaiz: true;
            };
            ultimaRemuneracao: string;
            extemporaneo: true;
            dataInicioPeriodoExtemporaneo: '2number21-1number-14T2number:13:43.798Z';
            causaRescisao: string;
            possuiReclamatoria: true;
            listaRegimesJuridicosTO: [
              {
                descricao: string;
                tipo: string;
                dataInicio: '2number21-1number-14T2number:13:43.798Z';
                dataFim: '2number21-1number-14T2number:13:43.798Z';
              }
            ];
            listaRegimesPrevidenciariosTO: [
              {
                csRegimePrevidenciario: 'RPPS';
                descricao: string;
                dataInicio: '2number21-1number-14T2number:13:43.798Z';
                dataFim: '2number21-1number-14T2number:13:43.798Z';
              }
            ];
            listaPeriodosOcupacoesTO: [
              {
                descricao: string;
                dataInicio: '2number21-1number-14T2number:13:43.798Z';
                dataFim: '2number21-1number-14T2number:13:43.798Z';
                naturezaOcupacao: string;
                csNaturezaOcupacao: 'Urbana';
                ocupacao: string;
                categoriaESocial: string;
              }
            ];
            listaAfastamentosTO: [
              {
                fonteInformacao: string;
                numeroDocumento: number;
                dataInicio: '2number21-1number-14T2number:13:43.798Z';
                dataFim: '2number21-1number-14T2number:13:43.798Z';
                idTipoMovimentacao: number;
                motivoAfastamento: string;
                tipoMovimento: string;
              }
            ];
            listaAgentesNocivosTO: [
              {
                fonteInformacao: string;
                numeroDocumento: number;
                dataInicio: '2number21-1number-14T2number:13:43.798Z';
                dataFim: '2number21-1number-14T2number:13:43.798Z';
                tipoEnquadramento: string;
                numeroCodigo: string;
                decreto: string;
                anexo: string;
                tempoExposicao: number;
              }
            ];
            listaPeriodoEstabelecimentoTO: [
              {
                dataInicio: '2number21-1number-14T2number:13:43.798Z';
                dataFim: '2number21-1number-14T2number:13:43.798Z';
                estabelecimento: {
                  codigoEmpregador: number;
                  tipoEmpregador: string;
                  nomeEmpregador: string;
                  dataInicioAtividades: '2number21-1number-14T2number:13:43.798Z';
                  dataEncerramentoAtividades: '2number21-1number-14T2number:13:43.798Z';
                  situacaoEmpresa: string;
                  cnae: string;
                  mei: true;
                  codigoEmpregadorFormatado: string;
                  empregadorCPF: true;
                  empregadorCNPJ: true;
                  empregadorCEI: true;
                  empregadorIndeterminado: true;
                  empregadorIgnorado: true;
                  empregadorCAEPF: true;
                  empregadorCNO: true;
                  empregadorCNPJRaiz: true;
                };
                listaRemuneracaoParcelaTO: [
                  {
                    remuneracaoTO: {
                      fonteInformacao: string;
                      codigoFonteInformacao: number;
                      numeroDocumento: number;
                      nuEventoESocial: number;
                      competencia: string;
                      moeda: string;
                      valor: number;
                      valorRetido: number;
                      agenteNocivo: string;
                      indicadores: string;
                      listaPendenciasTO: [
                        {
                          codigo: number;
                          sigla: string;
                          descricao: string;
                        }
                      ];
                      listaIndicadoresTO: [
                        {
                          codigo: number;
                          sigla: string;
                          descricao: string;
                        }
                      ];
                    };
                  }
                ];
                tipoFonteInformacao: string;
              }
            ];
            listaRemuneracoesTO: [
              {
                fonteInformacao: string;
                codigoFonteInformacao: number;
                numeroDocumento: number;
                nuEventoESocial: number;
                competencia: string;
                moeda: string;
                valor: number;
                valorRetido: number;
                agenteNocivo: string;
                indicadores: string;
                listaPendenciasTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
                listaIndicadoresTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
              }
            ];
            listaRemuneracoesDecimoTerceiroTO: [
              {
                fonteInformacao: string;
                codigoFonteInformacao: number;
                numeroDocumento: number;
                nuEventoESocial: number;
                competencia: string;
                moeda: string;
                valor: number;
                valorRetido: number;
                agenteNocivo: string;
                indicadores: string;
                listaPendenciasTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
                listaIndicadoresTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
              }
            ];
            reclamatoriaTrabalhistaTO: {
              inicio: '2number21-1number-14T2number:13:43.798Z';
              fim: '2number21-1number-14T2number:13:43.798Z';
              vara: number;
              processo: number;
              juizo: number;
            };
            descricaoTipoContrato: string;
            matriculaESocial: string;
            dtCadESocial: '2number21-1number-14T2number:13:43.798Z';
            origemAdmissao: string;
            dtLimiteQuarentenaESocial: '2number21-1number-14T2number:13:43.798Z';
            inCadastroInicialVinculoESocial: true;
            tipoRelacaoTrabalhista: string;
            orgaoMinisterioDefesa: string;
            descricaoExtemporaneo: string;
            descricaoPossuiReclamatoria: string;
            relacaoTrabalhistaEmpregado: true;
            relacaoTrabalhistaEmpregadoDomestico: true;
            relacaoTrabalhistaServicoMilitar: true;
          };
          periodoBeneficioTO: {
            nomeBeneficio: string;
            numeroBeneficio: string;
            numeroDocumento: number;
            situacaoBeneficio: string;
            especieBeneficio: string;
            listaRemuneracoesTO: [
              {
                fonteInformacao: string;
                codigoFonteInformacao: number;
                numeroDocumento: number;
                nuEventoESocial: number;
                competencia: string;
                moeda: string;
                valor: number;
                valorRetido: number;
                agenteNocivo: string;
                indicadores: string;
                listaPendenciasTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
                listaIndicadoresTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
              }
            ];
            codigoBeneficio: number;
          };
          periodoContribuicaoConsolidadoTO: {
            listaContribuicoesConsolidadas: [
              {
                nit: number;
                codigoPagamento: string;
                competencia: string;
                dataPagamento: '2number21-1number-14T2number:13:43.798Z';
                valorContribuicao: number;
                salarioContribuicao: number;
                indicadores: string;
                inPgtoAtraso: true;
                csNaturezaOcupacao: 'Urbana';
                listaIndicadoresTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
                listaPendenciasTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
                inRecolhimentoLei123: true;
                inDASMEI: true;
                nitFormatado: string;
              }
            ];
            origemVinculo: string;
          };
          periodoSeguradoEspecialConsolidadoTO: {
            situacao: string;
            indicadores: string;
            listaIndicadoresTO: [
              {
                codigo: number;
                sigla: string;
                descricao: string;
              }
            ];
            origemVinculo: string;
          };
          periodoTrabalhadorAvulsoTO: {
            empregadorTO: {
              codigoEmpregador: number;
              tipoEmpregador: string;
              nomeEmpregador: string;
              dataInicioAtividades: '2number21-1number-14T2number:13:43.798Z';
              dataEncerramentoAtividades: '2number21-1number-14T2number:13:43.798Z';
              situacaoEmpresa: string;
              cnae: string;
              mei: true;
              codigoEmpregadorFormatado: string;
              empregadorCPF: true;
              empregadorCNPJ: true;
              empregadorCEI: true;
              empregadorIndeterminado: true;
              empregadorIgnorado: true;
              empregadorCAEPF: true;
              empregadorCNO: true;
              empregadorCNPJRaiz: true;
            };
            listaRemuneracoesOcupacoesTO: [
              {
                remuneracaoTO: {
                  fonteInformacao: string;
                  codigoFonteInformacao: number;
                  numeroDocumento: number;
                  nuEventoESocial: number;
                  competencia: string;
                  moeda: string;
                  valor: number;
                  valorRetido: number;
                  agenteNocivo: string;
                  indicadores: string;
                  listaPendenciasTO: [
                    {
                      codigo: number;
                      sigla: string;
                      descricao: string;
                    }
                  ];
                  listaIndicadoresTO: [
                    {
                      codigo: number;
                      sigla: string;
                      descricao: string;
                    }
                  ];
                };
                periodoOcupacaoTO: {
                  descricao: string;
                  dataInicio: '2number21-1number-14T2number:13:43.798Z';
                  dataFim: '2number21-1number-14T2number:13:43.798Z';
                  naturezaOcupacao: string;
                  csNaturezaOcupacao: 'Urbana';
                  ocupacao: string;
                  categoriaESocial: string;
                };
              }
            ];
          };
          periodoPrestadorServicoTO: {
            empregadorTO: {
              codigoEmpregador: number;
              tipoEmpregador: string;
              nomeEmpregador: string;
              dataInicioAtividades: '2number21-1number-14T2number:13:43.798Z';
              dataEncerramentoAtividades: '2number21-1number-14T2number:13:43.798Z';
              situacaoEmpresa: string;
              cnae: string;
              mei: true;
              codigoEmpregadorFormatado: string;
              empregadorCPF: true;
              empregadorCNPJ: true;
              empregadorCEI: true;
              empregadorIndeterminado: true;
              empregadorIgnorado: true;
              empregadorCAEPF: true;
              empregadorCNO: true;
              empregadorCNPJRaiz: true;
            };
            listaRemuneracoesOcupacoesTO: [
              {
                remuneracaoTO: {
                  fonteInformacao: string;
                  codigoFonteInformacao: number;
                  numeroDocumento: number;
                  nuEventoESocial: number;
                  competencia: string;
                  moeda: string;
                  valor: number;
                  valorRetido: number;
                  agenteNocivo: string;
                  indicadores: string;
                  listaPendenciasTO: [
                    {
                      codigo: number;
                      sigla: string;
                      descricao: string;
                    }
                  ];
                  listaIndicadoresTO: [
                    {
                      codigo: number;
                      sigla: string;
                      descricao: string;
                    }
                  ];
                };
                periodoOcupacaoTO: {
                  descricao: string;
                  dataInicio: '2number21-1number-14T2number:13:43.798Z';
                  dataFim: '2number21-1number-14T2number:13:43.798Z';
                  naturezaOcupacao: string;
                  csNaturezaOcupacao: 'Urbana';
                  ocupacao: string;
                  categoriaESocial: string;
                };
              }
            ];
          };
          periodoBeneficioExteriorTO: {
            tipoBeneficio: string;
            paisAcordante: string;
            origemVinculo: string;
          };
          periodoServicoExteriorTO: {
            paisAcordante: string;
            filiacaoObrigatoria: true;
            descricaoFiliacaoObrigatoria: string;
            origemVinculo: string;
          };
          periodoReclusaoTO: {
            regime: string;
            origemVinculo: string;
          };
          periodoSeguroDesempregoTO: {
            tipoSeguroDesemprego: string;
            orgaoSeguroDesemprego: string;
            competenciaInicial: string;
            competenciaFinal: string;
            dataRegistroSine: '2number21-1number-14T2number:13:43.798Z';
            origemVinculo: string;
          };
          periodoHomologadoTO: {
            origemVinculo: string;
            listaPeriodosOcupacoesTO: [
              {
                descricao: string;
                dataInicio: '2number21-1number-14T2number:13:43.798Z';
                dataFim: '2number21-1number-14T2number:13:43.798Z';
                naturezaOcupacao: string;
                csNaturezaOcupacao: 'Urbana';
                ocupacao: string;
                categoriaESocial: string;
              }
            ];
          };
          listaPendenciasTO: [
            {
              codigo: number;
              sigla: string;
              descricao: string;
            }
          ];
          listaAcertosTO: [
            {
              codigo: number;
              sigla: string;
              descricao: string;
            }
          ];
          listaIndicadoresTO: [
            {
              codigo: number;
              sigla: string;
              descricao: string;
            }
          ];
          listaSituacoesIrregularesTO: [
            {
              dataExpediente: '2number21-1number-14T2number:13:43.798Z';
              numeroExpediente: string;
              tipoExpediente: string;
              orgaoDemandante: string;
            }
          ];
          listaPeriodosMarcaCtcTO: [
            {
              protocolo: number;
              dataEmissao: '2number21-1number-14T2number:13:43.798Z';
              dataInicio: '2number21-1number-14T2number:13:43.798Z';
              dataFim: '2number21-1number-14T2number:13:43.798Z';
            }
          ];
          nitFormatado: string;
          codigoVinculo: string;
          nomeVinculo: string;
          ultimaRemuneracao: string;
          listaPeriodosOcupacoes: [
            {
              descricao: string;
              dataInicio: '2number21-1number-14T2number:13:43.798Z';
              dataFim: '2number21-1number-14T2number:13:43.798Z';
              naturezaOcupacao: string;
              csNaturezaOcupacao: 'Urbana';
              ocupacao: string;
              categoriaESocial: string;
            }
          ];
          vinculoTrabalhista: true;
          vinculoBeneficio: true;
          vinculoContribuicao: true;
          vinculoTrabalhadorAvulso: true;
          vinculoPrestadorServico: true;
          vinculoSeguradoEspecial: true;
          tipoFonteInformacao: string;
          vinculoBeneficioExterior: true;
          vinculoServicoExterior: true;
          vinculoReclusao: true;
          vinculoSeguroDesemprego: true;
          vinculoPeriodoHomologado: true;
          listaRemuneracoesTO: [
            {
              fonteInformacao: string;
              codigoFonteInformacao: number;
              numeroDocumento: number;
              nuEventoESocial: number;
              competencia: string;
              moeda: string;
              valor: number;
              valorRetido: number;
              agenteNocivo: string;
              indicadores: string;
              listaPendenciasTO: [
                {
                  codigo: number;
                  sigla: string;
                  descricao: string;
                }
              ];
              listaIndicadoresTO: [
                {
                  codigo: number;
                  sigla: string;
                  descricao: string;
                }
              ];
            }
          ];
          listaRemuneracoesOcupacoesTO: [
            {
              remuneracaoTO: {
                fonteInformacao: string;
                codigoFonteInformacao: number;
                numeroDocumento: number;
                nuEventoESocial: number;
                competencia: string;
                moeda: string;
                valor: number;
                valorRetido: number;
                agenteNocivo: string;
                indicadores: string;
                listaPendenciasTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
                listaIndicadoresTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
              };
              periodoOcupacaoTO: {
                descricao: string;
                dataInicio: '2number21-1number-14T2number:13:43.798Z';
                dataFim: '2number21-1number-14T2number:13:43.798Z';
                naturezaOcupacao: string;
                csNaturezaOcupacao: 'Urbana';
                ocupacao: string;
                categoriaESocial: string;
              };
            }
          ];
          listaRemuneracoesDecimoTerceiroTO: [
            {
              fonteInformacao: string;
              codigoFonteInformacao: number;
              numeroDocumento: number;
              nuEventoESocial: number;
              competencia: string;
              moeda: string;
              valor: number;
              valorRetido: number;
              agenteNocivo: string;
              indicadores: string;
              listaPendenciasTO: [
                {
                  codigo: number;
                  sigla: string;
                  descricao: string;
                }
              ];
              listaIndicadoresTO: [
                {
                  codigo: number;
                  sigla: string;
                  descricao: string;
                }
              ];
            }
          ];
          listaContribuicoesTO: [
            {
              nit: number;
              codigoPagamento: string;
              competencia: string;
              dataPagamento: '2number21-1number-14T2number:13:43.798Z';
              valorContribuicao: number;
              salarioContribuicao: number;
              indicadores: string;
              inPgtoAtraso: true;
              csNaturezaOcupacao: 'Urbana';
              listaIndicadoresTO: [
                {
                  codigo: number;
                  sigla: string;
                  descricao: string;
                }
              ];
              listaPendenciasTO: [
                {
                  codigo: number;
                  sigla: string;
                  descricao: string;
                }
              ];
              inRecolhimentoLei123: true;
              inDASMEI: true;
              nitFormatado: string;
            }
          ];
          listaContribuicaoImpressaoTO: [
            {
              contribuicaoConsolidadaTO1: {
                nit: number;
                codigoPagamento: string;
                competencia: string;
                dataPagamento: '2number21-1number-14T2number:13:43.798Z';
                valorContribuicao: number;
                salarioContribuicao: number;
                indicadores: string;
                inPgtoAtraso: true;
                csNaturezaOcupacao: 'Urbana';
                listaIndicadoresTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
                listaPendenciasTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
                inRecolhimentoLei123: true;
                inDASMEI: true;
                nitFormatado: string;
              };
              contribuicaoConsolidadaTO2: {
                nit: number;
                codigoPagamento: string;
                competencia: string;
                dataPagamento: '2number21-1number-14T2number:13:43.798Z';
                valorContribuicao: number;
                salarioContribuicao: number;
                indicadores: string;
                inPgtoAtraso: true;
                csNaturezaOcupacao: 'Urbana';
                listaIndicadoresTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
                listaPendenciasTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
                inRecolhimentoLei123: true;
                inDASMEI: true;
                nitFormatado: string;
              };
            }
          ];
          listaRemuneracaoImpressaoTO: [
            {
              remuneracaoTO1: {
                fonteInformacao: string;
                codigoFonteInformacao: number;
                numeroDocumento: number;
                nuEventoESocial: number;
                competencia: string;
                moeda: string;
                valor: number;
                valorRetido: number;
                agenteNocivo: string;
                indicadores: string;
                listaPendenciasTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
                listaIndicadoresTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
              };
              remuneracaoTO2: {
                fonteInformacao: string;
                codigoFonteInformacao: number;
                numeroDocumento: number;
                nuEventoESocial: number;
                competencia: string;
                moeda: string;
                valor: number;
                valorRetido: number;
                agenteNocivo: string;
                indicadores: string;
                listaPendenciasTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
                listaIndicadoresTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
              };
              remuneracaoTO3: {
                fonteInformacao: string;
                codigoFonteInformacao: number;
                numeroDocumento: number;
                nuEventoESocial: number;
                competencia: string;
                moeda: string;
                valor: number;
                valorRetido: number;
                agenteNocivo: string;
                indicadores: string;
                listaPendenciasTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
                listaIndicadoresTO: [
                  {
                    codigo: number;
                    sigla: string;
                    descricao: string;
                  }
                ];
              };
            }
          ];
          listaRemuneracaoOcupacaoImpressaoTO: [
            {
              remuneracaoOcupacaoTO1: {
                remuneracaoTO: {
                  fonteInformacao: string;
                  codigoFonteInformacao: number;
                  numeroDocumento: number;
                  nuEventoESocial: number;
                  competencia: string;
                  moeda: string;
                  valor: number;
                  valorRetido: number;
                  agenteNocivo: string;
                  indicadores: string;
                  listaPendenciasTO: [
                    {
                      codigo: number;
                      sigla: string;
                      descricao: string;
                    }
                  ];
                  listaIndicadoresTO: [
                    {
                      codigo: number;
                      sigla: string;
                      descricao: string;
                    }
                  ];
                };
                periodoOcupacaoTO: {
                  descricao: string;
                  dataInicio: '2number21-1number-14T2number:13:43.798Z';
                  dataFim: '2number21-1number-14T2number:13:43.798Z';
                  naturezaOcupacao: string;
                  csNaturezaOcupacao: 'Urbana';
                  ocupacao: string;
                  categoriaESocial: string;
                };
              };
              remuneracaoOcupacaoTO2: {
                remuneracaoTO: {
                  fonteInformacao: string;
                  codigoFonteInformacao: number;
                  numeroDocumento: number;
                  nuEventoESocial: number;
                  competencia: string;
                  moeda: string;
                  valor: number;
                  valorRetido: number;
                  agenteNocivo: string;
                  indicadores: string;
                  listaPendenciasTO: [
                    {
                      codigo: number;
                      sigla: string;
                      descricao: string;
                    }
                  ];
                  listaIndicadoresTO: [
                    {
                      codigo: number;
                      sigla: string;
                      descricao: string;
                    }
                  ];
                };
                periodoOcupacaoTO: {
                  descricao: string;
                  dataInicio: '2number21-1number-14T2number:13:43.798Z';
                  dataFim: '2number21-1number-14T2number:13:43.798Z';
                  naturezaOcupacao: string;
                  csNaturezaOcupacao: 'Urbana';
                  ocupacao: string;
                  categoriaESocial: string;
                };
              };
              remuneracaoOcupacaoTO3: {
                remuneracaoTO: {
                  fonteInformacao: string;
                  codigoFonteInformacao: number;
                  numeroDocumento: number;
                  nuEventoESocial: number;
                  competencia: string;
                  moeda: string;
                  valor: number;
                  valorRetido: number;
                  agenteNocivo: string;
                  indicadores: string;
                  listaPendenciasTO: [
                    {
                      codigo: number;
                      sigla: string;
                      descricao: string;
                    }
                  ];
                  listaIndicadoresTO: [
                    {
                      codigo: number;
                      sigla: string;
                      descricao: string;
                    }
                  ];
                };
                periodoOcupacaoTO: {
                  descricao: string;
                  dataInicio: '2number21-1number-14T2number:13:43.798Z';
                  dataFim: '2number21-1number-14T2number:13:43.798Z';
                  naturezaOcupacao: string;
                  csNaturezaOcupacao: 'Urbana';
                  ocupacao: string;
                  categoriaESocial: string;
                };
              };
            }
          ];
        }
      ];
      listaAtividadesTO: [
        {
          descricaoTipoFiliado: string;
          listaPeriodoOcupacaoTO: [
            {
              descricao: string;
              dataInicio: '2number21-1number-14T2number:13:43.798Z';
              dataFim: '2number21-1number-14T2number:13:43.798Z';
              naturezaOcupacao: string;
              csNaturezaOcupacao: 'Urbana';
              ocupacao: string;
              categoriaESocial: string;
            }
          ];
        }
      ];
      listaMicroFichasTO: [
        {
          nit: number;
          teCompetEmissao: string;
          teCompetContribuicao: string;
        }
      ];
      listaIndicadoresTO: [
        {
          codigo: number;
          sigla: string;
          descricao: string;
        }
      ];
      dataExtracaoCnis: '2number21-1number-14T2number:13:43.798Z';
      tempoRespostaConsultaEmMilisegundos: number;
      mensagemTO: {
        result: string;
        httpCode: number;
      };
      habilitadaConsultaCache: true;
      habilitadaGravacaoCache: true;
      listaIndicadorImpressaoTO: [
        {
          indicadorTO1: {
            codigo: number;
            sigla: string;
            descricao: string;
          };
          indicadorTO2: {
            codigo: number;
            sigla: string;
            descricao: string;
          };
        }
      ];
      origemCache: true;
    };
    historicoCreditos: {
      dtInicioCompetencia: '2number21-1number-14T2number:13:43.798Z';
      dtFimCompetencia: '2number21-1number-14T2number:13:43.798Z';
      creditosTO: [
        {
          idCredito: number;
          dtCompetenciaCredito: number;
          nb: number;
          dtInicioPeriodo: string;
          dtFimPeriodo: string;
          dtPgtoCredito: string;
          inCreditoPago: true;
          inRetornoBanco: true;
          valorLiquido: number;
          dtInicioValidade: string;
          dtFimValidade: string;
          nitRecebedor: number;
          idAapOrgaoPagador: number;
          orgaoPagadorTO: {
            idAAP: number;
            csCategoria: string;
            aps: {
              idUnidadeOrganica: string;
              csCategoria: string;
              nmUnidadeOrganica: string;
              sgUnidadeOrganica: string;
              teEndereco: string;
              teEnderecoComplemento: string;
              nmBairro: string;
              nuCEP: number;
              municipio: {
                idMunicipioPrev: number;
                nuMunicipioIBGE: number;
                nuMunicipioSERPRO: number;
                nmMunicipio: string;
                nuCEP: number;
                idMunicipioECT: number;
                uf: {
                  idUFPrev: string;
                  nuUFIBGE: string;
                  nmUF: string;
                  sgUF: string;
                  csTipoUF: string;
                  dtInicVali: string;
                  dtFimVali: string;
                  csRegiaoGeograficaIBGE: string;
                  csRegiaoGeograficaINSS: string;
                };
                inNmMunicipioIgual: true;
                inMap: true;
                dtInicVali: string;
                dtFimVali: number;
                nmRegiaoMetropolitana: string;
                nuDDD: string;
                qtPopulacao: number;
              };
              sgUF: string;
              nuDDD: string;
              nuTelefone: string;
              nuRamal: string;
              nuFax: string;
              idEmail: string;
              nuMatriculaTitular: number;
              nmTitular: string;
              nuMatriculaSubstituto: number;
              nmSubstituto: string;
              csPorte: string;
              idUOAnterior: string;
              idUG: number;
              nuCNPJ: string;
              inUnidadeAtiva: true;
              csSituacao: string;
              hrInicFuncionamento: number;
              hrFimFuncionamento: number;
              idSIAPE: string;
              dtInicVali: string;
              procuradoria: {
                idProcuradoria: string;
                csCategoria: number;
                nmProcuradoria: string;
                municipio: {
                  idMunicipioPrev: number;
                  nuMunicipioIBGE: number;
                  nuMunicipioSERPRO: number;
                  nmMunicipio: string;
                  nuCEP: number;
                  idMunicipioECT: number;
                  uf: {
                    idUFPrev: string;
                    nuUFIBGE: string;
                    nmUF: string;
                    sgUF: string;
                    csTipoUF: string;
                    dtInicVali: string;
                    dtFimVali: string;
                    csRegiaoGeograficaIBGE: string;
                    csRegiaoGeograficaINSS: string;
                  };
                  inNmMunicipioIgual: true;
                  inMap: true;
                  dtInicVali: string;
                  dtFimVali: number;
                  nmRegiaoMetropolitana: string;
                  nuDDD: string;
                  qtPopulacao: number;
                };
                nmLogradouro: string;
                teComplLogradouro: string;
                nmBairro: string;
                nuCEP: number;
                nuDDD: number;
                nuTelefone: string;
                nuFAX: string;
                inOficial: true;
                inLivro: true;
                dtInicVali: string;
              };
              hrFimAtendimento: number;
              hrFimMenorAtendimento: number;
              hrInicAtendimento: number;
              hrInicMenorAtendimento: number;
              uOSuperior: {
                idUnidadeOrganica: string;
                csCategoria: string;
                nmUnidadeOrganica: string;
                sgUnidadeOrganica: string;
                teEndereco: string;
                teEnderecoComplemento: string;
                nmBairro: string;
                nuCEP: number;
                municipio: {
                  idMunicipioPrev: number;
                  nuMunicipioIBGE: number;
                  nuMunicipioSERPRO: number;
                  nmMunicipio: string;
                  nuCEP: number;
                  idMunicipioECT: number;
                  uf: {
                    idUFPrev: string;
                    nuUFIBGE: string;
                    nmUF: string;
                    sgUF: string;
                    csTipoUF: string;
                    dtInicVali: string;
                    dtFimVali: string;
                    csRegiaoGeograficaIBGE: string;
                    csRegiaoGeograficaINSS: string;
                  };
                  inNmMunicipioIgual: true;
                  inMap: true;
                  dtInicVali: string;
                  dtFimVali: number;
                  nmRegiaoMetropolitana: string;
                  nuDDD: string;
                  qtPopulacao: number;
                };
                sgUF: string;
                nuDDD: string;
                nuTelefone: string;
                nuRamal: string;
                nuFax: string;
                idEmail: string;
                nuMatriculaTitular: number;
                nmTitular: string;
                nuMatriculaSubstituto: number;
                nmSubstituto: string;
                csPorte: string;
                idUOAnterior: string;
                idUG: number;
                nuCNPJ: string;
                inUnidadeAtiva: true;
                csSituacao: string;
                hrInicFuncionamento: number;
                hrFimFuncionamento: number;
                idSIAPE: string;
                dtInicVali: string;
              };
            };
            microRegiao: {
              idMicroRegPrev: number;
              municipio: {
                idMunicipioPrev: number;
                nuMunicipioIBGE: number;
                nuMunicipioSERPRO: number;
                nmMunicipio: string;
                nuCEP: number;
                idMunicipioECT: number;
                uf: {
                  idUFPrev: string;
                  nuUFIBGE: string;
                  nmUF: string;
                  sgUF: string;
                  csTipoUF: string;
                  dtInicVali: string;
                  dtFimVali: string;
                  csRegiaoGeograficaIBGE: string;
                  csRegiaoGeograficaINSS: string;
                };
                inNmMunicipioIgual: true;
                inMap: true;
                dtInicVali: string;
                dtFimVali: number;
                nmRegiaoMetropolitana: string;
                nuDDD: string;
                qtPopulacao: number;
              };
              csTipoMicroReg: string;
              aps: {
                idUnidadeOrganica: string;
                csCategoria: string;
                nmUnidadeOrganica: string;
                sgUnidadeOrganica: string;
                teEndereco: string;
                teEnderecoComplemento: string;
                nmBairro: string;
                nuCEP: number;
                municipio: {
                  idMunicipioPrev: number;
                  nuMunicipioIBGE: number;
                  nuMunicipioSERPRO: number;
                  nmMunicipio: string;
                  nuCEP: number;
                  idMunicipioECT: number;
                  uf: {
                    idUFPrev: string;
                    nuUFIBGE: string;
                    nmUF: string;
                    sgUF: string;
                    csTipoUF: string;
                    dtInicVali: string;
                    dtFimVali: string;
                    csRegiaoGeograficaIBGE: string;
                    csRegiaoGeograficaINSS: string;
                  };
                  inNmMunicipioIgual: true;
                  inMap: true;
                  dtInicVali: string;
                  dtFimVali: number;
                  nmRegiaoMetropolitana: string;
                  nuDDD: string;
                  qtPopulacao: number;
                };
                sgUF: string;
                nuDDD: string;
                nuTelefone: string;
                nuRamal: string;
                nuFax: string;
                idEmail: string;
                nuMatriculaTitular: number;
                nmTitular: string;
                nuMatriculaSubstituto: number;
                nmSubstituto: string;
                csPorte: string;
                idUOAnterior: string;
                idUG: number;
                nuCNPJ: string;
                inUnidadeAtiva: true;
                csSituacao: string;
                hrInicFuncionamento: number;
                hrFimFuncionamento: number;
                idSIAPE: string;
                dtInicVali: string;
                procuradoria: {
                  idProcuradoria: string;
                  csCategoria: number;
                  nmProcuradoria: string;
                  municipio: {
                    idMunicipioPrev: number;
                    nuMunicipioIBGE: number;
                    nuMunicipioSERPRO: number;
                    nmMunicipio: string;
                    nuCEP: number;
                    idMunicipioECT: number;
                    uf: {
                      idUFPrev: string;
                      nuUFIBGE: string;
                      nmUF: string;
                      sgUF: string;
                      csTipoUF: string;
                      dtInicVali: string;
                      dtFimVali: string;
                      csRegiaoGeograficaIBGE: string;
                      csRegiaoGeograficaINSS: string;
                    };
                    inNmMunicipioIgual: true;
                    inMap: true;
                    dtInicVali: string;
                    dtFimVali: number;
                    nmRegiaoMetropolitana: string;
                    nuDDD: string;
                    qtPopulacao: number;
                  };
                  nmLogradouro: string;
                  teComplLogradouro: string;
                  nmBairro: string;
                  nuCEP: number;
                  nuDDD: number;
                  nuTelefone: string;
                  nuFAX: string;
                  inOficial: true;
                  inLivro: true;
                  dtInicVali: string;
                };
                hrFimAtendimento: number;
                hrFimMenorAtendimento: number;
                hrInicAtendimento: number;
                hrInicMenorAtendimento: number;
                uOSuperior: {
                  idUnidadeOrganica: string;
                  csCategoria: string;
                  nmUnidadeOrganica: string;
                  sgUnidadeOrganica: string;
                  teEndereco: string;
                  teEnderecoComplemento: string;
                  nmBairro: string;
                  nuCEP: number;
                  municipio: {
                    idMunicipioPrev: number;
                    nuMunicipioIBGE: number;
                    nuMunicipioSERPRO: number;
                    nmMunicipio: string;
                    nuCEP: number;
                    idMunicipioECT: number;
                    uf: {
                      idUFPrev: string;
                      nuUFIBGE: string;
                      nmUF: string;
                      sgUF: string;
                      csTipoUF: string;
                      dtInicVali: string;
                      dtFimVali: string;
                      csRegiaoGeograficaIBGE: string;
                      csRegiaoGeograficaINSS: string;
                    };
                    inNmMunicipioIgual: true;
                    inMap: true;
                    dtInicVali: string;
                    dtFimVali: number;
                    nmRegiaoMetropolitana: string;
                    nuDDD: string;
                    qtPopulacao: number;
                  };
                  sgUF: string;
                  nuDDD: string;
                  nuTelefone: string;
                  nuRamal: string;
                  nuFax: string;
                  idEmail: string;
                  nuMatriculaTitular: number;
                  nmTitular: string;
                  nuMatriculaSubstituto: number;
                  nmSubstituto: string;
                  csPorte: string;
                  idUOAnterior: string;
                  idUG: number;
                  nuCNPJ: string;
                  inUnidadeAtiva: true;
                  csSituacao: string;
                  hrInicFuncionamento: number;
                  hrFimFuncionamento: number;
                  idSIAPE: string;
                  dtInicVali: string;
                };
              };
              apsExtra: {
                idUnidadeOrganica: string;
                csCategoria: string;
                nmUnidadeOrganica: string;
                sgUnidadeOrganica: string;
                teEndereco: string;
                teEnderecoComplemento: string;
                nmBairro: string;
                nuCEP: number;
                municipio: {
                  idMunicipioPrev: number;
                  nuMunicipioIBGE: number;
                  nuMunicipioSERPRO: number;
                  nmMunicipio: string;
                  nuCEP: number;
                  idMunicipioECT: number;
                  uf: {
                    idUFPrev: string;
                    nuUFIBGE: string;
                    nmUF: string;
                    sgUF: string;
                    csTipoUF: string;
                    dtInicVali: string;
                    dtFimVali: string;
                    csRegiaoGeograficaIBGE: string;
                    csRegiaoGeograficaINSS: string;
                  };
                  inNmMunicipioIgual: true;
                  inMap: true;
                  dtInicVali: string;
                  dtFimVali: number;
                  nmRegiaoMetropolitana: string;
                  nuDDD: string;
                  qtPopulacao: number;
                };
                sgUF: string;
                nuDDD: string;
                nuTelefone: string;
                nuRamal: string;
                nuFax: string;
                idEmail: string;
                nuMatriculaTitular: number;
                nmTitular: string;
                nuMatriculaSubstituto: number;
                nmSubstituto: string;
                csPorte: string;
                idUOAnterior: string;
                idUG: number;
                nuCNPJ: string;
                inUnidadeAtiva: true;
                csSituacao: string;
                hrInicFuncionamento: number;
                hrFimFuncionamento: number;
                idSIAPE: string;
                dtInicVali: string;
                procuradoria: {
                  idProcuradoria: string;
                  csCategoria: number;
                  nmProcuradoria: string;
                  municipio: {
                    idMunicipioPrev: number;
                    nuMunicipioIBGE: number;
                    nuMunicipioSERPRO: number;
                    nmMunicipio: string;
                    nuCEP: number;
                    idMunicipioECT: number;
                    uf: {
                      idUFPrev: string;
                      nuUFIBGE: string;
                      nmUF: string;
                      sgUF: string;
                      csTipoUF: string;
                      dtInicVali: string;
                      dtFimVali: string;
                      csRegiaoGeograficaIBGE: string;
                      csRegiaoGeograficaINSS: string;
                    };
                    inNmMunicipioIgual: true;
                    inMap: true;
                    dtInicVali: string;
                    dtFimVali: number;
                    nmRegiaoMetropolitana: string;
                    nuDDD: string;
                    qtPopulacao: number;
                  };
                  nmLogradouro: string;
                  teComplLogradouro: string;
                  nmBairro: string;
                  nuCEP: number;
                  nuDDD: number;
                  nuTelefone: string;
                  nuFAX: string;
                  inOficial: true;
                  inLivro: true;
                  dtInicVali: string;
                };
                hrFimAtendimento: number;
                hrFimMenorAtendimento: number;
                hrInicAtendimento: number;
                hrInicMenorAtendimento: number;
                uOSuperior: {
                  idUnidadeOrganica: string;
                  csCategoria: string;
                  nmUnidadeOrganica: string;
                  sgUnidadeOrganica: string;
                  teEndereco: string;
                  teEnderecoComplemento: string;
                  nmBairro: string;
                  nuCEP: number;
                  municipio: {
                    idMunicipioPrev: number;
                    nuMunicipioIBGE: number;
                    nuMunicipioSERPRO: number;
                    nmMunicipio: string;
                    nuCEP: number;
                    idMunicipioECT: number;
                    uf: {
                      idUFPrev: string;
                      nuUFIBGE: string;
                      nmUF: string;
                      sgUF: string;
                      csTipoUF: string;
                      dtInicVali: string;
                      dtFimVali: string;
                      csRegiaoGeograficaIBGE: string;
                      csRegiaoGeograficaINSS: string;
                    };
                    inNmMunicipioIgual: true;
                    inMap: true;
                    dtInicVali: string;
                    dtFimVali: number;
                    nmRegiaoMetropolitana: string;
                    nuDDD: string;
                    qtPopulacao: number;
                  };
                  sgUF: string;
                  nuDDD: string;
                  nuTelefone: string;
                  nuRamal: string;
                  nuFax: string;
                  idEmail: string;
                  nuMatriculaTitular: number;
                  nmTitular: string;
                  nuMatriculaSubstituto: number;
                  nmSubstituto: string;
                  csPorte: string;
                  idUOAnterior: string;
                  idUG: number;
                  nuCNPJ: string;
                  inUnidadeAtiva: true;
                  csSituacao: string;
                  hrInicFuncionamento: number;
                  hrFimFuncionamento: number;
                  idSIAPE: string;
                  dtInicVali: string;
                };
              };
              inAcessRestrito: true;
              dtInicVali: string;
            };
            instituicaoBancaria: {
              idBancoCentral: number;
              nmBancoAbrev: string;
              nuTelefoneSede: string;
              csTipoInstituicao: string;
              nmInstituicaoAAP: string;
              teEndereco: string;
              nomeBairro: string;
              nuCEP: number;
              municipio: {
                idMunicipioPrev: number;
                nuMunicipioIBGE: number;
                nuMunicipioSERPRO: number;
                nmMunicipio: string;
                nuCEP: number;
                idMunicipioECT: number;
                uf: {
                  idUFPrev: string;
                  nuUFIBGE: string;
                  nmUF: string;
                  sgUF: string;
                  csTipoUF: string;
                  dtInicVali: string;
                  dtFimVali: string;
                  csRegiaoGeograficaIBGE: string;
                  csRegiaoGeograficaINSS: string;
                };
                inNmMunicipioIgual: true;
                inMap: true;
                dtInicVali: string;
                dtFimVali: number;
                nmRegiaoMetropolitana: string;
                nuDDD: string;
                qtPopulacao: number;
              };
              centralizadoraNacional: {
                nuAgencia: number;
                nuAgenciaDV: string;
                nuCAR: number;
                nmAgencia: string;
                nmAgenciaAbrev: string;
                nuCNPJ: string;
                teEndereco: string;
                nmBairro: string;
                nuCEP: number;
                municipio: {
                  idMunicipioPrev: number;
                  nuMunicipioIBGE: number;
                  nuMunicipioSERPRO: number;
                  nmMunicipio: string;
                  nuCEP: number;
                  idMunicipioECT: number;
                  uf: {
                    idUFPrev: string;
                    nuUFIBGE: string;
                    nmUF: string;
                    sgUF: string;
                    csTipoUF: string;
                    dtInicVali: string;
                    dtFimVali: string;
                    csRegiaoGeograficaIBGE: string;
                    csRegiaoGeograficaINSS: string;
                  };
                  inNmMunicipioIgual: true;
                  inMap: true;
                  dtInicVali: string;
                  dtFimVali: number;
                  nmRegiaoMetropolitana: string;
                  nuDDD: string;
                  qtPopulacao: number;
                };
                csNivelAutom: string;
                inPgtoCartaoMagn: true;
                inPgtoCCMagn: true;
                inPgtoCCListagem: true;
                inPgtoOrdemBanc: true;
                inPgtoAlternativoBenef: true;
                inCentralizadora: true;
                dtInicVali: string;
              };
              nuCGCRadical: number;
              nuFilialSede: number;
              nuCGCDV: string;
              dtInicVali: string;
              nuDDDTelContatoBanco: string;
              nuTelContatoBanco: number;
              nuRamalContatoBanco: number;
              idEmailContatoBanco: string;
              nuFaxContatoBanco: number;
              nmContatoBanco: string;
              teObservacoesContatoBanco: string;
              dtInicioContrato: string;
              dtFimContrato: string;
              nuCBCDeposito: number;
              nuBancoDeposito: number;
              nuAgenciaDeposito: number;
              nuAgenciaDepositoDV: string;
              nuCTADeposito: number;
              nuCTADepositoDV: string;
              dtInicioConvenio: string;
              dtFimConvenio: string;
              dtTesteConvenio: string;
              dtImplantacaoConvenio: string;
              nuDDDTelContatoConvenio: string;
              nuTelContatoConvenio: number;
              nuRamalContatoConvenio: number;
              idEmailContatoConvenio: string;
              nuFaxContatoConvenio: number;
              nmContatoConvenio: string;
              teObservacoesContatoConvenio: string;
              dtPublicaoDOU: string;
              nuDOU: number;
              nuPublicacaoBoletim: string;
              inConvenio: true;
              inContrato: true;
              dtFimVali: number;
              participantePregao: true;
            };
            nuCAR: number;
            csSituacao: string;
            dtTransferencia: string;
            municipio: {
              idMunicipioPrev: number;
              nuMunicipioIBGE: number;
              nuMunicipioSERPRO: number;
              nmMunicipio: string;
              nuCEP: number;
              idMunicipioECT: number;
              uf: {
                idUFPrev: string;
                nuUFIBGE: string;
                nmUF: string;
                sgUF: string;
                csTipoUF: string;
                dtInicVali: string;
                dtFimVali: string;
                csRegiaoGeograficaIBGE: string;
                csRegiaoGeograficaINSS: string;
              };
              inNmMunicipioIgual: true;
              inMap: true;
              dtInicVali: string;
              dtFimVali: number;
              nmRegiaoMetropolitana: string;
              nuDDD: string;
              qtPopulacao: number;
            };
            sgUF: string;
            qtBeneficio: number;
            nmAAP: string;
            teEndereco: string;
            nmBairro: string;
            nuCEP: number;
            inArrecAutorizada: true;
            inPagtoAutorizado: true;
            dtExclusao: string;
            dtAbertura: string;
            dtFechamento: string;
            dtInicVali: string;
            dtFimVali: number;
          };
          dtMovimentacao: string;
          meioPagamentoTO: {
            codigo: number;
            nome: string;
          };
          origemCreditoTO: {
            tipoOrigemCredito: number;
            nomeOrigemCredito: string;
            textoOrigemCredito: string;
          };
          ocorrenciaTO: {
            idOcorrencia: number;
            nomeOcorrencia: string;
            textoOcorrencia: string;
          };
          rubricasCreditoTO: [
            {
              idCredito: number;
              dtCompetenciaCredito: number;
              codigoRubrica: number;
              numSequencialRubrica: number;
              valorRubrica: number;
              rubricaTO: {
                codigo: number;
                nome: string;
              };
            }
          ];
          idMoeda: number;
          moedaTO: {
            idMoeda: number;
            sgMoeda: string;
            teMoeda: string;
            vlMoeda: number;
            dtInicVali: string;
            dtFimVali: string;
            dtCompetencia: string;
          };
          tipoCredito: 'CREDITO';
          especieBeneficioTO: {
            codigo: number;
            nome: string;
            elementoContabil: number;
            centroCusto: number;
            prestacaoUnica: true;
            dataInicioValidade: string;
            tipo: number;
            mantidoSibe: true;
            ativa: true;
            tratamentosTO: [
              {
                codigo: number;
                nome: string;
              }
            ];
            elegivelEmpConsignado: true;
            auxilioDoenca: true;
            extinta: true;
            naturezaIsenta: true;
          };
          creditoInvalido: true;
          estorno: true;
          isentoIR: true;
          invalidacaoTO: {
            idCredito: number;
            dtCompetenciaCredito: number;
            criterioInvalidacao: number;
            origemInvalidacao: number;
            dtInicioPeriodo: string;
            dtFimPeriodo: string;
            dtSolicitacao: string;
            motivoInvalidacao: true;
          };
          tipoStatusCredito: 'Pago';
          statusCreditoRetorno: number;
          dib: string;
          dip: string;
          dcb: string;
          mr: number;
        }
      ];
      listaNbHiscreTO: [
        {
          nb: number;
          apsConcessao: {
            idUnidadeOrganica: string;
            csCategoria: string;
            nmUnidadeOrganica: string;
            sgUnidadeOrganica: string;
            teEndereco: string;
            teEnderecoComplemento: string;
            nmBairro: string;
            nuCEP: number;
            municipio: {
              idMunicipioPrev: number;
              nuMunicipioIBGE: number;
              nuMunicipioSERPRO: number;
              nmMunicipio: string;
              nuCEP: number;
              idMunicipioECT: number;
              uf: {
                idUFPrev: string;
                nuUFIBGE: string;
                nmUF: string;
                sgUF: string;
                csTipoUF: string;
                dtInicVali: string;
                dtFimVali: string;
                csRegiaoGeograficaIBGE: string;
                csRegiaoGeograficaINSS: string;
              };
              inNmMunicipioIgual: true;
              inMap: true;
              dtInicVali: string;
              dtFimVali: number;
              nmRegiaoMetropolitana: string;
              nuDDD: string;
              qtPopulacao: number;
            };
            sgUF: string;
            nuDDD: string;
            nuTelefone: string;
            nuRamal: string;
            nuFax: string;
            idEmail: string;
            nuMatriculaTitular: number;
            nmTitular: string;
            nuMatriculaSubstituto: number;
            nmSubstituto: string;
            csPorte: string;
            idUOAnterior: string;
            idUG: number;
            nuCNPJ: string;
            inUnidadeAtiva: true;
            csSituacao: string;
            hrInicFuncionamento: number;
            hrFimFuncionamento: number;
            idSIAPE: string;
            dtInicVali: string;
          };
          apsManutencao: {
            idUnidadeOrganica: string;
            csCategoria: string;
            nmUnidadeOrganica: string;
            sgUnidadeOrganica: string;
            teEndereco: string;
            teEnderecoComplemento: string;
            nmBairro: string;
            nuCEP: number;
            municipio: {
              idMunicipioPrev: number;
              nuMunicipioIBGE: number;
              nuMunicipioSERPRO: number;
              nmMunicipio: string;
              nuCEP: number;
              idMunicipioECT: number;
              uf: {
                idUFPrev: string;
                nuUFIBGE: string;
                nmUF: string;
                sgUF: string;
                csTipoUF: string;
                dtInicVali: string;
                dtFimVali: string;
                csRegiaoGeograficaIBGE: string;
                csRegiaoGeograficaINSS: string;
              };
              inNmMunicipioIgual: true;
              inMap: true;
              dtInicVali: string;
              dtFimVali: number;
              nmRegiaoMetropolitana: string;
              nuDDD: string;
              qtPopulacao: number;
            };
            sgUF: string;
            nuDDD: string;
            nuTelefone: string;
            nuRamal: string;
            nuFax: string;
            idEmail: string;
            nuMatriculaTitular: number;
            nmTitular: string;
            nuMatriculaSubstituto: number;
            nmSubstituto: string;
            csPorte: string;
            idUOAnterior: string;
            idUG: number;
            nuCNPJ: string;
            inUnidadeAtiva: true;
            csSituacao: string;
            hrInicFuncionamento: number;
            hrFimFuncionamento: number;
            idSIAPE: string;
            dtInicVali: string;
          };
          especieBeneficio: number;
          nomeEspecieBeneficio: string;
          mensagemTO: {
            result: string;
            httpCode: number;
          };
        }
      ];
      mensagemTO: {
        result: string;
        httpCode: number;
      };
    };
  };
}
