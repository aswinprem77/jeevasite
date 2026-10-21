/* =========================================================
   Jeeva Bricks & Metals — site script
   ---------------------------------------------------------
   EDIT YOUR DETAILS HERE. Every phone number, email, address
   and WhatsApp link on the page is filled in from SITE.
   ========================================================= */

const SITE = {
  phone: '+91 00000 00000',          // TODO: real phone number, shown on the site
  whatsapp: '910000000000',           // TODO: WhatsApp number, digits only, with 91 country code
  email: 'info@jeevabricks.in',       // TODO: real email address
  hours: 'Mon – Sat: 8:00 AM – 6:00 PM', // TODO: confirm working hours
  address: 'Jeeva Bricks & Metals, Vadakke Poiloor – Muthappa Madappura Road, Thrippangottur, Kannur, Kerala 670693',
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
    icon: 'grain',
  },
  {
    id: 'psand',
    name: 'P-Sand',
    tag: 'Plastering Sand',
    short: 'Finely graded sand for smooth plastering and block work.',
    text: 'P-Sand is a finer, washed grade made specially for plastering. Its uniform fine particles give a smooth finish, good workability and fewer cracks on walls and ceilings.',
    specs: [
      ['Size', '0 – 2.36 mm'],
      ['Use', 'Wall & ceiling plastering, block work'],
      ['Finish', 'Smooth, fine texture'],
      ['Supply', 'Tipper loads / per cft'],
    ],
    icon: 'fine',
  },
  {
    id: 'metal',
    name: 'Crushed Metal',
    tag: '6mm – 40mm',
    short: 'Graded granite aggregates in 6mm, 12mm, 20mm and 40mm for every kind of work.',
    text: 'Our crushed metal (jelly) is cubical, clean and graded by size. Choose the size that suits your job — fine metal for precast and blocks, 20mm for concrete, 40mm for foundations and road base.',
    specs: [
      ['6 mm', 'Blocks, precast, paver work'],
      ['12 mm', 'Thin slabs, precast, concrete'],
      ['20 mm', 'RCC, beams, columns, slabs'],
      ['40 mm', 'Foundations, PCC, road base'],
    ],
    icon: 'stones',
  },
  {
    id: 'dust',
    name: 'Quarry Dust',
    tag: 'Filling & Base',
    short: 'Fine crusher dust for yard filling, levelling and as a base under paving blocks.',
    text: 'Quarry dust is the fine material left after crushing. It compacts well, making it ideal for filling, levelling plots and laying a firm bed under interlocking paving blocks and slabs.',
    specs: [
      ['Use', 'Filling, levelling, paver bedding'],
      ['Also for', 'Block manufacturing'],
      ['Supply', 'Tipper loads'],
    ],
    icon: 'dust',
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
    icon: 'road',
  },
  {
    id: 'blocks',
    name: 'Bricks & Blocks',
    tag: 'Walling',
    short: 'Strong, uniform building blocks for fast and durable wall construction.',
    text: 'Our building blocks are made with our own M-Sand and metal for consistent strength and size. Uniform blocks mean straighter walls, less mortar and faster construction.',
    specs: [
      ['Types', 'Solid blocks, hollow blocks'],
      ['Use', 'Walls, compound walls, partitions'],
      ['Supply', 'Per piece / bulk loads'],
    ],
    icon: 'bricks',
  },
];

/* Gallery. Put photos at images/gallery/1.jpg … 6.jpg */
const GALLERY = [
  { src: 'images/gallery/1.jpg', caption: 'Tipper Delivery' },
  { src: 'images/gallery/2.jpg', caption: 'Loading Bucket' },
  { src: 'images/gallery/3.jpg', caption: 'Aggregate Stockpiles' },
  { src: 'images/gallery/4.jpg', caption: 'Loaded For Dispatch' },
  { src: 'images/gallery/5.jpg', caption: 'Crushed Stone Yard' },
  { src: 'images/gallery/6.jpg', caption: 'Hollow Blocks' },
];

