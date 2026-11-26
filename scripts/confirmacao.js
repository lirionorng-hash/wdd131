const parametros = new URLSearchParams(window.location.search);
const produto = parametros.get('produto');
const classificacao = parametros.get('classificacao');
const instalacao = parametros.get('instalacao');
const valido = Boolean(produto && /^[1-5]$/.test(classificacao || '') && /^\d{4}-\d{2}-\d{2}$/.test(instalacao || ''));
const resumo = document.querySelector('#resumo');
const saidaContador = document.querySelector('#contador');
const chave = 'wdd131-avaliacoes-concluidas';
let contador = Number.parseInt(localStorage.getItem(chave) || '0', 10);
if (!Number.isFinite(contador) || contador < 0) contador = 0;
if (valido) {
  // O contador aumenta quando a página é acessada com dados válidos do formulário.
  contador += 1;
  localStorage.setItem(chave, String(contador));
  resumo.textContent = `Produto: ${produto}. Classificação: ${classificacao} de 5. Instalação: ${instalacao}.`;
} else {
  resumo.textContent = 'Não encontramos dados completos do formulário. Retorne à página anterior e preencha os campos obrigatórios.';
  document.querySelector('#confirmacao-titulo').textContent = 'Confira os dados da avaliação';
}
saidaContador.textContent = String(contador);
