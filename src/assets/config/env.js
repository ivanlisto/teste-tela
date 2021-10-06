(function (window) {
    window.__env = window.__env || {};
    window.__env.production = false;
    window.__env.nome = "Consulta Criminal";
    window.__env.descricao = "Consulta Criminal Nacional";
    window.__env.apiUrl = "http://localhost:8880/api/v1", //<-Backend
	window.__env.ssoUrl = "https://sso.stg.cloud.pje.jus.br/auth/",
    window.__env.realm = "pje",
    window.__env.clientId = "previdenciario-frontend",
	window.__env.redirectUri = "http://localhost:4200/"
  }(this));
