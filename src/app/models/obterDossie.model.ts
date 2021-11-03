import { Cabecalho } from './cabecalho.model'
import { DossieMedico } from './dossieMedico.model'
import { ProcessamentoTO } from './processamentoTO.model'

export class ObterDossie {
    constructor(
        public cabecalho: Cabecalho,
        public dossieMedio: DossieMedico,
        public dossieMedicoPDF: string,
        public processamentoTO: ProcessamentoTO
    ) {}
}
