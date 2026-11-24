# PROMPT PARA CLAUDE CODE · BARD RH · Blindagem jurídica a partir da orientação do advogado

> **Como usar:** abra a pasta do projeto no VS Code, inicie o Claude Code, copie este arquivo para a raiz (ou para `docs/juridico/`), copie junto o arquivo `transcricao-jabson-lgpd-trabalhista.md` e cole a instrução: *"Leia `PROMPT-conformidade-juridica-bard-rh.md` inteiro e execute fase por fase. Pare ao fim da Fase 1 e espere meu OK."*
> Versão deste prompt: 24/11/2026. Fonte da orientação jurídica: conversa gravada com o Prof. Jabson (advogado e docente do Senac Celestino), 9 min 40 s.

---

## 1. PAPEL E MISSÃO

Você é um engenheiro de conteúdo e conformidade trabalhando no projeto **BARD RH** (Empreenda Senac 2026). Sua missão tem três partes:

1. **Aperfeiçoar** o que já existe no material HTML do projeto sobre LGPD e riscos jurídicos, sem perder o que já está correto.
2. **Incorporar** a orientação do advogado (seis frentes de risco: LGPD, LAI, CLT/passivo trabalhista, Código Civil, tributos previdenciários e responsabilidade solidária) em slides, textos, contratos-modelo e rotinas.
3. **Entregar checklists práticos**, um para **candidatos** e outro para **empresas contratantes**, com um bloco para cada ponto da orientação.

O resultado deve ser algo que a equipe consiga **usar na banca de 26/11/2026** (slides e respostas) e **executar antes do piloto** (contratos, avisos, rotinas e requisitos de produto).

## 2. REGRAS DE OURO (valem para toda a execução)

1. **Não invente.** Tudo o que o advogado disse vem do áudio e deve citar o tempo (ex.: "áudio 07:46"). Tudo o que **você ou eu** acrescentamos (artigos de lei, jurisprudência, prática de mercado) é **acréscimo [A]** e leva o selo **CONFIRMAR**. Onde o advogado não disse nada (menores de 18 anos, CRP, titularidade do código, alto risco de IA, reembolso), **nada deve parecer resolvido**.
2. **Não chame de "parecer".** O que existe é **orientação preliminar de advogado, em conversa informal**. Parecer jurídico formal continua **pendente**. Nos slides, use: "advogado consultado (docente do Senac)". **Não escreva o nome do professor** em slides ou documentos externos: a pendência "autorização de nomes" do projeto continua aberta. Crie uma constante única (`ADVOGADO_LABEL`) para trocar depois, se a autorização vier.
3. **Respeite o regulamento da competição.** A empresa **não opera nem vende** durante o Empreenda Senac. Todo texto novo usa tempo verbal de plano ("planejamos", "será", "antes do piloto") e selo **PROPOSTA** (P), **LEI/NORMA** (L), **CONFIRMAR** (C) ou **HIPÓTESE** (H). Nunca escreva como se a plataforma já tratasse dados reais.
4. **Preserve o que está certo.** Decisão final humana, consentimento específico para dado sensível, direitos do art. 18, prazo de 15 dias, DPO, plano de incidente, critérios proibidos, módulo M4: **mantenha**. Corrija só o necessário e explique cada mudança.
5. **Não mexa em números financeiros** (investimento, custo fixo, equilíbrio, margens, cenários). Se uma ação jurídica tiver custo, registre como **pendência de orçamento**, sem alterar o modelo.
6. **Identidade visual intacta:** paleta preto e dourado, Poppins e Carlito, layouts existentes. Nada de novo CSS, a não ser que seja indispensável (e então liste).
7. **Estilo de texto:** português do Brasil, frases curtas, mesmo padrão do material (":" ";" e "·"; **sem travessão longo** "—" em texto de slide). Termos jurídicos com explicação em linguagem simples na primeira vez.
8. **Segurança do trabalho:** trabalhe em um **branch novo** (`feat/juridico-jabson`), faça **backup** dos arquivos antes de editar, mostre `diff` resumido a cada fase. **Não faça commit nem push sem eu pedir**; ao fim, sugira a mensagem de commit.
9. **Dados:** nunca use currículos ou dados pessoais reais em testes. Use dados **sintéticos**.
10. **Conferência de leis:** se tiver acesso à internet, confira os artigos citados nos textos oficiais (planalto.gov.br, gov.br/anpd). Se não conseguir conferir, **mantenha o selo CONFIRMAR** e liste o artigo no relatório final.

## 3. CONTEXTO DO PROJETO (resumo)

- **O que é:** empresa de RH com plataforma própria: **a IA explica por critério, uma pessoa decide, tudo fica registrado**. Candidato usa de graça; a empresa paga **por vaga** (R$ 390 com plataforma; R$ 1.290 com consultora; pacote de 5 por R$ 1.590). Há também consultoria sob demanda e proposta de white label.
- **Equipe e papéis (sugestão de responsáveis nos checklists):** Guilherme (produto e apresentação), Ricardo (custos e números), Cleide (governança e auditoria), Docente Leandro (código, arquitetura e IA). Externos a contratar: advogado, contador, DPO.
- **Estado do protótipo:** roda em **modo de simulação** com dados de demonstração. Existem: parecer por critério, decisão humana registrada, trilha de auditoria. **Planejados:** alerta de critérios proibidos, painel de alertas, banco de candidatos com consentimento, cobrança, trilhas.
- **Material HTML:** "Slides de Gaveta" (reserva para perguntas da banca). Três formas: **Compacta** (arquivo único, 113 slides, é o arquivo `BARD-RH-Resumo-Executivo.html`), **Hub** (114 slides, com links para o modo completo) e **Modo completo** (204 slides, **não alterar**).
- **Datas:** pitch final e banca em **26/11/2026** (confirme no índice do projeto). Hoje é 24/11/2026.
- **Pendências já registradas pelo projeto:** parecer jurídico (18+, CRP, LGPD), alto risco de IA em currículos (PL 2338/2023), titularidade do código, reembolso e garantia no contrato, enquadramento tributário (seleção × agenciamento), 3 orçamentos (DPO, jurídico, teste de segurança), autorização de nomes.

## 4. A ORIENTAÇÃO DO ADVOGADO (síntese fiel do áudio)

Leia a transcrição completa antes de começar. A tabela abaixo é o mapa de trabalho: **P1 a P9** são os nove pontos, e cada um tem checklist para candidatos e para empresas na Fase 4. Legenda de origem: **[J]** = dito no áudio; **[J+A]** = decorre do que ele disse, com formulação e detalhe nossos; **[A]** = acréscimo para validar.

| # | Ponto | Áudio | O que o advogado disse | Limite (o que ele não disse) |
|---|---|---|---|---|
| P1 | **Dado pessoal × dado sensível** | 00:53–02:25 | Dado pessoal é de **pessoa física** e identificável (RG, CPF, nome). **Dado sensível** (biométrico, saúde, religião, preferência política, questões raciais) tem tratamento **muito mais rigoroso**. "Dica importante": diferenciar os dois primeiro. A maior parte dos clientes do projeto são pessoas físicas (trabalhadores). | Não listou todos os dados sensíveis da lei nem tratou de dados de menores. |
| P2 | **Programa de proteção e política** | 02:25; 04:05 | Depois de diferenciar, é preciso **pensar num programa** para proteger os dados; a LGPD traça regras próprias. Citou "a política: o que deve ser feito". | Não detalhou o conteúdo do programa. |
| P3 | **Três agentes de tratamento** | 02:25–03:19 | Há **três figuras** na LGPD; ele não lembrou os nomes na hora e disse que "depois" detalharia. | Os nomes (controlador, operador, encarregado) são acréscimo [A]. Quem é quem no BARD RH **não foi analisado**. |
| P4 | **Alinhamento com a ANPD** | 03:19 | Tudo isso "tem que ser alinhado com a Agência Nacional de Proteção de Dados". | Sem detalhes de incidente, DPO de pequeno porte, prazos. |
| P5 | **Anonimização e filtro** | 03:19–04:15 | Exemplo: ocultar dígitos do CPF (últimos ou primeiros) ou partes do nome. "Interessante fazer um **filtro**, vou até **ajudar vocês** com isso." | Ele chama de "anonimização" o que tecnicamente é **mascaramento**: alinhar a terminologia [A]. Oferta de ajuda = **ação de acompanhamento**. |
| P6 | **LAI (Lei de Acesso à Informação)** | 04:15–05:58 | Lei importante além da LGPD: **transparência ativa e passiva**; **classificação** da informação (ele citou secreta e ultrassecreta, e uma terceira); **tempo**; **publicidade é a regra, sigilo é exceção**. Como o projeto lida com dados de pessoas físicas e jurídicas, convém olhar as duas leis e "fazer um questionariozinho" para a banca. | Não disse que a LAI se aplica diretamente ao BARD RH. Aplicabilidade [A]: ver Fase 2, slide `jur-lai`. |
| P7 | **CLT, passivo trabalhista e falsa expectativa de emprego** | 05:58–06:25 | Olhar a CLT para evitar "brechas" e **passivo trabalhista**. Risco apontado: alguém **alegar falsa expectativa de oferta de emprego**. Recomenda "fazer um filtro" em relação a isso. | Artigos da CLT (2º, 3º, 373-A) e Lei 9.029/1995 são acréscimos [A]. |
| P8 | **Código Civil e responsabilidade civil** | 06:25–07:19 | Alguém que se sinta **lesado** pode cobrar **indenização por danos morais ou materiais** ("danos pessoais", como ele disse) **na justiça comum**; quem trata disso, em tese, é o Código Civil. | Artigos (186, 187, 422, 927) e o CDC são acréscimos [A]. |
| P9 | **Tributos previdenciários e responsabilidade solidária** | 07:19–09:32 | Recolhimentos previdenciários sobre **mão de obra** importam, mas "dificilmente virá pergunta" da banca. Quando uma empresa **toma mão de obra de terceiro**, há **responsabilidade solidária**: **sem benefício de ordem**, cobra-se a dívida **inteira** de qualquer um dos dois, diferente da **subsidiária** (cobra um primeiro, depois o outro). Como o BARD RH será "uma empresa que faz a **ponte** entre dois mundos", convém **preparar respostas**. | Leis específicas (CTN 124, Lei 8.212/1991, Lei 6.019/1974, Súmula 331) são acréscimos [A]. Ele não afirmou que o BARD RH **é** intermediador de mão de obra: afirmou que o papel de "ponte" exige cuidado. |

**Fechamento do advogado (09:07):** preparar **respostas** para essas questões, "caso sejam perguntados, caso não sejam".

## 5. DIAGNÓSTICO: O QUE O HTML JÁ TEM SOBRE LGPD E O QUE FALTA

### 5.1 Inventário do que existe (Compacta, 113 slides)

| Slide | Nº | Layout | O que traz | Avaliação |
|---|---|---|---|---|
| `S-lgpd` | 55 | abertura | "LGPD: plano de ações" | O título passa a refletir o escopo ampliado (ver E16 e E17). |
| `lgpd-lei` | 56 | stats | A lei em 4 pontos: Lei 13.709/2018; ANPD agência (Lei 15.352/2026); multa até 2% do faturamento (teto R$ 50 mi, art. 52); incidente em 3 dias úteis + 20 (Res. CD/ANPD 15/2024); art. 20. | **Correto** (conferido em 24/11/2026: Lei 15.352 sancionada em 25/02/2026; Res. 15/2024 fixa 3 dias úteis e complemento em 20). Falta nuance de pequeno porte. |
| `lgpd-bases` | 57 | table | Etapas × dados × base legal × cuidado (cadastro, parecer da IA, banco, sensível, métricas, cobrança). | Bom. Faltam: currículo com dado sensível **não pedido**, usuários da empresa, **logs**. |
| `lgpd-direitos` | 58 | table | Direitos do art. 18 e como atender (acesso, correção, eliminação, portabilidade, compartilhamento, revisão art. 20). | **Correto.** Preservar. |
| `lgpd-cand` | 59 | steps | 8 ações para candidatos (mapear dados, aviso e consentimentos, coletar menos, decisão humana, guarda, segurança, encarregado, incidente). | Bom. Faltam filtro de currículo, aviso "sem garantia de contratação", logs. |
| `lgpd-pj` | 60 | steps | 8 ações para empresas (contrato, acordo de tratamento, M4, critérios proibidos, fornecedores, incidente, devolução, evidências). | Bom. Faltam cláusulas trabalhistas/civis/de natureza do serviço. |
| `lgpd-riscos` | 61 | table | 6 riscos, consequência e prevenção. | Faltam falsa expectativa e fornecimento de mão de obra. |
| `lgpd-art20` | 62 | explain | Art. 20 e decisão automatizada; PL 2338/2023. | **Correto.** Preservar. |
| Outros com conteúdo jurídico | | | `tec-6` (segurança e conformidade), `tec-3` (DPO R$ 1.500; jurídico R$ 800), `tec-5`, `pan-6` (pendências), `con-8`, `pac-5`, `pac-9`, `pac-10`, `wl-3`, `wl-dec`, `esc-8`, `fin-pend`, `aud-10`, `tec-acc2`. | Ver Fase 3 para ajustes pontuais. |

