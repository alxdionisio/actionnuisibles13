/* eslint-disable */
'use strict';

// ─── Bibliothèque d'images ───────────────────────────────────────────────────
let imageLibrary = [];

async function loadImageLibrary() {
  try {
    const data = await api('GET', '/api/uploads');
    imageLibrary = data.items || [];
  } catch {
    imageLibrary = [];
  }
}

function imagePickerOptions(currentValue) {
  const paths = imageLibrary.map((item) => item.path);
  return [...new Set([...paths, currentValue].filter(Boolean))];
}

// ─── Utilitaires ────────────────────────────────────────────────────────────
function h(str) {
  return String(str ?? '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function toast(msg, type = 'success') {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  document.getElementById('toasts').appendChild(el);
  setTimeout(() => el.remove(), 3500);
}

function openModal(html) {
  document.getElementById('modal').innerHTML = html;
  document.getElementById('modalOverlay').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modalOverlay').style.display = 'none';
}

async function api(method, path, body) {
  const opts = { method, headers: {} };
  if (body) { opts.headers['Content-Type'] = 'application/json'; opts.body = JSON.stringify(body); }
  const res = await fetch(path, opts);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || `Erreur ${res.status}`);
  return data;
}

function slugify(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g,'')
    .replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
}

// ─── Image picker ────────────────────────────────────────────────────────────
function renderImagePicker(currentValue, inputId) {
  const options = imagePickerOptions(currentValue);
  return `
    <div class="img-upload">
      <input type="file" id="${inputId}_file" accept="image/*" class="img-upload-input" onchange="handleImageUpload('${inputId}', this)">
      <label class="btn-secondary img-upload-btn" for="${inputId}_file">Importer depuis l'appareil</label>
      <span class="img-upload-hint">JPG, PNG, WebP, AVIF ou GIF · 5 Mo max</span>
    </div>
    <div class="img-preview-wrap" id="${inputId}_preview">
      ${currentValue
        ? `<img src="${h(currentValue)}" alt="Aperçu de l'image sélectionnée" class="img-preview">`
        : '<span class="img-preview-empty">Aucune image sélectionnée</span>'}
    </div>
    <input type="hidden" id="${inputId}" value="${h(currentValue)}">
    ${options.length ? '<div class="img-picker-label">Images importées</div>' : ''}
    <div class="img-picker" id="imgPicker_${inputId}">
      ${options.map((path) => `
        <div class="img-option ${currentValue === path ? 'selected' : ''}"
          style="background-image:url('${h(path)}')"
          title="${h(path.split('/').pop())}"
          onclick="selectImage('${inputId}','${h(path)}',this)">
        </div>`).join('')}
    </div>`;
}

window.handleImageUpload = async function(inputId, inputEl) {
  const file = inputEl.files?.[0];
  if (!file) return;

  const formData = new FormData();
  formData.append('image', file);

  try {
    const res = await fetch('/api/uploads', { method: 'POST', body: formData, credentials: 'same-origin' });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || `Erreur ${res.status}`);

    imageLibrary = [data, ...imageLibrary.filter((item) => item.path !== data.path)];
    document.getElementById(inputId).value = data.path;
    document.getElementById(`${inputId}_preview`).innerHTML =
      `<img src="${h(data.path)}" alt="Aperçu de l'image sélectionnée" class="img-preview">`;

    const picker = document.getElementById(`imgPicker_${inputId}`);
    picker.querySelectorAll('.img-option').forEach((node) => node.classList.remove('selected'));

    let option = Array.from(picker.querySelectorAll('.img-option')).find((node) => node.title === data.filename);
    if (!option) {
      option = document.createElement('div');
      option.className = 'img-option selected';
      option.style.backgroundImage = `url('${data.path}')`;
      option.title = data.filename;
      option.onclick = () => selectImage(inputId, data.path, option);
      picker.prepend(option);
    } else {
      option.classList.add('selected');
    }

    toast('Image importée');
  } catch (e) {
    toast(e.message, 'error');
  } finally {
    inputEl.value = '';
  }
};

