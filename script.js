const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn?.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden');
  menuBtn.setAttribute('aria-expanded', String(!isOpen));
});

mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

const toast = document.getElementById('toast');
let toastTimeout;

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const area = document.createElement('textarea');
    area.value = text;
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const copied = document.execCommand('copy');
    area.remove();
    if (!copied) throw new Error('No se pudo copiar');
  }
  toast.textContent = '✓ Comando copiado al portapapeles';
  toast.classList.remove('opacity-0', 'translate-y-4');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.add('opacity-0', 'translate-y-4'), 1900);
}

document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const code = button.parentElement.querySelector('code')?.innerText || '';
    const oldLabel = button.textContent;
    try {
      await copyText(code);
      button.textContent = 'Copiado ✓';
      setTimeout(() => button.textContent = oldLabel, 1500);
    } catch {
      toast.textContent = 'No fue posible copiar. Selecciona el comando manualmente.';
      toast.classList.remove('opacity-0', 'translate-y-4');
      setTimeout(() => toast.classList.add('opacity-0', 'translate-y-4'), 2500);
    }
  });
});

const commandTabs = document.querySelectorAll('.command-tab');
const commandPanels = document.querySelectorAll('.command-panel');
commandTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    commandTabs.forEach(item => {
      item.classList.remove('bg-orange-500', 'font-bold', 'text-slate-950');
      item.classList.add('text-slate-300');
      item.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('bg-orange-500', 'font-bold', 'text-slate-950');
    tab.classList.remove('text-slate-300');
    tab.setAttribute('aria-selected', 'true');
    commandPanels.forEach(panel => panel.classList.toggle('hidden', panel.id !== tab.dataset.panel));
  });
});

document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    content.hidden = isOpen;
    const icon = button.querySelector('.faq-icon');
    if (icon) icon.textContent = isOpen ? '＋' : '−';
  });
});

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px' });
  sections.forEach(section => observer.observe(section));
}