### 5.2 Lacunas frente ao áudio (a corrigir)

- **G1 · LAI:** ausente no HTML.
- **G2 · Trabalhista:** só aparece a Lei 9.029/1995 em `lgpd-riscos`. Nada sobre **falsa expectativa de emprego**, **vaga que não existe** ou **vínculo**. "Sem promessa de contratação" existe em `con-8` e `pac-9`, mas sem aviso de tela nem cláusula.
- **G3 · Civil:** "indenização" aparece só como consequência de vazamento ou discriminação. Falta plano preventivo (termo, canal de reclamação, prova, seguro).
- **G4 · Responsabilidade solidária:** ausente. "Seleção × agenciamento" aparece só como decisão **tributária** (`esc-8`). **Risco concreto:** a oferta de temporada em `pac-5` promete **"reposição de faltas em até 2 dias úteis"**, o que pode soar como **fornecimento de mão de obra**, exatamente o cenário da solidariedade que o advogado descreveu; `pac-10` já admite que isso "precisa de definição própria".
- **G5 · Dado sensível não pedido:** o HTML responde "não pedimos por padrão", mas o **currículo traz** foto, estado civil, religião (voluntariado), sindicato, deficiência. Falta o **filtro**.
- **G6 · Anonimização:** `lgpd-bases` fala em "dados agregados e anonimizados" e `lgpd-cand` em "IA sem nome, CPF ou contato", sem distinguir **mascaramento**, **pseudonimização** e **anonimização**. Além disso, "sem identificadores diretos" **não é anônimo**: texto livre do currículo (empresas anteriores, cidade, cursos) pode reidentificar.
- **G7 · Três agentes:** o HTML define papéis só na relação empresa × BARD RH. **Falta** o mapa por fluxo para o **candidato** (quem é controlador do cadastro e do banco? há co-controladoria?).
- **G8 · Governança:** inventário citado (art. 37), mas **sem RIPD** (art. 38), **sem prazos de retenção**, **sem tratar os logs** (Marco Civil, art. 15 [A]), **sem treinamento da equipe interna** (o M4 é só para empresas).
- **G9 · Previdenciário e vínculo próprio:** nada sobre encargos de contratados e **contratos PJ** da própria equipe (consultora PJ, arquiteto, validador).
- **G10 · Sinalização desatualizada:** `lgpd-lei` diz só "validar com advogado"; `pan-6` e `tec-5` listam "parecer jurídico" como pendente sem registrar que **já houve orientação preliminar**.

## 6. EXECUÇÃO EM FASES

**Prioridade e prazo.** **P0 = até 25/11 (antes da banca):** Fases 0, 1, 2, 3, 6 e os anexos 1 e 2. **P1 = depois da banca e antes do piloto:** Fase 5 (minutas, políticas, especificação do filtro). A Fase 4 (checklists) é P0 em Markdown e P1 em CSV.

### Fase 0 · Reconhecimento (somente leitura)

1. Liste a árvore do projeto. Localize: (a) o HTML da Compacta; (b) o HTML do Hub; (c) o **gerador** (script Python ou Node, JSON, planilha) que produz os HTMLs; (d) onde estão os dados dos slides.
2. Se **existir gerador**, a fonte de verdade é ele: **edite a fonte e regenere**. Se **só existir o HTML final**, os dados estão em uma linha `<script>window.HUB={...};window.LOGO_DARK=...` (JSON com `pillars`, `slides`, `shortcuts`, `tags`, `full`). Nesse caso, edite com um **script** que faça `json.loads` do trecho entre `window.HUB=` e `;window.LOGO_DARK`, altere e **regrave o restante do arquivo byte a byte** (não reformate o HTML, não toque em fontes e imagens em base64).
3. Confirme o **esquema** e as regras do renderizador (já verificados por mim, confirme se batem):
   - Slide: `{id, part, sec, layout, title, sub, data, src, tag, kind:"slide", no, k, kn}`; abertura de pilar: `{id:"S-lgpd", kind:"sec", part, sec, title, no}`.
   - `layout` ∈ `table | cards | stats | steps | compare | explain | timeline | chart | bars | qa | split | sim`.
   - `data` por layout: **table** `{cols, rows, hl, first, note, widths}` · **cards** `{items:[[título, texto, selo?]], cols, note}` · **stats** `{items:[[valor, rótulo, selo?]], note}` · **steps** `{items:[[título, texto]], note}` · **compare** `{cols:[{h, items, hl}], note}` · **explain** `{what, keys, decisions:[[t, x]], examples:[[t, x]], note}` · **qa** `{q, a, nums:[[valor, rótulo]]}`.
   - **Selos** (`tag` do slide ou 3º item de cards/stats): `V R E C H P L`. Em **células de tabela**, o selo vem do **início do texto**: a palavra `CONFIRMAR`, `PROPOSTA`, `LEI`, `HIPÓTESE`, `ESTIMATIVA`, `RECALCULADO` ou `VERIFICADO` no começo da célula vira o selo colorido. No meio do texto **não** vira selo.
   - `no`, `k`, `kn` (número global, posição no pilar, total no pilar) e `pillars[].first/n` e `shortcuts` (pares `[rótulo, número do slide]`) **dependem da ordem**: ao inserir slides, **recalcule tudo por script**, nunca à mão.
   - O renderizador **ajusta a fonte sozinho** (mínimo 11 px). O modo **`?print`** renderiza todos os slides e grava em `document.body.dataset`: `ready`, `overflow` (números de slides que estouram) e `small` (slides com fonte reduzida). **Meta: `overflow` vazio.**
4. Verifique as ferramentas disponíveis (Node, Python, Playwright ou Chrome headless) para o teste visual.
5. Grave `docs/juridico/00-reconhecimento.md` com: arquivos encontrados, gerador, pontos de atenção, e o que ainda não se sabe.

### Fase 1 · Plano (PARE e espere meu OK)

Apresente em até uma página: (a) onde vai editar; (b) lista final de slides novos e de slides alterados; (c) como fará o recálculo de numeração; (d) riscos; (e) até **3 perguntas** que realmente bloqueiem (ex.: manter ou não "Jurídico" como nome da aba). **Não espere resposta para o que tem default razoável**: use os defaults deste prompt e avise.

**Defaults deste prompt:** a aba do pilar passa a se chamar **"Jurídico"** (a chave `lgpd` continua) e o nome longo **"Jurídico e LGPD: plano de ações"**; os 11 slides novos entram **dentro do pilar LGPD**, na ordem da Fase 2; a Compacta e o Hub recebem as mesmas mudanças; o modo completo (204 slides) **não muda**.


### Fase 2 · Slides novos (P0)

Crie os **11 slides** abaixo dentro do pilar `lgpd` (Compacta **e** Hub). Eles já foram **testados em renderização** (modo `?print`, 1280×720): sem estouro e sem fonte reduzida. Se, no seu ambiente, algum estourar, ajuste o **texto** (encurte), nunca o CSS, e mantenha o sentido.

**Ordem final do pilar (18 slides).** Os existentes ficam como estão, exceto pelas edições da Fase 3.

| Pos. | Slide | | Pos. | Slide |
|---|---|---|---|---|
| 1 | **`jur-mapa`** (novo) | | 10 | `lgpd-riscos` |
| 2 | `lgpd-lei` | | 11 | `lgpd-art20` |
| 3 | **`jur-dados`** (novo) | | 12 | **`jur-lai`** (novo) |
| 4 | **`jur-agentes`** (novo) | | 13 | **`jur-trab`** (novo) |
| 5 | `lgpd-bases` | | 14 | **`jur-civil`** (novo) |
| 6 | `lgpd-direitos` | | 15 | **`jur-solid`** (novo) |
| 7 | **`jur-anon`** (novo) | | 16 | **`jur-check-cand`** (novo) |
| 8 | `lgpd-cand` | | 17 | **`jur-check-pj`** (novo) |
| 9 | `lgpd-pj` | | 18 | **`jur-qa`** (novo) |

Com a abertura `S-lgpd` (nº 55), o pilar ocupa os números 55 a 73 na Compacta. Os pilares seguintes **sobem 11 posições**: a Compacta passa de 113 para **124** slides (o Hub, de 114 para **125**). Esperado na Compacta: Auditoria abre em 74, Consultoria em 85, Pacotes em 94, White label em 105, Sustentabilidade em 112. **Confira por script**, não por esta tabela.

**Regras de inserção:** `part:"lgpd"`, `sec:"lgpd"`, `kind:"slide"`; `no`, `k`, `kn`, `pillars[].first/n` e `shortcuts` recalculados por script; **IDs únicos**; `shortcuts` **continua com 12 atalhos** (só renumere os destinos, pelo `id` do slide, e **não** acrescente atalhos novos: a barra tem espaço limitado). A aba do pilar vira **"Jurídico"** (campo `short`), o `name` vira "Jurídico e LGPD: plano de ações", e a abertura `S-lgpd` recebe o mesmo título. Se a barra de abas estourar a 1280 px, volte para "LGPD".

**Fonte de cada slide (`src`):** a conversa com o advogado vem como "Conversa com advogado (docente do Senac)", sem nome. Leis e artigos citados são **acréscimos**: os slides já os marcam como CONFIRMAR onde cabe.


#### Os 11 slides (JSON pronto para inserir)

### `jur-mapa` · layout `cards`
```json
{
  "part": "lgpd",
  "sec": "lgpd",
  "kind": "slide",
  "id": "jur-mapa",
  "layout": "cards",
  "title": "Seis frentes de risco jurídico apontadas pelo advogado",
  "sub": "Conversa preliminar com advogado, docente do Senac: orientação, não parecer formal (CONFIRMAR por escrito)",
  "data": {
    "items": [
      [
        "1 · LGPD",
        "Dado pessoal e dado sensível, três agentes de tratamento, alinhamento com a ANPD e anonimização. Detalhe nos slides desta seção.",
        "L"
      ],
      [
        "2 · LAI (Lei 12.527/2011)",
        "Publicidade é a regra e o sigilo, a exceção; transparência ativa e passiva; classificação da informação. Pode virar pergunta da banca.",
        "L"
      ],
      [
        "3 · CLT e passivo trabalhista",
        "Evitar falsa expectativa de emprego e brechas de vínculo. O advogado recomendou um “filtro” de comunicação.",
        "L"
      ],
      [
        "4 · Código Civil",
        "Responsabilidade civil: pedido de indenização por dano moral ou material na justiça comum.",
        "L"
      ],
      [
        "5 · Tributos previdenciários",
        "Tudo o que envolve mão de obra. Dificilmente vira pergunta da banca, mas pesa para a empresa.",
        "L"
      ],
      [
        "6 · Responsabilidade solidária",
        "Quem faz a ponte entre trabalhador e empresa pode ser cobrado pela dívida inteira, sem benefício de ordem.",
        "L"
      ]
    ],
    "cols": 3,
    "note": "Ficam fora desta conversa e seguem pendentes: menores de 18 anos, CRP, titularidade do código, alto risco de IA (PL 2338/2023), reembolso e garantia no contrato."
  },
  "src": "Conversa com advogado (docente do Senac); Lei 13.709/2018; Lei 12.527/2011; CLT; Código Civil",
  "tag": "P"
}
```

