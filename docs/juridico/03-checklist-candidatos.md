# Checklist jurídico · Candidatos

Fonte: conversa preliminar com advogado (docente do Senac), 09:40 min — orientação, **não parecer jurídico formal**. Transcrição em `transcricao-jabson-lgpd-trabalhista.md`. Nome do professor não é citado em nenhum material externo (constante `ADVOGADO_LABEL` = "advogado consultado, docente do Senac").

**Legenda — Origem:** **[J]** dito pelo advogado · **[J+A]** decorre do que ele disse, com formulação e detalhe nossos · **[A]** acréscimo, a validar.
**Responsável (sugestão):** **G** Guilherme · **R** Ricardo · **C** Cleide · **D** Docente Leandro · **ADV** advogado · **CTD** contador.
**Quando:** **AB** antes da banca (26/11) · **ADR** antes de dados reais · **AP** antes do piloto · **PP** depois do piloto.
**Evidência** é o que prova que o item foi feito.

Total esperado nesta lista: **48 itens**.

---

## P1 · Dado pessoal × dado sensível

- [ ] **C1.1** [J+A] Inventariar cada campo do cadastro e do currículo e classificar: pessoal, sensível ou desnecessário; cortar o desnecessário. *Evid.:* planilha de inventário · *Resp.:* C + D · *Quando:* ADR
- [ ] **C1.2** [J+A] Nenhum campo obrigatório pede dado sensível, foto, idade, estado civil, gênero ou raça. *Evid.:* captura do formulário · *Resp.:* G + D · *Quando:* ADR
- [ ] **C1.3** [A] Filtro detecta e remove dado sensível espontâneo (religião, sindicato, partido, saúde, biometria) no texto livre e nos anexos, antes da IA e da empresa. *Evid.:* relatório de teste com currículos sintéticos · *Resp.:* D · *Quando:* ADR
- [ ] **C1.4** [J+A] Consentimento **específico e destacado** para qualquer dado sensível mantido (ex.: adaptações para deficiência), separado do aceite do termo; registrar data, versão do texto e identificador. *Evid.:* log de consentimento · *Resp.:* D + ADV · *Quando:* ADR
- [ ] **C1.5** [A] Dado sensível nunca entra em nota, ordenação ou reprovação; teste automático e auditoria de viés trimestral. *Evid.:* teste e ata · *Resp.:* D + C · *Quando:* AP
- [ ] **C1.6** [A] O aviso de privacidade diz quais dados são pedidos e quais **não** são. *Evid.:* texto publicado · *Resp.:* G + ADV · *Quando:* AP

## P2 · Programa de proteção e política

- [ ] **C2.1** [J+A] Política de Privacidade e Proteção de Dados (versão pública resumida e versão interna) alinhada aos princípios do art. 6º: finalidade, necessidade, transparência, segurança, não discriminação, responsabilização. *Evid.:* política aprovada · *Resp.:* C + ADV · *Quando:* AP
- [ ] **C2.2** [A] Registro das operações de tratamento (art. 37) por etapa: cadastro, parecer, banco, auditoria, cobrança. *Evid.:* planilha RoPA · *Resp.:* C · *Quando:* ADR
- [ ] **C2.3** [A] Relatório de impacto (RIPD, art. 38) para IA e decisão automatizada; revisar a cada mudança relevante. *Evid.:* RIPD · *Resp.:* C + D · *Quando:* AP
- [ ] **C2.4** [A] Política de retenção e descarte: por vaga, banco de candidatos, registros de acesso (Marco Civil, art. 15: 6 meses) e nota fiscal (prazo fiscal). Prazos definidos com advogado e contador. *Evid.:* tabela de retenção · *Resp.:* ADV + CTD + C · *Quando:* ADR
- [ ] **C2.5** [A] Segurança (art. 46): criptografia em trânsito e em repouso, acesso por perfil, backup e teste de segurança antes do piloto. *Evid.:* laudo do teste · *Resp.:* D · *Quando:* AP
- [ ] **C2.6** [A] Treinamento de LGPD para os quatro membros, o docente de TI e os prestadores. *Evid.:* lista de presença · *Resp.:* C · *Quando:* AP

## P3 · Três agentes de tratamento (controlador, operador, encarregado)

