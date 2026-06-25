const githubProjects = [
  {
    title: 'A java script modern calculator',
    description: 'Developed a responsive modern calculator with a clean UI.',
    tags: ['javascript', 'CSS', 'Accessibility'],
    url: 'https://github.com/harrisonoghale52-prog/MODERN-CALCULATOR-'
  },
  {
    title: 'A java script snake game',
    description: 'Built a responsive snake game with smooth animations and a clean UI.',
    tags: ['javascript', 'Canvas', 'Game Development'],
    url: 'https://github.com/harrisonoghale52-prog/Snake-game-'
  }
];

const projectsContainer = document.querySelector('#projects-list');

if (projectsContainer) {
  projectsContainer.innerHTML = githubProjects.map(project => `
    <article class="project-card">
      <h3><a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer">${project.title}</a></h3>
      <p>${project.description}</p>
      <div class="project-meta">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      const chromeUrl = `googlechrome://navigate?url=${encodeURIComponent(link.href)}`;
      const fallbackUrl = link.href;

      window.location.href = chromeUrl;
      setTimeout(() => {
        window.open(fallbackUrl, '_blank', 'noopener');
      }, 500);
    });
  });
}

const emailLink = document.querySelector('#email-link');
const emailAddress = 'victoreke127@gmail.com';

if (emailLink) {
  emailLink.addEventListener('click', event => {
    event.preventDefault();

    const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;
    window.open(gmailWebUrl, '_blank', 'noopener');
  });
}

const themeToggle = document.querySelector('#theme-toggle');
const root = document.body;

const setTheme = mode => {
  const isLight = mode === 'light';
  root.classList.toggle('light-mode', isLight);
  root.classList.toggle('dark-mode', !isLight);
  if (themeToggle) {
    themeToggle.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  }
};

const storedTheme = localStorage.getItem('theme');
const defaultTheme = storedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
setTheme(defaultTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = root.classList.contains('light-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  });
}

const seeWorkButton = document.querySelector('#see-work-button');
const seeWorkButtonClasses = ['see-work-color-1', 'see-work-color-2', 'see-work-color-3', 'see-work-color-4'];
let seeWorkColorIndex = 0;

if (seeWorkButton) {
  seeWorkButton.classList.add(seeWorkButtonClasses[seeWorkColorIndex]);
  seeWorkButton.addEventListener('click', event => {
    event.preventDefault();
    seeWorkButton.classList.remove(seeWorkButtonClasses[seeWorkColorIndex]);
    seeWorkColorIndex = (seeWorkColorIndex + 1) % seeWorkButtonClasses.length;
    seeWorkButton.classList.add(seeWorkButtonClasses[seeWorkColorIndex]);

    const projectSection = document.querySelector('#projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}
