const defaultConfig = {
        hero_title: "QEE",
        hero_tagline: "Masa Depan Inovasi Digital",
        background_title: "Mengapa QEE Ada",
        benefits_title: "Mengapa Memilih QEE",
        contact_title: "Hubungi Kami",
        contact_email: "contact@qee.com",
        footer_text: "© 2025 QEE. Hak cipta dilindungi.",
        background_color: "#111827",
        text_color: "#ffffff",
        primary_action_color: "#06b6d4",
        secondary_action_color: "#8b5cf6",
        surface_color: "#1f2937",
        benefits_show: true,
        /* font_family: "Oxanium", */
        font_size: 16,
      };

      async function onConfigChange(config) {
        const heroTitle = config.hero_title || defaultConfig.hero_title;
        const contactEmail =
          config.contact_email || defaultConfig.contact_email;
        const footerText = config.footer_text || defaultConfig.footer_text;

        const backgroundColor =
          config.background_color || defaultConfig.background_color;
        const textColor = config.text_color || defaultConfig.text_color;
        const primaryActionColor =
          config.primary_action_color || defaultConfig.primary_action_color;
        const secondaryActionColor =
          config.secondary_action_color || defaultConfig.secondary_action_color;
        const surfaceColor =
          config.surface_color || defaultConfig.surface_color;

        const fontFamily = config.font_family || defaultConfig.font_family;
        const fontSize = config.font_size || defaultConfig.font_size;

        // Update text content
        const heroTitleEl = document.getElementById("hero-title");
        const navLogoEl = document.getElementById("nav-logo");
        const contactButtonEl = document.getElementById("contact-button");
        const footerTextEl = document.getElementById("footer-text");

        if (heroTitleEl) heroTitleEl.textContent = heroTitle;
        if (navLogoEl) navLogoEl.textContent = heroTitle;
        if (footerTextEl) footerTextEl.textContent = footerText;

        // Update colors
        document.body.style.backgroundColor = backgroundColor;
        document.body.style.color = textColor;

        const primaryButtons = document.querySelectorAll(
          'a[href="#background"]'
        );
        primaryButtons.forEach((btn) => {
          btn.style.background = `linear-gradient(to right, ${primaryActionColor}, ${secondaryActionColor})`;
        });

        const glassDarkElements = document.querySelectorAll(".glass-dark");
        glassDarkElements.forEach((el) => {
          el.style.backgroundColor = surfaceColor + "80";
        });

        // Update fonts
        const baseFontStack = "Arial, sans-serif";
        document.body.style.fontFamily = `${fontFamily}, ${baseFontStack}`;

        // Scale font sizes with mobile optimization
        const isMobile = window.innerWidth < 768;
        const mobileMultiplier = isMobile ? 1 : 1;
        const baseFontSize = isMobile ? 16 : fontSize;

        if (heroTitleEl) heroTitleEl.style.fontSize = `${baseFontSize * 3}px`; // 48px di mobile (turun dari 64px)
        document.querySelectorAll("h2").forEach((h2) => {
          h2.style.fontSize = `${baseFontSize * 1.75}px`; // 28px di mobile
        });
        document.querySelectorAll("h3").forEach((h3) => {
          h3.style.fontSize = `${baseFontSize * 1.25}px`; // 20px di mobile
        });
        document.querySelectorAll("h4").forEach((h4) => {
          h4.style.fontSize = `${baseFontSize * 1.1}px`; // 17.6px di mobile
        });
        document.querySelectorAll("p").forEach((p) => {
          p.style.fontSize = `${baseFontSize}px`; // 16px di mobile
        });
        document.querySelectorAll("a").forEach((a) => {
          a.style.fontSize = `${baseFontSize}px`;
        });
        document.querySelectorAll("button").forEach((btn) => {
          btn.style.fontSize = `${baseFontSize}px`;
        });
        document.querySelectorAll("li").forEach((li) => {
          li.style.fontSize = `${baseFontSize}px`;
        });
      }

      function mapToCapabilities(config) {
        return {
          recolorables: [
            {
              get: () =>
                config.background_color || defaultConfig.background_color,
              set: (value) => {
                if (window.elementSdk && window.elementSdk.config) {
                  window.elementSdk.config.background_color = value;
                  window.elementSdk.setConfig({ background_color: value });
                }
              },
            },
            {
              get: () => config.surface_color || defaultConfig.surface_color,
              set: (value) => {
                if (window.elementSdk && window.elementSdk.config) {
                  window.elementSdk.config.surface_color = value;
                  window.elementSdk.setConfig({ surface_color: value });
                }
              },
            },
            {
              get: () => config.text_color || defaultConfig.text_color,
              set: (value) => {
                if (window.elementSdk && window.elementSdk.config) {
                  window.elementSdk.config.text_color = value;
                  window.elementSdk.setConfig({ text_color: value });
                }
              },
            },
            {
              get: () =>
                config.primary_action_color ||
                defaultConfig.primary_action_color,
              set: (value) => {
                if (window.elementSdk && window.elementSdk.config) {
                  window.elementSdk.config.primary_action_color = value;
                  window.elementSdk.setConfig({ primary_action_color: value });
                }
              },
            },
            {
              get: () =>
                config.secondary_action_color ||
                defaultConfig.secondary_action_color,
              set: (value) => {
                if (window.elementSdk && window.elementSdk.config) {
                  window.elementSdk.config.secondary_action_color = value;
                  window.elementSdk.setConfig({
                    secondary_action_color: value,
                  });
                }
              },
            },
          ],
          borderables: [],
          fontEditable: {
            get: () => config.font_family || defaultConfig.font_family,
            set: (value) => {
              if (window.elementSdk && window.elementSdk.config) {
                window.elementSdk.config.font_family = value;
                window.elementSdk.setConfig({ font_family: value });
              }
            },
          },
          fontSizeable: {
            get: () => config.font_size || defaultConfig.font_size,
            set: (value) => {
              if (window.elementSdk && window.elementSdk.config) {
                window.elementSdk.config.font_size = value;
                window.elementSdk.setConfig({ font_size: value });
              }
            },
          },
        };
      }

      function mapToEditPanelValues(config) {
        return new Map([
          ["hero_title", config.hero_title || defaultConfig.hero_title],
          ["hero_tagline", config.hero_tagline || defaultConfig.hero_tagline],
          [
            "background_title",
            config.background_title || defaultConfig.background_title,
          ],
          [
            "benefits_title",
            config.benefits_title || defaultConfig.benefits_title,
          ],
          [
            "contact_title",
            config.contact_title || defaultConfig.contact_title,
          ],
          [
            "contact_email",
            config.contact_email || defaultConfig.contact_email,
          ],
          ["footer_text", config.footer_text || defaultConfig.footer_text],
        ]);
      }

      // Initialize Element SDK
      if (window.elementSdk) {
        window.elementSdk.init({
          defaultConfig,
          onConfigChange,
          mapToCapabilities,
          mapToEditPanelValues,
        });
      }

      // Language Toggle
      let currentLang = "id";
      const langToggle = document.getElementById("lang-toggle");
      const langIdSpan = document.getElementById("lang-id");
      const langEnSpan = document.getElementById("lang-en");

      const savedLang = localStorage.getItem("qee-language");
      if (savedLang) {
        currentLang = savedLang;
      }

      updateLanguageDisplay();
      applyLanguage(currentLang);

      langToggle.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "id" : "en";
        updateLanguageDisplay();
        applyLanguage(currentLang);
        localStorage.setItem("qee-language", currentLang);
      });

      function updateLanguageDisplay() {
        if (currentLang === "id") {
          langIdSpan.classList.remove("hidden");
          langEnSpan.classList.add("hidden");
        } else {
          langIdSpan.classList.add("hidden");
          langEnSpan.classList.remove("hidden");
        }
      }

      function applyLanguage(lang) {
        const elements = document.querySelectorAll(
          "[data-lang-en][data-lang-id]"
        );
        elements.forEach((el) => {
          const enText = el.getAttribute("data-lang-en");
          const idText = el.getAttribute("data-lang-id");

          if (lang === "id") {
            el.textContent = idText;
          } else {
            el.textContent = enText;
          }
        });

        updatePlaceholders();
      }

      function updatePlaceholders() {
        const inputs = document.querySelectorAll(
          "[data-lang-en-placeholder][data-lang-id-placeholder]"
        );
        inputs.forEach((input) => {
          const enPlaceholder = input.getAttribute("data-lang-en-placeholder");
          const idPlaceholder = input.getAttribute("data-lang-id-placeholder");

          if (currentLang === "id") {
            input.placeholder = idPlaceholder;
          } else {
            input.placeholder = enPlaceholder;
          }
        });
      }

      // Particles generation
      function createParticles() {
        const container = document.getElementById("particles");
        if (!container) return;

        const colors = ["#06b6d4", "#8b5cf6", "#ec4899", "#3b82f6"];

        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 15 : 30;

        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement("div");
          particle.className = "particle";
          particle.style.width = Math.random() * 5 + 2 + "px";
          particle.style.height = particle.style.width;
          particle.style.left = Math.random() * 100 + "%";
          particle.style.top = Math.random() * 100 + "%";
          particle.style.background =
            colors[Math.floor(Math.random() * colors.length)];
          particle.style.animationDuration = Math.random() * 10 + 15 + "s";
          particle.style.animationDelay = Math.random() * 5 + "s";
          container.appendChild(particle);
        }
      }

      // Mobile menu toggle
      const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
      const mobileMenu = document.getElementById("mobile-menu");
      const hamburgerIcon = document.getElementById("hamburger-icon");
      const closeIcon = document.getElementById("close-icon");

      mobileMenuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        hamburgerIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
      });

      const mobileMenuLinks = mobileMenu.querySelectorAll("a");
      mobileMenuLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
          hamburgerIcon.classList.remove("hidden");
          closeIcon.classList.add("hidden");
        });
      });

      // Theme toggle
      const themeToggle = document.getElementById("theme-toggle");
      const moonIcon = document.getElementById("moon-icon");
      const sunIcon = document.getElementById("sun-icon");
      let isDarkMode = true;

      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light") {
        toggleTheme();
      }

      themeToggle.addEventListener("click", toggleTheme);

      function toggleTheme() {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle("light-mode");
        moonIcon.classList.toggle("hidden");
        sunIcon.classList.toggle("hidden");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
      }

      // Navbar scroll effect
      const navbar = document.getElementById("navbar");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });

      function openEmail(element) {
        // Mengambil bagian email dari atribut data agar tidak terbaca bot HTML scanner
        const user = element.getAttribute("data-user");
        const domain = element.getAttribute("data-domain");

        // Menggabungkan menjadi format email
        const emailAddress = user + "@" + domain;

        // Membuka mail client
        window.location.href = "mailto:" + emailAddress;
      }

      // Loading Screen
      function initLoadingScreen() {
        const loadingScreen = document.getElementById("loading-screen");
        const loadingBar = document.getElementById("loading-bar");
        const loadingPercentage = document.getElementById("loading-percentage");
        const loadingParticlesContainer =
          document.getElementById("loading-particles");

        const colors = ["#06b6d4", "#8b5cf6", "#ec4899", "#3b82f6"];
        for (let i = 0; i < 30; i++) {
          const particle = document.createElement("div");
          particle.className = "particle";
          particle.style.width = Math.random() * 5 + 2 + "px";
          particle.style.height = particle.style.width;
          particle.style.left = Math.random() * 100 + "%";
          particle.style.top = Math.random() * 100 + "%";
          particle.style.background =
            colors[Math.floor(Math.random() * colors.length)];
          particle.style.animationDuration = Math.random() * 10 + 15 + "s";
          particle.style.animationDelay = Math.random() * 5 + "s";
          loadingParticlesContainer.appendChild(particle);
        }

        let progress = 0;
        const loadingInterval = setInterval(() => {
          progress += Math.random() * 15;
          if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);

            setTimeout(() => {
              loadingScreen.style.opacity = "0";
              loadingScreen.style.transition = "opacity 0.5s ease";

              setTimeout(() => {
                loadingScreen.style.display = "none";
              }, 500);
            }, 500);
          }

          loadingBar.style.width = progress + "%";
          loadingPercentage.textContent = Math.round(progress) + "%";
        }, 200);
      }

      // Initialize everything on page load
      initLoadingScreen();
      createParticles();

      // Page Navigation with hash-based routing
      const mainContent = document.getElementById("main-content");
      const docsPage = document.getElementById("docs-page");
      const feedbackPage = document.getElementById("feedback-page");
      const membersPage = document.getElementById("members-page");

      function showPage(pageId) {
        if (!mainContent || !docsPage || !feedbackPage) return;

        mainContent.classList.add("hidden");
        docsPage.classList.add("hidden");
        feedbackPage.classList.add("hidden");
        membersPage.classList.add("hidden");

        if (pageId === "home") {
          mainContent.classList.remove("hidden");
        } else if (pageId === "docs") {
          docsPage.classList.remove("hidden");
        } else if (pageId === "feedback") {
          feedbackPage.classList.remove("hidden");
        } else if (pageId === "members") {
          membersPage.classList.remove("hidden"); // Tambahkan ini
        }

        window.scrollTo({ top: 0, behavior: "smooth" });

        if (mobileMenu && hamburgerIcon && closeIcon) {
          mobileMenu.classList.add("hidden");
          hamburgerIcon.classList.remove("hidden");
          closeIcon.classList.add("hidden");
        }
      }

      // Handle hash changes
      function handleHashChange() {
        const hash = window.location.hash.substring(1);
        if (hash === "docs") {
          showPage("docs");
        } else if (hash === "feedback") {
          showPage("feedback");
        } else if (hash === "members") {
          showPage("members"); // Tambahkan ini
        } else {
          showPage("home");
        }
      }

      window.addEventListener("hashchange", handleHashChange);

      // Handle page links
      function setupPageLinks() {
        const allLinks = document.querySelectorAll('a[href^="#"]');
        allLinks.forEach((link) => {
          link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (href === "#docs" || href === "#feedback" || href === "#") {
              e.preventDefault();
              window.location.hash = href.substring(1);
            }
          });
        });
      }

      setupPageLinks();
      handleHashChange();

      // Feedback Form
      const feedbackForm = document.getElementById("feedback-form");
      const feedbackSuccess = document.getElementById("feedback-success");
      const ratingButtons = document.querySelectorAll(".rating-btn");
      const ratingInput = document.getElementById("feedback-rating");

      // Rating selection
      ratingButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const rating = btn.getAttribute("data-rating");
          ratingInput.value = rating;

          ratingButtons.forEach((b) => {
            const btnRating = parseInt(b.getAttribute("data-rating"));
            if (btnRating <= parseInt(rating)) {
              b.classList.add("bg-cyan-500", "border-cyan-500");
              b.classList.remove("bg-gray-800", "border-gray-700");
            } else {
              b.classList.remove("bg-cyan-500", "border-cyan-500");
              b.classList.add("bg-gray-800", "border-gray-700");
            }
          });
        });
      });

      // Form submission
      feedbackForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("feedback-name").value;
        const email = document.getElementById("feedback-email").value;
        const type = document.getElementById("feedback-type").value;
        const message = document.getElementById("feedback-message").value;
        const rating = ratingInput.value;

        if (!rating) {
          const ratingContainer = document.getElementById("rating-container");
          const existingError = document.getElementById("rating-error");
          if (existingError) existingError.remove();

          const errorMsg = document.createElement("p");
          errorMsg.id = "rating-error";
          errorMsg.className = "text-red-400 text-sm mt-2 text-center";
          errorMsg.textContent =
            currentLang === "id"
              ? "Silakan pilih rating"
              : "Please select a rating";
          ratingContainer.parentElement.appendChild(errorMsg);
          return;
        }

        const existingError = document.getElementById("rating-error");
        if (existingError) existingError.remove();

        const submitBtn = document.getElementById("submit-btn");
        submitBtn.disabled = true;
        submitBtn.textContent =
          currentLang === "id" ? "Mengirim..." : "Sending...";

        // Prepare data untuk Google Sheets
        const now = new Date();
        const timestamp = now.toLocaleString("id-ID", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });

        const feedbackData = {
          Timestamp: timestamp,
          Name: name,
          Email: email,
          Type: type,
          Rating: parseInt(rating),
          Message: message,
        };

        try {
          // GANTI URL INI DENGAN URL GOOGLE APPS SCRIPT ANDA
          const response = await fetch(
            "https://script.google.com/macros/s/AKfycbyA91u-XHn7tDJyuILa0gosFBGGDiGq9p-5PQIAl5vR6i0A-djnG67sDCZPuIMpT1BK/exec",
            {
              method: "POST",
              mode: "no-cors",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(feedbackData),
            }
          );

          // Karena mode no-cors, kita anggap berhasil jika tidak error
          feedbackForm.classList.add("hidden");
          feedbackSuccess.classList.remove("hidden");

          setTimeout(() => {
            feedbackForm.reset();
            ratingInput.value = "";
            ratingButtons.forEach((btn) => {
              btn.classList.remove("bg-cyan-500", "border-cyan-500");
              btn.classList.add("bg-gray-800", "border-gray-700");
            });
            feedbackForm.classList.remove("hidden");
            feedbackSuccess.classList.add("hidden");
            submitBtn.disabled = false;
            submitBtn.textContent =
              currentLang === "id" ? "Kirim Umpan Balik" : "Submit Feedback";
          }, 3000);
        } catch (error) {
          console.error("Error submitting feedback:", error);
          showInlineError(
            currentLang === "id" ? "Gagal Mengirim" : "Failed to Send",
            currentLang === "id"
              ? "Terjadi kesalahan saat mengirim feedback."
              : "An error occurred while sending feedback."
          );
          submitBtn.disabled = false;
          submitBtn.textContent =
            currentLang === "id" ? "Kirim Umpan Balik" : "Submit Feedback";
        }
      });

      function showInlineError(title, message) {
        const errorDiv = document.createElement("div");
        errorDiv.className =
          "mt-8 p-6 bg-red-500 bg-opacity-20 border-2 border-red-500 rounded-lg text-center";
        errorDiv.innerHTML = `
          <h3 class="font-orbitron font-bold text-2xl mb-2 text-red-400">${title}</h3>
          <p class="text-gray-300">${message}</p>
        `;

        const existingError =
          feedbackForm.parentElement.querySelector(".bg-red-500");
        if (existingError) existingError.remove();

        feedbackForm.parentElement.appendChild(errorDiv);

        setTimeout(() => {
          errorDiv.remove();
        }, 5000);
      }

      function showInlineError(title, message) {
        const errorDiv = document.createElement("div");
        errorDiv.className =
          "mt-8 p-6 bg-red-500 bg-opacity-20 border-2 border-red-500 rounded-lg text-center";
        errorDiv.innerHTML = `
              <h3 class="font-orbitron font-bold text-2xl mb-2 text-red-400">${title}</h3>
              <p class="text-gray-300">${message}</p>
            `;

        const existingError =
          feedbackForm.parentElement.querySelector(".bg-red-500");
        if (existingError) existingError.remove();

        feedbackForm.parentElement.appendChild(errorDiv);

        setTimeout(() => {
          errorDiv.remove();
        }, 5000);
      }
(function () {
        function c() {
          var b = a.contentDocument || a.contentWindow.document;
          if (b) {
            var d = b.createElement("script");
            d.innerHTML =
              "window.__CF$cv$params={r:'9ab131d6a5a935a4',t:'MTc2NTI0ODYyMy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName("head")[0].appendChild(d);
          }
        }
        if (document.body) {
          var a = document.createElement("iframe");
          a.height = 1;
          a.width = 1;
          a.style.position = "absolute";
          a.style.top = 0;
          a.style.left = 0;
          a.style.border = "none";
          a.style.visibility = "hidden";
          document.body.appendChild(a);
          if ("loading" !== document.readyState) c();
          else if (window.addEventListener)
            document.addEventListener("DOMContentLoaded", c);
          else {
            var e = document.onreadystatechange || function () {};
            document.onreadystatechange = function (b) {
              e(b);
              "loading" !== document.readyState &&
                ((document.onreadystatechange = e), c());
            };
          }
        }
      })();
