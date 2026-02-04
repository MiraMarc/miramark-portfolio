(function () {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const channelUrl = "https://youtube.com/@miramarkmc";

  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- YouTube helpers ---
  function getYouTubeId(url) {
    try {
      const u = new URL(url);
      if (u.hostname.includes("youtu.be")) {
        const id = u.pathname.replace("/", "").trim();
        return id || null;
      }
      const v = u.searchParams.get("v");
      return v || null;
    } catch {
      return null;
    }
  }

  function youtubeEmbedHtml(videoUrl) {
    const id = getYouTubeId(videoUrl);
    if (!id) {
      return `<div style="padding:18px;"><p class="muted">Video link is not recognised.</p></div>`;
    }
    const src = `https://www.youtube.com/embed/${id}`;
    return `<iframe src="${src}" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }

  // -------------------------------------------------------------------
  // EDIT LATER: this projects list is now the ONLY place you need to edit
  // -------------------------------------------------------------------
  const projects = {
    // Not shown as a card (hero only), but still opens in the modal
    showreel: {
      displayInGrid: false,
      category: "film",
      title: "Showreel (selected highlights)",
      blurb: "A highlight set taken from adverts and film work.",
      tags: ["Highlights", "Editing", "Production"],
      summary: "A highlight set taken from adverts and film work (swap to a dedicated showreel anytime).",
      bullets: [
        "Selected finished pieces",
        "Clean pacing and structure",
        "Multiple deliverables across advert + film formats"
      ],
      videos: [
        { label: "Your night out at Sub Zero", url: "https://youtu.be/l4MAyHIS_gs?si=GRW9C2q8r0S2sRlY" },
        { label: "The Missing Piece", url: "https://www.youtube.com/watch?v=0Jr30cfVW3Q" },
        { label: "TUNE IN — A BFI Project", url: "https://youtu.be/iEwd1pJrOgI?si=p931yNjyZ-Bs5AiA" }
      ],
      links: [{ label: "YouTube channel", url: channelUrl }]
    },

    christmasAdverts: {
      displayInGrid: true,
      category: "advert",
      image: "assets/christmas.jpg",
      title: "Christmas adverts",
      blurb: "Seasonal promos: clear messaging, atmosphere, and structured edits.",
      tags: ["Advert", "Filmed", "Edited"],
      summary: "Seasonal promo work built around atmosphere and clear messaging.",
      bullets: [
        "Filming + editing (end-to-end)",
        "Structured edits designed to communicate quickly",
        "Exports suitable for online promotion"
      ],
      videos: [
        { label: "Christmas at the Castle", url: "https://youtu.be/ph1Idghelno?si=02Fo8vE5Md56h1am" },
        { label: "Christmas in Colchester", url: "https://youtu.be/kL9TTEg0-Pg?si=ajYyDsVrMT839Nos" }
      ],
      links: [{ label: "YouTube channel", url: channelUrl }]
    },

    nightclubAdverts: {
      displayInGrid: true,
      category: "advert",
      image: "assets/night-club.jpg",
      title: "Nightclub adverts (Sub Zero)",
      blurb: "A small campaign set: pace, energy, accessibility, and a clear “night out” journey.",
      tags: ["Advert", "Campaign", "Promo"],
      summary: "A multi-video campaign set: energy, clarity, accessibility, and a “journey of the night” concept.",
      bullets: [
        "Promo campaign set (multiple cuts)",
        "Rhythm-first editing with clear messaging",
        "Built to feel lively while staying readable"
      ],
      videos: [
        { label: "Your night out at Sub Zero", url: "https://youtu.be/l4MAyHIS_gs?si=GRW9C2q8r0S2sRlY" },
        { label: "Lively and accessible evenings at Sub Zero", url: "https://youtu.be/EJdFtGRbOOg?si=gnhYVDX5szIngdIZ" },
        { label: "Journey of your evening at Sub Zero", url: "https://youtu.be/t-_g2q1f7VY?si=_O-i3dsgStz3_0_T" }
      ],
      links: [{ label: "YouTube channel", url: channelUrl }]
    },

    youtubeEssays: {
      displayInGrid: true,
      category: "youtube",
      image: "assets/youtube.jpg",
      title: "YouTube essays",
      blurb: "Edited long-form analysis: structure, pacing, and clarity.",
      tags: ["YouTube", "Editing", "Long-form"],
      summary: "Edited long-form videos focused on structure, clarity, and pacing.",
      bullets: [
        "Long-form structure and rhythm",
        "Audio balancing and clean transitions",
        "Designed for viewer comprehension and retention"
      ],
      videos: [
        { label: "The gaming industry is finally changing for the better", url: "https://youtu.be/vq8aD3Y2ywQ?si=C_m34e1B8LqJh5nf" },
        { label: "An overanalysis of film adaptations", url: "https://youtu.be/nleM22TveVw?si=0VivASuPi-3D9VS3" },
        { label: "In defence of Shadow of the Erdtree", url: "https://youtu.be/l5XgVTsWJBs?si=5tuAH0Z8kN71z8Yq" }
      ],
      links: [{ label: "YouTube channel", url: channelUrl }]
    },

    shortFilms: {
      displayInGrid: true,
      category: "film",
      image: "assets/short-films.jpg",
      title: "Short films",
      blurb: "Completed film projects, including a BFI project.",
      tags: ["Film", "Story", "Post-production"],
      summary: "Completed film projects (including a BFI project).",
      bullets: [
        "Narrative structure and pacing",
        "Editing and finishing",
        "Project-based workflows"
      ],
      videos: [
        { label: "Down Under — Music Video Cover", url: "https://youtu.be/UTanMKpHaag?si=clIMQjXrBx6_ybWq" },
        { label: "TUNE IN — A BFI Project", url: "https://youtu.be/iEwd1pJrOgI?si=p931yNjyZ-Bs5AiA" },
        { label: "The Missing Piece", url: "https://youtu.be/0Jr30cfVW3Q?si=7M2MlxUupGyU7hDQ" }
      ],
      links: [{ label: "YouTube channel", url: channelUrl }]
    },

    demosAndTests: {
      displayInGrid: true,
      category: "film",
      image: "assets/demos.jpg",
      title: "Demos / technical tests",
      blurb: "Unfinished work, proof-of-concept scenes, and motion tests.",
      tags: ["Film", "Tests", "Proof"],
      summary: "Unfinished work, future project demos, proof-of-concepts, and motion tests.",
      bullets: [
        "Proof-of-concept scenes and demo cuts",
        "Technical motion tests (objects / text)",
        "Early-stage project iteration"
      ],
      videos: [
        { label: "The rising orange — demo 1", url: "https://youtu.be/bFYE7-IhstM?si=MZwHtDocXy6IxXLx" },
        { label: "The rising orange — demo 2", url: "https://youtu.be/stPME0jZME8?si=A68KWUYAkSdCV0Uj" },
        { label: "Orange therapy scene — demo 1", url: "https://youtu.be/rRlFaifRBkU?si=y2XAQWPkXK1sjnOO" },
        { label: "First person POV disappearing orange — demo 1", url: "https://youtu.be/6iuWmwI4Y9U?si=39pRnlRyGfaDB9-m" },
        { label: "Spinning objects / text test 1", url: "https://youtu.be/0jPyXMrYpTU?si=TsrmjE0ZYGy_vuDC" },
        { label: "Spinning objects / text test 2", url: "https://youtu.be/ZPewbJJ5xEQ?si=whWT3oIMzqk0ws59" },
        { label: "Spinning objects / text test 3", url: "https://youtu.be/h32l4t2CdnQ?si=3-U24ZWZgEcvdXyB" },
        { label: "Spinning objects / text test 4", url: "https://youtu.be/tUmZaEVwA8g?si=GLpTiXKe2Q4hBanu" },
        { label: "Spinning objects / text test 5", url: "https://youtu.be/1sCTJJoIPls?si=wIvRvVIGg4l_L6Hi" }
      ],
      links: [{ label: "YouTube channel", url: channelUrl }]
    },

    radio: {
      displayInGrid: true,
      category: "radio",
      image: "assets/radio.jpg",
      title: "Radio work",
      blurb: "Presenting and production. Add audio clips later if you want.",
      tags: ["Radio", "Audio", "Presenting"],
      summary: "Presenting and production.",
      bullets: [
        "Presenting and segment planning",
        "Audio editing and show packaging",
        "Timing, scripting, and on-air delivery"
      ],
      embedHtml: `
        <div style="padding:18px;">
          <p class="muted">
            FOR FUTURE REFERENCE addaudio clip later by placing a file in <code>assets/</code> and embedding it, for example:
          </p>
          <code>&lt;audio controls src="assets/radio-clip.mp3"&gt;&lt;/audio&gt;</code>
        </div>
      `,
      links: [
        { label: "RADIO email: nichetoknownlsr@gmail.com", url: "mailto:nichetoknownlsr@gmail.com" }
      ]
    },

    photoshop: {
      displayInGrid: true,
      category: "photoshop",
      image: "assets/photoshop.jpg",
      title: "Photoshop work",
      blurb: "Thumbnails, promotional graphics, and clean edits. Add JPEGs later.",
      tags: ["Photoshop", "Design", "Branding"],
      summary: "Design and image work (thumbnails, promo graphics, clean edits). Add a small gallery to assets/ when ready.",
      bullets: [
        "Thumbnails and promo graphics",
        "Composites and typography cleanup",
        "Consistent exports for platforms"
      ],
      embedHtml: `
        <div style="padding:18px;">
          <p class="muted">
            Add a small gallery later by dropping JPEGs into <code>assets/</code> and linking them in the project links.
          </p>
        </div>
      `,
      links: [
        { label: "BUSINESS email: mcmiracle1206@gmail.com", url: "mailto:mcmiracle1206@gmail.com" },
        { label: "YouTube channel", url: channelUrl }
      ]
    },
    linktree: {
  displayInGrid: true,
  category: "links",
  image: "assets/linktree.jpg",
  title: "Linktree",
  blurb: "All my public links in one place.",
  tags: ["Links", "Hub", "Social"],
  externalUrl: "https://linktr.ee/MiraMarc"
},

spotify: {
  displayInGrid: true,
  category: "links",
  image: "assets/spotify.jpg",
  title: "Spotify",
  blurb: "My Radio Show Niche To Known!",
  tags: ["Music", "Podcast", "Spotify"],
  summary: "Niche to Known Covers Niche Media that you need to Know!",
  bullets: [
    "Edited the original Broadcasts into neat podcast episodes",
    "Under 40 minutes, shaving 20 minutes from the original 1 hour show",
  ],
  embedHtml: `
    <iframe
      style="border-radius:12px"
      src="https://open.spotify.com/embed/show/35JWkqV3BSoqPAwK8ichZS"
      width="100%"
      height="420"
      frameborder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"></iframe>
  `,
  links: [
    { label: "Open on Spotify", url: "https://open.spotify.com/show/35JWkqV3BSoqPAwK8ichZS" }
  ]
},


  };

  // --- Auto-generate project cards ---
  const grid = document.getElementById("projects-grid");

  function makeCard(key, data) {
    const article = document.createElement("article");
    article.className = "card";
    article.setAttribute("data-category", data.category || "all");

    const media = document.createElement("div");
    media.className = "card-media";

    if (data.image) {
      const img = document.createElement("img");
      img.alt = `${data.title} thumbnail`;
      img.src = data.image;
      img.onerror = () => {
        img.style.display = "none";
        media.classList.add("no-image");
      };
      media.appendChild(img);
    } else {
      media.classList.add("no-image");
    }

    const body = document.createElement("div");
    body.className = "card-body";

    const h3 = document.createElement("h3");
    h3.textContent = data.title || "Project";

    const p = document.createElement("p");
    p.textContent = data.blurb || "";

    const tags = document.createElement("ul");
    tags.className = "tags";
    tags.setAttribute("aria-label", "Tags");

    (data.tags || []).forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      tags.appendChild(li);
    });

    const btn = document.createElement("button");
    btn.className = "btn btn-small";
    btn.type = "button";
    btn.textContent = "Open";
    btn.setAttribute("data-open-project", key);

    body.appendChild(h3);
    body.appendChild(p);
    body.appendChild(tags);
    body.appendChild(btn);

    article.appendChild(media);
    article.appendChild(body);

    return article;
  }

  function renderCards() {
    if (!grid) return;
    grid.innerHTML = "";

    Object.entries(projects).forEach(([key, data]) => {
      if (data.displayInGrid === false) return;
      grid.appendChild(makeCard(key, data));
    });
  }

  renderCards();

  // Work filters (after cards exist)
  const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));

  function setActiveFilter(btn) {
    filterButtons.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    filterButtons.forEach((b) => b.setAttribute("aria-selected", b === btn ? "true" : "false"));
  }

  function applyFilter(filter) {
    const cards = Array.from(document.querySelectorAll(".card"));
    cards.forEach((card) => {
      const cat = card.getAttribute("data-category");
      const show = filter === "all" || cat === filter;
      card.style.display = show ? "" : "none";
    });
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter") || "all";
      setActiveFilter(btn);
      applyFilter(filter);
    });
  });

  // Modal elements
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalSummary = document.getElementById("modal-summary");
  const modalEmbed = document.getElementById("modal-embed");
  const modalBullets = document.getElementById("modal-bullets");
  const modalLinks = document.getElementById("modal-links");

  function openModal(projectKey) {
    const data = projects[projectKey];
    if (!data || !modal) return;
  // If this project is just an external link, open it and stop.
  if (data.externalUrl) {
    window.open(data.externalUrl, "_blank", "noopener,noreferrer");
    return;
  }

    modalTitle.textContent = data.title || "Project";
    modalSummary.textContent = data.summary || "";

    // Bullets
    modalBullets.innerHTML = "";
    (data.bullets || []).forEach((b) => {
      const li = document.createElement("li");
      li.textContent = b;
      modalBullets.appendChild(li);
    });

    // Embed + links
    modalEmbed.innerHTML = "";
    modalLinks.innerHTML = "";

    const videos = Array.isArray(data.videos) ? data.videos : [];
    const extraLinks = Array.isArray(data.links) ? data.links : [];

    if (videos.length > 0) {
      modalEmbed.innerHTML = youtubeEmbedHtml(videos[0].url);

      videos.forEach((v, idx) => {
        const li = document.createElement("li");

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn btn-small";
        btn.style.justifyContent = "flex-start";
        btn.style.width = "100%";
        btn.textContent = v.label;

        btn.addEventListener("click", () => {
          modalEmbed.innerHTML = youtubeEmbedHtml(v.url);
          Array.from(modalLinks.querySelectorAll("button")).forEach((b) => b.removeAttribute("data-active"));
          btn.setAttribute("data-active", "true");
        });

        if (idx === 0) btn.setAttribute("data-active", "true");

        li.appendChild(btn);

        const a = document.createElement("a");
        a.href = v.url;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = "Open on YouTube";
        a.style.display = "inline-block";
        a.style.marginTop = "6px";
        li.appendChild(a);

        modalLinks.appendChild(li);
      });
    } else if (data.embedHtml) {
      modalEmbed.innerHTML = data.embedHtml;
    } else {
      modalEmbed.innerHTML = `<div style="padding:18px;"><p class="muted">No embed set for this section yet.</p></div>`;
    }

    extraLinks.forEach((l) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = l.label;
      a.href = l.url;
      if (!l.url.startsWith("mailto:")) {
        a.target = "_blank";
        a.rel = "noopener";
      }
      li.appendChild(a);
      modalLinks.appendChild(li);
    });

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    const closeBtn = modal.querySelector("[data-close-modal]");
    if (closeBtn) closeBtn.focus();
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Open modal (event delegation so it works with auto-generated cards)
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    const openBtn = target.closest("[data-open-project]");
    if (openBtn) {
      const key = openBtn.getAttribute("data-open-project");
      if (key) openModal(key);
    }
  });

  // Close actions
  document.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
})();
