/* =========================================================
   CLUB DEL CAFÉ — script.js
   Variety data, card rendering, modal, scroll effects
   ========================================================= */

const varieties = [
  {
    slug: 'blend-castillo',
    name: 'Blend Castillo',
    sub: 'Caturra y Colombia',
    profile: 'Panela, chocolate, acidez cítrica, cuerpo medio, caña',
    process: 'Lavado',
    fermentation: '48 horas',
    origin: 'Pitalito, Huila',
    altitude: '1650 MSNM'
  },
  {
    slug: 'papayo',
    name: 'Papayo',
    sub: 'Variedad emblemática del Huila',
    profile: 'Romero, aromático, maderas finas, acidez media, cuerpo medio, durazno, té negro',
    process: 'Lavado',
    fermentation: '60 horas',
    origin: 'Pitalito, Huila',
    altitude: '1650 MSNM'
  },
  {
    slug: 'tabi-natural',
    name: 'Tabi Natural',
    sub: 'Proceso natural extendido',
    profile: 'Cacao, chocolate, licor, acidez media alta, cuerpo medio, vino, aromático',
    process: 'Natural',
    fermentation: '120 horas',
    origin: 'Pitalito, Huila',
    altitude: '1650 MSNM'
  },
  {
    slug: 'geisha',
    name: 'Geisha',
    sub: 'Variedad de origen panameño',
    profile: 'Limoncillo, jazmín, acidez cítrica, cuerpo medio bajo, panela, chocolate, cidrón',
    process: 'Lavado',
    fermentation: '48 horas',
    origin: 'Pitalito, Huila',
    altitude: '1650 MSNM'
  },
  {
    slug: 'bourbon-rojo-top-roast',
    name: 'Bourbon Rojo Top Roast',
    sub: 'Fermentación de larga duración',
    profile: 'Sandía, tamarindo, acidez alta brillante, cuerpo medio alto, licor, cacao',
    process: 'Natural',
    fermentation: '400 horas',
    origin: 'Pitalito, Huila',
    altitude: '1650 MSNM'
  },
  {
    slug: 'landrace',
    name: 'Landrace',
    sub: 'Fermentación en biorreactor',
    profile: 'Flor de Jamaica, arándanos, vino cuerpo medio, frambuesa, albahaca',
    process: 'Natural',
    fermentation: '80 horas en biorreactor',
    origin: 'Pitalito, Huila',
    altitude: '1650 MSNM'
  },
  {
    slug: 'geisha-top-roast',
    name: 'Geisha Top Roast',
    sub: 'Maceración con hierbas y frutas',
    profile: 'Limón, jazmín, galleta, uva, frambuesa, cuerpo medio',
    process: 'Espirituoso',
    fermentation: 'Maceración hierbas y frutas',
    origin: 'Pitalito, Huila',
    altitude: '1650 MSNM'
  },
  {
    slug: 'bourbon-aji',
    name: 'Bourbon Ají',
    sub: 'Perfil especiado, semi lavado',
    profile: 'Pimienta, maderas finas, avinado, almendra, cítrico',
    process: 'Semi lavado',
    fermentation: '96 horas',
    origin: 'Pitalito, Huila',
    altitude: '1650 MSNM'
  },
  {
    slug: 'bourbon-sandia',
    name: 'Bourbon Sandía',
    sub: 'Notas frutales luminosas',
    profile: 'Sandía, miel de panela, acidez cítrica brillante',
    process: 'Natural',
    fermentation: '120 horas',
    origin: 'Pitalito, Huila',
    altitude: '1650 MSNM'
  },
  {
    slug: 'natural-passion',
    name: 'Natural Passion',
    sub: 'Proceso espirituoso',
    profile: 'Maracuyá, gulupa, acidez media, cuerpo jugoso',
    process: 'Espirituoso',
    fermentation: '120 horas',
    origin: 'Pitalito, Huila',
    altitude: '1650 MSNM'
  },
  {
    slug: 'bourbon-galleta',
    name: 'Bourbon Galleta',
    sub: 'Dulzor cremoso, perfil clásico',
    profile: 'Chocolate, notas cítricas, almendras, acidez y cuerpo jugoso',
    process: 'Espirituoso',
    fermentation: '120 horas',
    origin: 'Pitalito, Huila',
    altitude: '1650 MSNM'
  },
  {
    slug: 'bourbon-sidra',
    name: 'Bourbon Sidra',
    sub: 'Variedad mutación de Bourbon',
    profile: 'Limón, jazmín, galleta, uva, frambuesa, cuerpo medio',
    process: 'Espirituoso',
    fermentation: '120 horas',
    origin: 'Pitalito, Huila',
    altitude: '1650 MSNM'
  },
  {
    slug: 'wush-wush',
    name: 'Wush Wush',
    sub: 'Origen etíope, expresión cremosa',
    profile: 'Dulce y aromático. Té verde, cítrico y floral, cuerpo cremoso, acidez baja, delicado',
    process: 'Semi lavado',
    fermentation: '96 horas',
    origin: 'Pitalito, Huila',
    altitude: '1750 MSNM'
  },
  {
    slug: 'moka',
    name: 'Moka',
    sub: 'Origen Acevedo, frutos rojos',
    profile: 'Chocolate, dulzor y acidez brillante, mora silvestre y frutos rojos',
    process: 'Natural',
    fermentation: '120 horas',
    origin: 'Acevedo, Huila',
    altitude: '1650 MSNM'
  }
];

