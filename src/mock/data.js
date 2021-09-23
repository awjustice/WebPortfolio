import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alan Justice {webDev}', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'frontend developer portfolio react web javascript wordpress html css gatsby next', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Alan Justice',
  name: 'Alan Justice {webDeveloper}',
  subtitle: '[REACT, WORDPRESS, GATSBY]',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: 'Self taught web developer in search of employment',
  paragraphTwo: 'SKILLS',
  paragraphThree: 'React, Javascript, HTML, CSS, Git, Wordpress',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ApprovalAppScreenshot.png',
    title: 'VOTING APP',
    info: 'Vanilla Javascript app showing benefits of approval voting',
    info2: '',
    url: 'https://awjustice.github.io/ResponsiveApprovalApp/',
    repo: 'https://github.com/awjustice/ResponsiveApprovalApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'TTautoScreenshot.png',
    title: 'CAR SITE',
    info: 'React site for local car repair shop',
    info2: '',
    url: 'https://awjustice.github.io/ttautorepair/',
    repo: 'https://github.com/awjustice/ttautorepair', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'CAapprovesLogo.png',
    title: 'CaliforniaApproves.org',
    info: 'Wordpress & Elementor',
    info2: '',
    url: 'californiaapproves.org',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Portfolio.png',
    title: 'PORTFOLIO',
    info: 'This site built with Gatsby',
    info2: '',
    url: 'https://alanjustice.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Contact me',
  btn: 'awjustice@gmail.com',
  email: 'awjustice@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alan-justice-44628b133/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/awjustice',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};