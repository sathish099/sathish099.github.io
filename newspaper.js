const themeButtons = document.querySelectorAll('.theme-switch');
let evening = false;
try { evening = localStorage.getItem('edition') === 'evening'; } catch { /* Storage may be disabled. */ }
function setEdition(value) {
    document.body.classList.toggle('evening', value);
    themeButtons.forEach(button => {
        button.setAttribute('aria-pressed', String(value));
        button.textContent = value ? 'Morning edition ☀' : 'Evening edition ◐';
    });
}
setEdition(evening);
themeButtons.forEach(button => button.addEventListener('click', () => {
    evening = !evening;
    setEdition(evening);
    try { localStorage.setItem('edition', evening ? 'evening' : 'morning'); } catch { /* Theme still works without persistence. */ }
}));
const filters = document.querySelectorAll('[data-filter]');
const stories = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
    let visible = 0;
    stories.forEach(story => {
        story.hidden = button.dataset.filter !== 'all' && story.dataset.category !== button.dataset.filter;
        if (!story.hidden) visible++;
    });
    document.querySelector('.filter-status').textContent = `${visible} project${visible === 1 ? '' : 's'} shown`;
}));
// Index links should reveal stories hidden by a selected filter.
document.querySelectorAll('.news-rail a').forEach(link => link.addEventListener('click', () => {
    document.querySelector('[data-filter="all"]').click();
}));
document.querySelector('.print-resume')?.addEventListener('click', () => window.print());
document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
