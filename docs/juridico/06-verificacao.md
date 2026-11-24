# Fase 6 · Verificação

Todas as verificações abaixo rodaram contra `hotsite/downloads/BARD-RH-Resumo-Executivo.html` já editado (113 → 124 slides).

## 1. JSON
- `json.JSONDecoder().raw_decode()` reparseia o `window.HUB` sem erro.
- 124 `id` únicos (verificado por `set()`).
- Todos os `layout` usados nos 11 slides novos (`cards`, `compare`, `table`, `steps`, `explain`, `qa`) já existiam no renderizador antes da edição.
- Selos usados nos slides novos: só `P`, `L` (e um `null`) — dentro do conjunto `V R E C H P L`.

## 2. Numeração
- `no` de 1 a 124, sem buracos (`sorted(nos) == list(range(1,125))`).
- Pilar `lgpd` (agora "Jurídico"): `first=55`, `n=18` (1 abertura + 18 slides de conteúdo = posições 55–73).
- Pilares seguintes deslocados **exatamente** como o PROMPT previu: Auditoria 74, Consultoria 85, Pacotes 94, White label 105, Sustentabilidade 112.
- 12 atalhos remapeados pelo `id` do slide-alvo (não pelo número antigo), incluindo os dois que mudaram de posição (`lgpd-cand` 59→63, `lgpd-pj` 60→64).

## 3. Visual (Node + Playwright + Chrome do sistema, `channel: 'chrome'`)
- Modo `?print`: `document.body.dataset.ready = "1"`, `dataset.overflow = ""`, `dataset.small = ""`, `dataset.simover = ""` — **meta batida: overflow vazio**, igual ao arquivo original antes da edição (113 slides, também vazio).
- 124 elementos `.slide` renderizados (confirma que todos os slides novos entraram no DOM).
- Capturas de tela tiradas e conferidas visualmente dos 11 slides novos (56, 58, 59, 62, 67, 68, 69, 70, 71, 72, 73) e de 2 editados (60 `lgpd-bases` com as 3 linhas novas, 65 `lgpd-riscos`): nenhum corte de texto, nenhuma fonte reduzida visível, selos (`LEI/NORMA`, `PROPOSTA`, `CONFIRMAR`) renderizando com a cor certa, inclusive o selo `CONFIRMAR` detectado automaticamente no início de uma célula de tabela (linha de "Registros de acesso" em `lgpd-bases`), confirmando a regra "selo só no início da célula".
- Aba "Jurídico" cabe na barra de 11 abas em 1280 px (visível nas capturas, sem quebra de linha).

## 4. Navegação
- Abas renderizam as 11 (confirmado nas capturas).
- Busca por palavra: confirmado por presença de substring no JSON serializado (proxy razoável, não testei a caixa de busca interativamente): `LAI`, `solidária`, `falsa expectativa` e `anonimização` aparecem no conteúdo novo.
- Menu lateral e numeração "k/kn" corretos (ex.: slide `jur-mapa` mostra "1/18", `jur-qa` mostra "18/18").

## 5. Conteúdo
- (a) Nenhum texto afirma que existe parecer jurídico formal — toda menção a "parecer jurídico formal" vem acompanhada de "pendente" ou equivalente (conferido por grep nas duas ocorrências do arquivo).
- (b) Nome do advogado (Jabson) **não aparece** em nenhum lugar do arquivo (`'Jabson' in content` → `False`, maiúsculo e minúsculo).
- (c) **Nenhum número financeiro mudou.** Diff estrutural campo a campo (ignorando `no/k/kn`) mostra que os pilares `fin` (financeiro) não têm **nenhuma** alteração; os pilares `esc` e `pac` só mudaram nos slides previstos (E13, E8, E9, E10) e todos os valores monetários/percentuais/prazos extraídos por regex (`R$`, `%`, meses) são **idênticos** antes e depois nesses slides.
- (d) Artigos de lei acrescentados nos slides novos levam selo `L` (LEI/NORMA) ou `CONFIRMAR` embutido no texto, conforme o próprio JSON fornecido no PROMPT (copiado sem alteração de conteúdo).
- (e) Nenhuma frase nova afirma operação ou venda como fato consumado — todo o texto novo usa tempo de plano ("planejamos", "será", "antes do piloto") e os slides carregam `tag: "P"` (PROPOSTA) ou `null`.

## 6. Regressão
- Diff linha a linha entre o arquivo original (`.backup-fase2/BARD-RH-Resumo-Executivo.html`) e o editado: **836 linhas em ambos, única linha diferente é a 346** (a linha do `window.HUB=...`). Fontes em base64, CSS e JavaScript do renderizador: intactos, byte a byte.

## 7. Checklists
- `03-checklist-candidatos.md`: **48 itens** (C1.1–C9.4), confirmado por contagem automática.
- `04-checklist-empresas.md`: **53 itens** (E1.1–E9.7) + **3 itens internos** (I.1–I.3), confirmado por contagem automática.
- Todo item tem origem ([J]/[J+A]/[A]), responsável sugerido e prazo (AB/ADR/AP/PP).

## Itens não verificados nesta sessão
- Busca interativa pela tecla `/` não foi simulada via Playwright (só confirmei que os termos existem no conteúdo). Recomendo um teste manual rápido antes da banca.
- Não há como checar se existe outra cópia do arquivo fora desta pasta de projeto.
- Artigos de lei citados como acréscimo `[A]` não foram conferidos um a um no texto oficial (planalto.gov.br / gov.br/anpd) nesta sessão — ficam com selo CONFIRMAR, como o PROMPT manda quando não há conferência.
