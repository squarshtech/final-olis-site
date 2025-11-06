// Open & Close Modal (unchanged)
function openNewsModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.add('flex');
    const box = modal.querySelector('div');
    box.classList.remove('opacity-0', 'scale-95');
    box.classList.add('opacity-100', 'scale-100');
  }, 10);
}

function closeNewsModal(id) {
  const modal = document.getElementById(id);
  const box = modal.querySelector('div');
  box.classList.remove('opacity-100', 'scale-100');
  box.classList.add('opacity-0', 'scale-95');
  setTimeout(() => {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
  }, 200);
}

document.querySelectorAll('[id^="modal"]').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal(modal.id);
  });
});

// Toggle Archive Accordion
function toggleArchive(id) {
  const section = document.getElementById(id);
  const arrow = document.getElementById("arrow" + id.replace("archive", ""));

  if (section.classList.contains("max-h-0")) {
    // Expand with animation
    section.classList.remove("max-h-0", "opacity-0");
    section.classList.add("max-h-[500px]", "opacity-100");
    arrow.classList.add("rotate-180");
  } else {
    // Collapse with animation
    section.classList.remove("max-h-[500px]", "opacity-100");
    section.classList.add("max-h-0", "opacity-0");
    arrow.classList.remove("rotate-180");
  }
}

// navbar and menu functionality
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const accountBtn = document.getElementById('accountBtn');
const accountMenu = document.getElementById('accountMenu');
const mobileAccountBtn = document.getElementById('mobileAccountBtn');
const mobileAccountMenu = document.getElementById('mobileAccountMenu');

// Floating → sticky behavior
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// Hamburger toggle
hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('hidden');
});

// Desktop Account dropdown
accountBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  accountMenu.classList.toggle('hidden');
});

// Close desktop Account menu when clicking outside
document.addEventListener('click', (e) => {
  if (!accountBtn.contains(e.target)) {
    accountMenu.classList.add('hidden');
  }
});

// Mobile Account dropdown
mobileAccountBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  mobileAccountMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  const isClickInsideMenu = mobileMenu.contains(e.target) || hamburger.contains(e.target);
  if (!isClickInsideMenu) {
    mobileMenu.classList.add('hidden');
    hamburger.classList.remove('active');
    mobileAccountMenu.classList.add('hidden');
  }
});

// Auto-close mobile menu after clicking any link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    hamburger.classList.remove('active');
    mobileAccountMenu.classList.add('hidden');
  });
});


// Add pulsing after the button has appeared
// window.addEventListener('load', () => {
//   const exploreBtn = document.getElementById('exploreBtn');
//   setTimeout(() => {
//     exploreBtn.classList.add('loaded');
//   }, 2000); // begins after button pop finishes
// });



// Enable soft pulse animation
// window.addEventListener('load', () => {
//   const exploreBtn = document.getElementById('exploreBtn');
//   setTimeout(() => {
//     exploreBtn.classList.add('loaded');
//   }, 2000);
// });

// Smooth scroll to About section
// document.getElementById('exploreBtn').addEventListener('click', (e) => {
//   e.preventDefault();
//   const aboutSection = document.querySelector('#about');
//   if (aboutSection) {
//     aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   }
// });


// Scroll reveal animations (existing)
const fadeUpSections = document.querySelectorAll('.fade-section');
const fadeLeftSections = document.querySelectorAll('.fade-section-left');
const fadeRightSections = document.querySelectorAll('.fade-section-right');
const dividers = document.querySelectorAll('.vertical-divider');

const observerOptions = { threshold: 0.2 };

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-10', 'translate-x-[-40px]', 'translate-x-[40px]');
      entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');

      // Animate vertical divider when it appears
      if (entry.target.classList.contains('vertical-divider')) {
        entry.target.style.height = '10rem'; // grows up to 160px
        entry.target.style.opacity = '1';
      }
    }
  });
}, observerOptions);

[...fadeUpSections, ...fadeLeftSections, ...fadeRightSections, ...dividers].forEach(section =>
  observer.observe(section)
);


// ======= OUR TEAM JAVA SCRIPT MODAL FUNCTIONALITY =======
// Open Modal
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.add('flex');
    const box = modal.querySelector('div');
    box.classList.remove('opacity-0', 'scale-95');
    box.classList.add('opacity-100', 'scale-100');
  }, 10);
}

