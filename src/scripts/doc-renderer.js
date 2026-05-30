export function renderDocument(data, template = 'classic') {
  const fns = { classic: renderClassic, modern: renderModern, minimal: renderMinimal };
  return (fns[template] || renderClassic)(data);
}

function esc(s) {
  return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function renderClassic({ title, from, to, sections, date, num, docType }) {
  const isInvoice = docType === 'invoice';
  return `
<div class="doc doc-classic">
  <div class="doc-classic__title">${esc(title)}</div>
  <div class="doc-classic__date">${esc(date)}</div>
  <div class="doc-classic__parties">
    <div class="doc-classic__party">
      <span class="doc-label">${isInvoice ? 'From' : 'Consultant'}</span>
      <strong>${esc(from)}</strong>
    </div>
    <div class="doc-classic__party">
      <span class="doc-label">${isInvoice ? 'Bill To' : 'Client'}</span>
      <strong>${esc(to)}</strong>
    </div>
  </div>
  ${sections.map(s => `
  <div class="doc-classic__section">
    <div class="doc-section-head">${esc(s.heading)}</div>
    <div class="doc-section-body">${esc(s.body)}</div>
  </div>`).join('')}
  ${!isInvoice ? `
  <div class="doc-sigs">
    <div class="doc-sig">
      <div class="doc-sig__line"></div>
      <div class="doc-sig__label">${esc(from)} &nbsp;·&nbsp; Signature &amp; Date</div>
    </div>
    <div class="doc-sig">
      <div class="doc-sig__line"></div>
      <div class="doc-sig__label">${esc(to)} &nbsp;·&nbsp; Signature &amp; Date</div>
    </div>
  </div>` : ''}
</div>`;
}

function renderModern({ title, from, to, sections, date, num, docType }) {
  const isInvoice = docType === 'invoice';
  return `
<div class="doc doc-modern">
  <div class="doc-modern__header">
    <div>
      <div class="doc-modern__brand">${esc(from)}</div>
      <div class="doc-modern__type">${esc(title)}</div>
    </div>
    <div class="doc-modern__meta">
      ${isInvoice && num ? `<div class="doc-modern__num-label">Invoice</div>
      <div class="doc-modern__num">${esc(num)}</div>` : `<div class="doc-modern__num">${esc(date)}</div>`}
    </div>
  </div>
  <div class="doc-modern__body">
    <div class="doc-modern__parties">
      <div class="doc-party-col">
        <span class="doc-label">${isInvoice ? 'From' : 'Consultant'}</span>
        <strong>${esc(from)}</strong>
      </div>
      <div class="doc-party-col">
        <span class="doc-label">${isInvoice ? 'Bill To' : 'Client'}</span>
        <strong>${esc(to)}</strong>
      </div>
    </div>
    ${sections.map(s => `
    <div class="doc-modern__clause">
      <div class="doc-modern__clause-head">${esc(s.heading)}</div>
      <div class="doc-modern__clause-body">${esc(s.body)}</div>
    </div>`).join('')}
    ${!isInvoice ? `
    <div class="doc-sigs doc-sigs--modern">
      <div class="doc-sig"><div class="doc-sig__line"></div><div class="doc-sig__label">${esc(from)}</div></div>
      <div class="doc-sig"><div class="doc-sig__line"></div><div class="doc-sig__label">${esc(to)}</div></div>
    </div>` : ''}
  </div>
</div>`;
}

function renderMinimal({ title, from, to, sections, date, num, docType }) {
  const isInvoice = docType === 'invoice';
  return `
<div class="doc doc-minimal">
  <div class="doc-minimal__eyebrow">${isInvoice ? 'Invoice' : 'Legal Document'} &nbsp;·&nbsp; ${esc(date)}</div>
  <div class="doc-minimal__title">${esc(title)}</div>
  <div class="doc-minimal__rule"></div>
  <div class="doc-minimal__meta">
    <div class="doc-meta-item">
      <span class="doc-label">${isInvoice ? 'From' : 'Party A'}</span>
      <strong>${esc(from)}</strong>
    </div>
    <div class="doc-meta-item">
      <span class="doc-label">${isInvoice ? 'Bill To' : 'Party B'}</span>
      <strong>${esc(to)}</strong>
    </div>
    ${isInvoice && num ? `<div class="doc-meta-item">
      <span class="doc-label">Invoice #</span>
      <strong>${esc(num)}</strong>
    </div>` : ''}
  </div>
  ${sections.map((s, i) => `
  <div class="doc-minimal__section">
    <div class="doc-minimal__num">0${i + 1}. ${esc(s.heading.toUpperCase())}</div>
    <div class="doc-section-body">${esc(s.body)}</div>
  </div>`).join('')}
  ${!isInvoice ? `
  <div class="doc-sigs doc-sigs--minimal">
    <div class="doc-sig"><div class="doc-sig__line"></div><div class="doc-sig__label">${esc(from)}</div></div>
    <div class="doc-sig"><div class="doc-sig__line"></div><div class="doc-sig__label">${esc(to)}</div></div>
  </div>` : ''}
</div>`;
}
