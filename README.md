# BARD RH — hotsite do projeto

Hotsite estático que reúne, em uma única navegação, todo o percurso da equipe no BARD RH — Empreenda Senac 2026, Técnico em Recursos Humanos, Senac Guarulhos (CEL): a apresentação final, o manual do projeto e o resumo (dossiê compacto).

Construído com HTML5 semântico, CSS3 (sem framework de build), JavaScript vanilla, Bootstrap 5.3.3 e Bootstrap Icons.

## Por que esta pasta existe

O projeto tinha quatro materiais separados — `site/` (hotsite anterior), `apresentacao/` (vazia; o PDF ficou em `manual/`), `manual/` (apresentação final + manual em PDF) e `resumo/` (dossiê interativo em HTML). Esta pasta (`hotsite/`) é a plataforma que reúne todo esse percurso em um único site, trazendo o **design visual da apresentação e do manual** (preto e dourado, tipografia bold arredondada, cartões com numeração, selos de confiança), **todo o conteúdo do hotsite anterior** e os dados que só existiam no manual e no resumo (números financeiros completos, as 11 frentes do dossiê de negócio, a validação com decisores de compra, a tabela de selos de confiança etc.).

## Estrutura

```
hotsite/
├── index.html                 Página única com todas as seções (ver mapa abaixo)
├── assets/
│   ├── css/styles.css         Design system: cores, tipografia, componentes, responsividade
│   ├── js/main.js             Navegação, offcanvas, busca, scrollspy, animações leves
│   ├── js/config.js           IDs/URLs dos vídeos (mesmos do hotsite anterior)
│   └── img/logo-mark.png      Marca oficial (extraída da apresentação/manual em PDF)
├── docs/
│   └── fontes-e-conteudo.md   Fontes, decisões editoriais e pendências sinalizadas
├── downloads/
│   ├── BARD-RH-Manual-do-Projeto.pdf
│   ├── BARD-RH-Apresentacao-Final.pdf
│   └── BARD-RH-Resumo-Executivo.html
└── README.md
```

## Como abrir

No VS Code, abra esta pasta e use a extensão **Live Server** em `index.html`. Também é possível abrir o arquivo diretamente no navegador — todos os recursos funcionam sem servidor, exceto o carregamento das fontes/ícones via CDN (requer internet).

## Mapa do site

O site conta a história em capítulos (inspirado no folder impresso do projeto) e depois abre para o material de referência completo:

- **Barra superior:** âncoras diretas para os capítulos e seções principais (A história, A virada, Manual, Validação, Modelo, Equipe, FAQ) + atalho para as Demonstrações.
- **"Mapa do site" (botão no cabeçalho, sempre visível):** um painel lateral (offcanvas) com busca e a lista completa de todos os capítulos, dos 11 pilares do Manual do Projeto e das seções de referência — pensado para a banca pular direto a um tópico específico durante a arguição.

Seções, na ordem da página:

1. **Início** — proposta de valor em uma frase.
2. **Capítulo 1 · A Candidata** — Ana, 77% sem resposta, citação e mockup de caixa de entrada.
3. **Capítulo 2 · A Empresa** — Helena, 1 salário mínimo por contratação, ≈50% de rotatividade.
4. **Capítulo 3 · A Virada** — os 4 princípios do BARD RH e as jornadas completas de Ana e Helena (duas rotas).
5. **Diferenciais** — 8 cartões de diferenciação.
6. **Demonstrações** — os 2 vídeos do protótipo (candidato e administrador).
7. **Capítulo 4 · A Prova** — resultados do protótipo (n=60) e da pesquisa com 3 decisores de compra, com limites explícitos.
8. **A trajetória do grupo** — linha do tempo da pesquisa ao painel final, e o próximo capítulo (piloto).
9. **Modelo de negócio** — planos do candidato, produtos para a empresa, plano piloto.
10. **Manual do Projeto** — os **11 pilares** do negócio (Panorama, Tecnologia, Financeiro, Crescimento escalonado, Mercado, LGPD, Auditoria, Consultoria, Pacotes, White label, Sustentabilidade/ODS), evolução do Plano de Negócio da fase semifinal, cada pilar em um cartão expansível, com busca por palavra.
11. **Transparência** — a tabela de selos de confiança (VERIFICADO, RECALCULADO, ESTIMATIVA, CONFIRMAR, HIPÓTESE, †) e a regra oficial da competição.
12. **Equipe e propósito** — papéis da equipe (conforme o manual), orientação do professor, missão/visão/valores, ODS.
13. **FAQ / Perguntas da banca** — 12 perguntas prováveis, com respostas diretas.
14. **Capítulo final · O Convite** — fechamento da história + download do Manual (PDF), da Apresentação Final (PDF) e do Resumo Executivo (versão interativa por tema).

