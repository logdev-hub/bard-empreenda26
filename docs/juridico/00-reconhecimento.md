# Fase 0 · Reconhecimento (somente leitura)

Branch: `feat/juridico-jabson` · Baseline do git: commit `6b0c9c9` em `master` ("Baseline: estado do projeto antes da blindagem jurídica (Jabson)").

## 1. Arquivos encontrados

### HTML dos "Slides de Gaveta" (agora "Resumo Executivo")

| Forma prevista no PROMPT | Existe neste projeto? | Caminho |
|---|---|---|
| **Compacta** (113 slides) | **Sim** | `hotsite/downloads/BARD-RH-Resumo-Executivo.html` |
| **Hub** (114 slides, com links para o modo completo) | **Não encontrado** | — |
| **Modo completo** (204 slides) | **Não encontrado** | — |

Busquei em toda a árvore do repositório (`PROJETO-FINAL/`) por qualquer arquivo adicional de slides, gerador (`.py`, `.js` fora do que já está embutido no HTML, planilha, JSON externo) ou pasta de build. **Não existe gerador**: o único artefato é o HTML final, igual ao que o PROMPT descreve como cenário B ("só existe o HTML final").

**Decisão que isso implica (ver Fase 1):** as edições das Fases 2 e 3 só podem ser aplicadas à Compacta. A instrução "Hub: repita as mesmas edições" (fim da Fase 3) não tem onde ser executada neste projeto — não há Hub aqui.

### Gerador / fonte de dados

Não há gerador. Os dados de todos os 113 slides, 11 pilares, 12 atalhos e o dicionário de selos vivem em **uma única linha** (linha 346 do arquivo) como:

```html
<script>window.HUB={...json...};window.LOGO_DARK="data:image/png;base64,...";window.LOGO_COVER="...";</script>
```

Confirmado: o JSON do `window.HUB` é extraído corretamente com um `json.JSONDecoder().raw_decode()` a partir do caractere logo após `window.HUB=` (o parser para sozinho no `}` de fechamento, antes do `;window.LOGO_DARK=...`). Esse é o método já usado com sucesso em duas edições anteriores deste projeto (troca de título da capa e dos textos de abertura), então a técnica está validada neste arquivo específico.

**Método de edição a usar (conforme a regra 2 do PROMPT):** ler o arquivo inteiro como texto, localizar a linha com `window.HUB=`, isolar o JSON com `raw_decode`, editar o objeto Python (`dict`), serializar de volta com `json.dumps(..., ensure_ascii=False)` e **substituir só esse trecho** na linha original — preservando byte a byte tudo o que vem antes (`<title>`, `<style>` com fontes em base64) e depois (`window.LOGO_DARK`, `window.LOGO_COVER`, o restante do HTML e do JavaScript do renderizador).

## 2. Esquema confirmado

### Pilares (`data['pillars']`) — ordem e numeração atuais

| # | key | short | first | n |
|---|---|---|---|---|
| 0 | `pan` | Panorama | 3 | 6 |
| 1 | `tec` | Tecnologia | 10 | 11 |
| 2 | `fin` | Financeiro | 22 | 11 |
| 3 | `esc` | Escalonado | 34 | 8 |
| 4 | `mer` | Mercado | 43 | 11 |
| 5 | `lgpd` | LGPD | 55 | 7 |
| 6 | `aud` | Auditoria | 63 | 10 |
| 7 | `con` | Consultoria | 74 | 8 |
| 8 | `pac` | Pacotes | 83 | 10 |
| 9 | `wl` | White label | 94 | 6 |
| 10 | `sus` | Sustentab. | 101 | 12 |

Os 7 slides do pilar `lgpd` (55–62, incluindo a abertura `S-lgpd` em 55) batem **exatamente** com o inventário da seção 5.1 do PROMPT: `S-lgpd`(55), `lgpd-lei`(56), `lgpd-bases`(57), `lgpd-direitos`(58), `lgpd-cand`(59), `lgpd-pj`(60), `lgpd-riscos`(61), `lgpd-art20`(62). Conferi o conteúdo de `lgpd-lei` (no 56) campo a campo e ele bate com a citação do PROMPT na edição E3b (mesma frase final do `note`). **Isto confirma que o PROMPT foi escrito em cima deste arquivo exato** (ou de uma cópia idêntica) — alto grau de confiança nas edições cirúrgicas da Fase 3.

### Slides (`data['slides']`) — campos confirmados

Todo slide de conteúdo tem exatamente: `id, part, sec, layout, title, sub, data, src, tag, kind, no, k, kn`. Aberturas de pilar (`kind:"sec"`) têm: `id, kind, part, sec, title, no`. Isso bate 100% com o que o PROMPT descreve na Fase 0, item 3.

- Total de slides: **113**. Numeração `no` é sequencial de 1 a 113, sem buracos.
- `shortcuts`: **12 pares** `[rótulo, no]`, confirmados (inclui "Plano LGPD · candidatos"→59 e "Plano LGPD · empresas"→60, que vão virar outros números após a Fase 2).
- `tags` (dicionário de selos): `{"V":"VERIFICADO","R":"RECALCULADO","E":"ESTIMATIVA","C":"CONFIRMAR","H":"HIPÓTESE","P":"PROPOSTA","L":"LEI / NORMA"}` — bate com a regra "selos só em V R E C H P L" da Fase 6.
- `full` (nível raiz): `None`/`null` — confirma que esta exportação não tem o modo completo embutido (consistente com não existir o arquivo de 204 slides).

