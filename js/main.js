/* =========================================================
   Jeeva Bricks & Metals — site script
   ---------------------------------------------------------
   EDIT YOUR DETAILS HERE. The phone number, address and
   WhatsApp links on the page are all filled in from SITE.
   ========================================================= */

const SITE = {
  phone: '+91 75589 04933',
  whatsapp: '917558904933',           // digits only, with 91 country code
  address: 'Vadakke Poiloor – Muthappa Madappura Road, Thrippangottur, Kannur, Kerala 670693',
  mapLink: 'https://maps.app.goo.gl/D2QrjWbBNBjkk9Tt7',
};

/* Products. Put a photo at images/products/<id>.jpg and it shows automatically. */
const PRODUCTS = [
  {
    id: 'msand',
    name: 'M-Sand',
    tag: 'Concrete Sand',
    short: 'Manufactured sand for concrete and RCC work — the reliable replacement for river sand.',
    text: 'M-Sand is produced by crushing hard granite and screening it to the right particle size. It is free of silt, clay and organic matter, so concrete mixes come out stronger and more consistent than with river sand.',
    specs: [
      ['Size', '0 – 4.75 mm'],
      ['Use', 'Concrete, RCC, foundations, slabs'],
      ['Source', 'Crushed granite'],
      ['Supply', 'Tipper loads / per cft'],
    ],
  },
  {
    id: 'psand',
    name: 'P-Sand',
    tag: 'Plastering Sand',
    short: 'Finely graded sand for a smooth plaster finish on walls and ceilings.',
    text: 'P-Sand is a finer grade made specially for plastering. Its uniform fine particles give a smooth finish, good workability and fewer cracks on walls and ceilings.',
    specs: [
      ['Size', '0 – 2.36 mm'],
      ['Use', 'Wall & ceiling plastering, masonry'],
      ['Finish', 'Smooth, fine texture'],
      ['Supply', 'Tipper loads / per cft'],
    ],
  },
  {
    id: 'metal',
    name: 'Crushed Metal',
    tag: '6mm – 40mm',
    short: 'Graded granite aggregates in 6mm, 12mm, 20mm and 40mm for every kind of work.',
    text: 'Our crushed metal (jelly) is cubical, clean and graded by size. Choose the size that suits your job — fine metal for precast work, 20mm for structural concrete, 40mm for foundations and road base.',
    specs: [
      ['6 mm', 'Precast, toppings, paver beds'],
      ['12 mm', 'Thin slabs, precast, concrete'],
      ['20 mm', 'RCC, beams, columns, slabs'],
      ['40 mm', 'Foundations, PCC, road base'],
    ],
  },
  {
    id: 'dust',
    name: 'Quarry Dust',
    tag: 'Filling & Base',
    short: 'Fine crusher dust for filling, levelling and as a firm bed under paving.',
    text: 'Quarry dust is the fine material left after crushing. It compacts well, making it ideal for filling, levelling plots and laying a firm bed under interlocking paving and slabs.',
    specs: [
      ['Use', 'Filling, levelling, paver bedding'],
      ['Also for', 'Backfilling & trench beds'],
      ['Supply', 'Tipper loads'],
    ],
  },
  {
    id: 'gsb',
    name: 'GSB & Wet Mix',
    tag: 'Road Base',
    short: 'Granular sub-base and wet mix macadam for roads, driveways and yards.',
    text: 'GSB (Granular Sub-Base) and WMM (Wet Mix Macadam) are graded blends of aggregate and fines used to build a strong, well-drained base for roads, driveways, parking areas and yards.',
    specs: [
      ['GSB', 'Sub-base layer for roads'],
      ['Wet Mix (WMM)', 'Base layer under tar / concrete'],
      ['Use', 'Roads, driveways, parking, yards'],
    ],
  },
];

