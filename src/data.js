// ============================================================
//  EDIT THIS FILE to update links, contact details and projects.
//  Leave a value as '' (empty string) until you have the real one.
//  Empty values render as clearly marked placeholders on the page.
// ============================================================

export const profile = {
  name: 'Chetan Tomar',
  initials: 'CT',
  title: 'Full Stack Developer | React.js & Node.js',
  tagline:
    'I build responsive web interfaces and backend applications with a focus on usability, API integration, authentication and collaborative features.',
  // TODO: add your real links below
  github: 'https://github.com/chetan-tomar03',
  linkedin: 'https://www.linkedin.com/in/chetan-tomar03/',
  email: 'tomarharshit205@gmail.com',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const about = [
  "I'm an early-career developer with a strong interest in building for the web. I enjoy turning ideas into clear, usable interfaces and the backend logic that supports them.",
  'So far I have worked on frontend interfaces with React.js, REST APIs with Node.js and Express.js, database-backed applications using MongoDB, and collaborative web features such as real-time document editing.',
  "I'm looking for frontend and full-stack opportunities where I can keep learning, contribute to real products and grow as an engineer.",
]

export const skillGroups = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React.js'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT authentication'] },
  { title: 'Database', items: ['MongoDB'] },
  { title: 'Libraries & Tools', items: ['Axios', 'Yjs', 'WebSockets', 'Git', 'GitHub'] },
]

// For each project:
//   repoUrl : GitHub repository URL ('' = not added yet)
//   liveUrl : deployed demo URL ('' = not deployed / not added)
//   endpoints: optional [method, path] pairs shown when there is no screenshot
//   image   : optional screenshot path, e.g. '/screenshots/gallery.webp'
//             (put the file in /public/screenshots). '' shows a placeholder.
export const projects = [
  {
    title: 'Collaborative Document Editor',
    featured: true,
    description:
      'A collaborative document editing application with real-time synchronization, authentication and document management.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Yjs', 'WebSockets', 'JWT'],
    repoUrl: 'https://github.com/karanjoshi-kj/INFOTACT-PROJECT',
    liveUrl: '',
    image: '/screenshots/doc-editor.webp',
  },
  {
    title: 'Notes Management System',
    description:
      'A backend application implementing create, read, update and delete operations for notes.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    repoUrl: 'https://github.com/chetan-tomar03/backend-notes-application',
    liveUrl: '',
    image: '',
    // Shown instead of a screenshot (this project has no UI). Routes taken from the repo README.
    endpoints: [
      ['POST', '/notes'],
      ['GET', '/notes'],
      ['GET', '/notes/:id'],
      ['PUT', '/notes/:id'],
      ['DELETE', '/notes/:id'],
    ],
  },
  {
    title: 'React Image Gallery',
    description:
      'A React application that fetches images from an external API and displays them in a gallery.',
    tags: ['React.js', 'Axios', 'Picsum API', 'useState', 'useEffect'],
    repoUrl: 'https://github.com/chetan-tomar03/React-API-Image-Gallery',
    liveUrl: '',
    image: '/screenshots/image-gallery.webp',
  },
  {
    title: 'Weather App',
    description:
      'A weather application that retrieves and displays weather information using an API.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    repoUrl: 'https://github.com/chetan-tomar03/Weather-App',
    liveUrl: '',
    image: '/screenshots/weather-app.webp',
  },
  {
    title: 'Expense Tracker',
    description: 'A React project for entering and managing expense data.',
    tags: ['React.js', 'JavaScript'],
    repoUrl: 'https://github.com/chetan-tomar03/Expense-App',
    liveUrl: '',
    image: '/screenshots/expense-tracker.webp',
  },
]
