const FRENCH_MONTHS = {
  janv: '01',
  jan: '01',
  'févr': '02',
  fevr: '02',
  fev: '02',
  mars: '03',
  avr: '04',
  mai: '05',
  juin: '06',
  juil: '07',
  'août': '08',
  aout: '08',
  sept: '09',
  oct: '10',
  nov: '11',
  'déc': '12',
  dec: '12',
};

export function absoluteUrl(siteUrl, pathname = '/') {
  const base = siteUrl.replace(/\/$/, '');
  if (!pathname || pathname === '/') return `${base}/`;
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  // Le slash final ne s'ajoute qu'au chemin : le coller après un fragment ou une
  // query produisait des URL invalides du type ".../#lieux-intervention/".
  const coupe = path.search(/[#?]/);
  const chemin = coupe === -1 ? path : path.slice(0, coupe);
  const suffixe = coupe === -1 ? '' : path.slice(coupe);
  if (!chemin || chemin === '/') return `${base}/${suffixe}`;
  return `${base}${chemin.endsWith('/') ? chemin : `${chemin}/`}${suffixe}`;
}

export function buildBreadcrumbList(items, siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(siteUrl, item.path),
    })),
  };
}

export function parseFrenchDateToIso(dateLabel) {
  if (!dateLabel) return undefined;
  const trimmed = dateLabel.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return trimmed;

  const match = trimmed.match(/^(\d{1,2})\s+([A-Za-zÀ-ÿ.]+)\s+(\d{4})$/);
  if (!match) return undefined;

  const day = match[1].padStart(2, '0');
  const monthKey = match[2].toLowerCase().replace(/\./g, '');
  const month = FRENCH_MONTHS[monthKey] || FRENCH_MONTHS[monthKey.slice(0, 4)];
  if (!month) return undefined;

  return `${match[3]}-${month}-${day}`;
}

export function toPlainText(input) {
  return String(input ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}
