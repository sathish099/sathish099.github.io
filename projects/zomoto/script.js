document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const mainNav = document.getElementById('mainNav');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
      mainNav.style.flexDirection = 'column';
    });
  }

  const heroSearch = document.getElementById('heroSearch');
  const heroSearchBtn = document.getElementById('heroSearchBtn');
  const cardsGrid = document.getElementById('cardsGrid');

  function filterCards(q) {
    const ql = q.trim().toLowerCase();
    const cards = cardsGrid.querySelectorAll('.card');
    cards.forEach(card => {
      const keywords = card.dataset.keywords || '';
      const visible = ql === '' || keywords.includes(ql) || card.querySelector('h3').textContent.toLowerCase().includes(ql);
      card.style.display = visible ? '' : 'none';
    });
  }

  heroSearchBtn.addEventListener('click', () => filterCards(heroSearch.value));
  document.getElementById('searchBtn')?.addEventListener('click', () => filterCards(document.getElementById('searchInput').value));
});