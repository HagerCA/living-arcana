(function () {
  const A = window.ARCANA;
  const T = A.archetypes;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const img = (file) => `cards/${file}.jpg`;
  const houseOf = (id) => A.houses.find((h) => h.id === T[id].house);
  const short = (id) => T[id].short || T[id].name;

  function card(id, opts = {}) {
    const a = T[id];
    const cls = ["tcard", opts.size || "", opts.reversed ? "reversed" : ""].join(" ");
    return `<button class="${cls}" data-arch="${id}" aria-label="Open ${esc(a.name)}">
      ${a.proposed && opts.badge !== false ? `<span class="badge">proposed</span>` : ""}
      <span class="frame"><img src="${img(opts.file || a.card.file)}" alt="" loading="lazy"></span>
      <span class="cap">
        ${opts.noTitle ? "" : `<span class="ttl">${esc(a.card.title)}</span>`}
        <span class="nm">${esc(opts.label || a.name)}</span>
        ${opts.essence ? `<span class="ess">${esc(a.essence)}</span>` : ""}
      </span>
    </button>`;
  }

  // ---------- hero fan ----------
  const fanCards = ["fool", "magician", "high-priestess", "hermit", "world"];
  $("fan").innerHTML = fanCards.map((f, i) => {
    const r = (i - 2) * 9;
    const x = (i - 2) * 70;
    return `<img src="${img(f)}" alt="" style="--r:${r}deg; left: calc(50% - 75px + ${x}px)">`;
  }).join("");

  // ---------- ladder ----------
  $("ladderGrid").innerHTML = A.ladder.map((l) =>
    `<div class="rung"><div class="n">${l.n}</div><h3>${l.name}</h3><p>${esc(l.text)}</p></div>`).join("");

  // ---------- houses ----------
  $("houseList").innerHTML = A.houses.map((h) => `
    <div class="house">
      <div class="house-head"><span class="hn">${h.numeral}</span><h3>${h.name}</h3><span class="verb">${h.verb}</span></div>
      <p>${esc(h.intro)}</p>
      <div class="deck">${h.members.map((m) => card(m, { essence: true })).join("")}</div>
    </div>`).join("");
  $("distinctions").innerHTML = A.distinctions.map((d) => `<p>${d}</p>`).join("");

  // ---------- paths (Christopher, and Pixie when present) ----------
  const PATHS = { c: { list: A.path, now: A.christopher }, p: { list: A.pixiePath, now: A.pixieNow } };

  function renderPath(key, elId) {
    const P = PATHS[key];
    if (!P.list || !$(elId)) return;
    $(elId).innerHTML = P.list.map((s, i) => `
      <div class="station">
        <div class="cardcol"><button class="scard" data-path="${key}" data-i="${i}" aria-label="Read the ${esc(A.cards[s.card].name)} card">
          <img src="${img(s.card)}" alt="" loading="lazy"><span class="scard-hint">read the card</span></button></div>
        <div>
          <div class="when">${esc(s.when)}</div>
          <h3>${esc(s.title)}</h3>
          <div class="tags">${s.tags.map((t, k) => s.arch && s.arch[k]
            ? `<button class="tag chip" data-arch="${s.arch[k]}">${esc(t)}</button>`
            : `<span class="tag">${esc(t)}</span>`).join("")}</div>
          ${s.quote ? `<blockquote>“${esc(s.quote)}”${s.quoteBy ? `<cite>· ${esc(s.quoteBy)}</cite>` : ""}</blockquote>` : ""}
          <p>${esc(s.text)}</p>
        </div>
      </div>`).join("");
  }

  function renderNow(N, ids) {
    if (!N || !$(ids.spread)) return;
    $(ids.spread).innerHTML = `
      <div class="pos"><div class="label">Where ${N.he} stands</div>${card(N.stand.id, { badge: false })}
        <h4>${esc(T[N.stand.id].name)}</h4><div class="lvl">${esc(N.stand.level)}</div><p>${esc(N.stand.text)}</p></div>
      <div class="pos"><div class="label">What crosses ${N.him}</div>${card(N.crossing.id, { reversed: true, badge: false })}
        <h4>${esc(N.crossing.pole)}</h4><div class="lvl">${esc(N.crossing.sub)}</div><p>${esc(N.crossing.text)}</p></div>
      <div class="pos"><div class="label">Where ${N.he}'s going</div>${card(N.going.id, { badge: false, file: N.going.file })}
        <h4>${esc(N.going.title)}</h4><div class="lvl">${esc(N.going.level)}</div><p>${esc(N.going.text)}</p></div>`;
    $(ids.carried).innerHTML = `<h4>Carried forward from the road</h4><div class="row">${N.carried.map((c) =>
      `<div class="item">${card(c.id, { size: "sm", noTitle: true, badge: false })}<small>${esc(c.note)}</small></div>`).join("")}</div>`;
    $(ids.note).textContent = N.note;
  }

  renderPath("c", "pathList");
  renderNow(A.christopher, { spread: "nowSpread", carried: "carried", note: "priestessNote" });
  renderPath("p", "pixiePathList");
  renderNow(A.pixieNow, { spread: "pixieNowSpread", carried: "pixieCarried", note: "pixiePairNote" });

  // ---------- pixie ----------
  const P = A.pixie;
  if (P && $("pixieBlock")) $("pixieBlock").innerHTML = `
    <div class="pair">${card(P.primary, { badge: false })}${card(P.beside, { badge: false })}</div>
    <div>
      <ul>${P.said.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
      <p class="read">${esc(P.read)}</p>
      <p class="hold">${esc(P.hold)}</p>
    </div>`;

  // ---------- circle ----------
  if (A.circle && $("circleList")) $("circleList").innerHTML = A.circle.map((p) => `
    <div class="person">
      <div class="cards">${card(p.primary, { badge: false, noTitle: true })}${card(p.secondary, { size: "sm", badge: false, noTitle: true })}</div>
      <div>
        <h3>${esc(p.name)} ${p.aka ? `<small>· ${esc(p.aka)}</small>` : ""}</h3>
        <div class="role">${esc(p.role)}</div>
        <div class="meta">
          <span class="tag">Leads · ${esc(short(p.primary))}</span>
          <span class="tag">Beside · ${esc(short(p.secondary))}</span>
          <span class="tag">${esc(p.level)}</span>
          <span class="tag">Calling · ${esc(short(p.calling))}</span>
        </div>
        <dl>
          <dt>Why this card</dt><dd>${esc(p.why)}</dd>
          <dt>What crosses him</dt><dd>${esc(p.crossing)}</dd>
          <dt>Where he's going</dt><dd>${esc(p.toward)}</dd>
        </dl>
      </div>
    </div>`).join("");

  // ---------- dialog ----------
  const dlg = $("dlg");
  function show() { if (!dlg.open) dlg.showModal(); dlg.scrollTop = 0; dlg.querySelector(".close").addEventListener("click", () => dlg.close()); }

  function openArch(id, back) {
    const a = T[id], h = houseOf(id);
    const backBtn = back ? `<button class="dlg-back" data-path="${back.path}" data-i="${back.i}">← back to ${esc(A.cards[PATHS[back.path].list[back.i].card].name)}</button>` : "";
    dlg.innerHTML = `<div class="dlg" style="position:relative">
      <button class="close" aria-label="Close">×</button>${backBtn}
      <div class="art"><img src="${img(a.card.file)}" alt="${esc(a.card.title)}">
        <div class="ttl">${esc(a.card.title)}</div><div class="why">${esc(a.cardWhy)}</div></div>
      <div>
        <div class="house-tag">House ${h.numeral} · ${h.name}${a.proposed ? " · proposed by SAGE" : ""}</div>
        <h2>${esc(a.name)}</h2>
        <div class="essence">${esc(a.essence)}</div>
        <h5>The gift</h5><p>${esc(a.gift)}</p>
        <h5>The distinction</h5><p>${esc(a.distinction)}</p>
        <h5>The ladder</h5>
        <div class="lad">
          <div><b>I · Seed</b><strong>${esc(a.seed.name)}</strong><span>${esc(a.seed.text)}</span></div>
          <div class="sh"><b>II · Active shadow</b><strong>${esc(a.active.name)}</strong><span>${esc(a.active.text)}</span></div>
          <div class="sh"><b>II · Passive shadow</b><strong>${esc(a.passive.name)}</strong><span>${esc(a.passive.text)}</span></div>
          <div><b>III to V · Practice</b><strong>To grow toward it</strong><span>${esc(a.practice)}</span></div>
          <div class="mt"><b>IV · Mature form</b><strong>${esc(a.mature.name)}</strong><span>${esc(a.mature.text)}</span></div>
        </div>
        <h5>You'll know them by</h5><p>${esc(a.knowBy)}</p>
        ${a.source ? `<div class="src">Structure from ${esc(a.source)}, <i>King, Warrior, Magician, Lover</i>.</div>` : ""}
      </div></div>`;
    show();
  }

  // a station card: why it was drawn there, what the card is, what it means for this person
  function openStation(key, i) {
    const P = PATHS[key], s = P.list[i], c = A.cards[s.card];
    const chips = (s.arch || []).map((id) => `<button class="chip big" data-arch="${id}" data-from-path="${key}" data-from-i="${i}">${esc(T[id].name)}<small>${esc(T[id].essence)}</small></button>`).join("");
    const nav = (d) => { const j = i + d; return j >= 0 && j < P.list.length ? `<button class="dlg-step" data-path="${key}" data-i="${j}">${d < 0 ? "← " : ""}${esc(P.list[j].title)}${d > 0 ? " →" : ""}</button>` : "<span></span>"; };
    dlg.innerHTML = `<div class="dlg" style="position:relative">
      <button class="close" aria-label="Close">×</button>
      <div class="art"><img src="${img(s.card)}" alt="${esc(c.name)}">
        <div class="ttl">${c.num.includes("·") ? esc(c.name) : esc(c.num) + " · " + esc(c.name)}</div></div>
      <div>
        <div class="house-tag">${esc(P.now.who)}'s Path · ${esc(s.when)}</div>
        <h2>${esc(s.title)}</h2>
        <div class="essence">${esc(s.why)}</div>
        <h5>The card itself</h5><p>${esc(c.image)}</p>
        <div class="ur">
          <div><b>Upright</b><span>${esc(c.upright)}</span></div>
          <div class="rv"><b>Reversed</b><span>${esc(c.reversed)}</span></div>
        </div>
        <h5>The teaching</h5><p>${esc(c.teaching)}</p>
        <h5>What it means for ${esc(P.now.who)}</h5><p class="means">${esc(s.means)}</p>
        ${chips ? `<h5>The archetypes in play</h5><div class="chips">${chips}</div>` : ""}
        <div class="dlg-nav">${nav(-1)}${nav(1)}</div>
      </div></div>`;
    show();
  }

  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });

  document.addEventListener("click", (e) => {
    const st = e.target.closest(".scard, .dlg-step, .dlg-back");
    if (st) { openStation(st.dataset.path, +st.dataset.i); return; }
    const ch = e.target.closest(".chip");
    if (ch) { openArch(ch.dataset.arch, ch.dataset.fromPath ? { path: ch.dataset.fromPath, i: +ch.dataset.fromI } : null); return; }
    const b = e.target.closest(".tcard");
    // the Reading replaces its own buttons on click, so a detached card belongs to it too
    if (!b || !b.isConnected || b.closest("#readingBox")) return;
    openArch(b.dataset.arch);
  });

  // ---------- the reading ----------
  const box = $("readingBox");
  const max = {};
  A.quiz.forEach((q) => {
    Object.keys(T).forEach((id) => {
      const best = Math.max(0, ...q.a.map(([, w]) => w[id] || 0));
      max[id] = (max[id] || 0) + best;
    });
  });
  let st;
  function reset() { st = { name: "", i: 0, scores: {}, picks: [], present: null, runners: [], calling: null, level: null }; }

  function renderStart() {
    reset();
    box.innerHTML = `
      <div class="step-label">Before the cards</div>
      <h3>Who is the reading for?</h3>
      <input class="namefield" id="rname" placeholder="your name" autocomplete="off">
      <p class="intro-text">Answer from the gut, not from who you'd like to be. Hesitation is a no. There's a separate step at the end for where you want to go.</p>
      <div class="center"><button class="btn" id="rbegin">Shuffle the deck</button></div>`;
    $("rbegin").onclick = () => { st.name = $("rname").value.trim(); renderQ(); };
    $("rname").onkeydown = (e) => { if (e.key === "Enter") $("rbegin").click(); };
  }

  function renderQ() {
    const q = A.quiz[st.i];
    box.innerHTML = `
      <div class="step-label">Where you stand · ${st.i + 1} of ${A.quiz.length}</div>
      <div class="progress"><i style="width:${(st.i / A.quiz.length) * 100}%"></i></div>
      <h3>${esc(q.q)}</h3>
      <div class="opts">${q.a.map(([t], k) => `<button class="opt" data-k="${k}">${esc(t)}</button>`).join("")}</div>
      ${st.i > 0 ? `<button class="back-link" id="rback">← back one</button>` : ""}`;
    box.querySelectorAll(".opt").forEach((b) => b.onclick = () => {
      st.picks[st.i] = +b.dataset.k;
      st.i++;
      st.i < A.quiz.length ? renderQ() : finishQs();
    });
    const back = $("rback");
    if (back) back.onclick = () => { st.i--; renderQ(); };
  }

  function finishQs() {
    const s = {};
    st.picks.forEach((k, qi) => {
      const w = A.quiz[qi].a[k][1];
      Object.entries(w).forEach(([id, v]) => s[id] = (s[id] || 0) + v);
    });
    const ranked = Object.keys(T)
      .map((id) => ({ id, v: (s[id] || 0) / max[id], raw: s[id] || 0 }))
      .sort((a, b) => b.v - a.v || b.raw - a.raw);
    st.present = ranked[0].id;
    st.runners = ranked.slice(1, 3).map((r) => r.id);
    renderCalling();
  }

  function renderCalling() {
    box.innerHTML = `
      <div class="step-label">Where you're going</div>
      <div class="progress"><i style="width:100%"></i></div>
      <h3>Without thinking: which card do you want to become?</h3>
      <p class="intro-text">Not the one you are. The one that pulls.</p>
      <div class="picker">${Object.keys(T).map((id) => card(id, { badge: false, noTitle: true, label: short(id) })).join("")}</div>`;
    box.querySelectorAll(".tcard").forEach((b) => b.onclick = () => { st.calling = b.dataset.arch; renderLevel(); });
  }

  function levelOptions(a) {
    return [
      { n: "I", name: "Seed", pole: "active", t: `Honestly, it's mostly a draw for me: I'm attracted to it, I use the language, I haven't really lived it yet.` },
      { n: "II", name: "Shadow · active", pole: "active", t: `${a.active.name}: ${a.active.text}` },
      { n: "II", name: "Shadow · passive", pole: "passive", t: `${a.passive.name}: ${a.passive.text}` },
      { n: "III", name: "Apprentice", pole: "passive", t: `I touch ${a.mature.name} on good days, then lose it under pressure.` },
      { n: "IV", name: "Embodied", pole: "passive", t: `${a.mature.name} is simply who I am most days, without effort.` },
      { n: "V", name: "Initiator", pole: "passive", t: `People around me wake up into ${a.mature.name}. I pass it on.` }
    ];
  }

  function renderLevel() {
    const a = T[st.present];
    const opts = levelOptions(a);
    box.innerHTML = `
      <div class="step-label">How deep</div>
      <div class="progress"><i style="width:100%"></i></div>
      <h3>Your leading card is ${esc(a.name)}.<br>Which of these has been most true lately?</h3>
      <div class="opts">${opts.map((o, k) => `<button class="opt" data-k="${k}">${esc(o.t)}</button>`).join("")}</div>
      <button class="back-link" id="rback">← choose a different calling</button>`;
    box.querySelectorAll(".opt").forEach((b) => b.onclick = () => { st.level = opts[+b.dataset.k]; renderResult(); });
    $("rback").onclick = renderCalling;
  }

  function renderResult() {
    const a = T[st.present], c = T[st.calling], L = st.level;
    const pole = a[L.pole];
    const same = st.present === st.calling;
    const who = st.name ? `${esc(st.name)}'s Reading` : "Your Reading";
    const ladderText = A.ladder.find((l) => l.n === L.n).text;
    const bridge = same
      ? `Your calling is the card you already hold. The road isn't sideways, it's down: deeper into ${esc(a.name)}. ${esc(a.practice)}`
      : `From ${esc(a.name)} toward ${esc(c.name)}. What you already carry: ${esc(a.gift)} Where to begin: ${esc(c.practice)}`;
    box.innerHTML = `
      <div class="step-label">The spread</div>
      <h3>${who}</h3>
      <div class="result-spread">
        <div class="rpos" id="rp0"><div class="label">Where you stand</div>
          <div class="flip"><div class="inner"><div class="back"></div><div class="face"><img src="${img(a.card.file)}" alt=""></div></div></div>
          <div class="txt"><h4>${esc(a.name)}</h4><div class="lvl">${L.n} · ${esc(L.name)}</div><p>${esc(ladderText)}</p></div></div>
        <div class="rpos" id="rp1"><div class="label">What crosses you</div>
          <div class="flip rev"><div class="inner"><div class="back"></div><div class="face"><img src="${img(a.card.file)}" alt=""></div></div></div>
          <div class="txt"><h4>${esc(pole.name)}</h4><div class="lvl">${esc(a.name)}, reversed</div><p>${esc(pole.text)}</p></div></div>
        <div class="rpos" id="rp2"><div class="label">Where you're going</div>
          <div class="flip"><div class="inner"><div class="back"></div><div class="face"><img src="${img(c.card.file)}" alt=""></div></div></div>
          <div class="txt"><h4>${esc(c.name)}</h4><div class="lvl">${esc(c.mature.name)}</div><p>${esc(c.mature.text)}</p></div></div>
      </div>
      <div class="bridge">${bridge}</div>
      <div class="also">Also strong in you: ${st.runners.map((r) => esc(T[r].name)).join(" and ")}.</div>
      <div class="actions">
        <button class="btn" id="rcopy">Copy this reading</button>
        <button class="btn ghost" id="ragain">Draw again</button>
      </div>
      <div id="copyArea"></div>`;
    [0, 1, 2].forEach((k) => setTimeout(() => {
      const el = $("rp" + k);
      if (!el) return;
      el.classList.add("shown");
      el.querySelector(".flip").classList.add("shown");
    }, 350 + k * 650));
    $("ragain").onclick = () => { renderStart(); box.scrollIntoView({ behavior: "smooth", block: "start" }); };
    $("rcopy").onclick = () => {
      const text = [
        `${st.name ? st.name + "'s" : "My"} Living Arcana reading`,
        ``,
        `Where I stand: ${a.name} (${a.card.title}), level ${L.n} ${L.name}.`,
        `What crosses me: ${pole.name}. ${pole.text}`,
        `Where I'm going: ${c.name} (${c.card.title}). ${c.mature.name}: ${c.mature.text}`,
        ``,
        same ? `The road: deeper into ${a.name}. ${a.practice}` : `The bridge: ${c.practice}`,
        `Also strong: ${st.runners.map((r) => T[r].name).join(" and ")}.`
      ].join("\n");
      const done = () => { $("rcopy").textContent = "Copied ✦"; };
      const fallback = () => {
        $("copyArea").innerHTML = `<textarea class="copybox" readonly></textarea>`;
        const ta = $("copyArea").querySelector("textarea");
        ta.value = text; ta.focus(); ta.select();
        try { document.execCommand("copy") && done(); } catch (e) { /* the box stays visible to copy by hand */ }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback);
      else fallback();
    };
  }

  renderStart();
})();