## Funcionalidades de navegação

- **Scrollspy**: o item ativo da barra superior acompanha a seção visível.
- **Links de transição entre capítulos**: cada capítulo termina com um link ("Mas o silêncio tem outro lado →") que leva ao próximo, replicando o convite de "virar a página" do folder impresso.
- **Busca no Manual do Projeto**: campo de busca filtra os 11 pilares por palavra (atalho de teclado `/`).
- **Busca no mapa do site**: o mesmo padrão de busca filtra a lista completa do offcanvas.
- **Deep-link para um pilar**: links como `index.html#pilar-lgpd` abrem a página já com aquele cartão expandido (útil para apontar um tópico específico durante a arguição).
- **Menu mobile** com fechamento automático ao clicar em um link; **offcanvas** funciona em qualquer tamanho de tela.
- Respeita `prefers-reduced-motion`; todo o conteúdo permanece acessível com JavaScript desativado (os `<details>` do Manual do Projeto abrem nativamente).

## Personalização

- Vídeos: troque os IDs em `assets/js/config.js` e nos dois `iframe` de `index.html`.
- Cores e tipografia: bloco `:root` em `assets/css/styles.css` (fontes carregadas via Google Fonts: Baloo 2 para títulos — a mesma da apresentação oficial — e DM Sans para texto).
- Conteúdo: todos os textos, números e tabelas estão diretamente no HTML (sem CMS), para indexação e funcionamento sem JavaScript.
- Materiais: para atualizar o Manual, a Apresentação ou o Resumo Executivo, basta substituir os arquivos em `downloads/` mantendo os mesmos nomes usados em `index.html`.

## Fontes e decisões editoriais

Ver `docs/fontes-e-conteudo.md` para a lista completa de fontes, as decisões editoriais tomadas ao reunir os três materiais em um só percurso (nome do projeto, papéis da equipe, anonimização de entrevistados) e as pendências que as próprias fontes sinalizam como não resolvidas.

## Publicação

Pode ser publicado em qualquer hospedagem estática (GitHub Pages, Netlify, Vercel ou hospedagem institucional) — basta enviar a pasta `hotsite/` inteira. Antes de publicar publicamente, defina uma imagem Open Graph (`og:image` em `index.html`) hospedada publicamente; nenhuma foi inventada.

## Verificações feitas

- HTML validado estruturalmente (balanceamento de tags, ids únicos, âncoras internas íntegras) e CSS/JS com chaves e parênteses balanceados.
- Todos os números do Manual do Projeto foram conferidos contra o PDF do manual, a Apresentação Final e o Resumo Executivo (resumo interativo); nenhum dado foi inventado — onde as fontes divergiam (ex.: rotatividade ≈50% vs. ≈51%) ou traziam informação sensível (nomes de entrevistados), a decisão tomada está registrada em `docs/fontes-e-conteudo.md`.
- A logomarca foi reextraída do PDF e limpa com filtro de mediana (o arquivo original tinha ruído de compressão nas bordas, visível ao ampliar); a tipografia de título foi conferida contra a apresentação e corrigida para **Baloo 2** (o "A" maiúsculo de topo reto é a assinatura visual da fonte).
- Não foi possível renderizar o site em um navegador real neste ambiente (sem acesso a navegador/captura de tela); recomenda-se abrir `index.html` com Live Server e conferir visualmente antes da apresentação à banca, especialmente a navegação mobile e os 11 cartões do Manual do Projeto.
