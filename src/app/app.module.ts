import {
    UikitModule,
    NotFoundModule,
    AuthModule,
    OidcAuthModule,
    OIDC_CONFIG,
    UnauthorizedModule,
    LogModule,
    UpdateModule
} from '@cnj/uikit'

import { BrowserModule } from '@angular/platform-browser'
import { NgModule, APP_INITIALIZER, LOCALE_ID, ErrorHandler } from '@angular/core'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { KeycloakService } from './services/keycloak.service'
import { SharedModule } from './shared/shared.module'
import { TokenInterceptor } from './interceptors/token.interceptor'
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor'
import { LocationStrategy, PathLocationStrategy } from '@angular/common'
import { AppConfigService } from './app-config.service'
import { AppConfig } from './app-config.model'

export function inicializarAuth(kcService: KeycloakService) {
    return () => kcService.init()
}

const configServiceFactory = (): Oidc.UserManagerSettings => {
    const authenticationSettings = AppConfigService.settings.authentication
    return authenticationSettings
}

export function initializeApp(appConfigService: AppConfigService) {
    return (): Promise<AppConfig> => appConfigService.load()
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        UikitModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule,
        AppRoutingModule,
        LogModule,
        NotFoundModule,
        UnauthorizedModule,
        AuthModule,
        OidcAuthModule,
        AppRoutingModule,
        UpdateModule
    ],
    providers: [
        // Uikit
        // AppConfigService,
        // {
        //     provide: APP_INITIALIZER,
        //     useFactory: initializeApp,
        //     deps: [AppConfigService],
        //     multi: true
        // },
        // { provide: OIDC_CONFIG, useFactory: configServiceFactory },
        // End uikit

        // {
        //     provide: APP_INITIALIZER,
        //     useFactory: inicializarAuth,
        //     deps: [KeycloakService],
        //     multi: true
        // },

        //  { provide: LOCALE_ID, useValue: 'pt-BR' },

        // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },

        // { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },

        /*
    Define o uso de paths sem o caracter de fragmento/hashtag ("#"). Por padr??o, o Angular cria paths no
    formato "/#path/conforme/rota". Essa abordagem tem a facilidade de que, n??o importa a rota escolhida
    pelo usu??rio, o navegador estar?? sempre servindo o arquivo index.html (uma vez que qualquer coisa ap??s
    uma hashtag na URL ?? interpretada como uma se????o dentro do mesmo arquivo HTML - ?? responsabilidade do
    Angular modificar o conte??do da p??gina, via javascript, quando a rota se modifica). Contudo, caso se
    prefira a utiliza????o "tradicional" em que, com a mudan??a de uma rota/link, a URL muda "de verdade",
    ?? necess??rio garantir que o servidor HTTP utilizado para servir a aplica????o saiba como lidar com isso,
    redirecionando qualquer path inexistente de volta para o arquivo index.html. No caso do nginx, utilizado
    neste projeto, ?? necess??rio que no default.conf conste a seguinte configura????o:
        location / {
            try_files $uri $uri/ /index.html;
        }
    */
        { provide: LocationStrategy, useClass: PathLocationStrategy }
    ],
    bootstrap: [AppComponent],
    entryComponents: []
})
export class AppModule {}