- [ ] **C3.1** [J+A] Matriz de papéis **por fluxo**: quem é controlador, operador ou co-controlador em cada etapa (cadastro, parecer, banco, auditoria); validar com o advogado e refletir no aviso. *Evid.:* matriz assinada pela equipe e revisada · *Resp.:* C + ADV · *Quando:* ADR
- [ ] **C3.2** [A] O aviso identifica o controlador e o canal do encarregado, e lista com quem os dados são compartilhados (empresa da vaga, provedor de IA, e-mail, nuvem, pagamento). *Evid.:* aviso · *Resp.:* G + ADV · *Quando:* AP
- [ ] **C3.3** [A] Nomear o encarregado (DPO externo, com 3 propostas) e publicar nome e e-mail (Res. CD/ANPD 18/2024). *Evid.:* contrato e página pública · *Resp.:* R + C · *Quando:* AP
- [ ] **C3.4** [A] Lista de suboperadores (IA, nuvem, e-mail, pagamento) com país, finalidade e mecanismo do art. 33 quando houver transferência internacional (Res. CD/ANPD 19/2024). *Evid.:* lista · *Resp.:* D · *Quando:* ADR
- [ ] **C3.5** [A] Canal de direitos do titular (art. 18) com protocolo, resposta em 15 dias e relatório mensal. *Evid.:* painel de pedidos · *Resp.:* C + D · *Quando:* AP

## P4 · Alinhamento com a ANPD

- [ ] **C4.1** [J+A] Plano de resposta a incidentes (papéis, árvore de decisão, modelos de comunicação ao titular e à ANPD); meta de 3 dias úteis (Res. CD/ANPD 15/2024); registro de todo incidente. *Evid.:* plano e registro · *Resp.:* C + D · *Quando:* AP
- [ ] **C4.2** [A] Simulação de incidente antes do piloto, com ata. *Evid.:* ata · *Resp.:* C + D · *Quando:* AP
- [ ] **C4.3** [A] Radar regulatório trimestral (resoluções e guias da ANPD, PL 2338/2023) com responsável nomeado. *Evid.:* relatório trimestral · *Resp.:* C · *Quando:* PP
- [ ] **C4.4** [A] Registro das comunicações com a ANPD e com titulares. *Evid.:* livro de registro · *Resp.:* C · *Quando:* AP
- [ ] **C4.5** [A] O aviso informa o direito de petição à ANPD (art. 18, § 1º). *Evid.:* aviso · *Resp.:* G · *Quando:* AP

## P5 · Anonimização e filtro

- [ ] **C5.1** [J+A] Especificação do filtro de currículo (campos removidos ou mascarados; padrões de CPF, RG, telefone, e-mail, nomes, foto) e conjunto de teste **sintético**; meta de remoção ≥ 99% (hipótese) antes do piloto. O advogado **se ofereceu para ajudar**: agendar. *Evid.:* especificação e relatório de teste · *Resp.:* D + ADV · *Quando:* ADR
- [ ] **C5.2** [A] Quatro níveis de proteção: original (guarda restrita), mascarado (telas), pseudonimizado (IA), agregado e anonimizado (métricas), com tabela de quem acessa cada nível. *Evid.:* tabela · *Resp.:* D + C · *Quando:* ADR
- [ ] **C5.3** [A] A IA recebe currículo cego com código interno; a chave de reidentificação fica separada, com acesso restrito e registrado. *Evid.:* desenho técnico · *Resp.:* D · *Quando:* ADR
- [ ] **C5.4** [A] Teste de reidentificação nas métricas e nos relatórios, com tamanho mínimo de grupo (ex.: 5, hipótese). *Evid.:* relatório de teste · *Resp.:* D · *Quando:* AP
- [ ] **C5.5** [J+A] Máscara padrão de exibição (CPF e telefone parciais) em telas de suporte e relatórios. *Evid.:* captura de tela · *Resp.:* D · *Quando:* AP
- [ ] **C5.6** [J+A] Alinhar a terminologia (mascaramento × pseudonimização × anonimização, arts. 12 e 13) com o advogado. *Evid.:* nota de alinhamento · *Resp.:* C + ADV · *Quando:* AP

## P6 · LAI (Lei de Acesso à Informação)

- [ ] **C6.1** [A] Classificar as informações internas do BARD RH em níveis (pública, interna, confidencial, restrita) por analogia à LAI, e definir quem acessa o quê. *Evid.:* política de classificação · *Resp.:* C · *Quando:* PP
- [ ] **C6.2** [A] Garantir que dado pessoal de candidato nunca seja tratado como informação pública (convivência LAI e LGPD; LAI, art. 31). *Evid.:* regra no aviso e no contrato · *Resp.:* ADV · *Quando:* AP
- [ ] **C6.3** [J] Preparar a resposta da banca sobre LAI (Anexo 2 do PROMPT, pergunta 10). *Evid.:* cartão de resposta · *Resp.:* G · *Quando:* AB
- [ ] **C6.4** [A] Declarar o escopo: no piloto, o BARD RH não atua em concurso público nem em seleção de órgão público. *Evid.:* termo de uso · *Resp.:* ADV · *Quando:* AP