### `jur-dados` · layout `compare`
```json
{
  "part": "lgpd",
  "sec": "lgpd",
  "kind": "slide",
  "id": "jur-dados",
  "layout": "compare",
  "title": "Dado pessoal × dado sensível no BARD RH",
  "sub": "A diferença que o advogado pediu para dominar antes de tudo",
  "data": {
    "cols": [
      {
        "h": "Dado pessoal (regra geral)",
        "items": [
          "Identifica uma pessoa física: nome, CPF, RG, e-mail, telefone",
          "Só vale para pessoa física: CNPJ e razão social não são dado pessoal, mas gestor, RH e sócios são",
          "Precisa de base legal por etapa (slide Papéis, dados e bases legais)"
        ],
        "hl": false
      },
      {
        "h": "Dado sensível (tratamento mais rigoroso)",
        "items": [
          "Saúde, biometria, religião, preferência política, origem racial ou étnica (exemplos do advogado)",
          "A lei inclui também vida sexual, dado genético e filiação a sindicato ou a organização religiosa, filosófica ou política",
          "Consentimento específico e destacado, ou outra hipótese do art. 11"
        ],
        "hl": false
      },
      {
        "h": "No BARD RH",
        "items": [
          "Não pedimos dado sensível por padrão",
          "O currículo pode trazer foto, estado civil, religião, sindicato ou deficiência: o filtro remove antes da IA e da empresa",
          "Campo opcional de adaptações (vaga inclusiva), com consentimento, nunca usado para reprovar"
        ],
        "hl": true
      }
    ],
    "note": "Deficiência e saúde só entram se o candidato informar e consentir. PROPOSTA: o filtro de currículo ainda não existe no protótipo."
  },
  "src": "Conversa com advogado; Lei 13.709/2018, arts. 5º, 7º e 11",
  "tag": "P"
}
```

### `jur-agentes` · layout `table`
```json
{
  "part": "lgpd",
  "sec": "lgpd",
  "kind": "slide",
  "id": "jur-agentes",
  "layout": "table",
  "title": "Três agentes da LGPD e quem é quem no BARD RH",
  "sub": "O advogado citou as três figuras; os nomes vêm da lei. Os papéis por fluxo de dados dependem de validação jurídica",
  "data": {
    "cols": [
      "Figura",
      "O que faz",
      "Quem seria no BARD RH",
      "Estado"
    ],
    "rows": [
      [
        "Controlador",
        "Decide as finalidades e os meios do tratamento (art. 5º, VI)",
        "Empresa da vaga no processo seletivo; BARD RH no cadastro e no banco de candidatos (a confirmar por fluxo)",
        "CONFIRMAR"
      ],
      [
        "Operador",
        "Trata dados em nome do controlador (art. 5º, VII)",
        "BARD RH ao processar vaga e parecer a mando da empresa; provedores de IA, nuvem e e-mail como suboperadores",
        "CONFIRMAR"
      ],
      [
        "Encarregado (DPO)",
        "Canal entre controlador, titulares e ANPD (art. 5º, VIII; Res. CD/ANPD 18/2024)",
        "DPO externo com e-mail público; a dispensa de pequeno porte não vale para alto risco",
        "PROPOSTA"
      ],
      [
        "ANPD",
        "Orienta, fiscaliza e sanciona (Lei 15.352/2026)",
        "Destino da comunicação de incidente; acompanhar guias e resoluções",
        "LEI"
      ]
    ],
    "hl": [],
    "first": true,
    "note": "Pergunta para o advogado: no cadastro do candidato, o BARD RH e a empresa são controladores separados ou conjuntos?",
    "widths": [
      1.8,
      3.6,
      4.2,
      1.4
    ]
  },
  "src": "Conversa com advogado; Lei 13.709/2018, arts. 5º e 37 a 41; Lei 15.352/2026; Res. CD/ANPD 18/2024",
  "tag": "P"
}
```

### `jur-anon` · layout `steps`
```json
{
  "part": "lgpd",
  "sec": "lgpd",
  "kind": "slide",
  "id": "jur-anon",
  "layout": "steps",
  "title": "Anonimização e filtro de currículo: da teoria à tela",
  "sub": "O advogado ofereceu ajuda para montar o filtro; a técnica precisa de teste antes do piloto",
  "data": {
    "items": [
      [
        "Entrada",
        "O currículo chega com os dados originais e fica em guarda restrita, com acesso por perfil."
      ],
      [
        "Filtro",
        "Remove ou mascara nome, CPF, RG, contato, endereço, foto, idade, estado civil, filhos e menções a religião, sindicato, política e saúde."
      ],
      [
        "Currículo cego",
        "A IA recebe só experiência, formação e habilidades, com código interno no lugar do nome."
      ],
      [
        "Exibição",
        "Telas e relatórios mostram dado mascarado (ex.: CPF com dígitos ocultos); a empresa vê o necessário à vaga."
      ],
      [
        "Métricas",
        "Auditoria, ODS e consultoria usam só dado agregado e anonimizado, com teste de reidentificação."
      ]
    ],
    "note": "Ocultar dígitos do CPF ou parte do nome é mascaramento: ainda pode ser dado pessoal. Anonimização plena exige que não se consiga reidentificar a pessoa (LGPD, art. 12). Terminologia a validar com o advogado."
  },
  "src": "Conversa com advogado; Lei 13.709/2018, arts. 5º, XI, 12 e 13",
  "tag": "P"
}
```

### `jur-lai` · layout `compare`
```json
{
  "part": "lgpd",
  "sec": "lgpd",
  "kind": "slide",
  "id": "jur-lai",
  "layout": "compare",
  "title": "LAI (Lei 12.527/2011): o que é e quando importa ao BARD RH",
  "sub": "O advogado lembrou a LAI porque a banca pode perguntar e porque o BARD RH lida com dados de pessoas físicas e jurídicas",
  "data": {
    "cols": [
      {
        "h": "O que a lei diz",
        "items": [
          "Publicidade é a regra e o sigilo, a exceção",
          "Transparência ativa: o órgão divulga sem ser pedido; passiva: responde a pedidos",
          "Informação sigilosa é classificada (ultrassecreta, secreta ou reservada), com prazos",
          "Dado pessoal tem tratamento próprio e convive com a LGPD"
        ],
        "hl": false
      },
      {
        "h": "Quando importa ao BARD RH",
        "items": [
          "A LAI vale para órgãos públicos e entidades privadas sem fins lucrativos que recebem recurso público",
          "O BARD RH, empresa privada, não é alcançado por si só",
          "Passa a importar se o cliente, o licenciado ou o parceiro for público ou receber recurso público: contratos e relatórios podem ser divulgados"
        ],
        "hl": true
      },
      {
        "h": "O que fazer",
        "items": [
          "Classificar as informações do próprio BARD RH em níveis (pública, interna, confidencial, restrita)",
          "Cláusula de confidencialidade com ressalva de transparência para cliente público",
          "Dado pessoal de candidato nunca vira informação pública",
          "Resposta pronta para a banca"
        ],
        "hl": false
      }
    ],
    "note": "Aplicação da LAI a parceiros do Sistema S e a entidades como o Sebrae: CONFIRMAR com o advogado. Prazos e classes: conferir o texto oficial."
  },
  "src": "Conversa com advogado; Lei 12.527/2011, arts. 2º, 3º, 8º, 24 e 31",
  "tag": "P"
}
```

### `jur-trab` · layout `table`
```json
{
  "part": "lgpd",
  "sec": "lgpd",
  "kind": "slide",
  "id": "jur-trab",
  "layout": "table",
  "title": "Passivo trabalhista e falsa expectativa de emprego",
  "sub": "O “filtro” recomendado pelo advogado: cada risco com sua prevenção",
  "data": {
    "cols": [
      "Risco",
      "Como pode surgir",
      "Prevenção no BARD RH"
    ],
    "rows": [
      [
        "Falsa expectativa de emprego",
        "Candidato entende que tinha vaga garantida e pede indenização",
        "Aviso em toda tela de que a plataforma não garante contratação; status claros; nenhuma promessa no marketing e no termo"
      ],
      [
        "Vaga que não existe",
        "Empresa publica vaga só para formar banco de currículos",
        "Termo exige vaga real; cadastro reserva declarado como tal; encerramento comunicado ao candidato"
      ],
      [
        "Anúncio discriminatório",
        "Texto cita sexo, idade, cor ou situação familiar (CLT, art. 373-A; Lei 9.029/1995)",
        "Alerta de critérios proibidos na publicação (planejado); justificativa humana em toda reprovação"
      ],
      [
        "Candidato diz que o BARD RH é o empregador",
        "Dúvida sobre quem contratou, paga e dirige o trabalho",
        "Contrato de trabalho só entre empresa e candidato; o BARD RH apenas apoia a seleção"
      ],
      [
        "Vínculo com colaboradores do BARD RH",
        "Consultora, arquiteto ou validador PJ alegam vínculo de emprego (CLT, arts. 2º e 3º)",
        "Contrato por entregável, sem subordinação, horário fixo ou exclusividade; revisão do advogado"
      ]
    ],
    "hl": [],
    "first": true,
    "note": "Os artigos da CLT e da Lei 9.029/1995 são acréscimos ao áudio: conferir o texto vigente e a aplicação com o advogado.",
    "widths": [
      2.4,
      3.6,
      4.4
    ]
  },
  "src": "Conversa com advogado; CLT, arts. 2º, 3º e 373-A; Lei 9.029/1995",
  "tag": "P"
}
```

### `jur-civil` · layout `cards`
```json
{
  "part": "lgpd",
  "sec": "lgpd",
  "kind": "slide",
  "id": "jur-civil",
  "layout": "cards",
  "title": "Responsabilidade civil: quando alguém se sente lesado",
  "sub": "Pedido de indenização por dano moral ou material, na justiça comum, segundo o advogado",
  "data": {
    "items": [
      [
        "Base legal",
        "Código Civil: quem causa dano por ato ilícito ou abuso de direito deve reparar (arts. 186, 187 e 927); contratos exigem boa-fé (art. 422).",
        "L"
      ],
      [
        "Quem pode pedir",
        "Candidato, empresa cliente ou terceiro, por dano moral ou material.",
        "L"
      ],
      [
        "Cenários prováveis",
        "Vazamento de currículo; reprovação sem explicação; parecer da IA errado; vaga que não existia; serviço que não entrega o combinado.",
        null
      ],
      [
        "Prevenção",
        "Termo de uso e contrato claros, sem promessa de resultado; trilha de auditoria como prova; canal de reclamação com prazo; cotar seguro de responsabilidade civil e cibernético; limite de responsabilidade no contrato só com validação do advogado.",
        "P"
      ]
    ],
    "cols": 2,
    "note": "Para planos pagos do candidato e para pequenas empresas pode valer também o Código de Defesa do Consumidor (ex.: arrependimento de 7 dias em compra online, art. 49). Acréscimo ao áudio: CONFIRMAR."
  },
  "src": "Conversa com advogado; Código Civil, arts. 186, 187, 422 e 927; CDC, art. 49",
  "tag": "P"
}
```

