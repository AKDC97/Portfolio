(() => {
  "use strict";

  const CERTIFICATES = [
    {
      id: "cert-google-cybersecurity",
      issuer: "Google / Coursera",
      year: "2025",
      title: "Google Cybersecurity Professional Certificate",
      credentialId: "WE8TUIE7K2XA",
      scope: "Completed 9 courses covering cybersecurity foundations, risk management, network security, Linux, SQL, SIEM tools, Intrusion Detection Systems (IDS), and Python automation.",
      skills: ["Cybersecurity", "Linux & SQL", "SIEM & IDS", "Python"],
      suggestedPdf: "certificates/Coursera WE8TUIE7K2XA.pdf",
      pdfPath: "certificates/Coursera WE8TUIE7K2XA.pdf",
      isPlaceholder: false
    },
    {
      id: "cert-google-prompting",
      issuer: "Google / Coursera",
      year: "2025",
      title: "Google Prompting Essentials",
      credentialId: "VK4CA1B7HLYA",
      scope: "Completed 4 courses on designing effective prompts and applying advanced prompting techniques for everyday work tasks, data analysis, presentation building, and creative problem-solving.",
      skills: ["Prompt Engineering", "AI Workflows", "Data Analysis", "Generative AI"],
      suggestedPdf: "certificates/Coursera VK4CA1B7HLYA.pdf",
      pdfPath: "certificates/Coursera VK4CA1B7HLYA.pdf",
      isPlaceholder: false
    },
    {
      id: "cert-google-ai-essentials",
      issuer: "Google / Coursera",
      year: "2025",
      title: "Google AI Essentials",
      credentialId: "BV4WGKB327RJ",
      scope: "Completed 5 courses focused on practical AI fundamentals, maximizing productivity with AI tools, prompting strategies, and responsible AI usage across workflows.",
      skills: ["AI Fundamentals", "Productivity Tools", "Prompting", "Responsible AI"],
      suggestedPdf: "certificates/Coursera BV4WGKB327RJ.pdf",
      pdfPath: "certificates/Coursera BV4WGKB327RJ.pdf",
      isPlaceholder: false
    },
    {
      id: "cert-cvsu-semiconductor",
      issuer: "Cavite State University",
      year: "2026",
      title: "Semiconductor Industry Readiness Program: Critical Tools for Global Competitiveness",
      credentialId: "CvSU-SIRP-2026",
      scope: "Intense course covering SPC & Control Charts, Six Sigma & DMAICM, Global 8D, FMEA & Control Plan, DOE & ANOVA, case scenario analysis, and team-based problem solving.",
      skills: ["SPC & Control Charts", "Six Sigma & DMAICM", "FMEA", "DOE & ANOVA"],
      suggestedPdf: "certificates/CERTIFICATE OF PARTICIPATION - MAY 25-26. 2026.pdf",
      pdfPath: "certificates/CERTIFICATE OF PARTICIPATION - MAY 25-26. 2026.pdf",
      isPlaceholder: false
    },
    {
      id: "cert-psite-congress",
      issuer: "PSITE-NCR",
      year: "2026",
      title: "PSITE-Student Congress 2026: From Code to Confidence",
      credentialId: "69a4c77b365fb406a8cc5838",
      scope: "Attended and actively participated in the PSITE-NCR Student Congress 2026 (\"From Code to Confidence: Security and AI for the Next Generation of Computing Students\") via Zoom.",
      skills: ["Security & AI", "Computing Congress", "PSITE-NCR"],
      suggestedPdf: "certificates/Aeon_Kenshin_F__Dela_Cruz_69a4c77b365fb406a8cc5838.pdf",
      pdfPath: "certificates/Aeon_Kenshin_F__Dela_Cruz_69a4c77b365fb406a8cc5838.pdf",
      isPlaceholder: false
    },
    {
      id: "cert-avalanche-team1",
      issuer: "Avalanche / Team1",
      year: "2026",
      title: "Team1 Avalanche University Connect @ CvSU Bacoor",
      credentialId: "AVAX-TEAM1-2026",
      scope: "Participated in the Team1 Avalanche University Connect at Cavite State University–Bacoor Campus, exploring Web3 development, Avalanche ecosystem, and community building.",
      skills: ["Web3", "Avalanche", "Blockchain Community", "OKX Wallet"],
      suggestedPdf: "certificates/JPEG image-4B1C-8017-74-0.pdf",
      pdfPath: "certificates/JPEG image-4B1C-8017-74-0.pdf",
      isPlaceholder: false
    }
  ];

  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let toastTimer = null;

  function showToast(message) {
    const toastEl = document.getElementById("toast");
    const msgEl = document.getElementById("toast-message");
    if (!toastEl || !msgEl) return;
    msgEl.textContent = message;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.hidden = true;
    }, 2600);
  }

  async function copyText(value, label) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const temp = document.createElement("textarea");
        temp.value = value;
        temp.setAttribute("readonly", "");
        temp.style.position = "fixed";
        temp.style.opacity = "0";
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
      }
      showToast(label || `${value} copied to clipboard`);
    } catch {
      showToast(value);
    }
  }

  function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    const labelEl = document.getElementById("theme-toggle-label");
    const iconEl = document.getElementById("theme-toggle-icon");
    const metaTheme = document.getElementById("meta-theme-color");

    const sunSvg =
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
    const moonSvg =
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    function applyTheme(theme, persist) {
      const resolved = theme === "light" ? "light" : "dark";
      const isLight = resolved === "light";
      document.documentElement.dataset.theme = resolved;
      if (metaTheme) {
        metaTheme.setAttribute("content", isLight ? "#f5f5f7" : "#08080a");
      }
      if (toggleBtn) {
        toggleBtn.setAttribute("aria-pressed", String(isLight));
        toggleBtn.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
      }
      if (labelEl) {
        labelEl.textContent = isLight ? "Light" : "Dark";
      }
      if (iconEl) {
        iconEl.innerHTML = isLight ? sunSvg : moonSvg;
      }
      if (persist) {
        try {
          localStorage.setItem("portfolio-theme", resolved);
        } catch {}
      }
    }

    let initial = document.documentElement.dataset.theme || "dark";
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "light" || saved === "dark") {
        initial = saved;
      }
    } catch {}
    applyTheme(initial, false);

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const current = document.documentElement.dataset.theme === "light" ? "light" : "dark";
        applyTheme(current === "light" ? "dark" : "light", true);
      });
    }
  }

  function updateManilaClock() {
    const clockEl = document.getElementById("local-clock");
    if (!clockEl) return;
    try {
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Manila",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }).format(new Date());
      clockEl.textContent = `Manila · ${formatted} GMT+8`;
    } catch {
      clockEl.textContent = "Manila · GMT+8";
    }
  }

  function initNavigationAndScroll() {
    const header = document.getElementById("site-header");
    const track = document.getElementById("segmented-track");
    const indicator = document.getElementById("segmented-indicator");
    const navItems = Array.from(document.querySelectorAll(".segmented-btn"));
    const sections = Array.from(document.querySelectorAll(".portfolio-section"));
    const progressBar = document.getElementById("scroll-progress-bar");
    const scrollTopBtn = document.getElementById("scroll-top-btn");

    let activeSection = "home";

    function moveIndicator(targetId) {
      if (!track || !indicator) return;
      const activeEl = navItems.find((item) => item.dataset.scrollTarget === targetId);
      if (!activeEl) return;
      track.style.setProperty("--pill-w", `${activeEl.offsetWidth}px`);
      track.style.setProperty("--pill-x", `${activeEl.offsetLeft}px`);
    }

    function setActiveSection(targetId) {
      activeSection = targetId;
      navItems.forEach((item) => {
        const isCurrent = item.dataset.scrollTarget === targetId;
        item.classList.toggle("is-active", isCurrent);
        if (isCurrent) {
          item.setAttribute("aria-current", "page");
        } else {
          item.removeAttribute("aria-current");
        }
      });
      moveIndicator(targetId);
    }

    document.querySelectorAll("[data-scroll-target]").forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        const targetId = trigger.dataset.scrollTarget;
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;
        event.preventDefault();
        setActiveSection(targetId);
        targetEl.scrollIntoView({ behavior: reducedMotionQuery.matches ? "auto" : "smooth", block: "start" });
        window.history.replaceState(null, "", `#${targetId}`);
      });
    });

    if ("IntersectionObserver" in window && sections.length) {
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: "-32% 0px -52% 0px", threshold: 0 }
      );
      sections.forEach((section) => sectionObserver.observe(section));
    }

    const revealTargets = Array.from(document.querySelectorAll(".reveal"));
    if (reducedMotionQuery.matches || !("IntersectionObserver" in window)) {
      revealTargets.forEach((el) => el.classList.add("is-visible"));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
      );
      revealTargets.forEach((el, idx) => {
        el.style.transitionDelay = `${Math.min(idx * 40, 200)}ms`;
        revealObserver.observe(el);
      });
    }

    function updateScrollEffects() {
      const scrollY = window.scrollY;
      if (header) {
        header.classList.toggle("is-scrolled", scrollY > 18);
      }
      if (progressBar) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;
        progressBar.style.transform = `scaleX(${ratio})`;
      }
    }

    window.addEventListener("scroll", updateScrollEffects, { passive: true });
    window.addEventListener("resize", () => moveIndicator(activeSection), { passive: true });

    if (scrollTopBtn) {
      scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: reducedMotionQuery.matches ? "auto" : "smooth" });
      });
    }

    document.addEventListener("click", (event) => {
      const copyBtn = event.target.closest("[data-copy-email]");
      if (copyBtn) {
        copyText(copyBtn.dataset.copyEmail);
      }
    });

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => moveIndicator(activeSection));
    } else {
      moveIndicator(activeSection);
    }
    updateScrollEffects();
  }

  function renderOfflineFallback() {
    const workRootEl = document.getElementById("work-react-root");
    if (workRootEl) {
      workRootEl.innerHTML = `
        <div class="certificates-block">
          <div class="subblock-bar">
            <span class="mono-index">Verified Certificates</span>
            <span class="mono-index">${CERTIFICATES.length} Entries</span>
          </div>
          <div class="cert-grid">
            ${CERTIFICATES.map(
              (c) => `
              <div class="cert-card${c.isPlaceholder ? " cert-card--placeholder" : ""}">
                <div class="cert-top">
                  <span class="cert-issuer">${c.issuer}</span>
                  <span class="cert-year">${c.year}</span>
                </div>
                <span class="cert-title">${c.title}</span>
                <div class="cert-pdf-row">
                  <span class="cert-pdf-badge${c.pdfPath ? " is-ready" : ""}">${c.pdfPath ? "PDF Linked" : "PDF Placeholder"}</span>
                </div>
                <div class="cert-bottom">
                  <span class="cert-id">${c.credentialId}</span>
                </div>
              </div>
            `
            ).join("")}
          </div>
        </div>
      `;
    }
  }

  function mountReactApps() {
    if (!window.React || !window.ReactDOM) {
      renderOfflineFallback();
      return;
    }
    const h = window.React.createElement;
    const { useState, useEffect, useRef, useMemo } = window.React;

    function trapFocus(containerEl, event) {
      if (event.key !== "Tab" || !containerEl) return;
      const focusables = Array.from(
        containerEl.querySelectorAll('button:not([disabled]), a[href], input:not([type="file"]), textarea, [tabindex]:not([tabindex="-1"])')
      ).filter((el) => el.offsetParent !== null);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    function CertificateModal({ cert, localPdf, onAttachPdf, onRemovePdf, onClose }) {
      const closeRef = useRef(null);
      const panelRef = useRef(null);
      const fileInputRef = useRef(null);

      const activePdfUrl = (localPdf && localPdf.url) || cert.pdfPath || "";

      useEffect(() => {
        const prevFocused = document.activeElement;
        document.body.classList.add("modal-open");
        if (closeRef.current) closeRef.current.focus();
        function onKey(event) {
          if (event.key === "Escape") onClose();
          else if (event.key === "Tab") trapFocus(panelRef.current, event);
        }
        document.addEventListener("keydown", onKey);
        return () => {
          document.body.classList.remove("modal-open");
          document.removeEventListener("keydown", onKey);
          if (prevFocused && typeof prevFocused.focus === "function") {
            prevFocused.focus();
          }
        };
      }, [onClose]);

      function handleFileChange(event) {
        const file = event.target.files && event.target.files[0];
        if (!file) return;
        if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
          showToast("Please select a .pdf file");
          event.target.value = "";
          return;
        }
        onAttachPdf(cert.id, file);
        event.target.value = "";
      }

      return h(
        "div",
        {
          className: "modal-backdrop",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "cert-modal-title",
          onClick: (e) => {
            if (e.target === e.currentTarget) onClose();
          }
        },
        h(
          "div",
          { ref: panelRef, className: "modal-panel modal-panel--cert" },
          h(
            "div",
            { className: "modal-header" },
            h(
              "div",
              { className: "modal-header-meta" },
              h("span", { className: "mono-badge" }, cert.issuer),
              h("span", { className: "modal-path" }, cert.credentialId)
            ),
            h("button", { ref: closeRef, type: "button", className: "icon-btn", "aria-label": "Close credential", onClick: onClose }, "\u00d7")
          ),
          h(
            "div",
            { className: "modal-scroll-body" },
            h(
              "div",
              null,
              h("span", { className: "mono-index" }, cert.isPlaceholder ? "Certificate PDF Slot" : `Issued ${cert.year}`),
              h("h2", { id: "cert-modal-title", className: "modal-title" }, cert.title),
              h("p", { className: "modal-summary" }, cert.scope)
            ),
            h(
              "div",
              { className: "cert-pdf-section" },
              h(
                "div",
                { className: "cert-pdf-header" },
                h("span", { className: "mono-index" }, "Certificate PDF Document")
              ),
              h("input", {
                ref: fileInputRef,
                type: "file",
                accept: ".pdf,application/pdf",
                className: "cert-file-input",
                onChange: handleFileChange
              }),
              activePdfUrl
                ? h(
                    "div",
                    { className: "cert-pdf-section" },
                    h("iframe", {
                      className: "cert-pdf-frame",
                      src: activePdfUrl,
                      title: `${cert.title} PDF`
                    }),
                    h(
                      "div",
                      { className: "cert-pdf-actions" },
                      h(
                        "a",
                        {
                          href: activePdfUrl,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "pill-btn pill-btn--solid"
                        },
                        "Open PDF"
                      ),
                      h(
                        "div",
                        { className: "cert-pdf-row" },
                        h(
                          "button",
                          {
                            type: "button",
                            className: "pill-btn pill-btn--glass",
                            onClick: () => fileInputRef.current && fileInputRef.current.click()
                          },
                          "Replace PDF"
                        ),
                        localPdf &&
                          h(
                            "button",
                            {
                              type: "button",
                              className: "pill-btn pill-btn--glass",
                              onClick: () => onRemovePdf(cert.id)
                            },
                            "Clear"
                          )
                      )
                    )
                  )
                : h(
                    "div",
                    { className: "cert-pdf-placeholder" },
                    h("span", { className: "cert-pdf-badge" }, "PDF Placeholder"),
                    h(
                      "p",
                      null,
                      `Place your certificate PDF at ${cert.suggestedPdf} and set pdfPath in scripts/main.js for deployment, or attach a local .pdf file now to preview.`
                    ),
                    h(
                      "button",
                      {
                        type: "button",
                        className: "pill-btn pill-btn--glass",
                        onClick: () => fileInputRef.current && fileInputRef.current.click()
                      },
                      "Attach Local PDF"
                    )
                  )
            ),
            h(
              "div",
              { className: "modal-deliverables" },
              h("span", { className: "mono-index" }, "Verified Competencies"),
              h(
                "div",
                { className: "deliverable-pills" },
                cert.skills.map((skill) => h("span", { key: skill, className: "tag-pill" }, skill))
              )
            ),
            h(
              "div",
              { className: "cert-modal-footer" },
              h("span", { className: "mono-index" }, `ID: ${cert.credentialId}`),
              h(
                "button",
                {
                  type: "button",
                  className: "pill-btn pill-btn--glass",
                  onClick: () => copyText(cert.credentialId, `Credential ${cert.credentialId} copied`)
                },
                "Copy Credential ID"
              )
            )
          )
        )
      );
    }

    function CertificatesApp() {
      const [modalCertId, setModalCertId] = useState(null);
      const [localPdfMap, setLocalPdfMap] = useState({});
      const objectUrlsRef = useRef([]);

      useEffect(() => {
        return () => {
          objectUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
        };
      }, []);

      const activeModalCert = useMemo(() => {
        return CERTIFICATES.find((c) => c.id === modalCertId) || null;
      }, [modalCertId]);

      function handleAttachPdf(certId, file) {
        const nextUrl = URL.createObjectURL(file);
        objectUrlsRef.current.push(nextUrl);
        setLocalPdfMap((prev) => {
          if (prev[certId] && prev[certId].url) {
            URL.revokeObjectURL(prev[certId].url);
          }
          return {
            ...prev,
            [certId]: { url: nextUrl, name: file.name }
          };
        });
        showToast(`${file.name} attached for preview`);
      }

      function handleRemovePdf(certId) {
        setLocalPdfMap((prev) => {
          if (prev[certId] && prev[certId].url) {
            URL.revokeObjectURL(prev[certId].url);
          }
          const next = { ...prev };
          delete next[certId];
          return next;
        });
      }

      return h(
        window.React.Fragment,
        null,
        h(
          "div",
          { className: "certificates-block" },
          h(
            "div",
            { className: "subblock-bar" },
            h("span", { className: "mono-index" }, "Verified Certificates"),
            h("span", { className: "mono-index" }, `${CERTIFICATES.length} Entries`)
          ),
          h(
            "div",
            { className: "cert-grid" },
            CERTIFICATES.map((cert) => {
              const localPdf = localPdfMap[cert.id];
              const hasPdf = Boolean((localPdf && localPdf.url) || cert.pdfPath);
              return h(
                "button",
                {
                  key: cert.id,
                  type: "button",
                  className: `cert-card${cert.isPlaceholder ? " cert-card--placeholder" : ""}`,
                  onClick: () => setModalCertId(cert.id)
                },
                h(
                  "div",
                  { className: "cert-top" },
                  h("span", { className: "cert-issuer" }, cert.issuer),
                  h("span", { className: "cert-year" }, cert.year)
                ),
                h("span", { className: "cert-title" }, cert.title),
                h(
                  "div",
                  { className: "cert-pdf-row" },
                  h("span", { className: `cert-pdf-badge${hasPdf ? " is-ready" : ""}` }, hasPdf ? "PDF Ready" : "PDF Placeholder")
                ),
                h(
                  "div",
                  { className: "cert-bottom" },
                  h("span", { className: "cert-id" }, cert.credentialId),
                  h("span", { className: "cert-verify" }, hasPdf ? "View PDF ->" : "Attach PDF ->")
                )
              );
            })
          )
        ),
        activeModalCert &&
          h(CertificateModal, {
            cert: activeModalCert,
            localPdf: localPdfMap[activeModalCert.id] || null,
            onAttachPdf: handleAttachPdf,
            onRemovePdf: handleRemovePdf,
            onClose: () => setModalCertId(null)
          })
      );
    }

    const workRootEl = document.getElementById("work-react-root");
    if (workRootEl) {
      window.ReactDOM.createRoot(workRootEl).render(h(CertificatesApp));
    }
  }

  function init() {
    initThemeToggle();
    initNavigationAndScroll();
    mountReactApps();
    updateManilaClock();
    setInterval(updateManilaClock, 15000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
