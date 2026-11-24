# Fase 1 · Plano (aguardando OK)

## (a) Onde vou editar

Só existe um arquivo-alvo neste projeto: `hotsite/downloads/BARD-RH-Resumo-Executivo.html` (a "Compacta", 113 slides). Não há "Hub" (114 slides) nem "Modo completo" (204 slides) neste repositório — confirmado na Fase 0 — então a instrução do PROMPT de "repetir no Hub" não se aplica aqui.

Edição sempre via script Python: isolar o JSON de `window.HUB={...}` (linha 346), editar o `dict`, `json.dumps(ensure_ascii=False)` de volta, e regravar só esse trecho — preservando byte a byte tudo mais (fontes/imagens em base64, CSS, JS do renderizador).

Antes de tocar no arquivo, faço uma cópia em `hotsite/downloads/.backup-fase2/BARD-RH-Resumo-Executivo.html` (além do git).

## (b) Lista final de slides novos e alterados

- **11 novos**, todos dentro do pilar `lgpd` (que passa a se chamar **"Jurídico"**, 7→18 slides): `jur-mapa, jur-dados, jur-agentes, jur-anon, jur-lai, jur-trab, jur-civil, jur-solid, jur-check-cand, jur-check-pj, jur-qa` — exatamente o JSON da Fase 2 do PROMPT, sem alteração de conteúdo.
- **17 edições (E1–E17)** em slides existentes, afetando 13 ids: `pan-6, tec-5, lgpd-lei, lgpd-bases, lgpd-cand, lgpd-pj, lgpd-riscos, pac-5, pac-10, pac-9, con-8, wl-3, esc-8, tec-6, tec-acc2` + metadados do pilar `lgpd` + título de `S-lgpd`. Cada uma é uma troca exata de texto; vou conferir programaticamente que o texto "antes" existe **uma única vez** em cada slide antes de aplicar — se não bater, paro e aviso, como o PROMPT manda.
- Compacta passa de **113 para 124 slides**. Pilares depois de `lgpd` sobem 11 posições (`aud` 63→74, `con` 85, `pac` 94, `wl` 105, `sus` 112) — recalculado por script, nunca à mão.

## (c) Recálculo de numeração

Script dedicado: reconstrói `no` sequencial 1..124, `k`/`kn` por pilar, `pillars[].first/n`, e remapeia os 12 `shortcuts` **pelo `id` do slide-alvo** (não pelo número antigo), já que dois deles apontam para `lgpd-cand`/`lgpd-pj`, que vão mudar de posição. Nenhum atalho novo é criado (o PROMPT pede para manter os 12). Confirmo ao final: `no` sem buracos, `first` de cada pilar bate com o primeiro slide dele, `k`/`kn` corretos.

## (d) Riscos

1. **Sem Hub/Modo completo** para espelhar — risco baixo, só fica registrado como limitação de escopo neste projeto (ver pergunta 1).
2. **Edições E1–E17 dependem de match exato de texto** — mitigado conferindo cada uma antes de aplicar.
3. **Verificação visual (Fase 6)** depende de Node+Playwright+Chrome do sistema; já testei que os três respondem neste ambiente, mas é a primeira vez usando Playwright aqui — se falhar, caio para inspeção manual do JSON + abertura do HTML no navegador padrão.
4. **`hotsite/index.html` tem seu próprio cartão `#pilar-lgpd`**, estático, não gerado do `window.HUB` — o PROMPT não sabia que ele existe (ver pergunta 1).
5. Não tenho como checar se há outra cópia do `BARD-RH-Resumo-Executivo.html` fora desta pasta de projeto; fica registrado como pendência no relatório final.

## Pergunta bloqueante (1 de até 3 — as outras têm default razoável do próprio PROMPT e sigo com ele)

**O cartão `#pilar-lgpd` do hotsite principal (`hotsite/index.html`, seção "Manual do Projeto") deve ganhar uma versão resumida das seis frentes jurídicas (hoje só cobre LGPD), ou fica fora do escopo desta tarefa — só o Resumo Executivo muda?**
Minha recomendação: atualizar também, de forma resumida (6 bullets → continuam 6, mas recortados para citar as 6 frentes), para o hotsite não ficar desalinhado com o material que vai para a banca. Mas não farei isso sem confirmação, já que o PROMPT não previu esse arquivo e você pediu para eu seguir fase por fase.

*Defaults que já vou aplicar sem perguntar (estão no próprio PROMPT):* aba do pilar = "Jurídico"; nome do advogado nunca aparece (uso `ADVOGADO_LABEL` = "advogado consultado (docente do Senac)"); Fase 4 em Markdown agora, CSV fica para depois da banca (P1); dados sintéticos em qualquer teste.

---

**Parando aqui, como pedido.** Aguardando seu OK (ou ajuste) para a pergunta acima antes de iniciar a Fase 2.