### `jur-solid` · layout `explain`
```json
{
  "part": "lgpd",
  "sec": "lgpd",
  "kind": "slide",
  "id": "jur-solid",
  "layout": "explain",
  "title": "Responsabilidade solidária ao intermediar mão de obra",
  "sub": "Resumo em quatro blocos: o que é, palavras-chave, decisões e exemplos",
  "data": {
    "what": "Quando uma empresa toma o trabalho de uma pessoa fornecido por terceiro, o fisco e a Previdência podem cobrar a dívida previdenciária de qualquer um dos dois, pelo valor total e sem benefício de ordem. Na responsabilidade subsidiária, cobra-se primeiro um e só depois o outro. O BARD RH faz a ponte entre candidatos e empresas: precisa deixar claro que seleciona e não fornece mão de obra.",
    "keys": [
      "solidária",
      "sem benefício de ordem",
      "subsidiária",
      "tomador da mão de obra",
      "terceirização",
      "tributos previdenciários",
      "seleção, não fornecimento"
    ],
    "decisions": [
      [
        "Só seleção, nunca fornecimento",
        "Contrato de trabalho sempre entre empresa e candidato; o BARD RH não emprega, não paga salário e não dirige o trabalho."
      ],
      [
        "Reposição de faltas vira nova seleção",
        "No pacote de temporada, trocar “reposição de faltas” por “vaga reaberta com nova lista curta” (CONFIRMAR)."
      ],
      [
        "Enquadramento com advogado e contador",
        "Seleção, agenciamento ou trabalho temporário (Lei 6.019/1974): decidir antes do piloto."
      ],
      [
        "Cláusula de encargos",
        "O contrato diz que encargos trabalhistas e previdenciários dos contratados são da empresa contratante."
      ]
    ],
    "examples": [
      [
        "Empresa de eventos com 12 temporários",
        "Se o BARD RH só indica candidatos e a empresa contrata direto, a ponte é de seleção. Repor faltosos e cobrar pela mão de obra pode ser tratado como fornecimento."
      ],
      [
        "Candidato que alega vínculo",
        "Contrato, folha e ordens de serviço estão com a empresa; o BARD RH guarda só a trilha da seleção."
      ]
    ],
    "note": "Solidária e subsidiária vêm da fala do advogado; as leis citadas são acréscimos: CONFIRMAR (CTN, art. 124; Lei 8.212/1991, arts. 30 e 31; Súmula 331 do TST)."
  },
  "src": "Conversa com advogado; CTN, art. 124; Lei 8.212/1991; Lei 6.019/1974; Súmula 331 do TST",
  "tag": "P"
}
```

### `jur-check-cand` · layout `table`
```json
{
  "part": "lgpd",
  "sec": "lgpd",
  "kind": "slide",
  "id": "jur-check-cand",
  "layout": "table",
  "title": "Checklist jurídico · candidatos",
  "sub": "Uma ação-chave por ponto da orientação do advogado; o detalhe está no checklist completo",
  "data": {
    "cols": [
      "Ponto",
      "Ação-chave",
      "Quando"
    ],
    "rows": [
      [
        "1 · Dado pessoal e sensível",
        "Filtro de currículo e campo opcional de adaptações com consentimento",
        "Antes de dados reais"
      ],
      [
        "2 · Programa de proteção",
        "Política de privacidade, inventário de dados, relatório de impacto e retenção por vaga",
        "Antes do piloto"
      ],
      [
        "3 · Agentes de tratamento",
        "Papéis validados, DPO nomeado e canal de direitos com resposta em 15 dias",
        "Antes do piloto"
      ],
      [
        "4 · ANPD",
        "Plano de incidente (3 dias úteis como meta) e simulação com ata",
        "Antes do piloto"
      ],
      [
        "5 · Anonimização",
        "Currículo cego para a IA, máscara nas telas e métricas agregadas",
        "Antes de dados reais"
      ],
      [
        "6 · LAI",
        "Classificar informações; dado de candidato nunca vira informação pública",
        "Antes da banca"
      ],
      [
        "7 · Trabalhista",
        "Aviso “sem garantia de contratação” em toda tela e status claros",
        "Antes do piloto"
      ],
      [
        "8 · Civil",
        "Termo de uso versionado, canal de reclamação e prova (trilha e aceite)",
        "Antes do piloto"
      ],
      [
        "9 · Previdenciário e solidária",
        "Texto: o contrato é com a empresa; candidato nunca paga por colocação",
        "Antes do piloto"
      ]
    ],
    "hl": [],
    "first": true,
    "note": "Tudo é PROPOSTA: nada disso opera hoje. Cada item tem evidência e responsável no checklist completo.",
    "widths": [
      2.6,
      6.2,
      1.8
    ]
  },
  "src": "Conversa com advogado; checklist jurídico do projeto",
  "tag": "P"
}
```

### `jur-check-pj` · layout `table`
```json
{
  "part": "lgpd",
  "sec": "lgpd",
  "kind": "slide",
  "id": "jur-check-pj",
  "layout": "table",
  "title": "Checklist jurídico · empresas contratantes",
  "sub": "Uma ação-chave por ponto da orientação do advogado; o detalhe está no checklist completo",
  "data": {
    "cols": [
      "Ponto",
      "Ação-chave",
      "Quando"
    ],
    "rows": [
      [
        "1 · Dado pessoal e sensível",
        "Acesso mínimo por perfil; termo proíbe pedir ou registrar dado sensível na triagem",
        "Antes do piloto"
      ],
      [
        "2 · Programa de proteção",
        "Contrato com anexo de proteção de dados e módulo M4 obrigatório",
        "Antes do piloto"
      ],
      [
        "3 · Agentes de tratamento",
        "Papéis por fluxo no contrato, lista de suboperadores e cooperação nos pedidos de titulares",
        "Antes do piloto"
      ],
      [
        "4 · ANPD",
        "BARD RH avisa a empresa em até 24 h (a fixar); a controladora comunica em 3 dias úteis",
        "Antes do piloto"
      ],
      [
        "5 · Anonimização",
        "Triagem cega por padrão; proibido reidentificar; exportações mascaradas",
        "Antes do piloto"
      ],
      [
        "6 · LAI",
        "Mapear se a empresa é pública; confidencialidade com ressalva de transparência",
        "Antes do piloto"
      ],
      [
        "7 · Trabalhista",
        "Vaga real; alerta de critérios proibidos; sem prometer cargo, salário ou data",
        "Antes do piloto"
      ],
      [
        "8 · Civil",
        "Contrato com escopo, garantia, reembolso e foro; indenidade por uso indevido",
        "Antes do piloto"
      ],
      [
        "9 · Previdenciário e solidária",
        "Cláusula de natureza do serviço (seleção, sem cessão de mão de obra); a empresa responde pelos encargos",
        "Antes do piloto"
      ]
    ],
    "hl": [],
    "first": true,
    "note": "Tudo é PROPOSTA e depende de validação por advogado e contador. O texto final dos contratos é do advogado.",
    "widths": [
      2.6,
      6.2,
      1.8
    ]
  },
  "src": "Conversa com advogado; checklist jurídico do projeto",
  "tag": "P"
}
```

### `jur-qa` · layout `qa`
```json
{
  "part": "lgpd",
  "sec": "lgpd",
  "kind": "slide",
  "id": "jur-qa",
  "layout": "qa",
  "title": "Se a banca perguntar: como o BARD RH se protege juridicamente?",
  "sub": null,
  "data": {
    "q": "Como o BARD RH se protege juridicamente?",
    "a": "Em cinco frentes: LGPD, com dado mínimo, filtro de currículo, encarregado e plano de incidente; decisão humana e nenhuma promessa de contratação; contratos claros; só seleção, sem fornecer mão de obra; e a LAI conhecida, caso o cliente seja público. Tudo planejado antes do piloto e a validar com advogado.",
    "nums": [
      [
        "5 frentes",
        "LGPD, LAI, CLT, Código Civil e previdenciário"
      ],
      [
        "0 promessas",
        "de contratação, em tela, termo e marketing"
      ],
      [
        "3 dias úteis",
        "meta de comunicação de incidente à ANPD"
      ]
    ]
  },
  "src": "Conversa com advogado; Lei 13.709/2018; Res. CD/ANPD 15/2024",
  "tag": null
}
```


**Pós-condições da Fase 2:** (1) JSON válido; (2) todos os `id` únicos; (3) `?print` com `overflow` vazio; (4) abas e menu lateral mostram o pilar com 18 slides; (5) a busca (tecla `/`) encontra "LAI", "solidária", "falsa expectativa", "anonimização".

### Fase 3 · Edições nos slides existentes (P0)

Aplique **trocas exatas** (o texto "Antes" deve existir **uma única vez**; se não existir, pare e me avise). Estas edições já foram testadas junto com a Fase 2.

| # | Slide | Campo | Antes | Depois |
|---|---|---|---|---|
| E1 | `pan-6` | item "Pendentes" | `parecer jurídico (18+, CRP, LGPD)` | `parecer jurídico formal (18+, CRP, LGPD, alto risco de IA; há orientação preliminar de advogado)` |
| E2 | `tec-5` | coluna "A confirmar com especialistas" | `Uso de dados e menores de 18 anos` | `Menores de 18 anos e CRP (parecer jurídico formal pendente)` |
| E3a | `lgpd-lei` | `sub` | `Orientação geral para a banca, não parecer jurídico: validar com advogado (CONFIRMAR)` | `Orientação geral e conversa preliminar com advogado (docente do Senac), não parecer formal: validar por escrito (CONFIRMAR)` |
| E3b | `lgpd-lei` | `note` (acrescentar ao final) | `…mas bloqueio, suspensão e indenização pesam mais.` | `…mas bloqueio, suspensão e indenização pesam mais. Agentes de pequeno porte podem ter prazo em dobro para comunicar incidente (Res. CD/ANPD 2/2022): manter 3 dias úteis como meta e CONFIRMAR.` |
| E4 | `lgpd-bases` | acrescentar **3 linhas** em `rows` | (sem as linhas) | Linha 1: `Currículo com dado sensível não pedido (foto, religião, sindicato, saúde)` · `Texto livre e anexos enviados pelo candidato` · `Não usar: o filtro remove antes da IA e da empresa; se algo for mantido, consentimento específico (art. 11)` · `Filtro testado antes do piloto; guardar o original só pelo prazo necessário`. Linha 2: `Usuários da empresa (gestores e RH)` · `Nome, e-mail e registro de ações` · `Execução de contrato (art. 7º, V) e legítimo interesse (art. 7º, IX)` · `Acesso por perfil; capacitação M4`. Linha 3: `Registros de acesso (logs)` · `IP, data, hora e ação` · `CONFIRMAR Obrigação legal (Marco Civil, art. 15: guarda de 6 meses)` · `Não virar histórico do candidato; alinhar com a retenção` |
| E5a | `lgpd-cand` | item "Aviso e consentimentos" | `…consentimento do banco de candidatos separado do da candidatura.` | `…consentimento do banco de candidatos separado do da candidatura; aviso de que a plataforma não garante contratação.` |
| E5b | `lgpd-cand` | item "Coletar menos" | `IA sem nome, CPF ou contato; sem foto, endereço, idade, gênero ou raça como critério.` | `IA sem nome, CPF ou contato; filtro tira foto, endereço, idade, gênero, raça e dado sensível do currículo.` |
| E5c | `lgpd-cand` | item "Prazo de guarda" | `Definir retenção por vaga e do banco; apagar ou anonimizar ao fim (prazo a validar com advogado).` | `Definir retenção por vaga e do banco; apagar ou anonimizar ao fim; registros de acesso seguem o prazo legal (prazos a validar com advogado).` |
| E6a | `lgpd-pj` | item "Contrato com cláusulas de dados" | `…instruções e fim do contrato (art. 39).` | `…instruções e fim do contrato (art. 39). Cláusulas trabalhistas e civis: ver slides desta seção.` |
| E6b | `lgpd-pj` | item "Incidente: quem avisa quem" | `…o BARD RH avisa a empresa de imediato (prazo interno a fixar no contrato).` | `…o BARD RH avisa a empresa de imediato (meta: até 24 h, a fixar no contrato).` |
| E7 | `lgpd-riscos` | acrescentar **2 linhas**; `src` ganha `; Código Civil; CTN, art. 124` | (sem as linhas) | `Falsa expectativa de emprego` · `Pedido de indenização (Código Civil, arts. 186 e 927)` · `Aviso de que não há garantia de contratação; vaga real; status claros`. E: `Ser tratado como fornecedor de mão de obra` · `Responsabilidade solidária previdenciária (CTN, art. 124)` · `Só seleção; contrato de trabalho direto entre empresa e candidato` |
| E8 | `pac-5` | item "Temporada" | `Reposição de faltas em até 2 dias úteis (meta).` | `Vaga reaberta com nova lista curta em até 2 dias úteis (meta); é nova seleção, não fornecimento de mão de obra.` |
| E9 | `pac-10` | `note` | `Reposição de faltas no contrato temporário precisa de definição própria (CONFIRMAR).` | `A “reposição de faltas” do contrato temporário vira vaga reaberta com nova lista curta e precisa de definição própria (CONFIRMAR); ver slide Responsabilidade solidária.` |
| E10 | `pac-9` | acrescentar **1 linha** em `rows` | (sem a linha) | `Natureza do serviço` · `Seleção e recrutamento; a empresa contrata direto e responde pelo vínculo e pelos encargos` · `PROPOSTA · CONFIRMAR com advogado` |
| E11 | `con-8` | item "Contrato" | `…Sem promessa de contratação ou de resultado.` | `…Sem promessa de contratação ou de resultado. Consultora PJ sem subordinação nem horário fixo (CONFIRMAR com advogado).` |
| E12 | `wl-3` | item "Jurídico e LGPD" | `…(LGPD arts. 42 e 43, responsabilidade solidária). CONFIRMAR com advogado.` | `…(LGPD arts. 42 e 43, responsabilidade solidária); o licenciado responde pelas pessoas que contratar. CONFIRMAR com advogado.` |
| E13 | `esc-8` | item "Antes do piloto" | `Decisão com contador sobre o regime (seleção x agenciamento; Anexo V ou III) e sobre a retirada dos sócios.` | `Decisão com contador e advogado sobre o enquadramento (seleção, agenciamento ou trabalho temporário), o regime (Anexo V ou III) e a retirada dos sócios.` |
| E14 | `tec-6` | acrescentar **1 linha** em `rows` | (sem a linha) | `Anonimização` · `Filtro de currículo, máscara nas telas e métricas agregadas (PROPOSTA)` · `LGPD, arts. 12 e 13` |
| E15 | `tec-acc2` | `note` | `…ver pilar LGPD.` | `…ver pilar Jurídico e LGPD.` |
| E16 | pilar `lgpd` | `short`, `name`, `q`, `intro` | `LGPD` · `LGPD: plano de ações` · `Como evitar problemas com candidatos e com empresas clientes?` · `A lei em poucos pontos, papéis e bases legais, direitos do candidato e dois planos de ação: candidatos e pessoas jurídicas.` | `Jurídico` · `Jurídico e LGPD: plano de ações` · `Como a equipe se protege juridicamente, com candidatos e com empresas clientes?` · `Seis frentes de risco apontadas pelo advogado: LGPD (papéis, bases, direitos, anonimização), LAI, trabalhista, civil, responsabilidade solidária e checklists por público.` |
| E17 | `S-lgpd` | `title` | `LGPD: plano de ações` | `Jurídico e LGPD: plano de ações` |

