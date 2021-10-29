import { NgModule } from '@angular/core';
import { ConsultaService } from '@services/consulta.service';
import { SharedModule } from '@shared/shared.module';

import { TelaConsultaRoutingModule } from './tela-consulta-routing.module';
import { TelaConsultaComponent } from './tela-consulta.component';

@NgModule({
  declarations: [TelaConsultaComponent],
  imports: [SharedModule, TelaConsultaRoutingModule],
  exports: [TelaConsultaComponent],
  providers: [],
})
export class TelaConsultaModule {}