window.selectImage = function(inputId, key, el) {
  document.getElementById(inputId).value = key;
  document.getElementById(`${inputId}_preview`).innerHTML = key
    ? `<img src="${h(key)}" alt="Aperçu de l'image sélectionnée" class="img-preview">`
    : '<span class="img-preview-empty">Aucune image sélectionnée</span>';
  if (el) {
    el.closest('.img-picker').querySelectorAll('.img-option').forEach((node) => node.classList.remove('selected'));
    el.classList.add('selected');
  }
};

window.clearImgSelection = function(pickerId) {
  document.getElementById(pickerId).querySelectorAll('.img-option').forEach((node) => node.classList.remove('selected'));
};

// ─── Dynamic items ────────────────────────────────────────────────────────────
function renderItemsList(containerId, items = []) {
  const rows = items.map((item, i) => renderItemRow(i, item.title, item.text)).join('');
  return `
    <div class="items-container" id="${containerId}">${rows}</div>
    <button type="button" class="btn-add-item" onclick="addItemRow('${containerId}')">+ Ajouter un point</button>
  `;
}

function renderItemRow(idx, title = '', text = '') {
  return `
    <div class="item-row">
      <div class="item-row-header">
        <span>Point ${idx + 1}</span>
        <button type="button" class="btn-remove-item" onclick="this.closest('.item-row').remove();reindexRows()">✕</button>
      </div>
      <div class="form-group" style="margin-bottom:8px">
        <input type="text" class="item-title" placeholder="Titre du point" value="${h(title)}">
      </div>
      <div class="form-group" style="margin-bottom:0">
        <textarea class="item-text" rows="3" placeholder="Texte explicatif">${h(text)}</textarea>
      </div>
    </div>`;
}

window.addItemRow = function(containerId) {
  const container = document.getElementById(containerId);
  const idx = container.querySelectorAll('.item-row').length;
  container.insertAdjacentHTML('beforeend', renderItemRow(idx));
};

window.reindexRows = function() {
  document.querySelectorAll('.item-row').forEach((row, i) => {
    const header = row.querySelector('.item-row-header span');
    if (header) header.textContent = `Point ${i + 1}`;
  });
};

function collectItems(containerId) {
  return Array.from(document.getElementById(containerId).querySelectorAll('.item-row'))
    .map(row => ({
      title: row.querySelector('.item-title').value.trim(),
      text:  row.querySelector('.item-text').value.trim(),
    }))
    .filter(item => item.title || item.text);
}

// ─── Navigation ───────────────────────────────────────────────────────────────
let currentSection = 'articles';

function navigate(section, linkEl) {
  currentSection = section;
  document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
  if (linkEl) linkEl.classList.add('active');
  else {
    const link = document.querySelector(`.sidebar-nav a[data-section="${section}"]`);
    if (link) link.classList.add('active');
  }
  const handlers = { articles: loadArticles, services: loadServices, faq: loadFaq };
  (handlers[section] || loadArticles)();
}

// ─── ARTICLES ─────────────────────────────────────────────────────────────────
async function loadArticles() {
  document.getElementById('main').innerHTML = '<div class="empty"><div class="icon">⏳</div><p>Chargement…</p></div>';
  try {
    const articles = await api('GET', '/api/articles');
    renderArticlesList(articles);
  } catch (e) { toast(e.message, 'error'); }
}