// Close Modal
function closeModal(id) {
  const modal = document.getElementById(id);
  const box = modal.querySelector('div');
  box.classList.remove('opacity-100', 'scale-100');
  box.classList.add('opacity-0', 'scale-95');
  setTimeout(() => {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
  }, 200);
}

// Close modal when clicking outside content
document.querySelectorAll('[id^="modal"]').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal(modal.id);
  });
});

// ===== Scroll To Top Button Functionality =====

const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button after scrolling 200px
/* window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.classList.remove("hidden");
    scrollTopBtn.classList.add("flex", "items-center", "justify-center", "fade-in");
  } else {
    scrollTopBtn.classList.add("hidden");
    scrollTopBtn.classList.remove("fade-in");
  }
});

*/

// Smooth scroll to top
/*scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
*/


// ===== Gallery Functionality =====
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("olisGalleryGrid");
  const modal = document.getElementById("olisGalleryModal");
  const modalImage = document.getElementById("olisModalImage");
  const closeModal = document.getElementById("olisCloseModal");
  const nextImage = document.getElementById("olisNextImage");
  const prevImage = document.getElementById("olisPrevImage");
  const thumbnails = document.getElementById("olisThumbnails");
  const thumbNext = document.getElementById("olisThumbNext");
  const thumbPrev = document.getElementById("olisThumbPrev");

  let galleryData = [];
  let currentIndex = 0;

  // Load gallery data
  fetch("https://squarshtech.github.io/final-olis-site/assets/gallery.json")
    .then(res => res.json())
    .then(data => {
      galleryData = data;

      // Populate gallery grid
      galleryData.forEach((item, index) => {
        const imgDiv = document.createElement("div");
        imgDiv.className =
          "relative overflow-hidden rounded-xl cursor-pointer group";
        imgDiv.innerHTML = `
          <img src="${item.image}" alt="${item.alt}"
               class="w-full h-48 object-cover rounded-xl transform group-hover:scale-110 transition duration-700">
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
            <span class="text-white text-sm font-semibold">${item.title}</span>
          </div>
        `;
        imgDiv.addEventListener("click", () => openModal(index));
        grid.appendChild(imgDiv);
      });

      // Populate thumbnails
      galleryData.forEach((item, i) => {
        const thumb = document.createElement("img");
        thumb.src = item.image;
        thumb.alt = item.alt;
        thumb.className =
          "olisThumb w-20 h-16 object-cover rounded-md cursor-pointer opacity-70 hover:opacity-100 transition-all snap-start";
        thumb.addEventListener("click", () => showImage(i));
        thumbnails.appendChild(thumb);
      });
    });

  // Show image in modal
  function showImage(index) {
    currentIndex = index;
    modalImage.src = galleryData[index].image;
    modalImage.alt = galleryData[index].title;
    modalImage.classList.remove("opacity-100", "scale-100");
    setTimeout(() => {
      modalImage.classList.add("opacity-100", "scale-100");
    }, 100);
    updateThumbnails();
  }

  function openModal(index) {
    modal.classList.remove("hidden");
    showImage(index);
  }

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  nextImage.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryData.length;
    showImage(currentIndex);
  });

  prevImage.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    showImage(currentIndex);
  });

  // Scroll thumbnails with buttons
  thumbNext.addEventListener("click", () => {
    thumbnails.scrollBy({ left: 150, behavior: "smooth" });
  });
  thumbPrev.addEventListener("click", () => {
    thumbnails.scrollBy({ left: -150, behavior: "smooth" });
  });

  // Highlight active thumbnail
  function updateThumbnails() {
    document.querySelectorAll(".olisThumb").forEach((thumb, i) => {
      thumb.classList.toggle("ring-2", i === currentIndex);
      thumb.classList.toggle("ring-[#fb923c]", i === currentIndex);
    });
  }
});



