const ano = document.querySelector('#ano');
const modificacao = document.querySelector('#modificacao');
if (ano) ano.textContent = new Date().getFullYear();
if (modificacao) modificacao.textContent = document.lastModified;
