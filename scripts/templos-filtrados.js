"use strict";
// Os dados estão no arquivo scripts/templos-dados.js.
const galeria = document.querySelector("#temple-cards");
const contador = document.querySelector("#quantidade");
const descricao = document.querySelector("#filtro-descricao");
const botoes = document.querySelectorAll(".filter-button");
const menu = document.querySelector("#navigation");
const menuToggle = document.querySelector("#menu-toggle");

const descricoes = {
  todos: "Todos os templos do catálogo",
  antigos: "Consagrados antes de 1900",
  novos: "Consagrados depois de 2000",
  grandes: "Área superior a 90.000 pés quadrados",
  pequenos: "Área inferior a 10.000 pés quadrados"
};
function filtrarTemplos(filtro) {
  switch (filtro) {
    case "antigos": return templos.filter(t => t.anoConsagracao < 1900);
    case "novos": return templos.filter(t => t.anoConsagracao > 2000);
    case "grandes": return templos.filter(t => t.area > 90000);
    case "pequenos": return templos.filter(t => t.area < 10000);
    default: return templos;
  }
}
function construirCartao(templo) {
  const card = document.createElement("article");
  card.className = "temple-card";
  const info = document.createElement("div");
  info.className = "details";
  const titulo = document.createElement("h3");
  titulo.textContent = templo.nomeDoTemplo;
  const local = document.createElement("p");
  const data = document.createElement("p");
  const tamanho = document.createElement("p");
  const criarLinha = (alvo, rotulo, valor) => {
    const negrito = document.createElement("strong");
    negrito.textContent = `${rotulo}: `;
    alvo.append(negrito,document.createTextNode(valor));
  };
  criarLinha(local,"Localização",templo.localizacao);
  criarLinha(data,"Consagração",templo.consagracao);
  criarLinha(tamanho,"Área",`${templo.area.toLocaleString("pt-BR")} pés²`);
  const imagem = document.createElement("img");
  imagem.src = templo.urlDaImagem;
  imagem.alt = `Fotografia do templo ${templo.nomeDoTemplo}`;
  imagem.loading = "lazy";
  imagem.decoding = "async";
  imagem.width = 640;
  imagem.height = 420;
  const credito = document.createElement("p");
  credito.className = "photo-credit";
  const link = document.createElement("a");
  link.href = templo.fonteImagem;
  link.textContent = `Foto: ${templo.autorImagem} (${templo.licenca})`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  credito.append(link);
  info.append(titulo,local,data,tamanho,credito);
  card.append(imagem,info);
  return card;
}
function mostrarTemplos(filtro = "todos") {
  const resultado = filtrarTemplos(filtro);
  galeria.replaceChildren(...resultado.map(construirCartao));
  if (resultado.length === 0) {
    const vazio = document.createElement("p");
    vazio.className = "empty";
    vazio.textContent = "Não há templos para este filtro.";
    galeria.append(vazio);
  }
  contador.textContent = `${resultado.length} ${resultado.length === 1 ? "templo" : "templos"}`;
  descricao.textContent = descricoes[filtro];
  botoes.forEach(botao => {
    const selecionado = botao.dataset.filter === filtro;
    botao.classList.toggle("active", selecionado);
    botao.setAttribute("aria-pressed", String(selecionado));
  });
}
botoes.forEach(botao => botao.addEventListener("click", () => {
  mostrarTemplos(botao.dataset.filter);
  menu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
}));
menuToggle.addEventListener("click", () => {
  const aberto = menu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(aberto));
  menuToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});
document.querySelector("#ano-atual").textContent = new Date().getFullYear();
document.querySelector("#ultima-modificacao").textContent = new Date(document.lastModified).toLocaleString("pt-BR");
mostrarTemplos();
