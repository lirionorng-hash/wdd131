"use strict";

const anoAtual = document.querySelector("#anoatual");
const ultimaModificacao = document.querySelector("#ultimaModificacao");

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}

if (ultimaModificacao) {
  ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;
}
