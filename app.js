(function () {
  const p = window.PROFILE || {};
  const $ = (id) => document.getElementById(id);
  const el = (tag, props = {}, children = []) => {
    const node = document.createElement(tag);
    Object.assign(node, props);
    children.forEach((c) => node.append(c));
    return node;
  };

  document.title = p.name ? `${p.name} · Portfolio` : "Portfolio";
  $("brand").textContent = p.name || "";
  $("name").textContent = p.name || "";
  $("role").textContent = p.role || "";
  $("tagline").textContent = p.tagline || "";
  $("about-text").textContent = p.about || "";

  const resume = $("resumeLink");
  if (p.resumeUrl) resume.href = p.resumeUrl;
  else resume.remove();

  (p.skills || []).forEach((s) => $("skills-list").append(el("li", { textContent: s })));

  (p.projects || []).forEach((proj) => {
    const card = el("article", { className: "card" }, [
      el("h3", { textContent: proj.title }),
      el("p", { textContent: proj.description }),
      el("div", { className: "tags", textContent: (proj.tags || []).join(" · ") })
    ]);
    if (proj.link) {
      card.append(el("p", {}, [el("a", { href: proj.link, target: "_blank", rel: "noopener", textContent: "View project →" })]));
    }
    $("projects-list").append(card);
  });

  (p.experience || []).forEach((job) => {
    $("experience-list").append(
      el("li", {}, [
        el("strong", { textContent: `${job.title} · ${job.company}` }),
        el("div", { className: "when", textContent: job.when }),
        el("p", { textContent: job.summary })
      ])
    );
  });

  (p.links || []).forEach((l) =>
    $("social-links").append(el("li", {}, [el("a", { href: l.url, target: "_blank", rel: "noopener", textContent: l.label })]))
  );

  // Contact form opens the visitor's email app — no backend needed.
  $("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\nReply to: ${data.get("email")}`);
    window.location.href = `mailto:${p.email || ""}?subject=${subject}&body=${body}`;
  });

  // Light/dark toggle, remembered per visitor.
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
