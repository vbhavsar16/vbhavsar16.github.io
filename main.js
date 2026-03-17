const path = window.location.pathname.split('/').pop() || 'index.html';

const nav = [
  ['index.html', 'Home'],
  ['about.html', 'About'],
  ['projects.html', 'Projects'],
  ['notes.html', 'Notes'],
  ['adventures.html', 'Adventures'],
  ['CV.html', 'CV']
];

function header() {
  const tabs = nav.map(([href, label]) => `<a class="tab ${href===path?'active':''}" href="${href}">${label}</a>`).join('');
  return `
  <header class="topbar">
    <div class="topbar-inner">
      <a class="brand" href="index.html">Vivek Bhavsar</a>
      <nav class="tabs">${tabs}</nav>
    </div>
  </header>`;
}

function footer() {
  return `<footer><div class="site">© ${new Date().getFullYear()} Vivek Bhavsar</div></footer>`;
}

document.body.insertAdjacentHTML('afterbegin', header());
document.body.insertAdjacentHTML('beforeend', footer());
