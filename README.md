# WDD 131 — S01: Página Inicial do Curso

## Arquivos
- `index.html`: página inicial do curso (raiz de `wdd131`).
- `estilos/base.css`: estilo responsivo usando CSS Flex (navegação) e CSS Grid (cartões).
- `scripts/obterdatas.js`: ano atual e `document.lastModified`.
- `imagens/`: duas imagens locais otimizadas (`perfil.webp` e `instituicao.webp`).

## Checklist atendida
- `<!doctype html>`, `<html lang="pt-BR">`, `head` e `body`.
- `head`: meta charset, meta viewport, title, meta description e meta author.
- Header com `span id="titulo-curso"` e `nav` com LinkedIn, Canvas, Escrituras e Projeto Final.
- `main` com `h1` (nome) e duas seções `class="card"` com título, imagens e conteúdo.
- Footer com `© <span id="anoatual"></span>` + nome/local e `p id="ultimaModificacao"`.
- Google Fonts via API oficial; navegação em Flex com efeito de hover; `main` centralizado e limitado; cartões em Grid.
- JavaScript referenciado com `defer`; ano e última modificação gerados dinamicamente; sem saída para o console.
- Imagens locais otimizadas (`perfil.webp` 22 kB, `instituicao.webp` 13 kB), com `alt` relevante e proporções preservadas.

## Antes de enviar
1. Confira o LinkedIn: o link aponta para a página pública do LinkedIn; insira a URL do seu perfil, se tiver.
2. Abra a pasta no VS Code, inicie o Live Server e verifique Console, Network (< 500 kB), CSS Overview e Lighthouse (desktop).
3. Commit/push para o repositório `wdd131` no GitHub, habilite o GitHub Pages a partir da raiz e envie a URL publicada no Canvas.

## Observações
- Sem frameworks ou bibliotecas CSS/JS de terceiros.
- As fontes do Google são carregadas pela API oficial; fontes de fallback configuradas.

## Revisão técnica
Consulte `AUDITORIA.md` para os ajustes realizados e os testes pendentes em navegador.