## P7 · CLT, passivo trabalhista e falsa expectativa de emprego

- [ ] **C7.1** [J+A] Aviso fixo em candidatura, parecer e e-mails: "A plataforma apoia a seleção e não garante contratação. A decisão é da empresa." *Evid.:* capturas de tela · *Resp.:* G + D · *Quando:* AP
- [ ] **C7.2** [A] Status claros (recebida, em análise, parecer, decisão da empresa, encerrada) e meta de resposta em 5 dias úteis (já prevista no projeto). *Evid.:* fluxo de tela · *Resp.:* G · *Quando:* AP
- [ ] **C7.3** [J+A] "Filtro" de linguagem: revisar marketing, página de venda e redes; lista de expressões proibidas ("vaga garantida", "emprego rápido", "contratação certa"). *Evid.:* lista e revisão dos textos · *Resp.:* G + C · *Quando:* AB
- [ ] **C7.4** [A] Vaga encerrada ou preenchida avisa o candidato; vaga de banco de talentos vem identificada. *Evid.:* texto e fluxo · *Resp.:* G + D · *Quando:* AP
- [ ] **C7.5** [A] O candidato não paga para ser selecionado; planos pagos só para capacitação, com texto claro (validar com advogado). *Evid.:* texto dos planos · *Resp.:* G + ADV · *Quando:* AP
- [ ] **C7.6** [A] Guardar a trilha das comunicações como prova. *Evid.:* trilha · *Resp.:* D · *Quando:* AP

## P8 · Código Civil e responsabilidade civil

- [ ] **C8.1** [A] Termo de uso e política de privacidade claros, versionados, com aceite registrado. *Evid.:* versões e log de aceite · *Resp.:* ADV + D · *Quando:* AP
- [ ] **C8.2** [A] Canal de reclamação com protocolo e prazo (revisão em até 10 dias úteis, já prevista) e escalonamento. *Evid.:* fluxo · *Resp.:* C + D · *Quando:* AP
- [ ] **C8.3** [A] Plano de reparação: o que fazer em vazamento, erro da IA e reprovação indevida (corrigir, comunicar, reparar quando devido). *Evid.:* procedimento · *Resp.:* C + ADV · *Quando:* AP
- [ ] **C8.4** [A] Cotar seguro de responsabilidade civil e cibernético (fora do orçamento de infraestrutura já existente). *Evid.:* 3 cotações · *Resp.:* R · *Quando:* AP
- [ ] **C8.5** [A] Prova: trilha de auditoria imutável, logs, versões do termo e consentimentos. *Evid.:* amostra exportável · *Resp.:* D · *Quando:* AP
- [ ] **C8.6** [A] Planos pagos (Plus e Premium): CDC (arrependimento de 7 dias, cancelamento fácil, reembolso); validar antes de vender; pendências de 18+ e CRP. *Evid.:* parecer do advogado · *Resp.:* ADV + G · *Quando:* PP

## P9 · Tributos previdenciários e responsabilidade solidária

- [ ] **C9.1** [J+A] Texto na plataforma: "O contrato de trabalho ou de estágio é com a empresa; o BARD RH apoia a seleção." *Evid.:* captura de tela · *Resp.:* G + D · *Quando:* AP
- [ ] **C9.2** [J+A] O BARD RH não paga salário, não define horário, não dirige o trabalho e não cobra do candidato por colocação. *Evid.:* termo de uso · *Resp.:* ADV · *Quando:* AP
- [ ] **C9.3** [A] A vaga informa o regime (CLT, temporário, estágio, PJ) e orienta o candidato a tirar dúvidas trabalhistas com sindicato ou Ministério do Trabalho, sem aconselhar juridicamente. *Evid.:* texto da vaga · *Resp.:* G · *Quando:* AP
- [ ] **C9.4** [A] Em vaga temporária, a contratação é pela empresa tomadora ou por empresa de trabalho temporário registrada (Lei 6.019/1974), nunca pelo BARD RH. *Evid.:* texto e cláusula · *Resp.:* ADV · *Quando:* AP

---

*Minuta de trabalho, sem valor jurídico até revisão do advogado. Gerada a partir de orientação preliminar.*

**Pontos para o advogado decidir:** validação da especificação do filtro de currículo (C5.1); se a dispensa de DPO para pequeno porte se aplica (ligado a C3.3 e ao conteúdo técnico já existente); prazos definitivos de retenção (C2.4); formalização de parecer escrito sobre LAI, trabalhista, civil e previdenciário cobrindo todos os itens acima.
