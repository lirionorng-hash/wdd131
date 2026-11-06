"use strict";

// Preenche automaticamente o ano atual e a última modificação do documento.
const anoAtual = document.querySelector("#anoatual");
const ultimaModificacao = document.querySelector("#ultimaModificacao");

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}

if (ultimaModificacao) {
  ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;
}
