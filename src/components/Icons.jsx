import React from 'react';

const iconClass = 'icon-svg';
const defaultSize = 20;

function Icon({ size = defaultSize, className = '', ...props }) {
  return (
    <svg
      className={`${iconClass} ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function IconPhone({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </Icon>
  );
}

export function IconPin({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </Icon>
  );
}

export function IconMail({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </Icon>
  );
}

export function IconClock({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </Icon>
  );
}

export function IconStar({ size, className, filled }) {
  return (
    <Icon size={size} className={className}>
      {filled ? (
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="none" />
      ) : (
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      )}
    </Icon>
  );
}

export function IconStars({ count = 5, size, className }) {
  return (
    <span className={className} aria-hidden="true" style={{ display: 'inline-flex', gap: '2px', alignItems: 'center' }}>
      {Array.from({ length: count }, (_, i) => (
        <IconStar key={i} size={size} filled />
      ))}
    </span>
  );
}

export function IconBullet({ size = 6, className }) {
  return (
    <svg className={`${iconClass} ${className}`.trim()} width={size} height={size} viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
      <circle cx="4" cy="4" r="4" />
    </svg>
  );
}

export function IconDiamond({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <path d="M12 2L2 12l10 10 10-10L12 2z" />
    </Icon>
  );
}

export function IconArrowRight({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </Icon>
  );
}

export function IconExclamation({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </Icon>
  );
}

export function IconPlus({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </Icon>
  );
}

export function IconLeaf({ size, className }) {
  return (
    <Icon size={size} className={className}>
      {/* Silhouette de feuille (pointe en haut, base en bas) + nervure centrale */}
      <path d="M12 2c-4 4-8 10-8 15 0 3 2 5 6 5.5l2 .5 2-.5c4-.5 6-2.5 6-5.5 0-5-4-11-8-15z" />
      <path d="M12 2v20" />
    </Icon>
  );
}

export function IconFileText({ size, className }) {
  return (
    <Icon size={size} className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </Icon>
  );
}
