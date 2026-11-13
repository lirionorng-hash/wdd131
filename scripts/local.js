"use strict";

// Dados estáticos solicitados pela atividade; não são uma previsão em tempo real.
const temperatura = 8; // Celsius
const velocidadeVento = 12; // km/h

// Fórmula métrica de sensação térmica válida para T <= 10 °C e vento > 4,8 km/h.
function calcularSensacaoTermica(temperaturaC, ventoKmh) {
  return 13.12 + 0.6215 * temperaturaC - 11.37 * Math.pow(ventoKmh, 0.16) + 0.3965 * temperaturaC * Math.pow(ventoKmh, 0.16);
}

const elementoSensacao = document.querySelector("#sensacao-termica");
if (temperatura <= 10 && velocidadeVento > 4.8) {
  elementoSensacao.textContent = `${calcularSensacaoTermica(temperatura, velocidadeVento).toFixed(1)} °C`;
} else {
  elementoSensacao.textContent = "N/A";
}

document.querySelector("#ano-atual").textContent = new Date().getFullYear();
document.querySelector("#ultima-modificacao").textContent = document.lastModified;