/* Metal size guide. Photos at images/sizes/<id>.jpg */
const SIZES = [
  {
    id: '6mm', label: '6 mm', mm: 6,
    text: 'Small chips that pack tightly — the go-to size for making blocks and precast items with a smooth face.',
    uses: ['Hollow & solid blocks', 'Paver blocks', 'Precast items', 'Thin toppings'],
  },
  {
    id: '12mm', label: '12 mm', mm: 12,
    text: 'A versatile medium size for thinner concrete sections and precast work where 20mm is too coarse.',
    uses: ['Thin slabs', 'Precast & lintels', 'Roof concrete', 'Flooring base'],
  },
  {
    id: '20mm', label: '20 mm', mm: 20,
    text: 'The standard size for structural RCC — the strongest all-round choice for slabs, beams and columns.',
    uses: ['RCC slabs', 'Beams & columns', 'Footings', 'Ready-mix concrete'],
  },
  {
    id: '40mm', label: '40 mm', mm: 40,
    text: 'Large, heavy aggregate for mass concrete and bases where thickness and load-bearing matter most.',
    uses: ['PCC foundations', 'Road base', 'Drainage layers', 'Mass concrete'],
  },
];

const ICONS = {
  grain: '<path d="M5 18a2 2 0 1 1 0 .01zm5-3a2 2 0 1 1 0 .01zm5 3a2 2 0 1 1 0 .01zm-5 3a1.5 1.5 0 1 1 0 .01zM7 12a1.5 1.5 0 1 1 0 .01zm6-1a2 2 0 1 1 0 .01zm5 1a1.5 1.5 0 1 1 0 .01zM10 7a1.5 1.5 0 1 1 0 .01zm5 0a1.2 1.2 0 1 1 0 .01zM2 21h20v1.5H2z"/>',
  fine: '<path d="M3 20h18v2H3zm2-3h14l-2-4H7zm3-6h8l-1.5-3h-5zm2-5h4l-1-2h-2z"/>',
  stones: '<path d="M3 20l3-6 5 1 2 5zm9 0 2-6 4-1 3 7zM6 12l2-5 5-1 2 5-4 3zm9-3 1-4 4 1 1 4-3 2z"/>',
  dust: '<path d="M2 20c2-5 6-8 10-8s8 3 10 8zm5-10a1 1 0 1 1 0 .01zm4-3a1 1 0 1 1 0 .01zm5 2a1 1 0 1 1 0 .01zM9 4a.8.8 0 1 1 0 .01zm5 0a.8.8 0 1 1 0 .01z"/>',
  road: '<path d="M10 2h4v4h-4zm0 7h4v6h-4zm0 9h4v4h-4zM2 22 7 2h2L5 22zm20 0h-3L15 2h2z"/>',
  bricks: '<path d="M2 4h9v5H2zm11 0h9v5h-9zM2 11h4v5H2zm6 0h9v5H8zm11 0h3v5h-3zM2 18h9v4H2zm11 0h9v4h-9z"/>',
};

/* ---------- helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

// Show a photo only if the file actually exists; otherwise the stone texture stays.
function loadBg(el, src) {
  const img = new Image();
  img.onload = () => {
    el.style.backgroundImage = `url("${src}")`;
    el.classList.add('has-img');
    el.closest('.product-card')?.classList.add('has-img');
  };
  img.src = src;
}

/* ---------- fill site details ---------- */
function fillSite() {
  const tel = 'tel:' + SITE.phone.replace(/[^\d+]/g, '');
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hi Jeeva Bricks & Metals, I would like to enquire about your products.')}`;

  $$('[data-site="phone"]').forEach(el => (el.textContent = SITE.phone));
  $$('[data-site="email"]').forEach(el => (el.textContent = SITE.email));
  $$('[data-site="hours"]').forEach(el => (el.textContent = SITE.hours));
  $$('[data-site="address"]').forEach(el => (el.textContent = SITE.address));
  $$('[data-site="phone-link"]').forEach(el => (el.href = tel));
  $$('[data-site="email-link"]').forEach(el => (el.href = 'mailto:' + SITE.email));
  $$('[data-site="whatsapp-link"]').forEach(el => (el.href = wa));
  $$('[data-site="map-link"]').forEach(el => (el.href = SITE.mapLink));
  $('#year').textContent = new Date().getFullYear();
}

