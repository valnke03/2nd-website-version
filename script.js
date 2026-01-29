(function(){
  const q = document.querySelector('[data-filter="q"]');
  const tag = document.querySelector('[data-filter="tag"]');
  const cards = Array.from(document.querySelectorAll('[data-card]'));

  if(!q && !tag) return;

  function norm(s){ return (s || '').toLowerCase().trim(); }

  function apply(){
    const qq = norm(q?.value);
    const tt = norm(tag?.value);
    cards.forEach(el => {
      const text = norm(el.getAttribute('data-text'));
      const tags = norm(el.getAttribute('data-tags'));
      const okQ = !qq || text.includes(qq);
      const okT = !tt || tt === 'all' || tags.split(',').map(norm).includes(tt);
      el.style.display = (okQ && okT) ? '' : 'none';
    });
  }

  q && q.addEventListener('input', apply);
  tag && tag.addEventListener('change', apply);
})();