**Atenção a três pontos nas edições:**
1. Em **células de tabela**, `CONFIRMAR`, `PROPOSTA` e `LEI` só viram selo se estiverem **no começo** da célula (por isso a E4 escreve `CONFIRMAR Obrigação legal…`).
2. `lgpd-cand` e `lgpd-pj` já têm 8 itens; o layout `steps` quebra em 2 linhas de 4. **Não passe de 10 itens.**
3. Busque no restante dos dados por ocorrências de "pilar LGPD", "LGPD: plano de ações" e "#s-" fixos em texto, e **liste** (não altere sem avisar) qualquer link ou texto que dependa de número de slide.

**Hub:** repita as mesmas edições. Os novos slides **não têm** `refs` (links para o modo completo) e isso é intencional.

### Fase 4 · Checklists por ponto, para candidatos e para empresas contratantes (P0 em Markdown; CSV em P1)

Gere `docs/juridico/03-checklist-candidatos.md`, `docs/juridico/04-checklist-empresas.md` e, em P1, os dois `.csv` (colunas: `id, ponto, publico, acao, origem, base_legal, evidencia, responsavel, quando, prioridade, status, selo`). Mantenha **os IDs** abaixo. Complete a coluna `base_legal` (artigo de lei) para cada item, com selo **CONFIRMAR** onde não conferir no texto oficial.

**Legenda.** **Origem:** **[J]** dito pelo advogado · **[J+A]** decorre do que ele disse, com formulação e detalhe nossos · **[A]** acréscimo, a validar. **Responsável (sugestão):** **G** Guilherme · **R** Ricardo · **C** Cleide · **D** Docente Leandro · **ADV** advogado · **CTD** contador. **Quando:** **AB** antes da banca (26/11) · **ADR** antes de dados reais · **AP** antes do piloto · **PP** depois do piloto. **Evidência** é o que prova que o item foi feito.

#### P1 · Dado pessoal × dado sensível

**Candidatos**
- [ ] **C1.1** [J+A] Inventariar cada campo do cadastro e do currículo e classificar: pessoal, sensível ou desnecessário; cortar o desnecessário. *Evid.:* planilha de inventário · *Resp.:* C + D · *Quando:* ADR
- [ ] **C1.2** [J+A] Nenhum campo obrigatório pede dado sensível, foto, idade, estado civil, gênero ou raça. *Evid.:* captura do formulário · *Resp.:* G + D · *Quando:* ADR
- [ ] **C1.3** [A] Filtro detecta e remove dado sensível espontâneo (religião, sindicato, partido, saúde, biometria) no texto livre e nos anexos, antes da IA e da empresa. *Evid.:* relatório de teste com currículos sintéticos · *Resp.:* D · *Quando:* ADR
- [ ] **C1.4** [J+A] Consentimento **específico e destacado** para qualquer dado sensível mantido (ex.: adaptações para deficiência), separado do aceite do termo; registrar data, versão do texto e identificador. *Evid.:* log de consentimento · *Resp.:* D + ADV · *Quando:* ADR
- [ ] **C1.5** [A] Dado sensível nunca entra em nota, ordenação ou reprovação; teste automático e auditoria de viés trimestral. *Evid.:* teste e ata · *Resp.:* D + C · *Quando:* AP
- [ ] **C1.6** [A] O aviso de privacidade diz quais dados são pedidos e quais **não** são. *Evid.:* texto publicado · *Resp.:* G + ADV · *Quando:* AP

**Empresas contratantes**
- [ ] **E1.1** [J+A] Separar no cadastro o dado da pessoa jurídica (CNPJ e razão social: fora da LGPD) do dado de pessoas (gestor, RH, contato, sócios: dentro da LGPD); tratar MEI e empresário individual com cautela (CONFIRMAR). *Evid.:* modelo de dados · *Resp.:* D + ADV · *Quando:* ADR
- [ ] **E1.2** [A] Perfis de acesso mínimo: só quem conduz a seleção vê dados do candidato. *Evid.:* matriz de perfis · *Resp.:* D · *Quando:* AP
- [ ] **E1.3** [A] O termo proíbe pedir ou registrar dado sensível na triagem (saúde, religião, política, sindicato, raça, gravidez) e, sem justificativa, antecedentes criminais e consulta a cadastros de crédito. *Evid.:* cláusula · *Resp.:* ADV + R · *Quando:* AP
- [ ] **E1.4** [A] O campo de justificativa de reprovação alerta termos sensíveis ou discriminatórios. *Evid.:* teste · *Resp.:* D · *Quando:* AP
- [ ] **E1.5** [J+A] O módulo M4 ensina a diferença pessoal × sensível com exemplos de currículo e de entrevista; teste ≥ 80% antes de ver candidatos. *Evid.:* conteúdo do M4 e registro de notas · *Resp.:* C · *Quando:* AP
- [ ] **E1.6** [A] Vaga inclusiva: o dado de deficiência só chega à empresa com consentimento e para adaptação ou cota. *Evid.:* fluxo de tela · *Resp.:* G + D · *Quando:* AP

#### P2 · Programa de proteção e política

**Candidatos**
- [ ] **C2.1** [J+A] Política de Privacidade e Proteção de Dados (versão pública resumida e versão interna) alinhada aos princípios do art. 6º: finalidade, necessidade, transparência, segurança, não discriminação, responsabilização. *Evid.:* política aprovada · *Resp.:* C + ADV · *Quando:* AP
- [ ] **C2.2** [A] Registro das operações de tratamento (art. 37) por etapa: cadastro, parecer, banco, auditoria, cobrança. *Evid.:* planilha RoPA · *Resp.:* C · *Quando:* ADR
- [ ] **C2.3** [A] Relatório de impacto (RIPD, art. 38) para IA e decisão automatizada; revisar a cada mudança relevante. *Evid.:* RIPD · *Resp.:* C + D · *Quando:* AP
- [ ] **C2.4** [A] Política de retenção e descarte: por vaga, banco de candidatos, registros de acesso (Marco Civil, art. 15: 6 meses) e nota fiscal (prazo fiscal). Prazos definidos com advogado e contador. *Evid.:* tabela de retenção · *Resp.:* ADV + CTD + C · *Quando:* ADR
- [ ] **C2.5** [A] Segurança (art. 46): criptografia em trânsito e em repouso, acesso por perfil, backup e teste de segurança antes do piloto. *Evid.:* laudo do teste · *Resp.:* D · *Quando:* AP
- [ ] **C2.6** [A] Treinamento de LGPD para os quatro membros, o docente de TI e os prestadores. *Evid.:* lista de presença · *Resp.:* C · *Quando:* AP

**Empresas contratantes**
- [ ] **E2.1** [A] Contrato com anexo de proteção de dados (art. 39): finalidade, instruções, segurança, suboperadores, devolução e eliminação. *Evid.:* anexo · *Resp.:* ADV · *Quando:* AP
- [ ] **E2.2** [A] Política de uso aceitável: o que a empresa pode e não pode fazer com dados e pareceres. *Evid.:* documento aceito no cadastro · *Resp.:* C + ADV · *Quando:* AP
- [ ] **E2.3** [A] M4 obrigatório antes de ver candidatos, com certificado datado. *Evid.:* certificado · *Resp.:* C · *Quando:* AP
- [ ] **E2.4** [A] Relatório da vaga e trilha de auditoria exportáveis como prova de conformidade. *Evid.:* exemplo de relatório · *Resp.:* D · *Quando:* AP
- [ ] **E2.5** [A] O questionário de prontidão (A0) inclui perguntas de LGPD, trabalhista e civil. *Evid.:* A0 revisado · *Resp.:* C · *Quando:* AP
- [ ] **E2.6** [A] A empresa indica no cadastro o responsável por proteção de dados (nome e e-mail). *Evid.:* campo obrigatório · *Resp.:* D · *Quando:* AP

#### P3 · Três agentes de tratamento (controlador, operador, encarregado)

**Candidatos**
- [ ] **C3.1** [J+A] Matriz de papéis **por fluxo**: quem é controlador, operador ou co-controlador em cada etapa (cadastro, parecer, banco, auditoria); validar com o advogado e refletir no aviso. *Evid.:* matriz assinada pela equipe e revisada · *Resp.:* C + ADV · *Quando:* ADR
- [ ] **C3.2** [A] O aviso identifica o controlador e o canal do encarregado, e lista com quem os dados são compartilhados (empresa da vaga, provedor de IA, e-mail, nuvem, pagamento). *Evid.:* aviso · *Resp.:* G + ADV · *Quando:* AP
- [ ] **C3.3** [A] Nomear o encarregado (DPO externo, com 3 propostas) e publicar nome e e-mail (Res. CD/ANPD 18/2024). *Evid.:* contrato e página pública · *Resp.:* R + C · *Quando:* AP
- [ ] **C3.4** [A] Lista de suboperadores (IA, nuvem, e-mail, pagamento) com país, finalidade e mecanismo do art. 33 quando houver transferência internacional (Res. CD/ANPD 19/2024). *Evid.:* lista · *Resp.:* D · *Quando:* ADR
- [ ] **C3.5** [A] Canal de direitos do titular (art. 18) com protocolo, resposta em 15 dias e relatório mensal. *Evid.:* painel de pedidos · *Resp.:* C + D · *Quando:* AP