function renderArticlesList(articles) {
  const rows = articles.length
    ? articles.map(a => `
        <tr>
          <td><strong>${h(a.title)}</strong></td>
          <td><span class="badge">${h(a.category || '—')}</span></td>
          <td class="text-muted">${h(a.date || '—')}</td>
          <td class="text-muted">${a.readMinutes || '—'} min</td>
          <td>
            <div class="td-actions">
              <button class="btn-edit" onclick="editArticle(${a.id})">Modifier</button>
              <button class="btn-delete" onclick="deleteArticle(${a.id},'${h(a.title)}')">Supprimer</button>
            </div>
          </td>
        </tr>`).join('')
    : `<tr><td colspan="5"><div class="empty"><p>Aucun article</p></div></td></tr>`;

  document.getElementById('main').innerHTML = `
    <div class="page-title">
      Articles
      <button class="btn-add" onclick="newArticle()">+ Nouvel article</button>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr>
          <th>Titre</th><th>Catégorie</th><th>Date</th><th>Lecture</th><th>Actions</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

function articleForm(a = {}) {
  const content = a.content || {};
  const items = content.numberedItems || [];
  return `
    <div class="modal-header">
      <h2>${a.id ? 'Modifier l\'article' : 'Nouvel article'}</h2>
      <button class="modal-close" onclick="closeModal()">×</button>
    </div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group">
          <label>Titre <span class="req">*</span></label>
          <input id="f_title" value="${h(a.title)}"
            oninput="if(!document.getElementById('f_slug_manual').value)document.getElementById('f_slug').value=slugify(this.value)">
        </div>
        <div class="form-group">
          <label>Slug (URL) <span class="req">*</span></label>
          <input id="f_slug" value="${h(a.slug)}" oninput="document.getElementById('f_slug_manual').value='1'">
          <input type="hidden" id="f_slug_manual" value="${a.slug ? '1' : ''}">
          <div class="hint">Exemple : mon-titre-article</div>
        </div>
        <div class="form-group">
          <label>Date</label>
          <input id="f_date" value="${h(a.date)}" placeholder="ex : 12 Mai 2026">
        </div>
        <div class="form-group">
          <label>Catégorie</label>
          <input id="f_category" value="${h(a.category)}" placeholder="ex : Dératisation">
        </div>
        <div class="form-group">
          <label>Temps de lecture (min)</label>
          <input id="f_readMinutes" type="number" min="1" max="30" value="${a.readMinutes || 4}">
        </div>
      </div>
      <div class="form-group">
        <label>Image</label>
        ${renderImagePicker(a.image || '', 'f_image')}
      </div>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0">
      <div class="form-group">
        <label>Titre de l'introduction</label>
        <input id="f_introHeading" value="${h(content.introHeading)}">
      </div>
      <div class="form-group">
        <label>Paragraphe d'introduction <span class="req">*</span></label>
        <textarea id="f_introParagraph" rows="4">${h(content.introParagraph)}</textarea>
      </div>
      <div class="form-group">
        <label>Points numérotés</label>
        ${renderItemsList('f_numberedItems', items)}
      </div>
      <div class="form-group">
        <label>Titre de conclusion</label>
        <input id="f_conclusionTitle" value="${h(content.conclusionTitle)}">
      </div>
      <div class="form-group">
        <label>Paragraphe de conclusion</label>
        <textarea id="f_conclusionParagraph" rows="4">${h(content.conclusionParagraph)}</textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary" onclick="closeModal()">Annuler</button>
      <button class="btn-primary" onclick="saveArticle(${a.id || 'null'})">Enregistrer</button>
    </div>`;
}

window.newArticle = async function() {
  await loadImageLibrary();
  openModal(articleForm());
};

window.editArticle = async function(id) {
  try {
    await loadImageLibrary();
    const a = await api('GET', `/api/articles/${id}`);
    openModal(articleForm(a));
  } catch (e) { toast(e.message, 'error'); }
};

window.saveArticle = async function(id) {
  const title = document.getElementById('f_title').value.trim();
  const slug  = document.getElementById('f_slug').value.trim();
  if (!title || !slug) { toast('Titre et slug requis', 'error'); return; }

  const content = {
    introHeading:       document.getElementById('f_introHeading').value.trim(),
    introParagraph:     document.getElementById('f_introParagraph').value.trim(),
    numberedItems:      collectItems('f_numberedItems'),
    conclusionTitle:    document.getElementById('f_conclusionTitle').value.trim() || undefined,
    conclusionParagraph:document.getElementById('f_conclusionParagraph').value.trim(),
  };
  Object.keys(content).forEach(k => !content[k] && delete content[k]);

  const payload = {
    slug, title,
    date:        document.getElementById('f_date').value.trim(),
    category:    document.getElementById('f_category').value.trim(),
    readMinutes: parseInt(document.getElementById('f_readMinutes').value) || 4,
    image:       document.getElementById('f_image').value.trim(),
    content,
  };

  try {
    if (id) {
      await api('PUT', `/api/articles/${id}`, payload);
      toast('Article mis à jour');
    } else {
      await api('POST', '/api/articles', payload);
      toast('Article créé');
    }
    closeModal();
    loadArticles();
  } catch (e) { toast(e.message, 'error'); }
};

window.deleteArticle = async function(id, title) {
  if (!confirm(`Supprimer l'article "${title}" ?`)) return;
  try {
    await api('DELETE', `/api/articles/${id}`);
    toast('Article supprimé');
    loadArticles();
  } catch (e) { toast(e.message, 'error'); }
};

