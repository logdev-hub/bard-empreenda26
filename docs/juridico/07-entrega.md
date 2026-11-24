# Fase 7 · Entrega

## 1. Arquivo entregue

Editado **no mesmo arquivo** (`hotsite/downloads/BARD-RH-Resumo-Executivo.html`), em vez de salvar como `_v2-juridico.html` mantendo o original à parte — desvio deliberado do default do PROMPT, justificado porque (a) este projeto não tem Hub nem Modo completo para manter em paralelo, e (b) o `hotsite/index.html` e o `README.md` já referenciam esse nome de arquivo fixo. **O original está preservado** em dois lugares: `hotsite/downloads/.backup-fase2/BARD-RH-Resumo-Executivo.html` (cópia de arquivo) e no commit `6b0c9c9` da branch `master` (git). Se preferir o arquivo separado, é só pedir — é uma cópia de um comando.

## 2. Slides novos e alterados

**11 novos** (todos com `no` final entre parênteses): `jur-mapa` (56), `jur-dados` (58), `jur-agentes` (59), `jur-anon` (62), `jur-lai` (67), `jur-trab` (68), `jur-civil` (69), `jur-solid` (70), `jur-check-cand` (71), `jur-check-pj` (72), `jur-qa` (73).

**13 slides + 1 pilar + 1 abertura alterados (17 edições E1–E17):** `pan-6` (E1), `tec-5` (E2), `lgpd-lei` (E3a, E3b), `lgpd-bases` (E4, +3 linhas), `lgpd-cand` (E5a, E5b, E5c), `lgpd-pj` (E6a, E6b), `lgpd-riscos` (E7, +2 linhas), `pac-5` (E8), `pac-10` (E9), `pac-9` (E10, +1 linha), `con-8` (E11), `wl-3` (E12), `esc-8` (E13), `tec-6` (E14, +1 linha), `tec-acc2` (E15), pilar `lgpd` → metadados (E16), `S-lgpd` → título (E17).

**Numeração:** Compacta 113 → **124** slides. Pilares após `lgpd`: Auditoria 63→**74**, Consultoria 74→**85**, Pacotes 83→**94**, White label 94→**105**, Sustentabilidade 101→**112**. 12 atalhos remapeados pelo `id` do slide, mantendo a mesma quantidade.

**Resultado de cada verificação da Fase 6:** ver `06-verificacao.md` — todas passaram.

**Artigos não conferidos no texto oficial** (ficam com selo CONFIRMAR, listados no Anexo 4 do PROMPT): Res. CD/ANPD 2/2022, 18/2024, 19/2024; CTN art. 124; Lei 8.212/1991 arts. 30/31; Lei 6.019/1974; Súmula 331 do TST; Marco Civil art. 15; CDC art. 49; CLT arts. 2º, 3º, 373-A; Lei 9.029/1995; Código Civil arts. 186, 187, 422, 927. Apenas Lei 15.352/2026 e Res. CD/ANPD 15/2024 já constavam como conferidas (24/11/2026), herdado do material original.

**Links ou textos que dependem de número de slide** (não alterar sem avisar, conforme pedido): nenhum encontrado fora do próprio arquivo — `hotsite/index.html` e `README.md` não referenciam números de slide do Resumo Executivo (conferido por busca).

## 3. Texto para o "índice da gaveta" / documento do projeto

> Pilar 6 vira **"Jurídico e LGPD: plano de ações (18)"**: seis frentes do advogado — lei, dado pessoal × sensível, agentes, bases legais, direitos, anonimização, planos para candidatos e empresas, riscos, art. 20, LAI, trabalhista, civil, responsabilidade solidária, checklists e resposta pronta. Compacta 113 → 124. Hub e modo completo: não existem neste projeto (sem alteração a registrar). Avisos novos: orientação preliminar, não parecer; leis acrescentadas com selo CONFIRMAR.

## 4. Também atualizado (fora do escopo original do PROMPT, autorizado nesta sessão)

- `hotsite/index.html`: cartão `#pilar-lgpd` (seção "Manual do Projeto") reescrito para "Jurídico e LGPD: plano de ações", com 6 bullets cobrindo as seis frentes e link para o Resumo Executivo. Offcanvas do mapa do site atualizado de "6. LGPD" para "6. Jurídico e LGPD". Conferido: HTML balanceado, sem erros.
- `docs/juridico/03-checklist-candidatos.md` (48 itens) e `04-checklist-empresas.md` (53 itens + 3 internos), em Markdown, conforme prioridade P0 do PROMPT. CSV fica para depois da banca (P1), como o PROMPT pede.

## 5. Mensagem de commit sugerida (NÃO commitado)

```
Blindagem juridica (Jabson): 11 slides novos + 17 edicoes no pilar Juridico/LGPD

- Resumo Executivo: pilar LGPD vira "Juridico e LGPD" (7 -> 18 slides),
  cobrindo LGPD, LAI, trabalhista, civil, previdenciario/solidaria e
  checklists por publico. Compacta 113 -> 124 slides; numeracao e
  12 atalhos recalculados por script.
- hotsite/index.html: cartao #pilar-lgpd atualizado para refletir as
  seis frentes (resumo); mapa do site atualizado.
- docs/juridico/: reconhecimento, plano, checklists (48 C + 53 E + 3 I)
  e relatorio de verificacao da Fase 6.

Nenhum numero financeiro alterado. Nenhum nome de advogado citado.
Arquivo original preservado em downloads/.backup-fase2/ e no commit
baseline (6b0c9c9) da branch master.
```

## 6. O que foi feito, o que não, e as 3 decisões que dependem de você

**Feito:** Fases 0 a 4 completas (reconhecimento, plano, 11 slides + 17 edições, 2 checklists Markdown com 104 itens) e Fase 6 (verificação completa, incluindo visual via Playwright/Chrome). Cartão do hotsite principal também atualizado, como você confirmou.

**Não feito (ficou para depois, por prioridade do próprio PROMPT ou por decisão sua):** Fase 5 (minutas de contrato, política de privacidade, RIPD etc. — marcada P1, "depois da banca"); CSV dos checklists (P1); conferência artigo por artigo no texto oficial de ~11 referências legais (fiquei com selo CONFIRMAR, como manda a regra 10 quando não dá para conferir); teste interativo da busca por tecla `/`.

**3 decisões que dependem de você:**
1. **Nome do arquivo:** mantenho a edição no arquivo único `BARD-RH-Resumo-Executivo.html` (como fiz) ou prefere que eu gere também `BARD-RH-Resumo-Executivo_v2-juridico.html` separado, como o PROMPT sugere por padrão?
2. **Fase 5** (minutas de contrato e políticas) — começo agora pelos itens marcados com ★ (mapa LGPD×áudio, matriz de papéis, perguntas da banca, perguntas para a 2ª conversa com o advogado) ou prefere revisar antes o que já saiu das Fases 2-4?
3. **Commit:** quer que eu já crie o commit na branch `feat/juridico-jabson` com a mensagem sugerida acima, ou prefere revisar o resultado primeiro (abrindo o `BARD-RH-Resumo-Executivo.html` no navegador)?