**Empresas contratantes**
- [ ] **E3.1** [A] O contrato define os papéis por fluxo e a responsabilidade solidária do art. 42, § 1º. *Evid.:* cláusula · *Resp.:* ADV · *Quando:* AP
- [ ] **E3.2** [A] Anexo de suboperadores; autorização geral, com aviso prévio de mudança. *Evid.:* anexo · *Resp.:* ADV + D · *Quando:* AP
- [ ] **E3.3** [A] A empresa indica seu encarregado ou ponto focal; o BARD RH mantém a lista. *Evid.:* cadastro · *Resp.:* C · *Quando:* AP
- [ ] **E3.4** [A] Cláusula de cooperação nos pedidos de titulares, com prazo a fixar. *Evid.:* cláusula · *Resp.:* ADV · *Quando:* AP
- [ ] **E3.5** [A] White label: licenciado controlador e BARD RH operadora, com instruções em contrato. *Evid.:* minuta de licença · *Resp.:* ADV · *Quando:* PP

#### P4 · Alinhamento com a ANPD

**Candidatos**
- [ ] **C4.1** [J+A] Plano de resposta a incidentes (papéis, árvore de decisão, modelos de comunicação ao titular e à ANPD); meta de 3 dias úteis (Res. CD/ANPD 15/2024); registro de todo incidente. *Evid.:* plano e registro · *Resp.:* C + D · *Quando:* AP
- [ ] **C4.2** [A] Simulação de incidente antes do piloto, com ata. *Evid.:* ata · *Resp.:* C + D · *Quando:* AP
- [ ] **C4.3** [A] Radar regulatório trimestral (resoluções e guias da ANPD, PL 2338/2023) com responsável nomeado. *Evid.:* relatório trimestral · *Resp.:* C · *Quando:* PP
- [ ] **C4.4** [A] Registro das comunicações com a ANPD e com titulares. *Evid.:* livro de registro · *Resp.:* C · *Quando:* AP
- [ ] **C4.5** [A] O aviso informa o direito de petição à ANPD (art. 18, § 1º). *Evid.:* aviso · *Resp.:* G · *Quando:* AP

**Empresas contratantes**
- [ ] **E4.1** [A] Cláusula de incidente: o BARD RH avisa a empresa de imediato (meta de 24 h, a fixar); a empresa, como controladora, comunica ANPD e titulares em 3 dias úteis. *Evid.:* cláusula · *Resp.:* ADV · *Quando:* AP
- [ ] **E4.2** [A] Contato de segurança da empresa (24 h) no cadastro. *Evid.:* campo obrigatório · *Resp.:* D · *Quando:* AP
- [ ] **E4.3** [A] Guia de uma página "o que fazer em caso de vazamento". *Evid.:* PDF · *Resp.:* C · *Quando:* AP
- [ ] **E4.4** [A] Cooperação em fiscalização da ANPD e fornecimento de evidências (trilha). *Evid.:* cláusula · *Resp.:* ADV · *Quando:* AP
- [ ] **E4.5** [A] Revisão do contrato quando surgir nova resolução da ANPD. *Evid.:* cláusula de revisão · *Resp.:* ADV · *Quando:* PP

#### P5 · Anonimização e filtro

**Candidatos**
- [ ] **C5.1** [J+A] Especificação do filtro de currículo (campos removidos ou mascarados; padrões de CPF, RG, telefone, e-mail, nomes, foto) e conjunto de teste **sintético**; meta de remoção ≥ 99% (hipótese) antes do piloto. O advogado **se ofereceu para ajudar**: agendar. *Evid.:* especificação e relatório de teste · *Resp.:* D + ADV · *Quando:* ADR
- [ ] **C5.2** [A] Quatro níveis de proteção: original (guarda restrita), mascarado (telas), pseudonimizado (IA), agregado e anonimizado (métricas), com tabela de quem acessa cada nível. *Evid.:* tabela · *Resp.:* D + C · *Quando:* ADR
- [ ] **C5.3** [A] A IA recebe currículo cego com código interno; a chave de reidentificação fica separada, com acesso restrito e registrado. *Evid.:* desenho técnico · *Resp.:* D · *Quando:* ADR
- [ ] **C5.4** [A] Teste de reidentificação nas métricas e nos relatórios, com tamanho mínimo de grupo (ex.: 5, hipótese). *Evid.:* relatório de teste · *Resp.:* D · *Quando:* AP
- [ ] **C5.5** [J+A] Máscara padrão de exibição (CPF e telefone parciais) em telas de suporte e relatórios. *Evid.:* captura de tela · *Resp.:* D · *Quando:* AP
- [ ] **C5.6** [J+A] Alinhar a terminologia (mascaramento × pseudonimização × anonimização, arts. 12 e 13) com o advogado. *Evid.:* nota de alinhamento · *Resp.:* C + ADV · *Quando:* AP

**Empresas contratantes**
- [ ] **E5.1** [A] A primeira triagem é em modo cego por padrão; identificação só na entrevista. *Evid.:* configuração · *Resp.:* G + D · *Quando:* AP
- [ ] **E5.2** [A] Relatórios e retornos de consultoria só agregados e anonimizados (já previsto em `con-8`). *Evid.:* exemplo de relatório · *Resp.:* C · *Quando:* AP
- [ ] **E5.3** [A] Cláusula proíbe reidentificar candidato e usar dados fora da vaga. *Evid.:* cláusula · *Resp.:* ADV · *Quando:* AP
- [ ] **E5.4** [A] Exportações mascaradas e com registro de download. *Evid.:* log · *Resp.:* D · *Quando:* AP
- [ ] **E5.5** [A] Eliminação ou anonimização dos dados na empresa ao fim da vaga, com relatório. *Evid.:* relatório de eliminação · *Resp.:* D + C · *Quando:* AP

#### P6 · LAI (Lei de Acesso à Informação)

**Candidatos**
- [ ] **C6.1** [A] Classificar as informações internas do BARD RH em níveis (pública, interna, confidencial, restrita) por analogia à LAI, e definir quem acessa o quê. *Evid.:* política de classificação · *Resp.:* C · *Quando:* PP
- [ ] **C6.2** [A] Garantir que dado pessoal de candidato nunca seja tratado como informação pública (convivência LAI e LGPD; LAI, art. 31). *Evid.:* regra no aviso e no contrato · *Resp.:* ADV · *Quando:* AP
- [ ] **C6.3** [J] Preparar a resposta da banca sobre LAI (Anexo 2, pergunta 10). *Evid.:* cartão de resposta · *Resp.:* G · *Quando:* AB
- [ ] **C6.4** [A] Declarar o escopo: no piloto, o BARD RH não atua em concurso público nem em seleção de órgão público. *Evid.:* termo de uso · *Resp.:* ADV · *Quando:* AP

**Empresas contratantes**
- [ ] **E6.1** [A] Cláusula de confidencialidade com ressalva de transparência quando o contratante for ente público ou entidade que recebe recurso público. *Evid.:* cláusula · *Resp.:* ADV · *Quando:* AP
- [ ] **E6.2** [A] O cadastro pergunta se a empresa é pública, de economia mista ou entidade privada que recebe recurso público; se sim, acionar o advogado. *Evid.:* campo e rotina · *Resp.:* D + ADV · *Quando:* AP
- [ ] **E6.3** [A] Orientar entes públicos de que a contratação pública tem regras próprias (concurso, CF, art. 37, II) e de que o piloto não as cobre. *Evid.:* texto no termo · *Resp.:* ADV · *Quando:* AP
- [ ] **E6.4** [A] Prever que contratos e relatórios com ente público podem ser divulgados, sem expor dados de candidatos. *Evid.:* cláusula · *Resp.:* ADV · *Quando:* AP
- [ ] **E6.5** [A] Procedimento para pedido de informação (LAI passiva) dirigido a cliente público: responsável e prazo (20 dias, prorrogáveis por 10; conferir). *Evid.:* rotina escrita · *Resp.:* C · *Quando:* PP

#### P7 · CLT, passivo trabalhista e falsa expectativa de emprego

**Candidatos**
- [ ] **C7.1** [J+A] Aviso fixo em candidatura, parecer e e-mails: "A plataforma apoia a seleção e não garante contratação. A decisão é da empresa." *Evid.:* capturas de tela · *Resp.:* G + D · *Quando:* AP
- [ ] **C7.2** [A] Status claros (recebida, em análise, parecer, decisão da empresa, encerrada) e meta de resposta em 5 dias úteis (já prevista no projeto). *Evid.:* fluxo de tela · *Resp.:* G · *Quando:* AP
- [ ] **C7.3** [J+A] "Filtro" de linguagem: revisar marketing, página de venda e redes; lista de expressões proibidas ("vaga garantida", "emprego rápido", "contratação certa"). *Evid.:* lista e revisão dos textos · *Resp.:* G + C · *Quando:* AB
- [ ] **C7.4** [A] Vaga encerrada ou preenchida avisa o candidato; vaga de banco de talentos vem identificada. *Evid.:* texto e fluxo · *Resp.:* G + D · *Quando:* AP
- [ ] **C7.5** [A] O candidato não paga para ser selecionado; planos pagos só para capacitação, com texto claro (validar com advogado). *Evid.:* texto dos planos · *Resp.:* G + ADV · *Quando:* AP
- [ ] **C7.6** [A] Guardar a trilha das comunicações como prova. *Evid.:* trilha · *Resp.:* D · *Quando:* AP

**Empresas contratantes**
- [ ] **E7.1** [A] Termo: só vaga real e ativa; cadastro reserva declarado como tal. *Evid.:* cláusula · *Resp.:* ADV · *Quando:* AP
- [ ] **E7.2** [A] Alerta de critérios proibidos na publicação (CLT, art. 373-A; Lei 9.029/1995): sexo, idade, cor, situação familiar, estado civil, gravidez. *Evid.:* teste do alerta · *Resp.:* D · *Quando:* AP
- [ ] **E7.3** [A] A empresa não promete cargo, salário, benefício ou data de início que não confirmou; a vaga declara o regime (CLT, estágio, temporário, PJ). *Evid.:* campo obrigatório · *Resp.:* G + D · *Quando:* AP
- [ ] **E7.4** [A] Cláusula: o contrato de trabalho ou de estágio é entre empresa e candidato; o BARD RH não é empregador. *Evid.:* cláusula · *Resp.:* ADV · *Quando:* AP
- [ ] **E7.5** [A] Justificativa humana em toda reprovação (ator, data, motivo), guardada como prova. *Evid.:* trilha · *Resp.:* D · *Quando:* AP
- [ ] **E7.6** [A] A empresa responde pelo cumprimento da lei trabalhista nas contratações; cláusula de regresso (validar). *Evid.:* cláusula · *Resp.:* ADV · *Quando:* AP
- [ ] **E7.7** [A] Vedar exames ou testes discriminatórios (gravidez, esterilização: Lei 9.029, art. 2º). *Evid.:* cláusula e módulo M4 · *Resp.:* ADV + C · *Quando:* AP
- [ ] **E7.8** [A] Alerta ao anunciar "PJ" para função com subordinação (risco da empresa). *Evid.:* alerta · *Resp.:* D · *Quando:* PP

#### P8 · Código Civil e responsabilidade civil

**Candidatos**
- [ ] **C8.1** [A] Termo de uso e política de privacidade claros, versionados, com aceite registrado. *Evid.:* versões e log de aceite · *Resp.:* ADV + D · *Quando:* AP
- [ ] **C8.2** [A] Canal de reclamação com protocolo e prazo (revisão em até 10 dias úteis, já prevista) e escalonamento. *Evid.:* fluxo · *Resp.:* C + D · *Quando:* AP
- [ ] **C8.3** [A] Plano de reparação: o que fazer em vazamento, erro da IA e reprovação indevida (corrigir, comunicar, reparar quando devido). *Evid.:* procedimento · *Resp.:* C + ADV · *Quando:* AP
- [ ] **C8.4** [A] Cotar seguro de responsabilidade civil e cibernético (fora do orçamento de `tec-3`). *Evid.:* 3 cotações · *Resp.:* R · *Quando:* AP
- [ ] **C8.5** [A] Prova: trilha de auditoria imutável, logs, versões do termo e consentimentos. *Evid.:* amostra exportável · *Resp.:* D · *Quando:* AP
- [ ] **C8.6** [A] Planos pagos (Plus e Premium): CDC (arrependimento de 7 dias, cancelamento fácil, reembolso); validar antes de vender; pendências de 18+ e CRP. *Evid.:* parecer do advogado · *Resp.:* ADV + G · *Quando:* PP