// ===== RESOURCES SECTION WITH PAGINATION =====

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("resourcesContainer");
  const pagination = document.getElementById("paginationNumbers");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const itemsPerPage = 3;
  let currentPage = 1;
  let resources = [];

  // Load JSON
  async function loadResources() {
    try {
      const res = await fetch("https://squarshtech.github.io/final-olis-site/assets/resources.json");
      resources = await res.json();
      renderPage(currentPage);
    } catch (error) {
      console.error("Failed to load resources.json:", error);
    }
  }

  // Render a single page of resources
  function renderPage(page) {
    container.innerHTML = "";
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const items = resources.slice(start, end);

    items.forEach((item) => {
      const card = document.createElement("a");
      card.href = item.fileUrl;
      card.className =
        "group relative block bg-gray-800/90 hover:bg-[#fb923c] text-white hover:text-black transition-all duration-300 rounded-2xl p-6 text-left shadow-lg";

      card.innerHTML = `
        <div class="flex items-center mb-2">
          <i data-lucide="${item.icon}" class="w-8 h-8 mr-3 stroke-[#fb923c] group-hover:stroke-black"></i>
          <div>
            <h3 class="font-semibold text-lg">${item.title}</h3>
            <p class="text-xs text-[#fb923c] group-hover:text-black">Updated: ${item.updated}</p>
          </div>
        </div>
        <p class="text-sm text-gray-300 group-hover:text-gray-900 mt-2">${item.description}</p>
        <span class="absolute top-3 right-3 ${getFileColor(item.fileType)} text-xs px-2 py-0.5 rounded-full font-semibold">${item.fileType}</span>
      `;
      container.appendChild(card);
    });

    renderPagination();
    lucide.createIcons();
  }

  // Helper: color by file type
  function getFileColor(type) {
    switch (type.toUpperCase()) {
      case "PDF": return "bg-red-600";
      case "DOCX": return "bg-blue-500";
      case "ZIP": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  }

  // Render pagination numbers
  function renderPagination() {
    pagination.innerHTML = "";
    const totalPages = Math.ceil(resources.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      btn.className = `px-3 py-1 rounded-lg ${i === currentPage
        ? "bg-[#fb923c] text-black font-bold"
        : "bg-gray-700 hover:bg-gray-600"
        }`;
      btn.addEventListener("click", () => {
        currentPage = i;
        renderPage(currentPage);
      });
      pagination.appendChild(btn);
    }

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }

  // Prev/Next handlers
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage(currentPage);
    }
  });

  nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(resources.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderPage(currentPage);
    }
  });

  loadResources();
});



// ===== OLIS NEWS SLIDER WITH EFFECTS =====
document.addEventListener("DOMContentLoaded", () => {
  const imageWrapper = document.getElementById("olisImageSlides");
  const pagination = document.getElementById("olisPagination");
  const textTitle = document.getElementById("olisNewsTitle");
  const textDate = document.getElementById("olisNewsDate");
  const textDesc = document.getElementById("olisNewsDescription");
  const textArea = document.getElementById("olisTextArea");

  let slides = [];
  let current = 0;
  let autoSlide;

  fetch("https://squarshtech.github.io/final-olis-site/assets/olis-news.json")
    .then(res => res.json())
    .then(data => {
      data.forEach((item, i) => {
        const img = document.createElement("div");
        img.className = `absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-[1200ms] ease-in-out`;
        img.style.backgroundImage = `url('https://squarshtech.github.io/final-olis-site/img/gallery/${item.image}')`;
        imageWrapper.appendChild(img);

        const dot = document.createElement("button");
        dot.className =
          "olisDot w-6 h-6 flex items-center justify-center rounded-full border border-white/50 hover:bg-orange-500 transition-all duration-300";
        dot.textContent = i + 1;
        dot.addEventListener("click", () => switchSlide(i));
        pagination.appendChild(dot);
      });

      slides = document.querySelectorAll("#olisImageSlides > div");
      const dots = document.querySelectorAll(".olisDot");

      function createEffect(type, bgImage) {
        const effectLayer = document.createElement("div");
        effectLayer.className = "absolute inset-0 pointer-events-none z-20";
        effectLayer.style.backgroundImage = bgImage;
        effectLayer.style.backgroundSize = "cover";
        effectLayer.style.backgroundPosition = "center";

        switch (type) {
          case "tile":
            effectLayer.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0 100%)";
            effectLayer.style.transition = "clip-path 1.2s ease-out";
            requestAnimationFrame(() => {
              effectLayer.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
            });
            break;

          case "splash":
            effectLayer.style.clipPath = "circle(0% at 50% 50%)";
            effectLayer.style.transition = "clip-path 1.5s ease-out";
            requestAnimationFrame(() => {
              effectLayer.style.clipPath = "circle(150% at 50% 50%)";
            });
            break;

          case "cube":
            effectLayer.style.transform = "rotateY(90deg)";
            effectLayer.style.transition = "transform 1s ease-in-out";
            requestAnimationFrame(() => {
              effectLayer.style.transform = "rotateY(0)";
            });
            break;

          case "zoom-blur":
            effectLayer.style.transform = "scale(1.4)";
            effectLayer.style.filter = "blur(20px)";
            effectLayer.style.opacity = "0";
            effectLayer.style.transition = "all 1.5s ease-out";
            requestAnimationFrame(() => {
              effectLayer.style.transform = "scale(1)";
              effectLayer.style.filter = "blur(0)";
              effectLayer.style.opacity = "1";
            });
            break;
        }

        return effectLayer;
      }

      function showSlide(i) {
        const effectType = ["tile", "splash", "cube", "zoom-blur"][Math.floor(Math.random() * 4)];
        const newSlide = slides[i];
        const oldSlide = slides[current];

        // Fade transitions
        slides.forEach((s, idx) => {
          s.classList.remove("opacity-100");
          s.classList.add("opacity-0");
          dots[idx].classList.remove("bg-orange-500");
        });
        newSlide.classList.remove("opacity-0");
        newSlide.classList.add("opacity-100");
        dots[i].classList.add("bg-orange-500");

        // Add and animate effect layer
        const effectLayer = createEffect(effectType, newSlide.style.backgroundImage);
        imageWrapper.appendChild(effectLayer);
        setTimeout(() => effectLayer.remove(), 1600);

        // Sync text fade
        textArea.classList.add("opacity-0", "translate-y-2");
        setTimeout(() => {
          textTitle.textContent = data[i].title;
          textDate.textContent = data[i].date;
          textDesc.textContent = data[i].description;
          textArea.classList.remove("opacity-0", "translate-y-2");
        }, 700);

        current = i;
      }

      function nextSlide() {
        showSlide((current + 1) % slides.length);
      }

      function switchSlide(i) {
        clearInterval(autoSlide);
        showSlide(i);
        startAuto();
      }

      function startAuto() {
        autoSlide = setInterval(nextSlide, 7000);
      }

      showSlide(0);
      startAuto();
    });
});


