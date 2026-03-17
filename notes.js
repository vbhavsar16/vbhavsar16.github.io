const topicRoot = document.getElementById('topics');
const noteListRoot = document.getElementById('note-list');
const reader = document.getElementById('reader');

const state = { notes: [], topics: [], topic: null, note: null };

function mdToHtml(md) {
  const lines = md.split(/\r?\n/);
  let html = '';
  let inList = false;
  for (const line of lines) {
    if (line.startsWith('# ')) {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<h1>${line.slice(2)}</h1>`;
    } else if (line.startsWith('## ')) {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<h2>${line.slice(3)}</h2>`;
    } else if (line.startsWith('### ')) {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<h3>${line.slice(4)}</h3>`;
    } else if (line.startsWith('- ')) {
      if (!inList) { html += '<ul>'; inList = true; }
      html += `<li>${line.slice(2)}</li>`;
    } else if (!line.trim()) {
      if (inList) { html += '</ul>'; inList = false; }
      html += '';
    } else {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<p>${line}</p>`;
    }
  }
  if (inList) html += '</ul>';
  return html;
}

function renderTopics() {
  topicRoot.innerHTML = state.topics.map(t => `<button class="topic-btn ${t===state.topic?'active':''}" data-topic="${t}">${t}</button>`).join('');
  topicRoot.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      state.topic = btn.dataset.topic;
      state.note = null;
      renderTopics();
      renderNotes();
      renderReader();
    });
  });
}

function renderNotes() {
  const filtered = state.notes.filter(n => n.topic === state.topic);
  noteListRoot.innerHTML = filtered.map((n, idx) => `
    <button class="note-btn ${state.note?.title===n.title?'active':''}" data-index="${idx}">
      <strong>${n.title}</strong><br /><span class="muted">${n.date}</span>
    </button>`).join('') || '<p class="muted">No notes in this topic.</p>';

  noteListRoot.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      state.note = filtered[Number(btn.dataset.index)];
      renderNotes();
      renderReader();
    });
  });

  if (!state.note && filtered.length) state.note = filtered[0];
}

async function renderReader() {
  if (!state.note) {
    reader.innerHTML = '<p class="muted">Select a note to read.</p>';
    return;
  }
  try {
    const r = await fetch(state.note.file);
    const md = r.ok ? await r.text() : '# Note not found';
    reader.innerHTML = mdToHtml(md);
  } catch {
    reader.innerHTML = '<p class="muted">Could not load note.</p>';
  }
}

async function init() {
  try {
    const res = await fetch('data/notes/notes.json');
    state.notes = res.ok ? await res.json() : [];
  } catch {
    state.notes = [];
  }

  state.topics = [...new Set(state.notes.map(n => n.topic || 'General'))];
  state.topic = state.topics[0] || 'General';
  renderTopics();
  renderNotes();
  await renderReader();
}

init();
