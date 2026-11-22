"use strict";
// 7 templos originais do enunciado + 3 entradas adicionais.
// Fotos de Wikimedia Commons (arquivos individuais e autores creditados).
// A opção Special:FilePath entrega o arquivo original ou redireciona para ele.
const commons = (nomeArquivo) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(nomeArquivo)}`;
const fonte = (nomeArquivo) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(nomeArquivo).replace(/%20/g,"_")}`;
const templos = [
  {nomeDoTemplo:"Aba Nigeria",localizacao:"Aba, Nigéria",consagracao:"2005, 7 de agosto",anoConsagracao:2005,area:11500,arquivo:"Aba Nigeria Temple.jpg",autorImagem:"Nyerougo",licenca:"CC0"},
  {nomeDoTemplo:"Manti Utah",localizacao:"Manti, Utah, Estados Unidos",consagracao:"1888, 21 de maio",anoConsagracao:1888,area:74792,arquivo:"Manti Utah Temple East Wall.jpg",autorImagem:"Itsetsyoufree32",licenca:"CC BY 4.0"},
  {nomeDoTemplo:"Payson Utah",localizacao:"Payson, Utah, Estados Unidos",consagracao:"2015, 7 de junho",anoConsagracao:2015,area:96630,arquivo:"Payson Utah Temple 2014-11-28.jpg",autorImagem:"Evanmanning",licenca:"CC BY-SA 4.0"},
  {nomeDoTemplo:"Yigo Guam",localizacao:"Yigo, Guam",consagracao:"2020, 2 de maio",anoConsagracao:2020,area:6861,arquivo:"Yigo Guam Temple.jpg",autorImagem:"LittleT889",licenca:"CC BY 4.0"},
  {nomeDoTemplo:"Washington D.C.",localizacao:"Kensington, Maryland, Estados Unidos",consagracao:"1974, 19 de novembro",anoConsagracao:1974,area:156558,arquivo:"Washington D.C. Temple At Dusk.jpg",autorImagem:"Joe Ravi",licenca:"CC BY-SA 3.0"},
  {nomeDoTemplo:"Lima Peru",localizacao:"Lima, Peru",consagracao:"1986, 10 de janeiro",anoConsagracao:1986,area:9600,arquivo:"Lima Peru Temple.jpg",autorImagem:"Jeremy O. Evans",licenca:"CC BY-SA 3.0"},
  {nomeDoTemplo:"Cidade do México, México",localizacao:"Cidade do México, México",consagracao:"1983, 2 de dezembro",anoConsagracao:1983,area:116642,arquivo:"Mexico-city-mormon-temple-1441594497.jpg",autorImagem:"Marcorosas1991",licenca:"CC BY-SA 4.0"},
  {nomeDoTemplo:"Logan Utah",localizacao:"Logan, Utah, Estados Unidos",consagracao:"1884, 17 de maio",anoConsagracao:1884,area:119619,arquivo:"Logan Utah Temple.jpg",autorImagem:"Cory Maylett",licenca:"CC BY-SA 3.0"},
  {nomeDoTemplo:"Manaus Brasil",localizacao:"Manaus, Amazonas, Brasil",consagracao:"2012, 10 de junho",anoConsagracao:2012,area:32032,arquivo:"Templo SUD de Manaus 3.JPG",autorImagem:"União da Juventude Mestiça",licenca:"CC BY-SA 3.0"},
  {nomeDoTemplo:"Papeete Taiti",localizacao:"Papeete, Polinésia Francesa",consagracao:"1983, 27 de outubro",anoConsagracao:1983,area:9920,arquivo:"Temple mormon Tahiti.jpg",autorImagem:"Saga70",licenca:"CC BY-SA 4.0"}
].map(t => ({
  ...t,
  urlDaImagem: commons(t.arquivo),
  fonteImagem: fonte(t.arquivo)
}));