// ===== OLIS TEAM SECTION =====

const olisTeamContainer = document.getElementById("olis-team-container");

async function olisFetchTeam() {
  try {
    const res = await fetch("https://squarshtech.github.io/final-olis-site/assets/team.json");
    const team = await res.json();

    team.forEach((member) => {
      const card = document.createElement("div");
      card.className =
        "bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-xl hover:-translate-y-1";

      card.innerHTML = `
          <div class="relative w-32 h-32 mb-4">
            <img src="img/team/${member.image}" alt="${member.name}"
              class="w-full h-full object-cover rounded-full border-4 border-orange-500 shadow-md" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800">${member.name}</h3>
          <p class="text-gray-500">${member.subject}</p>
          <div class="flex gap-3 mt-3 text-orange-600">
            <a href="#" class="hover:text-orange-800"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="hover:text-orange-800"><i class="fab fa-twitter"></i></a>
            <a href="#" class="hover:text-orange-800"><i class="fab fa-linkedin-in"></i></a>
          </div>
        `;
      olisTeamContainer.appendChild(card);
    });
  } catch (error) {
    olisTeamContainer.innerHTML =
      '<p class="text-gray-500 col-span-full">Unable to load team members.</p>';
    console.error("OLIS Team Error:", error);
  }
}

olisFetchTeam();

// ===== TESTIMONIAL CAROUSEL =====

