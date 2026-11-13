const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const isHome = document.currentScript.hasAttribute('data-home');
const nav = [
  [isHome ? '#research' : 'index.html#research', 'Research'],
  [isHome ? '#experience' : 'index.html#experience', 'Experience'],
  ['projects.html', 'Projects'],
  ['notes.html', 'Notes'],
  ['adventures.html', 'Adventures'],
  ['CV.html', 'Résumé']
];

const links = nav.map(([href, label]) => {
  const current = href === currentPage ? ' aria-current="page"' : '';
  return `<a href="${href}"${current}>${label}</a>`;
}).join('');

const header = `
  <header class="header">
    <div class="shell header-inner">
      <a class="brand" href="index.html"><span class="monogram" aria-hidden="true">VB</span> Vivek Bhavsar</a>
      <nav aria-label="Main navigation">${links}</nav>
      <a class="header-contact" href="${isHome ? '#contact' : 'index.html#contact'}">Contact <span aria-hidden="true">↗</span></a>
    </div>
  </header>`;

if (isHome) {
  document.querySelector('.skip').insertAdjacentHTML('afterend', header);
} else {
  document.body.insertAdjacentHTML('afterbegin', '<a class="skip" href="#main">Skip to content</a>' + header);
  document.body.insertAdjacentHTML('beforeend', `
    <footer class="footer">
      <div class="shell footer-bottom">
        <a href="about.html">About Vivek</a>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>`);
}
