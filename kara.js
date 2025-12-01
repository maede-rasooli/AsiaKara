
// Toggle Mobile Menu
  document.querySelectorAll('[data-collapse-toggle]').forEach(btn => {
    const menu = document.getElementById(btn.getAttribute('data-collapse-toggle'));
    btn.addEventListener('click', e => {
      e.stopPropagation(); // prevent immediate close
      menu.classList.toggle('hidden');
    });
  });

  // Dropdown Toggle
  document.querySelectorAll('[data-dropdown-toggle]').forEach(btn => {
    const menu = document.getElementById(btn.getAttribute('data-dropdown-toggle'));
    btn.addEventListener('click', e => {
      e.stopPropagation(); // prevent immediate close
      menu.classList.toggle('hidden');
    });
  });

  // Close dropdown and mobile menu when clicking outside
  document.addEventListener('click', e => {
    // Close all dropdowns
    document.querySelectorAll('[data-dropdown-toggle]').forEach(btn => {
      const menu = document.getElementById(btn.getAttribute('data-dropdown-toggle'));
      if (!menu.classList.contains('hidden') && !menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });

    // Close mobile menus
    document.querySelectorAll('[data-collapse-toggle]').forEach(btn => {
      const menu = document.getElementById(btn.getAttribute('data-collapse-toggle'));
      if (!menu.classList.contains('hidden') && !menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });
  });


// language change
// Get elements
const langToggle = document.getElementById('language-toggle');
const langMenu = document.getElementById('language-menu');
const langLinks = langMenu.querySelectorAll('a[data-lang]');

// Toggle dropdown menu
langToggle.addEventListener('click', () => {
  langMenu.classList.toggle('hidden');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!langToggle.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.classList.add('hidden');
  }
});