/* Gallery. Put photos at images/gallery/1.jpg … 6.jpg */
const GALLERY = [
  { src: 'images/gallery/1.jpg', caption: 'Crushing & Screening Plant' },
  { src: 'images/gallery/2.jpg', caption: 'Excavator at the Quarry Face' },
  { src: 'images/gallery/3.jpg', caption: 'Feeding the Primary Crusher' },
  { src: 'images/gallery/4.jpg', caption: 'Crusher Plant & Stockpiles' },
  { src: 'images/gallery/5.jpg', caption: 'Aggregate Plant from Above' },
  { src: 'images/gallery/6.jpg', caption: 'Granite Quarry' },
];

/* Metal size guide. Photos at images/sizes/<id>.jpg */
const SIZES = [
  {
    id: '6mm', label: '6 mm',
    text: 'Small chips that pack tightly — ideal for precast work, thin toppings and paver laying beds.',
    uses: ['Precast work', 'Thin toppings', 'Paver laying', 'Flooring chips'],
  },
  {
    id: '12mm', label: '12 mm',
    text: 'A versatile medium size for thinner concrete sections and precast work where 20mm is too coarse.',
    uses: ['Thin slabs', 'Precast & lintels', 'Roof concrete', 'Flooring base'],
  },
  {
    id: '20mm', label: '20 mm',
    text: 'The standard size for structural RCC — the strongest all-round choice for slabs, beams and columns.',
    uses: ['RCC slabs', 'Beams & columns', 'Footings', 'Ready-mix concrete'],
  },
  {
    id: '40mm', label: '40 mm',
    text: 'Large, heavy aggregate for mass concrete and bases where thickness and load-bearing matter most.',
    uses: ['PCC foundations', 'Road base', 'Drainage layers', 'Mass concrete'],
  },
];

/* ---------- helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
// Phones and portrait tablets get the tall, lighter hero crops.
const usePortrait = matchMedia('(orientation: portrait) and (max-width: 959px)').matches;

// Show a photo only if the file actually exists; otherwise the plain panel stays.
function loadBg(el, src) {
  const img = new Image();
  img.onload = () => {
    el.style.backgroundImage = `url("${src}")`;
    el.classList.add('has-img');
  };
  img.src = src;
}

/* ---------- fill site details ---------- */
function fillSite() {
  const tel = 'tel:' + SITE.phone.replace(/[^\d+]/g, '');
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hi Jeeva Bricks & Metals, I would like to enquire about your products.')}`;

  $$('[data-site="phone"]').forEach(el => (el.textContent = SITE.phone));
  $$('[data-site="address"]').forEach(el => (el.textContent = SITE.address));
  $$('[data-site="phone-link"]').forEach(el => (el.href = tel));
  $$('[data-site="whatsapp-link"]').forEach(el => (el.href = wa));
  $$('[data-site="map-link"]').forEach(el => (el.href = SITE.mapLink));
  $('#year').textContent = new Date().getFullYear();
}

/* ---------- products ---------- */
function renderProducts() {
  const grid = $('#productsGrid');
  grid.innerHTML = PRODUCTS.map(p => `
    <article class="product-card">
      <div class="product-media-wrap">
        <div class="product-media img-fallback" data-img="images/products/${p.id}.jpg">
          <span class="product-tag">${p.tag}</span>
        </div>
      </div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <p>${p.short}</p>
        <button class="read-more" type="button" data-product="${p.id}">Details</button>
      </div>
    </article>`).join('');

  // swipe position dots (phones only; hidden by CSS on wider screens)
  const dots = $('#productDots');
  dots.innerHTML = PRODUCTS.map((_, k) => `<span${k ? '' : ' class="is-active"'}></span>`).join('');
  const dotEls = $$('span', dots);
  grid.addEventListener('scroll', () => {
    const card = grid.firstElementChild;
    const step = card.offsetWidth + parseFloat(getComputedStyle(grid).columnGap || 14);
    const k = Math.min(PRODUCTS.length - 1, Math.round(grid.scrollLeft / step));
    dotEls.forEach((d, j) => d.classList.toggle('is-active', j === k));
  }, { passive: true });

  $('#productChips').innerHTML = [...PRODUCTS.map(p => p.name), 'Multiple / Other']
    .map(name => `<label class="chip"><input type="radio" name="product" value="${name}"><span>${name}</span></label>`)
    .join('');

  $('#footerProducts').innerHTML = PRODUCTS
    .map(p => `<li><a href="#products">${p.name}</a></li>`).join('');
}

