# Auditoria da S01 — Página Inicial (WDD 131)

## Resultado
A estrutura do projeto e os principais elementos solicitados foram conferidos no código. Esta revisão NÃO substitui a auditoria no navegador com Lighthouse e DevTools.

## Requisitos identificados e atendidos
- `index.html` na raiz; `estilos/base.css`, `scripts/obterdatas.js` e arquivos de imagem em `imagens/`.
- `doctype`, idioma, charset, viewport, título, descrição e autor.
- `header` com `span#titulo-curso` e quatro links de navegação.
- `main` com um `h1` e duas seções `.card`.
- `footer` com `span#anoatual` e `p#ultimaModificacao`.
- JavaScript externo com `defer`, `Date().getFullYear()` e `document.lastModified`.
- CSS próprio com Flexbox para navegação e Grid para cartões.
- Imagens locais WebP, com atributos `alt` e dimensões definidas.
- Sem comandos de saída no console em JavaScript.
- Análise sintática de JavaScript (`node --check`) e análise sintática CSS: sem erros detectados.

## Aperfeiçoamentos feitos
- Ajustado breakpoint dos cartões de 740px para 900px, reduzindo o risco de colunas internas estreitas em tablets.
- Incluída regra `prefers-reduced-motion` para respeitar a preferência por menos animações.
- Mantidos textos, links, fotografia, instituição e estrutura original do aluno.

## Pontos que precisam ser confirmados
1. `lang="pt-BR"` corresponde ao idioma real do conteúdo, mas a lista de padrões cita especificamente `en-US`. Confirmar com o professor se a exigência é literal; não foi alterado para evitar idioma incorreto para leitores de tela.
2. O link do LinkedIn é genérico; substituir por endereço de perfil pessoal, se houver.
3. O projeto final ainda é um marcador interno válido; substituir pelo endereço da pasta quando existir.
4. Testar no Chrome/Edge em tamanhos de celular, tablet e desktop, especialmente sem rolagem horizontal.
5. Executar Lighthouse e verificar contraste AA, erros de console, links e transferência total inferior a 500 KB com a aba Network em cache vazio; as fontes Google são externas.
6. Conferir publicação no GitHub Pages e entregar a URL publicada no Canvas.

## Observação sobre os testes
A tentativa de abrir a página pelo navegador automatizado no ambiente de análise foi bloqueada por política de rede (`ERR_BLOCKED_BY_ADMINISTRATOR`). Portanto, não há evidência de aprovação no Lighthouse, desempenho real nem validação visual final. As imagens e os arquivos foram verificados diretamente.
