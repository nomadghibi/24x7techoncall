const CONTAINER_ID = 'bct-toast-container';
const STYLE_ID = 'bct-toast-style';
const TOAST_LIFETIME_MS = 6500;

const TOAST_STYLE = `
#${CONTAINER_ID} {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: min(92vw, 420px);
  pointer-events: none;
}
.bct-toast {
  pointer-events: auto;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.25rem 0.75rem;
  align-items: start;
  padding: 0.875rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid transparent;
  background: #ffffff;
  color: #0f172a;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.16);
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.bct-toast.show {
  opacity: 1;
  transform: translateY(0);
}
.bct-toast.hide {
  opacity: 0;
  transform: translateY(-6px);
}
.bct-toast__title {
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.2;
}
.bct-toast__message {
  grid-column: 1 / 2;
  font-size: 0.85rem;
  line-height: 1.35;
}
.bct-toast__close {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  border: 0;
  background: transparent;
  color: inherit;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  padding: 0.2rem 0.25rem;
}
.bct-toast--success {
  background: #ecfdf5;
  border-color: #10b981;
}
.bct-toast--success .bct-toast__title {
  color: #065f46;
}
.bct-toast--error {
  background: #fef2f2;
  border-color: #ef4444;
}
.bct-toast--error .bct-toast__title {
  color: #991b1b;
}
.bct-toast--info {
  background: #eff6ff;
  border-color: #3b82f6;
}
.bct-toast--info .bct-toast__title {
  color: #1e40af;
}
`;

const ensureStyles = () => {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = TOAST_STYLE;
  document.head.appendChild(style);
};

const ensureContainer = () => {
  let container = document.getElementById(CONTAINER_ID);
  if (container) return container;
  container = document.createElement('div');
  container.id = CONTAINER_ID;
  container.setAttribute('aria-live', 'polite');
  container.setAttribute('aria-atomic', 'false');
  document.body.appendChild(container);
  return container;
};

const getNotificationType = (message) => {
  const normalized = String(message || '').toLowerCase();
  if (/(error|failed|fail|could not|unable|unavailable|missing|invalid)/.test(normalized)) {
    return 'error';
  }
  if (/(thanks|success|completed|received|submitted|booked|subscrib)/.test(normalized)) {
    return 'success';
  }
  return 'info';
};

const getNotificationTitle = (type) => {
  if (type === 'success') return 'Success';
  if (type === 'error') return 'Action Needed';
  return 'Notice';
};

const dismissToast = (toast) => {
  toast.classList.remove('show');
  toast.classList.add('hide');
  window.setTimeout(() => {
    toast.remove();
  }, 220);
};

const showToast = (message) => {
  ensureStyles();
  const container = ensureContainer();
  const type = getNotificationType(message);
  const toast = document.createElement('section');
  toast.className = `bct-toast bct-toast--${type}`;
  toast.setAttribute('role', 'status');

  const title = document.createElement('div');
  title.className = 'bct-toast__title';
  title.textContent = getNotificationTitle(type);

  const body = document.createElement('div');
  body.className = 'bct-toast__message';
  body.textContent = String(message || '');

  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'bct-toast__close';
  close.textContent = 'x';
  close.setAttribute('aria-label', 'Dismiss notification');
  close.addEventListener('click', () => dismissToast(toast));

  toast.appendChild(title);
  toast.appendChild(close);
  toast.appendChild(body);
  container.appendChild(toast);

  window.requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  window.setTimeout(() => {
    if (toast.isConnected) dismissToast(toast);
  }, TOAST_LIFETIME_MS);
};

export const installToastAlerts = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (window.__bctToastAlertsInstalled) return;
  window.__bctToastAlertsInstalled = true;
  window.__nativeAlert = window.alert.bind(window);
  window.alert = (message) => {
    showToast(message);
  };
};