// ─── SERVICES ─────────────────────────────────────────────────────────────────
async function loadServices() {
  document.getElementById('main').innerHTML = '<div class="empty"><div class="icon">⏳</div><p>Chargement…</p></div>';
  try {
    renderServicesList(await api('GET', '/api/services'));
  } catch (e) { toast(e.message, 'error'); }
}

function renderServicesList(services) {
  const rows = services.length
    ? services.map(s => `
        <tr>
          <td><strong>${h(s.title)}</strong></td>
          <td class="text-muted">${h((s.description || '').substring(0, 60))}${s.description?.length > 60 ? '…' : ''}</td>
          <td>
            <div class="td-actions">
              <button class="btn-edit" onclick="editService(${s.id})">Modifier</button>
              <button class="btn-delete" onclick="deleteService(${s.id},'${h(s.title)}')">Supprimer</button>
            </div>
          </td>
        </tr>`).join('')
    : `<tr><td colspan="3"><div class="empty"><p>Aucun service</p></div></td></tr>`;

  document.getElementById('main').innerHTML = `
    <div class="page-title">
      Services
      <button class="btn-add" onclick="newService()">+ Nouveau service</button>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Titre</th><th>Description courte</th><th>Actions</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

function serviceWhyItems(items = []) {
  return `
    <div class="items-container" id="f_whyItems">
      ${items.map((it, i) => `
        <div class="item-row">
          <div class="item-row-header">
            <span>Avantage ${i+1}</span>
            <button type="button" class="btn-remove-item" onclick="this.closest('.item-row').remove()">✕</button>
          </div>
          <div class="form-group" style="margin-bottom:8px">
            <input class="item-title" placeholder="Titre" value="${h(it.title)}">
          </div>
          <div class="form-group" style="margin-bottom:0">
            <textarea class="item-text" rows="2" placeholder="Texte">${h(it.text)}</textarea>
          </div>
        </div>`).join('')}
    </div>
    <button type="button" class="btn-add-item" onclick="addItemToContainer('f_whyItems','Avantage')">+ Ajouter</button>`;
}

function serviceProcessSteps(items = []) {
  return `
    <div class="items-container" id="f_processSteps">
      ${items.map((it, i) => `
        <div class="item-row">
          <div class="item-row-header">
            <span>Étape ${i+1}</span>
            <button type="button" class="btn-remove-item" onclick="this.closest('.item-row').remove()">✕</button>
          </div>
          <div class="form-group" style="margin-bottom:8px">
            <input class="item-title" placeholder="Titre étape" value="${h(it.title)}">
          </div>
          <div class="form-group" style="margin-bottom:0">
            <textarea class="item-text" rows="2" placeholder="Description">${h(it.text)}</textarea>
          </div>
        </div>`).join('')}
    </div>
    <button type="button" class="btn-add-item" onclick="addItemToContainer('f_processSteps','Étape')">+ Ajouter</button>`;
}

window.addItemToContainer = function(containerId, prefix) {
  const container = document.getElementById(containerId);
  const idx = container.querySelectorAll('.item-row').length;
  container.insertAdjacentHTML('beforeend', `
    <div class="item-row">
      <div class="item-row-header">
        <span>${prefix} ${idx+1}</span>
        <button type="button" class="btn-remove-item" onclick="this.closest('.item-row').remove()">✕</button>
      </div>
      <div class="form-group" style="margin-bottom:8px">
        <input class="item-title" placeholder="Titre">
      </div>
      <div class="form-group" style="margin-bottom:0">
        <textarea class="item-text" rows="2" placeholder="Texte"></textarea>
      </div>
    </div>`);
};

function collectContainerItems(containerId) {
  return Array.from(document.getElementById(containerId).querySelectorAll('.item-row'))
    .map(r => ({ title: r.querySelector('.item-title').value.trim(), text: r.querySelector('.item-text').value.trim() }))
    .filter(it => it.title || it.text);
}

function serviceForm(s = {}) {
  const c = s.content || {};
  return `
    <div class="modal-header">
      <h2>${s.id ? 'Modifier le service' : 'Nouveau service'}</h2>
      <button class="modal-close" onclick="closeModal()">×</button>
    </div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group">
          <label>Titre <span class="req">*</span></label>
          <input id="sf_title" value="${h(s.title)}"
            oninput="if(!document.getElementById('sf_slug_m').value)document.getElementById('sf_slug').value=slugify(this.value)">
        </div>
        <div class="form-group">
          <label>Slug <span class="req">*</span></label>
          <input id="sf_slug" value="${h(s.slug)}" oninput="document.getElementById('sf_slug_m').value='1'">
          <input type="hidden" id="sf_slug_m" value="${s.slug ? '1' : ''}">
        </div>
        <div class="form-group full">
          <label>Description courte</label>
          <textarea id="sf_description" rows="2">${h(s.description)}</textarea>
        </div>
        <div class="form-group full">
          <label>Sous-titre hero</label>
          <input id="sf_heroSubtitle" value="${h(s.heroSubtitle)}">
        </div>
      </div>
      <div class="form-group">
        <label>Image</label>
        ${renderImagePicker(s.image || '', 'sf_image')}
      </div>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0">
      <div class="form-group">
        <label>Introduction (texte)</label>
        <textarea id="sf_intro" rows="4">${h(c.intro)}</textarea>
      </div>
      <div class="form-group">
        <label>Titre section "Pourquoi nous ?"</label>
        <input id="sf_whyTitle" value="${h(c.whyTitle)}">
      </div>
      <div class="form-group">
        <label>Avantages "Pourquoi nous"</label>
        ${serviceWhyItems(c.whyItems)}
      </div>
      <div class="form-group">
        <label>Titre du processus</label>
        <input id="sf_processTitle" value="${h(c.processTitle)}">
      </div>
      <div class="form-group">
        <label>Étapes du processus</label>
        ${serviceProcessSteps(c.processSteps)}
      </div>
      <div class="form-group">
        <label>Appel à l'action (CTA)</label>
        <textarea id="sf_ctaText" rows="2">${h(c.ctaText)}</textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary" onclick="closeModal()">Annuler</button>
      <button class="btn-primary" onclick="saveService(${s.id || 'null'})">Enregistrer</button>
    </div>`;
}

window.newService = async function() {
  await loadImageLibrary();
  openModal(serviceForm());
};

window.editService = async function(id) {
  try {
    await loadImageLibrary();
    openModal(serviceForm(await api('GET', `/api/services/${id}`)));
  } catch (e) { toast(e.message, 'error'); }
};

window.saveService = async function(id) {
  const title = document.getElementById('sf_title').value.trim();
  const slug  = document.getElementById('sf_slug').value.trim();
  if (!title || !slug) { toast('Titre et slug requis', 'error'); return; }

  const content = {
    intro:        document.getElementById('sf_intro').value.trim(),
    whyTitle:     document.getElementById('sf_whyTitle').value.trim(),
    whyItems:     collectContainerItems('f_whyItems'),
    processTitle: document.getElementById('sf_processTitle').value.trim(),
    processSteps: collectContainerItems('f_processSteps'),
    ctaText:      document.getElementById('sf_ctaText').value.trim(),
  };

  const payload = {
    slug, title,
    description:  document.getElementById('sf_description').value.trim(),
    heroSubtitle: document.getElementById('sf_heroSubtitle').value.trim(),
    image:        document.getElementById('sf_image').value.trim(),
    content,
  };

  try {
    await api(id ? 'PUT' : 'POST', id ? `/api/services/${id}` : '/api/services', payload);
    toast(id ? 'Service mis à jour' : 'Service créé');
    closeModal();
    loadServices();
  } catch (e) { toast(e.message, 'error'); }
};

window.deleteService = async function(id, title) {
  if (!confirm(`Supprimer le service "${title}" ?`)) return;
  try {
    await api('DELETE', `/api/services/${id}`);
    toast('Service supprimé');
    loadServices();
  } catch (e) { toast(e.message, 'error'); }
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────
async function loadFaq() {
  document.getElementById('main').innerHTML = '<div class="empty"><div class="icon">⏳</div><p>Chargement…</p></div>';
  try {
    renderFaqList(await api('GET', '/api/faq'));
  } catch (e) { toast(e.message, 'error'); }
}

function renderFaqList(items) {
  const rows = items.length
    ? items.map(f => `
        <tr>
          <td>${h(f.question)}</td>
          <td class="text-muted">${h((f.answer || '').substring(0, 80))}…</td>
          <td>
            <div class="td-actions">
              <button class="btn-edit" onclick="editFaq(${f.id})">Modifier</button>
              <button class="btn-delete" onclick="deleteFaq(${f.id})">Supprimer</button>
            </div>
          </td>
        </tr>`).join('')
    : `<tr><td colspan="3"><div class="empty"><p>Aucune FAQ</p></div></td></tr>`;

  document.getElementById('main').innerHTML = `
    <div class="page-title">
      FAQ
      <button class="btn-add" onclick="newFaq()">+ Nouvelle question</button>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Question</th><th>Réponse (aperçu)</th><th>Actions</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

let faqCache = [];

function faqForm(f = {}) {
  return `
    <div class="modal-header">
      <h2>${f.id ? 'Modifier la question' : 'Nouvelle question FAQ'}</h2>
      <button class="modal-close" onclick="closeModal()">×</button>
    </div>
    <div class="modal-body">
      <div class="form-group">
        <label>Question <span class="req">*</span></label>
        <input id="ff_question" value="${h(f.question)}" placeholder="Ex : Combien coûte une intervention ?">
      </div>
      <div class="form-group">
        <label>Réponse <span class="req">*</span></label>
        <textarea id="ff_answer" rows="8" placeholder="Réponse complète…">${h(f.answer)}</textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary" onclick="closeModal()">Annuler</button>
      <button class="btn-primary" onclick="saveFaq(${f.id || 'null'}, ${f.position || 0})">Enregistrer</button>
    </div>`;
}

window.newFaq = function() { openModal(faqForm()); };

window.editFaq = async function(id) {
  try {
    const items = await api('GET', '/api/faq');
    const f = items.find(x => x.id === id);
    if (f) openModal(faqForm(f));
  } catch (e) { toast(e.message, 'error'); }
};

window.saveFaq = async function(id, position) {
  const question = document.getElementById('ff_question').value.trim();
  const answer   = document.getElementById('ff_answer').value.trim();
  if (!question || !answer) { toast('Question et réponse requises', 'error'); return; }
  try {
    await api(id ? 'PUT' : 'POST', id ? `/api/faq/${id}` : '/api/faq', { question, answer, position });
    toast(id ? 'Question mise à jour' : 'Question ajoutée');
    closeModal();
    loadFaq();
  } catch (e) { toast(e.message, 'error'); }
};

window.deleteFaq = async function(id) {
  if (!confirm('Supprimer cette question ?')) return;
  try {
    await api('DELETE', `/api/faq/${id}`);
    toast('Question supprimée');
    loadFaq();
  } catch (e) { toast(e.message, 'error'); }
};

// ─── Déconnexion ──────────────────────────────────────────────────────────────
window.logout = async function() {
  await fetch('/auth/logout', { method: 'POST' });
  window.location.href = '/admin/login.html';
};

// ─── Expose slugify ───────────────────────────────────────────────────────────
window.slugify = slugify;

// ─── Init ─────────────────────────────────────────────────────────────────────
(async function init() {
  try {
    const me = await api('GET', '/auth/me');
    document.getElementById('headerUser').textContent = me.username;
  } catch {
    window.location.href = '/admin/login.html';
    return;
  }
  await loadImageLibrary();
  navigate('articles');
})();