/* ---------- product sheet ---------- */
function initModal() {
  const modal = $('#productModal');
  let lastFocus = null;

  function open(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    lastFocus = document.activeElement;
    $('#modalTitle').textContent = p.name;
    $('#modalText').textContent = p.text;
    $('#modalSpecs').innerHTML = p.specs
      .map(([k, v]) => `<li><span>${k}</span><span>${v}</span></li>`).join('');
    const media = $('#modalMedia');
    media.style.backgroundImage = '';
    media.classList.remove('has-img');
    loadBg(media, `images/products/${p.id}.jpg`);
    $('#modalQuote').onclick = () => {
      const chip = $(`#productChips input[value="${p.name}"]`);
      if (chip) chip.checked = true;
    };
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    $('.modal-close', modal).focus({ preventScroll: true });
  }

  function close() {
    modal.hidden = true;
    document.body.style.overflow = '';
    lastFocus?.focus({ preventScroll: true });
  }

  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-product]');
    if (btn) open(btn.dataset.product);
  });
  $$('[data-close]', modal).forEach(el => el.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) close(); });
}

/* ---------- gallery ---------- */
function renderGallery() {
  const grid = $('#galleryGrid');
  grid.innerHTML = GALLERY.map((g, i) => `
    <figure class="gallery-item reveal" data-index="${i}">
      <div class="gallery-media img-fallback" data-img="${g.src}"></div>
      <figcaption>${g.caption}</figcaption>
    </figure>`).join('');

  const box = $('#lightbox');
  const img = $('#lightboxImg');
  const caption = $('#lightboxCaption');
  const close = () => { box.hidden = true; document.body.style.overflow = ''; };

  grid.addEventListener('click', e => {
    const item = e.target.closest('.gallery-item');
    if (!item || !$('.gallery-media', item).classList.contains('has-img')) return;
    const g = GALLERY[item.dataset.index];
    img.src = g.src;
    img.alt = g.caption;
    caption.textContent = g.caption;
    box.hidden = false;
    document.body.style.overflow = 'hidden';
  });
  box.addEventListener('click', e => { if (e.target !== img) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !box.hidden) close(); });
}

/* ---------- header, menu, scroll ---------- */
function initNav() {
  const header = $('#header');
  const nav = $('#nav');
  const toggle = $('#navToggle');

  const setMenu = open => {
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  $$('a', nav).forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // highlight the current section in the menu
  const links = $$('a[href^="#"]:not(.btn)', nav);
  const sections = links.map(a => $(a.getAttribute('href'))).filter(Boolean);
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => spy.observe(s));
}

/* ---------- hero slideshow ---------- */
function initHeroSlides() {
  const slides = $$('#heroSlides .hero-bg');
  const dots = $('#heroDots');
  if (slides.length < 2) return;
  let i = 0;
  let timer;

  dots.innerHTML = slides.map((_, k) => `<button type="button" tabindex="-1"${k ? '' : ' class="is-active"'}></button>`).join('');
  const dotEls = $$('button', dots);

  function show(n) {
    slides[i].classList.remove('is-active');
    dotEls[i].classList.remove('is-active');
    i = n;
    // restart the slow zoom on the incoming slide
    slides[i].style.animation = 'none';
    void slides[i].offsetWidth;
    slides[i].style.animation = '';
    slides[i].classList.add('is-active');
    dotEls[i].classList.add('is-active');
  }
  const start = () => { timer = setInterval(() => show((i + 1) % slides.length), 6000); };

  dotEls.forEach((d, k) => d.addEventListener('click', () => { clearInterval(timer); show(k); start(); }));
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) start();
}