**Empresas contratantes**
- [ ] **E8.1** [A] Contrato com escopo, preço, garantia de reabertura (definição), reembolso, prazos pausados em queda de serviço, foro, limite de responsabilidade e exclusão de promessa de resultado (validar; cláusula abusiva é nula). *Evid.:* minuta revisada · *Resp.:* ADV + R · *Quando:* AP
- [ ] **E8.2** [A] A empresa responde pelos critérios que define e pelas decisões finais. *Evid.:* cláusula · *Resp.:* ADV · *Quando:* AP
- [ ] **E8.3** [A] Indenidade e regresso por uso indevido (critério discriminatório, dado fora da vaga). *Evid.:* cláusula · *Resp.:* ADV · *Quando:* AP
- [ ] **E8.4** [A] Resolução de conflitos (mediação, foro) e canal de atendimento. *Evid.:* cláusula · *Resp.:* ADV · *Quando:* AP
- [ ] **E8.5** [A] Aceite eletrônico com prova (data, versão do termo, identificador, representante com poderes) e nota fiscal. *Evid.:* registro de aceite · *Resp.:* D + CTD · *Quando:* AP
- [ ] **E8.6** [A] Avaliar o CDC para microempresas e a cláusula "sem reembolso após a publicação" (`pac-9`). *Evid.:* parecer · *Resp.:* ADV · *Quando:* AP

#### P9 · Tributos previdenciários e responsabilidade solidária

**Candidatos**
- [ ] **C9.1** [J+A] Texto na plataforma: "O contrato de trabalho ou de estágio é com a empresa; o BARD RH apoia a seleção." *Evid.:* captura de tela · *Resp.:* G + D · *Quando:* AP
- [ ] **C9.2** [J+A] O BARD RH não paga salário, não define horário, não dirige o trabalho e não cobra do candidato por colocação. *Evid.:* termo de uso · *Resp.:* ADV · *Quando:* AP
- [ ] **C9.3** [A] A vaga informa o regime (CLT, temporário, estágio, PJ) e orienta o candidato a tirar dúvidas trabalhistas com sindicato ou Ministério do Trabalho, sem aconselhar juridicamente. *Evid.:* texto da vaga · *Resp.:* G · *Quando:* AP
- [ ] **C9.4** [A] Em vaga temporária, a contratação é pela empresa tomadora ou por empresa de trabalho temporário registrada (Lei 6.019/1974), nunca pelo BARD RH. *Evid.:* texto e cláusula · *Resp.:* ADV · *Quando:* AP

**Empresas contratantes**
- [ ] **E9.1** [J+A] Cláusula "natureza do serviço": seleção, recrutamento e consultoria; sem cessão de mão de obra e sem substituição de trabalhadores. *Evid.:* cláusula · *Resp.:* ADV · *Quando:* AP
- [ ] **E9.2** [J+A] Reescrever a oferta de temporada: de "reposição de faltas" para "vaga reaberta com nova lista curta" (`pac-5`, `pac-10`). *Evid.:* slides e termo ajustados · *Resp.:* G + R · *Quando:* AB
- [ ] **E9.3** [J+A] Decidir com advogado e contador, antes do piloto, o enquadramento (seleção, agenciamento ou trabalho temporário) e o regime tributário (`esc-8`). *Evid.:* ata da decisão · *Resp.:* ADV + CTD + R · *Quando:* AP
- [ ] **E9.4** [J+A] Cláusula: encargos trabalhistas, previdenciários e tributários dos contratados são da empresa contratante. *Evid.:* cláusula · *Resp.:* ADV · *Quando:* AP
- [ ] **E9.5** [A] Contratos com a empresa sem exclusividade nem subordinação do BARD RH; a consultora segue escopo fechado (`con-8`). *Evid.:* contrato-modelo · *Resp.:* ADV + R · *Quando:* AP
- [ ] **E9.6** [A] O relatório da vaga mostra que o BARD RH atuou só até a lista curta e a entrevista (prova de não ingerência). *Evid.:* modelo de relatório · *Resp.:* D · *Quando:* AP
- [ ] **E9.7** [A] Orientar a empresa (módulo M4) a conferir a regularidade de terceirizadas que contratar, porque a solidariedade também a alcança. *Evid.:* conteúdo do M4 · *Resp.:* C · *Quando:* PP

#### Itens internos do BARD RH (extras, decorrentes de P7 e P9)
- [ ] **I.1** [A] Contratos PJ (consultora, arquiteto, desenvolvedor, validador, DPO, jurídico): escopo por entregável, autonomia, sem horário, subordinação ou exclusividade; revisão do advogado. *Evid.:* contratos-modelo · *Resp.:* ADV + R · *Quando:* AP
- [ ] **I.2** [J+A] Recolhimentos previdenciários e tributários da própria empresa (pró-labore, pagamentos a autônomos, retenções) definidos com o contador. *Evid.:* parecer do contador · *Resp.:* CTD + R · *Quando:* AP
- [ ] **I.3** [A] Decidir a retirada dos sócios (pendência `fin-pend`) com o contador. *Evid.:* ata · *Resp.:* R + CTD · *Quando:* AP

**Conferência:** o total esperado é **48 itens para candidatos (C), 53 para empresas (E) e 3 internos (I)**. Se contar diferente, avise.

### Fase 5 · Documentos de apoio (P1; comece pelos marcados com ★ se sobrar tempo antes de 26/11)

Crie em `docs/juridico/`. Todo documento começa com o aviso: *"Minuta de trabalho, sem valor jurídico até revisão do advogado. Gerada a partir de orientação preliminar."* e termina com **"Pontos para o advogado decidir"**.

| Arquivo | Conteúdo mínimo |
|---|---|
| ★ `01-mapa-lgpd-html-x-audio.md` | Tabela G1 a G10 (seção 5.2) com o que mudou e em qual slide. |
| ★ `02-matriz-papeis-controlador-operador.md` | Linhas = fluxos (cadastro, candidatura a uma vaga, parecer da IA, banco de candidatos, métricas, cobrança, white label). Colunas = quem decide a finalidade, quem trata, base legal, papel provável (controlador, operador, co-controlador), dúvida para o advogado. |
| ★ `11-perguntas-banca-juridico.md` | O Anexo 2 formatado para importar no "Pocket de Perguntas": área, nível (básico, médio, difícil), pergunta, resposta de até 20 s, slide de apoio. |
| ★ `12-perguntas-para-segunda-conversa.md` | O Anexo 1, priorizado, com campo para a resposta do advogado. |
| `05-minuta-aviso-privacidade-candidato.md` | Versão curta (1 página, linguagem simples) e completa. Seções: quem somos e contato do encarregado; dados que pedimos e **que não pedimos**; para que usamos e base legal; com quem compartilhamos; transferência internacional; por quanto tempo guardamos; seus direitos e como pedir (15 dias); decisão automatizada e revisão (art. 20); segurança e incidente; "a plataforma não garante contratação"; versões do aviso. |
| `06-minuta-consentimento-banco-candidatos.md` | Consentimento **separado** do aceite da candidatura: finalidade, prazo, como sair, o que acontece ao sair. Opcional destacado para adaptações (dado sensível). |
| `07-minuta-clausulas-contrato-empresa.md` | Cláusulas-modelo, cada uma com *objetivo*, *texto-base* e *ponto para o advogado*: (1) objeto e **natureza do serviço** (seleção, sem cessão de mão de obra); (2) vaga real e ativa; (3) sem promessa de contratação ou de resultado; (4) critérios proibidos e alerta; (5) decisão final e justificativa humana; (6) proteção de dados (papéis, finalidade, instruções, suboperadores, devolução e eliminação, art. 39); (7) incidente (24 h para o BARD RH avisar; 3 dias úteis para a controladora); (8) vínculo e encargos são da empresa; (9) garantia de reabertura (definição); (10) preço, reembolso, prazos pausados; (11) confidencialidade com ressalva de transparência (LAI); (12) responsabilidade, limite e indenidade; (13) foro e resolução de conflitos; (14) vigência, rescisão e devolução de dados; (15) aceite eletrônico. |
| `08-inventario-dados-ropa.csv` | Colunas: processo, dado, titular (candidato, usuário da empresa, sócio), finalidade, base legal, local, quem acessa, suboperador, país, retenção, nível de proteção (original, mascarado, pseudonimizado, anonimizado), observação. |
| `09-plano-resposta-incidentes.md` | Papéis, definição de incidente, classificação de risco, árvore de decisão, linha do tempo (hora 0, 24 h, 3 dias úteis, 20 dias úteis), modelos de comunicado ao titular, à empresa e à ANPD, registro, lições aprendidas, roteiro de simulação. |
| `10-matriz-risco-juridico.md` | Risco, frente (P1 a P9), probabilidade, impacto, consequência, prevenção, responsável, status. Reaproveite `lgpd-riscos`, `jur-trab`, `jur-civil`, `jur-solid`. |
| `13-especificacao-filtro-curriculo.md` | Requisitos funcionais (remoção e máscara por tipo de dado; detecção de dado sensível no texto livre; modo cego), níveis de proteção, **falhar fechado** (na dúvida, remove e sinaliza para revisão humana), registro do que foi removido sem guardar o valor, conjunto de teste **sintético**, métricas (recall de remoção, falsos positivos), amostra mensal de revisão humana, riscos (reidentificação por texto livre). |
| `14-microcopy-interface.md` | O Anexo 3. |
| `15-changelog-e-qa.md` | Fase 7. |

### Fase 6 · Verificação (obrigatória)

1. **JSON:** parse sem erro; `id` únicos; `layout` conhecido; forma de `data` correta para cada layout; selos só em `V R E C H P L`.
2. **Numeração:** `no` de 1 a N sem buracos; `k` e `kn` corretos por pilar; `pillars[].first` aponta para a abertura do pilar; `n` = quantidade de slides de conteúdo; **12 atalhos** apontando para os slides certos (confira por `id`).
3. **Visual:** abra `arquivo.html?print` no Chrome (headless ou Playwright), espere `document.body.dataset.ready === "1"` e leia `dataset.overflow` (**deve ser vazio**) e `dataset.small` (nenhum slide novo ou editado abaixo de 13 px; compare com a versão original para não piorar os demais). Tire **capturas** dos 11 slides novos e dos editados e me mostre.
4. **Navegação:** abas (11 abas cabem em 1280 px), menu lateral, busca por "LAI", "solidária" e "anonimização", setas e atalhos de teclado.
5. **Conteúdo:** (a) nenhum texto afirma que existe parecer jurídico formal; (b) o nome do advogado não aparece; (c) nenhum número financeiro mudou (compare os `data` dos pilares `fin`, `esc`, `pac` fora das edições E8, E9, E10); (d) todo artigo de lei acrescentado tem selo CONFIRMAR ou está conferido no texto oficial; (e) nenhuma frase fala de operação ou venda como fato.
6. **Regressão:** gere um diff entre o HTML original e o novo; as únicas diferenças devem ser: JSON dos slides, `pillars`, `shortcuts`. **Fontes e imagens em base64 intactas.**
7. **Checklists:** conte os itens (48 C, 53 E, 3 I) e confirme que cada um tem origem, responsável e prazo.

### Fase 7 · Entrega

