// ATENÇÃO: confira os nomes e IDs abaixo com o array oficial apresentado no material interativo da disciplina.
// Os produtos a seguir são exemplos para demonstrar a criação dinâmica das opções.
const produtos = [
  {id: 'fc-1888', nome: 'Flux Capacitor'},
  {id: 'fc-2050', nome: 'Power Laces'},
  {id: 'fs-1987', nome: 'Time Circuits'},
  {id: 'ac-2000', nome: 'Low Voltage Reactor'},
  {id: 'jj-1969', nome: 'Warp Equalizer'}
];
const campoProduto = document.querySelector('#produto');
if (campoProduto) {
  produtos.forEach((produto) => {
    const opcao = document.createElement('option');
    opcao.value = produto.id;
    opcao.textContent = produto.nome;
    campoProduto.appendChild(opcao);
  });
}
