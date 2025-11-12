document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const mainNav = document.getElementById('mainNav');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
      mainNav.style.flexDirection = 'column';
    });
  }

  const heroSearch = document.getElementById('searchInput');
  const heroSearchBtn = document.getElementById('searchBtn');
  const cardsGrid = document.getElementById('cardsGrid');
  const filterSelect = document.getElementById('filterSelect');

  function filterCards(q, category) {
    const ql = (q || '').trim().toLowerCase();
    const cards = cardsGrid.querySelectorAll('.video-card');
    cards.forEach(card => {
      const keywords = card.dataset.keywords || '';
      const cat = card.dataset.category || '';
      const matchesQuery = ql === '' || keywords.includes(ql) || card.querySelector('h3').textContent.toLowerCase().includes(ql);
      const matchesCat = !category || category === '' || cat === category;
      card.style.display = (matchesQuery && matchesCat) ? '' : 'none';
    });
  }

  heroSearchBtn.addEventListener('click', () => filterCards(heroSearch.value, filterSelect.value));
  heroSearch.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') filterCards(heroSearch.value, filterSelect.value);
  });
  filterSelect.addEventListener('change', () => filterCards(heroSearch.value, filterSelect.value));

  const modal = document.getElementById('videoModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');
  const videoWrap = document.getElementById('videoWrap');

  function openVideo(videoId) {
    if (!videoId) return;
    videoWrap.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeVideo() {
    videoWrap.innerHTML = '';
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }

  cardsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.video-card');
    if (!card) return;
    const id = card.dataset.video;
    openVideo(id);
  });

  modalBackdrop.addEventListener('click', closeVideo);
  modalClose.addEventListener('click', closeVideo);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideo();
  });
});