/* ----------------- Render cards ----------------- */
const grid = document.getElementById('catalogGrid');

const pad = n => String(n).padStart(2, '0');

const cards = varieties.map((v, i) => {
  const card = document.createElement('button');
  card.className = 'card';
  card.dataset.slug = v.slug;
  card.innerHTML = `
    <div class="card__media">
      <img class="card__img" src="assets/variedades/${v.slug}.jpg" alt="${v.name}" loading="lazy" />
      <div class="card__overlay">
        <div class="card__profile">
          <strong>Perfil sensorial</strong>
          ${v.profile}
        </div>
      </div>
      <div class="card__view" aria-hidden="true">+</div>
    </div>
    <span class="card__index">N.º ${pad(i + 1)} — ${v.process}</span>
    <h3 class="card__name">${v.name}</h3>
    <p class="card__sub">${v.sub}</p>
    <div class="card__tags">
      <span>${v.fermentation}</span>
      <span>${v.altitude}</span>
    </div>
  `;
  card.addEventListener('click', () => openModal(i));
  return card;
});

cards.forEach(c => grid.appendChild(c));

/* ----------------- Modal ----------------- */
const modal       = document.getElementById('modal');
const modalImg    = document.getElementById('modalImg');
const modalIndex  = document.getElementById('modalIndex');
const modalName   = document.getElementById('modalName');
const modalSub    = document.getElementById('modalSub');
const modalProfile  = document.getElementById('modalProfile');
const modalProcess  = document.getElementById('modalProcess');
const modalFerment  = document.getElementById('modalFerment');
const modalOrigin   = document.getElementById('modalOrigin');
const modalAltitude = document.getElementById('modalAltitude');

function openModal (i) {
  const v = varieties[i];
  modalImg.src = `assets/variedades/${v.slug}.jpg`;
  modalImg.alt = v.name;
  modalIndex.textContent  = `N.º ${pad(i + 1)} · Catálogo 2026`;
  modalName.textContent   = v.name;
  modalSub.textContent    = v.sub;
  modalProfile.textContent  = v.profile;
  modalProcess.textContent  = v.process;
  modalFerment.textContent  = v.fermentation;
  modalOrigin.textContent   = v.origin;
  modalAltitude.textContent = v.altitude;

  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeModal () {
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ----------------- Scroll reveal ----------------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const idx = Array.from(grid.children).indexOf(entry.target);
      entry.target.style.transitionDelay = `${(idx % 4) * 90}ms`;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

cards.forEach(c => io.observe(c));

/* ----------------- Nav theme switch ----------------- */
const nav = document.querySelector('.nav');
const hero = document.querySelector('.hero');
const heroIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    nav.classList.toggle('is-light', !e.isIntersecting);
  });
}, { threshold: 0.05 });
heroIO.observe(hero);

/* ----------------- Custom cursor ----------------- */
const cursor = document.getElementById('cursor');
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
  });
}