/* ---------- size guide fan ---------- */
function renderSizes() {
  const fan = $('#sizesFan');
  const tabs = $('#sizesTabs');
  const step = 180 / SIZES.length;
  // point on a circle around the fan centre (bottom middle), angle in degrees from the left
  const pt = (deg, r) => {
    const a = (180 - deg) * Math.PI / 180;
    return [50 + r * Math.cos(a), 50 - r * Math.sin(a)];
  };

  fan.innerHTML = SIZES.map((s, k) => {
    const a1 = k * step, a2 = (k + 1) * step, mid = (a1 + a2) / 2;
    const poly = ['50% 50%', ...[a1, mid, a2].map(d => pt(d, 75).map(v => v.toFixed(2) + '%').join(' '))].join(',');
    // labels sit at 68% of the radius; the fan box is half the circle's height
    const [lx, ly] = pt(mid, 34);
    return `
      <button type="button" class="fan-seg img-fallback" data-size="${k}" data-img="images/sizes/${s.id}.jpg"
        style="clip-path:polygon(${poly})" aria-label="${s.label} metal"></button>
      <span class="fan-label" data-label="${k}" style="left:${lx}%;top:${ly * 2}%">${s.label}</span>`;
  }).join('') + '<div class="fan-hub"><strong>Metal</strong><small>Sizes</small></div>';

  tabs.innerHTML = SIZES.map((s, k) =>
    `<button type="button" role="tab" data-size="${k}">${s.label}</button>`).join('');

  function select(k) {
    const s = SIZES[k];
    $$('[data-size]').forEach(el => {
      const on = +el.dataset.size === k;
      el.classList.toggle('is-active', on);
      if (el.getAttribute('role') === 'tab') el.setAttribute('aria-selected', on);
    });
    $$('.fan-label').forEach(el => el.classList.toggle('is-active', +el.dataset.label === k));
    $('#sizesTitle').textContent = `${s.label} Metal`;
    $('#sizesText').textContent = s.text;
    $('#sizesUses').innerHTML = s.uses.map(u => `<li>${u}</li>`).join('');
    const card = $('.sizes-card');
    card.style.animation = 'none';
    void card.offsetWidth;
    card.style.animation = '';
  }

  $('#sizes').addEventListener('click', e => {
    const el = e.target.closest('[data-size]');
    if (el) select(+el.dataset.size);
  });
  select(2);
}

/* ---------- about tabs ---------- */
function initTabs() {
  const tabs = $$('.tab');
  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(t => {
      const active = t === tab;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-selected', active);
      $('#' + t.getAttribute('aria-controls')).hidden = !active;
    });
  }));
}

/* ---------- quote form → WhatsApp ---------- */
function initQuoteForm() {
  const form = $('#quoteForm');
  const error = $('#formError');
  const chips = $('#productChips');

  form.addEventListener('change', e => {
    if (e.target.name === 'product') chips.classList.remove('invalid');
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const required = ['name', 'phone', 'product', 'location'];
    const missing = required.filter(k => !(data[k] || '').trim());

    $$('input:not([type="radio"])', form).forEach(el => el.classList.toggle('invalid', missing.includes(el.name)));
    chips.classList.toggle('invalid', missing.includes('product'));
    if (missing.length) {
      error.textContent = 'Please add your name, phone, product and delivery location.';
      const first = missing[0] === 'product' ? chips : form.elements[missing[0]];
      first.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    error.textContent = '';

    const lines = [
      '*Quote Request – Jeeva Bricks & Metals*',
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Product: ${data.product}`,
      data.qty && `Quantity: ${data.qty}`,
      `Location: ${data.location}`,
      data.message && `Message: ${data.message}`,
    ].filter(Boolean);

    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  });
}

/* ---------- reveal on scroll ---------- */
function initReveal() {
  const els = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

/* ---------- boot ---------- */
fillSite();
renderProducts();
renderGallery();
renderSizes();
$$('[data-img]').forEach(el => loadBg(el, (usePortrait && el.dataset.imgM) || el.dataset.img));
initModal();
initNav();
initHeroSlides();
initTabs();
initQuoteForm();
initReveal();
