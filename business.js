(function () {
  const b = window.BUSINESS || {};
  const $ = (id) => document.getElementById(id);
  const el = (tag, props = {}, children = []) => {
    const node = document.createElement(tag);
    Object.assign(node, props);
    children.forEach((c) => node.append(c));
    return node;
  };
  const card = (heading, text, extra = []) =>
    el("article", { className: "card" }, [el("h3", { textContent: heading }), el("p", { textContent: text }), ...extra]);

  document.title = b.name || "Business";
  $("brand").textContent = b.name || "";
  $("eyebrow").textContent = b.eyebrow || "";
  $("headline").textContent = b.headline || "";
  $("tagline").textContent = b.tagline || "";

  (b.niches || []).forEach((n) => $("niches").append(el("li", { textContent: n })));

  (b.work || []).forEach((w) => {
    const extra = [el("div", { className: "tags", textContent: w.category })];
    if (w.link) extra.push(el("p", {}, [el("a", { href: w.link, target: "_blank", rel: "noopener", textContent: "Visit site →" })]));
    $("work-list").append(card(w.title, w.description, extra));
  });

  (b.services || []).forEach((s) => $("services-list").append(card(`${s.icon} ${s.title}`, s.text)));
  (b.why || []).forEach((w) => $("why-list").append(card(w.title, w.text)));

  (b.steps || []).forEach((s, i) =>
    $("steps-list").append(
      el("li", {}, [
        el("span", { className: "step-num", textContent: String(i + 1).padStart(2, "0") }),
        el("strong", { textContent: s.title }),
        el("p", { textContent: s.text })
      ])
    )
  );

  // Enquiry form opens the visitor's email app — no backend, no stored credentials.
  $("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(e.target);
    const subject = encodeURIComponent(`Project enquiry from ${d.get("name")}`);
    const body = encodeURIComponent(
      `${d.get("message")}\n\nReply to: ${d.get("email")}${d.get("phone") ? `\nPhone: ${d.get("phone")}` : ""}`
    );
    window.location.href = `mailto:${b.email || ""}?subject=${subject}&body=${body}`;
  });

  const root = document.documentElement;
  try {
    const saved = localStorage.getItem("portfy-theme");
    if (saved) root.dataset.theme = saved;
  } catch (_) {}
  $("themeToggle").addEventListener("click", () => {
    const dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("portfy-theme", root.dataset.theme); } catch (_) {}
  });
})();
