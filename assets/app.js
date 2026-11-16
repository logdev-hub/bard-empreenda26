/* Apoie o BARD RH — comportamento da página de sala */
(function () {
  "use strict";
  var VOTE_URL = "https://empreenda.digito1.com.br/VotoPopular/Voto/2660";
  var TZ = "America/Sao_Paulo";
  var PLANO = window.PLANO_PUBLICO || { days: [], unidades: {} };
  var UNIT_NAME = { CEL: "Celestino", FAC: "Faccini" };
  var PER_ORDER = { "Manhã": 0, "Tarde": 1, "Noite": 2 };
  var WD_ABBR = { "Terça": "Ter", "Quarta": "Qua", "Quinta": "Qui", "Segunda": "Seg", "Sexta": "Sex", "Sábado": "Sáb", "Domingo": "Dom" };

  var state = { date: null, unit: "all", per: "all" };

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(t) { var d = document.createElement("div"); d.textContent = t == null ? "" : String(t); return d.innerHTML; }
  function norm(t) { return String(t || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim(); }
  function fmtDate(iso) { var p = iso.split("-"); return p[2] + "/" + p[1]; }

  // Data de hoje em Brasília (AAAA-MM-DD), sem depender do fuso do aparelho.
  function todayISO() {
    try {
      var parts = new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
      return parts; // en-CA => 2026-11-16
    } catch (e) {
      var d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
    }
  }

  function toast(msg) {
    var t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }

  /* ---------- Contagem regressiva ---------- */
  function countdown() {
    var end = new Date("2026-11-25T23:59:59-03:00").getTime();
    var start = new Date("2026-11-16T00:00:00-03:00").getTime();
    function tick() {
      var now = Date.now();
      if (now < start) { $("#cdLabel").textContent = "A votação abre em 16/11"; return; }
      var diff = end - now;
      if (diff <= 0) {
        $("#cdLabel").textContent = "A votação foi encerrada. Obrigado a todos!";
        $("#countdown").style.display = "none"; return;
      }
      var d = Math.floor(diff / 864e5), h = Math.floor(diff % 864e5 / 36e5), m = Math.floor(diff % 36e5 / 6e4);
      $("#cdD").textContent = d; $("#cdH").textContent = String(h).padStart(2, "0"); $("#cdM").textContent = String(m).padStart(2, "0");
    }
    tick(); setInterval(tick, 30000);
  }

  /* ---------- Calendário ---------- */
  var DAYS_ALL = []; // inclui 20, 21 e 22 como "sem visita"
  function buildDays() {
    var map = {}; PLANO.days.forEach(function (d) { map[d.date] = d; });
    var seq = ["2026-11-17", "2026-11-18", "2026-11-19", "2026-11-20", "2026-11-21", "2026-11-22", "2026-11-23", "2026-11-24", "2026-11-25"];
    var wd = ["Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo", "Segunda", "Terça", "Quarta"];
    DAYS_ALL = seq.map(function (iso, i) { return map[iso] ? Object.assign({ off: false }, map[iso]) : { date: iso, wd: wd[i], off: true, blocks: [], events: [] }; });
  }

  function renderStrip() {
    var strip = $("#dayStrip"), today = todayISO();
    strip.innerHTML = DAYS_ALL.map(function (d) {
      var dd = d.date.slice(8), isToday = d.date === today;
      var cls = "day-btn" + (d.off ? " off" : "") + (isToday ? " is-today" : "");
      var label = d.wd + ", " + fmtDate(d.date) + (d.off ? ", sem visitas" : "") + (isToday ? ", hoje" : "");
      return '<button type="button" class="' + cls + '" data-date="' + d.date + '" aria-pressed="' + (state.date === d.date) + '" aria-label="' + esc(label) + '"' + (d.off ? ' aria-disabled="true"' : "") + '>' +
        '<span class="wd">' + esc(WD_ABBR[d.wd] || d.wd) + '</span><span class="dd">' + dd + '</span><span class="mm">' + (d.off ? "sem visita" : (isToday ? "hoje" : "nov")) + '</span></button>';
    }).join("");
    $$(".day-btn", strip).forEach(function (b) {
      b.addEventListener("click", function () {
        if (b.classList.contains("off")) { toast("Sem visitas nos dias 20, 21 e 22"); return; }
        state.date = b.getAttribute("data-date"); renderStrip(); renderDay();
      });
    });
  }

  function renderDay() {
    var day = DAYS_ALL.filter(function (d) { return d.date === state.date; })[0];
    if (!day) return;
    $("#dayTitle").textContent = day.wd + ", " + fmtDate(day.date);

    // Pontos fixos (eventos da Semana de Empreendedorismo etc.)
    var evs = (day.events || []).filter(function (e) { return state.per === "all" || e.per === state.per; });
    $("#dayEvents").innerHTML = evs.length ? '<div class="event-box mb-4"><strong class="text-green text-uppercase" style="letter-spacing:.08em">Ponto de votação ao vivo</strong><div class="text-muted-emp mt-1">' +
      evs.map(function (e) { return esc(e.nome) + " · " + esc(e.room.replace(" - T", "")) + " · " + esc(e.horario); }).join("<br>") + "</div></div>" : "";

    var blocks = (day.blocks || []).filter(function (b) {
      return (state.unit === "all" || b.unit === state.unit) && (state.per === "all" || b.per === state.per);
    }).sort(function (a, b) { return (PER_ORDER[a.per] - PER_ORDER[b.per]) || a.unit.localeCompare(b.unit); });

    var host = $("#dayBlocks");
    if (!blocks.length) {
      host.innerHTML = '<div class="col-12"><div class="empty-state">Nenhuma visita neste filtro. Escolha outro período ou unidade, ou use o QR-Code acima para votar agora.</div></div>';
      return;
    }
    host.innerHTML = blocks.map(function (b) {
      var stops = b.stops.map(function (s) {
        return '<div class="stop"><div class="t">' + esc(s.hora) + '</div><div><div class="tr">' + esc(s.turma) + '</div><div class="rm">' + esc(s.room) + "</div></div></div>";
      }).join("");
      return '<div class="col-md-6 col-xl-4"><section class="block" aria-label="' + esc(b.per + " · " + UNIT_NAME[b.unit]) + '">' +
        '<div class="block-head"><span class="per">' + esc(b.per) + '</span><span class="unit ' + (b.unit === "FAC" ? "fac" : "") + '">' + esc(UNIT_NAME[b.unit]) + "</span></div>" + stops + "</section></div>";
    }).join("");
  }

  function bindFilters() {
    function seg(id, key) {
      $$("#" + id + " .btn-seg").forEach(function (b) {
        b.addEventListener("click", function () {
          $$("#" + id + " .btn-seg").forEach(function (x) { x.classList.remove("active"); });
          b.classList.add("active"); state[key] = b.getAttribute("data-v"); renderDay();
        });
      });
    }
    seg("fUnit", "unit"); seg("fPer", "per");
  }

  /* ---------- Busca de turma ---------- */
  function bindSearch() {
    var input = $("#busca"), out = $("#buscaRes");
    input.addEventListener("input", function () {
      var q = norm(input.value);
      if (q.length < 2) { out.innerHTML = ""; return; }
      var hits = [];
      PLANO.days.forEach(function (d) {
        d.blocks.forEach(function (b) {
          b.stops.forEach(function (s) {
            if (norm(s.turma).indexOf(q) > -1 || norm(s.room).indexOf(q) > -1) hits.push({ d: d, b: b, s: s });
          });
        });
      });
      if (!hits.length) {
        out.innerHTML = '<div class="text-muted-emp">Nenhuma visita encontrada para “' + esc(input.value) + '”. Escaneie o QR-Code acima e vote por conta própria.</div>';
        return;
      }
      hits = hits.slice(0, 12);
      out.innerHTML = hits.map(function (h) {
        return '<div class="find-hit"><div><strong class="text-uppercase">' + esc(h.s.turma) + '</strong><div class="rm text-muted-emp small">' + esc(h.s.room) + " · " + esc(UNIT_NAME[h.b.unit]) + '</div></div>' +
          '<div class="text-end"><span class="text-green fw-bold">' + esc(h.d.wd) + ", " + fmtDate(h.d.date) + '</span><div class="small text-muted-emp">' + esc(h.b.per) + " · por volta das " + esc(h.s.hora) + "</div></div></div>";
      }).join("");
    });
  }

  /* ---------- Mensagem de repasse ---------- */
  var MSG = "Oi! Preciso de 1 minuto seu 🙏\n\n" +
    "A equipe BARD RH, de estudantes do Senac Guarulhos, está na final do Empreenda Senac e a votação popular vai até 25/11.\n\n" +
    "Criamos uma plataforma para que nenhum candidato fique sem resposta depois de um processo seletivo. Dá para votar direto pelo celular:\n" +
    VOTE_URL + "\n\n" +
    "Se puder, vote e mande para mais 3 pessoas. Obrigado pelo apoio! 💚";

  function copy(text, okMsg) {
    function fallback() {
      var ta = document.createElement("textarea"); ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); toast(okMsg); } catch (e) { toast("Não consegui copiar. Selecione o texto manualmente."); } document.body.removeChild(ta);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(function () { toast(okMsg); }, fallback); } else { fallback(); }
  }

  function bindKit() {
    $("#msgZap").textContent = MSG;
    $("#btnZap").href = "https://wa.me/?text=" + encodeURIComponent(MSG);
    $("#btnCopiarMsg").addEventListener("click", function () { copy(MSG, "Mensagem copiada!"); });
    $("#btnCopiarLink").addEventListener("click", function () { copy(VOTE_URL, "Link copiado!"); });
    var share = $("#btnShare");
    if (navigator.share) {
      share.addEventListener("click", function () { navigator.share({ title: "Vote no BARD RH", text: MSG.split("\n\n")[1], url: VOTE_URL }).catch(function () { }); });
    } else { share.style.display = "none"; }
  }

  /* ---------- Modo projeção ---------- */
  function bindProjection() {
    var box = $("#projecao"), qr = $("#qrProj"), src = $("#qrHero");
    function open() {
      qr.innerHTML = src.innerHTML; box.classList.add("on"); document.body.style.overflow = "hidden";
      var el = document.documentElement; if (el.requestFullscreen) { el.requestFullscreen().catch(function () { }); }
      $("#btnFechaProj").focus();
    }
    function close() {
      box.classList.remove("on"); document.body.style.overflow = "";
      if (document.fullscreenElement && document.exitFullscreen) { document.exitFullscreen().catch(function () { }); }
    }
    $("#btnProjecao").addEventListener("click", open);
    $("#btnProjecaoNav").addEventListener("click", open);
    $("#btnFechaProj").addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && box.classList.contains("on")) close();
      var tag = (e.target && e.target.tagName) || "";
      if ((e.key === "p" || e.key === "P") && !/INPUT|TEXTAREA/.test(tag) && !e.ctrlKey && !e.metaKey) { box.classList.contains("on") ? close() : open(); }
    });
    document.addEventListener("fullscreenchange", function () {
      if (!document.fullscreenElement && box.classList.contains("on")) { box.classList.remove("on"); document.body.style.overflow = ""; }
    });
  }

  /* ---------- Início ---------- */
  function init() {
    countdown(); buildDays(); bindFilters(); bindSearch(); bindKit(); bindProjection();
    var today = todayISO();
    var avail = DAYS_ALL.filter(function (d) { return !d.off; });
    var pick = avail.filter(function (d) { return d.date === today; })[0]
      || avail.filter(function (d) { return d.date >= today; })[0]
      || avail[avail.length - 1];
    state.date = pick ? pick.date : null;
    renderStrip(); renderDay();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