## 3. Renderizador (JavaScript embutido)

Confirmado no próprio arquivo:
- `const PRINT = QS.has('print')` — o modo `?print` existe e é ativado por query string.
- Ao final da renderização em modo print: `document.body.dataset.ready='1'`, `document.body.dataset.overflow=<lista de no separados por vírgula>`, `document.body.dataset.small=<idem>`, além de `dataset.simover`.
- A detecção de estouro (`overflows(c)`) e de fonte reduzida (`fs < SMALL`) roda por slide durante o modo print.

Isso confirma que a verificação da Fase 6 (item 3, visual) é tecnicamente possível neste arquivo exatamente como o PROMPT descreve.

## 4. Ferramentas disponíveis neste ambiente

| Ferramenta | Disponível? | Detalhe |
|---|---|---|
| Python 3.13 + biblioteca `json` | Sim | Usado para toda a manipulação segura do `window.HUB` |
| Node.js | Sim | v24.14.1 |
| Playwright (via `npx`) | Sim | `npx playwright --version` resolve `1.65.1` (baixa o pacote na hora, não precisa instalar antes) |
| Chrome do sistema | Sim | `C:\Program Files\Google\Chrome\Application\chrome.exe` — dá para apontar o Playwright para ele com `channel: 'chrome'`, sem precisar baixar o Chromium do Playwright |
| Git local | Sim | Repositório inicializado nesta sessão (ver abaixo) |

**Conclusão:** a verificação visual da Fase 6 (item 3 — abrir `?print`, ler `dataset.overflow`/`dataset.small`, tirar capturas dos slides novos) **é viável** neste ambiente via Node + Playwright + Chrome do sistema, usando `file://` para abrir o HTML localmente.

## 5. Git — versionamento feito antes de qualquer edição

1. `git init` na raiz do projeto (`PROJETO-FINAL/`) — não havia repositório antes.
2. `git add -A` + commit único com todo o estado atual (hotsite, manual, apresentação, resumo, o PDF do folder e os dois arquivos novos de orientação jurídica) → commit `6b0c9c9` em `master`, mensagem: *"Baseline: estado do projeto antes da blindagem jurídica (Jabson)"*.
3. `git checkout -b feat/juridico-jabson` a partir desse commit.

Isso dá um ponto de restauração completo: `git diff master` em qualquer momento mostra exatamente o que mudou, e `git checkout master -- hotsite/downloads/BARD-RH-Resumo-Executivo.html` restaura o arquivo original sem precisar de backup manual. Ainda assim, por segurança extra e para "mostrar diff resumido a cada fase" sem exigir commit, vou **também** copiar o arquivo-alvo para `hotsite/downloads/.backup-fase2/BARD-RH-Resumo-Executivo.html` antes de tocar nele na Fase 2 (arquivo fora do fluxo normal do site, só como cópia de segurança local).

**Nenhum commit foi feito na branch `feat/juridico-jabson`** e nenhum vai ser feito até você pedir, conforme a regra 8 do PROMPT e sua instrução direta.

## 6. Transcrição — lida por completo

Li `transcricao-jabson-lgpd-trabalhista.md` inteira, incluindo o Anexo A (trechos incertos) e o Anexo B (notas de contexto). Conferi por amostragem a tabela P1–P9 da seção 4 do PROMPT contra o texto da transcrição:

- **P1** (00:53–02:25, dado pessoal × sensível): bate.
- **P5** (03:19–04:15, anonimização/filtro, "vou até ajudar vocês com isso"): bate, inclusive a frase literal.
- **P9** (07:19–09:32, solidariedade, fechamento "caso sejam perguntados, caso não sejam"): bate, incluindo o timestamp exato [09:07] citado no PROMPT.

Não encontrei nenhuma afirmação na tabela do PROMPT que não tivesse correspondência na fala do professor (dentro do que [J] alega) — os acréscimos [J+A] e [A] estão corretamente separados do que foi efetivamente dito, inclusive os pontos que o Anexo B do próprio transcript já sinalizava como "não faladas no áudio" (nomes das três figuras, as três classificações da LAI, a diferença técnica entre mascaramento e anonimização).

## 7. Pendência que o PROMPT não previa: o `hotsite/index.html` principal

O PROMPT (escrito só em função do ecossistema Compacta/Hub/Modo completo) não menciona o hotsite principal (`hotsite/index.html`), que tem sua **própria** seção "Manual do Projeto" com um cartão `#pilar-lgpd` (HTML estático, escrito à mão, não gerado a partir do `window.HUB`). Esse cartão hoje resume o pilar LGPD em 6 bullets e **não** cobre LAI, trabalhista, Código Civil nem responsabilidade solidária.

Isso é uma decisão de escopo para a Fase 1 (ver pergunta bloqueante 1 abaixo): se o cartão `#pilar-lgpd` do hotsite principal deve ganhar uma versão resumida das seis frentes, para não ficar desatualizado em relação ao Resumo Executivo.

## 8. O que ainda não se sabe

- Se a numeração de slide é referenciada em algum lugar fora do próprio arquivo (ex.: em `hotsite/index.html`, README ou docs) de um jeito que quebraria com a renumeração. Vou conferir isso explicitamente na Fase 1/2 antes de editar.
- Se há alguma cópia adicional do `BARD-RH-Resumo-Executivo.html` em outro lugar do computador do usuário (fora da pasta do projeto) que também precisaria ser atualizada — fora do alcance desta sessão; vou sinalizar como pendência no relatório final.