1. Salve o novo HTML com nome claro (ex.: `BARD-RH-Resumo-Executivo_v2-juridico.html`), mantendo o original intacto. Mesma coisa para o Hub.
2. Grave `docs/juridico/15-changelog-e-qa.md`: lista de slides novos e alterados (id, nº antigo → nº novo), resultado de cada verificação da Fase 6, artigos que **não** foram conferidos, links ou textos que dependem de número de slide, e itens de decisão para mim.
3. Escreva o texto para eu colar no documento do projeto "índice da gaveta": pilar 6 vira "**Jurídico e LGPD: plano de ações (18)**: seis frentes do advogado, lei, dado pessoal × sensível, agentes, bases legais, direitos, anonimização, planos para candidatos e empresas, riscos, art. 20, LAI, trabalhista, civil, responsabilidade solidária, checklists e resposta pronta"; Compacta 113 → 124; Hub 114 → 125; modo completo (204) sem alteração. Avisos novos: orientação preliminar, não parecer; leis acrescentadas com selo CONFIRMAR.
4. Sugira a mensagem de commit em português. **Não faça commit.**
5. Responda em até 10 linhas: o que foi feito, o que **não** foi possível, e as 3 decisões que dependem de mim.

---

## ANEXO 1 · Perguntas para a segunda conversa com o advogado (ordem de prioridade)

1. **Papéis por fluxo.** No cadastro e no banco de candidatos, o BARD RH é controlador; e na vaga de uma empresa, a empresa é controladora e o BARD RH operador? Existe co-controladoria?
2. **Base legal** do banco de candidatos e do compartilhamento do perfil com a empresa da vaga.
3. **Currículo com dado sensível não pedido:** o filtro é suficiente? Posso guardar o original? Por quanto tempo?
4. **Terminologia e padrão técnico** de mascaramento, pseudonimização e anonimização (arts. 12 e 13). Ele se ofereceu para ajudar no filtro: quando?
5. **Retenção:** prazos para candidato aprovado, reprovado, banco, registros de acesso (Marco Civil, art. 15), nota fiscal e backup.
6. **DPO:** é obrigatório? Pequeno porte com tratamento de alto risco (Res. CD/ANPD 2/2022 e 18/2024)? Prazo de incidente em dobro vale para nós?
7. **Art. 20 e PL 2338/2023:** recrutamento como "alto risco": o que muda para nós e quando?
8. **Menores de 18 anos** (aprendiz, estagiário, ECA Digital): base legal, consentimento dos responsáveis, bloqueio de cadastro.
9. **CRP e profissionais:** os planos Plus e Premium com "validação por profissional" exigem registro em conselho? Qual o risco de exercício irregular?
10. **Natureza do serviço:** seleção, agenciamento ou trabalho temporário (Lei 6.019/1974)? Exige registro? Como redigir a oferta de **temporada** sem virar fornecimento de mão de obra?
11. **Cobrança:** por contratação (success fee) e planos pagos do candidato: há vedação de cobrar do trabalhador por colocação? Como separar capacitação de colocação?
12. **Falsa expectativa:** os avisos e o termo bastam? Existe jurisprudência de dano pré-contratual que deva orientar o texto?
13. **Contrato com a empresa:** limite de responsabilidade, exclusão de resultado, garantia de reabertura, reembolso ("nenhum após publicação"), arrependimento de 7 dias, CDC para microempresas, foro.
14. **Indenidade e regresso** da empresa por critério discriminatório ou uso indevido de dados.
15. **Contratos PJ da equipe** (consultora, arquiteto, validador, DPO, desenvolvedor): como evitar alegação de vínculo?
16. **Titularidade do código** gerado com IA e revisado pelo docente de TI; cessão para a empresa.
17. **White label:** licença, LGPD, solidariedade (arts. 42 e 43) e quem responde por quê.
18. **LAI:** aplica-se se o cliente, parceiro ou licenciado for público, do Sistema S ou receber recurso público? O que mudar nos contratos?
19. **Transferência internacional** (provedor de IA no exterior): cláusulas-padrão da ANPD (Res. CD/ANPD 19/2024) bastam?
20. **Seguro** de responsabilidade civil e cibernético: vale a pena e para qual valor?
21. **Tributário-previdenciário** (pró-labore, pagamentos a autônomos, retenções): confirmar com o contador; o que o advogado precisa saber?
22. **Formalização:** parecer escrito, escopo, prazo e honorários; ou indicação de escritório. Autorização para citar o nome dele nos materiais.

## ANEXO 2 · Perguntas prováveis da banca, com resposta de até 20 segundos

Formate cada resposta com **no máximo ~55 palavras**, tempo verbal de plano, e o slide de apoio entre parênteses.

1. **"Como respondem à LGPD se houver dados sensíveis?"** (`lgpd-bases`, `jur-dados`) Não pedimos dado sensível. Se o currículo trouxer, um filtro remove antes da IA e da empresa. Se o candidato quiser informar, por exemplo uma deficiência para adaptar a vaga, pedimos consentimento específico, e isso nunca é usado para reprovar.
2. **"Quem é o responsável pelos dados: vocês ou a empresa?"** (`jur-agentes`) Depende do fluxo. Trabalhamos com a hipótese de a empresa ser controladora do processo seletivo e o BARD RH operador, e de sermos controladores do cadastro e do banco de candidatos. Está em validação com advogado e o contrato registra o papel de cada um.
3. **"E se houver um vazamento?"** (`lgpd-lei`, `lgpd-pj`) Há plano de incidente: avisamos a empresa de imediato e, havendo risco relevante, ANPD e titulares em até três dias úteis. Todo incidente é registrado. É um plano: o piloto só começa com ele testado.
4. **"A IA decide quem é contratado?"** (`lgpd-art20`) Não. A IA explica por critério e uma pessoa decide, com justificativa registrada. O candidato pode pedir revisão; a meta é responder em dez dias úteis.
5. **"E se um candidato disser que foi enganado e achou que tinha vaga?"** (`jur-trab`) Toda tela avisa que a plataforma não garante contratação, a vaga precisa ser real e o status é claro. Se houver reclamação, a trilha de auditoria serve de prova e o canal tem prazo.
6. **"Vocês podem ser processados por danos morais?"** (`jur-civil`) Qualquer empresa pode. Reduzimos o risco com termo claro, canal de reclamação, trilha de auditoria e seguro a cotar. Limites de responsabilidade no contrato só entram com validação de advogado.
7. **"O BARD RH responde pelos encargos trabalhistas e previdenciários dos contratados?"** (`jur-solid`) Não deve. Nosso serviço é seleção: o contrato de trabalho é entre empresa e candidato, e não pagamos salário nem dirigimos o trabalho. O contrato diz que os encargos são da empresa. O enquadramento será decidido com advogado e contador antes do piloto.
8. **"O que é responsabilidade solidária e por que importa?"** (`jur-solid`) Quando alguém toma a mão de obra de um terceiro, a cobrança previdenciária pode ir contra qualquer um dos dois, pelo total, sem benefício de ordem. Como somos uma ponte entre candidato e empresa, deixamos claro que selecionamos e não fornecemos mão de obra.
9. **"E a temporada, com 12 temporários?"** (`pac-5`, `jur-solid`) Indicamos candidatos e a empresa contrata direto. Se alguém falta, reabrimos a seleção com nova lista curta; não repomos funcionário. A redação final do contrato fica com o advogado.
10. **"A Lei de Acesso à Informação se aplica a vocês?"** (`jur-lai`) A LAI vale para órgãos públicos e entidades privadas que recebem recurso público. Como empresa privada, não por si só. Importa se o cliente ou parceiro for público: contratos podem ser divulgados, sem expor dados de candidatos. O contrato trará essa ressalva.
11. **"Dado mascarado é dado anônimo?"** (`jur-anon`) Nem sempre. Ocultar dígitos do CPF é mascaramento e ainda pode ser dado pessoal. Anonimizar é não ser possível reidentificar. Usamos máscara nas telas e dados agregados nas métricas; a terminologia será validada com o advogado.
12. **"Como a empresa cliente evita discriminar?"** (`lgpd-pj`, `jur-trab`) Alerta de critérios proibidos na publicação, justificativa humana em toda reprovação e módulo M4 obrigatório antes de ver candidatos. Reincidência pode suspender o uso.
13. **"Precisam de DPO sendo tão pequenos?"** (`tec-6`, `jur-agentes`) A regra dispensa pequeno porte, exceto tratamento de alto risco, e o nosso tende a ser alto risco: IA e decisão automatizada sobre perfil profissional. Planejamos DPO externo; há 3 propostas pendentes.
14. **"Vocês já têm parecer jurídico?"** (`jur-mapa`) Tivemos uma conversa preliminar com um advogado, docente do Senac, que apontou seis frentes de risco, e já refletimos isso no plano. O parecer formal é pendência e está no plano antes do piloto.

## ANEXO 3 · Microtextos para a interface e os documentos (PROPOSTA)

| Onde | Texto |
|---|---|
| Candidatura (fixo) | "Esta plataforma apoia a seleção e não garante contratação. A decisão é da empresa." |
| Parecer | "O parecer explica o quanto seu currículo se aproxima dos critérios da vaga. Não é promessa de vaga." |
| Aviso do filtro | "Antes de analisar, removemos automaticamente foto, CPF, RG, endereço, contatos e informações como religião, sindicato e saúde." |
| Campo opcional | "Opcional: se precisar de adaptações, informe aqui. Usamos só para adaptar o processo, nunca para reprovar. Você pode apagar quando quiser." |
| Consentimento do banco | "Quero que meu currículo fique no banco de candidatos do BARD RH por até [prazo] para outras vagas. Posso sair a qualquer momento em Meus dados." |
| Vaga encerrada | "Esta vaga foi encerrada pela empresa. Obrigado por participar." |
| Vaga (empresa) | "Publique só vagas reais. Evite citar sexo, idade, cor, estado civil ou situação familiar: é discriminação (CLT, art. 373-A)." |
| Contratação (empresa) | "O contrato de trabalho é entre sua empresa e o candidato. O BARD RH apoia a seleção: não é empregador e não fornece mão de obra." |
| Reprovação (empresa) | "Escreva o motivo, ligado aos critérios da vaga. O candidato pode pedir revisão." |
| Planos pagos (candidato) | "O plano é de capacitação. Você nunca paga para ser selecionado." |

## ANEXO 4 · Base legal de apoio (conferir no texto oficial; tudo é acréscimo [A], exceto o que o advogado nomeou)

| Tema | Referência | Observação |
|---|---|---|
| LGPD | Lei 13.709/2018: arts. 5º (definições), 6º (princípios), 7º e 11 (bases legais), 12 e 13 (anonimização e pseudonimização), 18 a 20 (direitos), 33 (transferência internacional), 37 e 38 (registro e RIPD), 39 e 42 (operador e responsabilidade), 46 e 48 (segurança e incidente), 52 (sanções) | O advogado citou LGPD, dado pessoal e sensível, agentes e anonimização. |
| ANPD | Lei 15.352/2026 (agência); Res. CD/ANPD 2/2022 (pequeno porte), 15/2024 (incidentes), 18/2024 (encarregado), 19/2024 (transferência internacional) | **Lei 15.352 e Res. 15/2024 conferidas em 24/11/2026.** As demais, conferir. |
| LAI | Lei 12.527/2011: arts. 2º, 3º, 8º, 24, 31 | O advogado citou a LAI, transparência ativa e passiva, classificação e prazos. |
| Trabalhista | CLT, arts. 2º, 3º, 373-A; Lei 9.029/1995 | O advogado citou a CLT e a "falsa expectativa". Os artigos são acréscimo. |
| Civil | Código Civil, arts. 186, 187, 422, 927; CDC, art. 49 | O advogado citou o Código Civil e a justiça comum. |
| Previdenciário e solidária | CTN, art. 124; Lei 8.212/1991, arts. 30 e 31; Lei 6.019/1974; Súmula 331 do TST | O advogado descreveu a solidariedade sem benefício de ordem e a diferença para a subsidiária. Os dispositivos são acréscimo. |
| Registros de acesso | Marco Civil da Internet (Lei 12.965/2014), art. 15 | Guarda de 6 meses: conferir se se aplica. |
| IA | PL 2338/2023 (em tramitação, segundo o próprio HTML) | Conferir andamento antes da banca. |
