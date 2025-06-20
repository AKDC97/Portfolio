document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('bd-theme-toggle');
  const themeIcon = document.getElementById('bd-theme-icon');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    themeIcon.className = theme === 'dark' ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
  }

  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navbarToggler.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');
  });

  document.addEventListener('click', function (event) {
    if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
      navbarCollapse.classList.remove('show');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopButton = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollToTopButton.classList.add('show');
    } else {
      scrollToTopButton.classList.remove('show');
    }
  });

  scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function activateTabFromHash() {
    const hash = window.location.hash;
    if (hash) {
      const tabTrigger = document.querySelector(`button[data-bs-target="${hash}"]`);
      if (tabTrigger) {
        const tab = new bootstrap.Tab(tabTrigger);
        tab.show();
      }
    }
  }

  // Activate tab on page load
  activateTabFromHash();

  // Update tab when hash changes (e.g., user clicks a dropdown link)
  window.addEventListener("hashchange", activateTabFromHash);

  // Update URL hash when a tab is clicked
  document.querySelectorAll('button[data-bs-toggle="tab"]').forEach(tabBtn => {
    tabBtn.addEventListener('shown.bs.tab', function (e) {
      history.replaceState(null, null, e.target.dataset.bsTarget);
    });
  });
});

document.querySelectorAll('.quiz-card').forEach(card => {
  card.addEventListener('click', function () {
    document.getElementById('quizImageModalLabel').textContent = card.getAttribute('data-title');
    document.getElementById('quizModalImg').src = card.getAttribute('data-img');
    document.getElementById('quizModalImg').alt = card.getAttribute('data-title');
    document.getElementById('quizModalDesc').textContent = card.getAttribute('data-desc');
  });
});

// Activities modal
document.querySelectorAll('.activity-card').forEach(card => {
  card.addEventListener('click', function () {
    document.getElementById('activityImageModalLabel').textContent = card.getAttribute('data-title');
    document.getElementById('activityModalImg').src = card.getAttribute('data-img');
    document.getElementById('activityModalImg').alt = card.getAttribute('data-title');
    document.getElementById('activityModalDesc').textContent = card.getAttribute('data-desc');
  });
});

// Exams modal
document.querySelectorAll('.exam-card').forEach(card => {
  card.addEventListener('click', function () {
    document.getElementById('examImageModalLabel').textContent = card.getAttribute('data-title');
    document.getElementById('examModalImg').src = card.getAttribute('data-img');
    document.getElementById('examModalImg').alt = card.getAttribute('data-title');
    document.getElementById('examModalDesc').textContent = card.getAttribute('data-desc');
  });
});