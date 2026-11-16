/* Estratégia de visitas — página interna */
(function () {
  "use strict";
  var P = window.PLANO_INTERNO;
  var STEP_MIN = 7; // 5 min de visita + 2 de deslocamento
  var UN = { CEL: "Celestino", FAC: "Faccini" };
  var PER_ORDER = { "Manhã": 0, "Tarde": 1, "Noite": 2 };
  var KEY = "bardrh-visitas-v1";

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(t) { var d = document.createElement("div"); d.textContent = t == null ? "" : String(t); return d.innerHTML; }
  function fd(iso) { var p = iso.split("-"); return p[2] + "/" + p[1]; }
  function toast(m) { var t = $("#toast"); t.textContent = m; t.classList.add("show"); clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove("show"); }, 2200); }
  function hm(min) { var h = Math.floor(min / 60), m = min % 60; return (h ? h + " h " : "") + (m ? m + " min" : (h ? "" : "0 min")); }

  // marcações salvas (conveniência por aparelho; se o armazenamento falhar, segue sem salvar)
  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { saved = {}; }
  function persist() { try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (e) { } }

  var plan = P.plan.slice().sort(function (a, b) {
    return a.date.localeCompare(b.date) || (PER_ORDER[a.per] - PER_ORDER[b.per]) || a.unit.localeCompare(b.unit);
  });

  /* ---------- KPIs ---------- */
  var total = 0, minutes = 0, reach = 0, byUP = {}, byDay = {};
  plan.forEach(function (b) {
    var n = b.stops.length; total += n; minutes += n * STEP_MIN;
    var r = b.stops.reduce(function (s, x) { return s + (x.capacidade || 0); }, 0); reach += r;
    var k = b.unit + "|" + b.per; byUP[k] = byUP[k] || { unit: b.unit, per: b.per, n: 0, reach: 0 }; byUP[k].n += n; byUP[k].reach += r;
    byDay[b.date] = byDay[b.date] || { CEL: 0, FAC: 0 }; byDay[b.date][b.unit] += n;
  });
  var unicas = 0; plan.forEach(function (b) { b.stops.forEach(function (s) { if (s.unica) unicas++; }); });
  $("#kpis").innerHTML = [
    [total, "turmas únicas visitadas"],
    [Object.keys(byDay).length, "dias de visita"],
    [unicas, "turmas com dia único (não podem trocar)"],
    [hm(minutes), "de visita no total (7 min por sala)"]
  ].map(function (k) { return '<div class="col-6 col-lg-3"><div class="kpi"><b>' + esc(k[0]) + "</b><span>" + esc(k[1]) + "</span></div></div>"; }).join("");

  /* ---------- Tabelas de resumo ---------- */
  var up = Object.keys(byUP).map(function (k) { return byUP[k]; }).sort(function (a, b) { return b.reach - a.reach; });
  $("#tblPrio tbody").innerHTML = up.map(function (r) {
    return "<tr><td><span class='tag " + (r.unit === "CEL" ? "g" : "") + "'>" + UN[r.unit] + "</span> " + esc(r.per) + "</td><td class='text-end'>" + r.n + "</td><td class='text-end'>" + r.reach + "</td><td class='text-end'>" + hm(r.n * STEP_MIN) + "</td></tr>";
  }).join("");
  $("#tblDias tbody").innerHTML = Object.keys(byDay).sort().map(function (d) {
    var x = byDay[d]; return "<tr><td>" + esc(P.wd[d]) + ", " + fd(d) + "</td><td class='text-end'>" + (x.CEL + x.FAC) + "</td><td class='text-end'>" + x.CEL + "</td><td class='text-end'>" + x.FAC + "</td></tr>";
  }).join("");

  function phaseSum(dates) { var n = 0; dates.forEach(function (d) { if (byDay[d]) n += byDay[d].CEL + byDay[d].FAC; }); return n; }
  $("#faseA").textContent = phaseSum(["2026-11-17", "2026-11-18", "2026-11-19"]) + " turmas";
  $("#faseB").textContent = phaseSum(["2026-11-23", "2026-11-24"]) + " turmas";
  $("#faseC").textContent = phaseSum(["2026-11-25"]) + " turmas + reforço digital";

  /* ---------- Roteiros por dia ---------- */
  var days = Object.keys(byDay).sort();
  function idOf(b, s) { return [b.date, b.unit, b.per, s.turma, s.room].join("|"); }
  var acc = $("#accDias");
  acc.innerHTML = days.map(function (d, i) {
    var blocks = plan.filter(function (b) { return b.date === d; });
    var n = blocks.reduce(function (s, b) { return s + b.stops.length; }, 0);
    var body = blocks.map(function (b) {
      var rows = b.stops.map(function (s) {
        var id = idOf(b, s);
        return "<tr><td class='text-nowrap fw-bold text-green'>" + esc(s.hora) + "</td>" +
          "<td class='fw-bold text-uppercase'>" + esc(s.turma) + (s.unica ? " <span class='tag'>único dia</span>" : "") + "</td>" +
          "<td>" + esc(s.room) + "</td>" +
          "<td>" + (s.docente ? esc(s.docente) : "<span class='text-muted-emp'>a confirmar</span>") + "</td>" +
          "<td class='text-nowrap'>" + esc(s.aula) + "</td>" +
          "<td class='text-end'>" + (s.capacidade || "–") + "</td>" +
          "<td class='text-center no-print'><input class='check-visit' type='checkbox' data-id='" + esc(id) + "' aria-label='Visita feita: " + esc(s.turma) + "'" + (saved[id] ? " checked" : "") + "></td></tr>";
      }).join("");
      return "<div class='p-3 pb-1'><div class='d-flex align-items-center gap-2 mb-2'><span class='tag " + (b.unit === "CEL" ? "g" : "") + "'>" + UN[b.unit] + "</span><strong class='text-uppercase'>" + esc(b.per) + "</strong><span class='text-muted-emp small'>· janela sugerida a partir de " + esc(b.stops[0].hora) + " · " + b.stops.length + " sala(s)</span></div>" +
        "<div class='table-responsive'><table class='table table-emp table-striped mb-3'><thead><tr><th>Hora</th><th>Turma</th><th>Sala</th><th>Docente no mapa</th><th>Aula</th><th class='text-end'>Cap.</th><th class='text-center no-print'>Feito</th></tr></thead><tbody>" + rows + "</tbody></table></div></div>";
    }).join("");
    return "<div class='accordion-item'><h3 class='accordion-header'><button class='accordion-button " + (i ? "collapsed" : "") + "' type='button' data-bs-toggle='collapse' data-bs-target='#d" + i + "' aria-expanded='" + (i === 0) + "' aria-controls='d" + i + "'>" +
      esc(P.wd[d]) + ", " + fd(d) + "<span class='ms-3 text-muted-emp fw-bold' style='font-size:.8rem'>" + n + " turmas</span></button></h3>" +
      "<div id='d" + i + "' class='accordion-collapse collapse " + (i === 0 ? "show" : "") + "'><div class='accordion-body'>" + body + "</div></div></div>";
  }).join("");

  acc.addEventListener("change", function (e) {
    var t = e.target; if (!t.classList.contains("check-visit")) return;
    var id = t.getAttribute("data-id"); if (t.checked) saved[id] = 1; else delete saved[id]; persist();
  });
  $("#btnAbrirTodos").addEventListener("click", function () {
    $$("#accDias .accordion-collapse").forEach(function (c) { c.classList.add("show"); });
    $$("#accDias .accordion-button").forEach(function (b) { b.classList.remove("collapsed"); b.setAttribute("aria-expanded", "true"); });
  });
  $("#btnImprimir").addEventListener("click", function () { $("#btnAbrirTodos").click(); setTimeout(function () { window.print(); }, 150); });

  /* ---------- Eventos e EMED ---------- */
  var wdMap = P.wd;
  $("#tblEv tbody").innerHTML = P.events.slice().sort(function (a, b) { return a.date.localeCompare(b.date) || (PER_ORDER[a.per] - PER_ORDER[b.per]); }).map(function (e) {
    return "<tr><td>" + esc(wdMap[e.date]) + ", " + fd(e.date) + "</td><td>" + esc(e.per) + "</td><td>" + esc(e.room.replace(" - T", "")) + "</td><td>" + esc(e.nome) + "</td><td>" + esc(e.horario.replace(/H(\d\d)?/g, function (m, mm) { return "h" + (mm || ""); })) + "</td></tr>";
  }).join("");
  $("#tblEmed tbody").innerHTML = P.emed.map(function (e) { return "<tr><td>" + esc(e.room) + "</td><td>" + esc(e.turma) + "</td></tr>"; }).join("");

  /* ---------- Mensagem para docentes ---------- */
  var MSG = "Olá, [nome]! Tudo bem?\n\n" +
    "Aqui é o Leandro, docente do Senac Guarulhos. A equipe BARD RH está na final do Empreenda Senac e o Voto Popular vai até 25/11.\n\n" +
    "Posso passar na turma [TURMA] no dia [DATA], por volta das [HORA], por 5 minutos? Vou apresentar o projeto e mostrar o QR-Code para os alunos votarem pelo celular.\n\n" +
    "Se preferir, também mando o link para você divulgar no grupo da turma. Obrigado pelo apoio!";
  $("#msgDocente").textContent = MSG;
  $("#btnCopiaDoc").addEventListener("click", function () {
    function fb() { var ta = document.createElement("textarea"); ta.value = MSG; ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); toast("Mensagem copiada!"); } catch (e) { toast("Selecione o texto e copie manualmente."); } document.body.removeChild(ta); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(MSG).then(function () { toast("Mensagem copiada!"); }, fb); else fb();
  });
})();