document.addEventListener("DOMContentLoaded", async () => {
  const card = document.getElementById("testimonialCard");
  const pagination = document.getElementById("testimonialPagination");

  let testimonials = [];
  let current = 0;
  let autoSlide;

  // Fetch testimonials from JSON
  try {
    const res = await fetch("https://squarshtech.github.io/final-olis-site/assets/testimonial.json");
    testimonials = await res.json();
    renderTestimonial(current);
    renderPagination();
    startAutoSlide();
  } catch (err) {
    console.error("Error loading testimonials:", err);
  }

  // Render single testimonial
  function renderTestimonial(index) {
    const t = testimonials[index];
    if (!t) return;

    // Fade out
    card.classList.remove("opacity-100", "translate-y-0");
    card.classList.add("opacity-0", "translate-y-6");

    setTimeout(() => {
      card.innerHTML = `
        <div class="flex flex-col items-center text-center space-y-4">
          <img src="${t.image}" alt="${t.name}" class="w-24 h-24 object-cover rounded-full border-4 border-[#fb923c] shadow-md">
          <p class="text-gray-200 italic max-w-2xl">“${t.message}”</p>
          <div>
            <h3 class="text-lg font-semibold text-[#fb923c]">${t.name}</h3>
            <p class="text-sm text-gray-400">${t.role}</p>
          </div>
        </div>
      `;

      // Fade in
      setTimeout(() => {
        card.classList.remove("opacity-0", "translate-y-6");
        card.classList.add("opacity-100", "translate-y-0");
      }, 100);
      highlightPagination(index);
    }, 300);
  }

  // Render pagination
  function renderPagination() {
    pagination.innerHTML = testimonials.map((_, i) => `
      <button data-index="${i}"
        class="w-3 h-3 rounded-full bg-gray-500 hover:bg-[#fb923c] transition-all duration-300"></button>
    `).join("");

    pagination.querySelectorAll("button").forEach(btn =>
      btn.addEventListener("click", () => {
        clearInterval(autoSlide);
        current = parseInt(btn.dataset.index);
        renderTestimonial(current);
        startAutoSlide();
      })
    );
    highlightPagination(current);
  }

  // Highlight active dot
  function highlightPagination(index) {
    pagination.querySelectorAll("button").forEach((dot, i) => {
      dot.classList.toggle("bg-[#fb923c]", i === index);
      dot.classList.toggle("bg-gray-500", i !== index);
      dot.classList.toggle("scale-125", i === index);
    });
  }

  // Auto slide every 6s
  function startAutoSlide() {
    autoSlide = setInterval(() => {
      current = (current + 1) % testimonials.length;
      renderTestimonial(current);
    }, 12000);
  }
});

// ===== CONTACT FORM VALIDATION & SUBMISSION =====
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

// ✅ Live Validation (Green = valid)
form.addEventListener("input", (e) => {
  const el = e.target;
  if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
    let valid = el.type === "email"
      ? /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value)
      : el.value.trim() !== "";

    el.classList.toggle("border-green-400", valid);
    el.classList.toggle("border-red-400", !valid);
  }
});


/*====== ✅ AJAX Submit ======== */
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  formStatus.classList.remove("hidden");
  formStatus.textContent = "Sending message...";
  formStatus.className = "text-center text-sm mt-3 text-gray-500";

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      headers: {
        "X-CSRF-TOKEN": document.querySelector('input[name="_token"]').value,
        "Accept": "application/json"
      },
      body: formData
    });

    if (response.ok) {
      form.reset();
      formStatus.textContent = "✅ Message sent successfully!";
      formStatus.className = "text-center text-sm mt-3 text-green-600";
    } else {
      const err = await response.json();
      formStatus.textContent = "⚠️ " + (err.message || "Something went wrong.");
      formStatus.className = "text-center text-sm mt-3 text-red-500";
    }
  } catch (error) {
    formStatus.textContent = "❌ Network error. Try again later.";
    formStatus.className = "text-center text-sm mt-3 text-red-500";
  }
});

// quick links visibility toggle
let lastScrollY = window.scrollY;
const quickLinks = document.getElementById("olis-quick-links");

window.addEventListener("scroll", () => {
  if (window.innerWidth <= 768) { // Only on mobile
    if (window.scrollY > lastScrollY) {
      // Scrolling down → hide
      quickLinks.style.transform = "translateY(100%)";
    } else {
      // Scrolling up → show
      quickLinks.style.transform = "translateY(0)";
    }
    lastScrollY = window.scrollY;
  }
});

// const socialMenu = document.getElementById("olis-social-menu");
// const toggleBtn = document.getElementById("social-toggle");

// toggleBtn.addEventListener("click", () => {
//   socialMenu.classList.toggle("active");
// });
// Floating Social Chat Menu Toggle
// Floating Social Chat Menu Toggle


// Run initially and when resized

// Adjust Tawk.to chat widget position based on screen width
setTimeout(adjustTawkPosition, 3000);
window.addEventListener('resize', adjustTawkPosition);


var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/690b3756bec752195d8b26c4/1j99t0bd8';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);

})();

function adjustTawkPosition() {
  const chat = document.querySelector('iframe[title="chat widget"]');
  if (chat) {
    if (window.innerWidth <= 600) {
      chat.style.bottom = '100px';
    } else {
      chat.style.bottom = '40px';
    }
  }
}