/* ---------- products ---------- */
function renderProducts() {
  const grid = $('#productsGrid');
  grid.innerHTML = PRODUCTS.map(p => `
    <article class="product-card reveal">
      <div class="product-media-wrap">
        <div class="product-media img-fallback" data-img="images/products/${p.id}.jpg">
          <span class="product-icon"><svg viewBox="0 0 24 24">${ICONS[p.icon]}</svg></span>
          <span class="product-tag">${p.tag}</span>
        </div>
      </div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <p>${p.short}</p>
        <button class="read-more" type="button" data-product="${p.id}">Read More</button>
      </div>
    </article>`).join('');

  $('#productSelect').insertAdjacentHTML('beforeend',
    PRODUCTS.map(p => `<option value="${p.name}">${p.name}</option>`).join('') +
    '<option value="Other / Multiple">Other / Multiple</option>');

  $('#footerProducts').innerHTML = PRODUCTS
    .map(p => `<li><a href="#products">${p.name}</a></li>`).join('');
}

/* ---------- product modal ---------- */
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
    $('#modalQuote').onclick = () => { $('#productSelect').value = p.name; };
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    $('.modal-close', modal).focus();
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
    <figure class="gallery-item reveal" data-index="${i}" style="margin:0">
      <div class="gallery-media img-fallback" data-img="${g.src}"></div>
      <figcaption>${g.caption}</figcaption>
    </figure>`).join('');

  const box = $('#lightbox');
  const img = $('#lightboxImg');

  grid.addEventListener('click', e => {
    const item = e.target.closest('.gallery-item');
    if (!item || !$('.gallery-media', item).classList.contains('has-img')) return;
    const g = GALLERY[item.dataset.index];
    img.src = g.src;
    img.alt = g.caption;
    box.hidden = false;
  });
  box.addEventListener('click', e => {
    if (e.target !== img) box.hidden = true;
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') box.hidden = true; });
}

/* ---------- header, nav, scroll ---------- */
function initNav() {
  const header = $('#header');
  const nav = $('#nav');
  const toggle = $('#navToggle');
  const toTop = $('#toTop');

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  $$('a', nav).forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
    toTop.classList.toggle('show', window.scrollY > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // highlight current section in the menu
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

/* ---------- hero rotator + slideshow ---------- */
function initRotator() {
  const items = $$('#rotator > span');
  if (items.length < 2 || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let i = 0;
  setInterval(() => {
    const current = items[i];
    i = (i + 1) % items.length;
    current.classList.replace('is-active', 'is-leaving');
    setTimeout(() => current.classList.remove('is-leaving'), 600);
    items[i].classList.add('is-active');
  }, 3200);
}

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
  const n = SIZES.length;
  const step = 180 / n;
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

  const pxPerMm = 96 / 25.4;
  function select(k) {
    const s = SIZES[k];
    $$('[data-size]').forEach(el => {
      const on = +el.dataset.size === k;
      el.classList.toggle('is-active', on);
      if (el.getAttribute('role') === 'tab') el.setAttribute('aria-selected', on);
    });
    $$('.fan-label').forEach(el => el.classList.toggle('is-active', +el.dataset.label === k));
    const stone = $('#sizesStone');
    stone.style.width = stone.style.height = Math.round(s.mm * pxPerMm) + 'px';
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

  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const required = ['name', 'phone', 'product', 'location'];
    const missing = required.filter(k => !data[k].trim());

    $$('input, select', form).forEach(el => el.classList.toggle('invalid', missing.includes(el.name)));
    if (missing.length) {
      error.textContent = 'Please fill in your name, phone, product and delivery location.';
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
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ---------- boot ---------- */
fillSite();
renderProducts();
renderGallery();
renderSizes();
$$('[data-img]').forEach(el => loadBg(el, el.dataset.img));
initModal();
initNav();
initRotator();
initHeroSlides();
initTabs();
initQuoteForm();
initReveal();
