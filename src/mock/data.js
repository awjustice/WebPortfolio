import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alan Justice HTML Email Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'frontend developer portfolio react web javascript wordpress html css gatsby next email html marketer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Alan Justice San Diego HTML Email Developer',
  name: 'Alan Justice {emailDeveloper}',
  subtitle: '--------------------------------------------------------------------',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: 'Self taught web developer',
  paragraphTwo: 'SKILLS',
  paragraphThree: 'React, Javascript, HTML, CSS, Git, Wordpress',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'AutoShop.png',
    title: 'AUTO SHOP',
    info: 'React',
    info2: '',
    url: 'https://awjustice.github.io/autoshop/',
    repo: 'https://github.com/awjustice/autoshop', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ApprovalAppScreenshot.png',
    title: 'VOTING APP',
    info: 'Vanilla Javascript',
    info2: '',
    url: 'https://awjustice.github.io/ResponsiveApprovalApp/',
    repo: 'https://github.com/awjustice/ResponsiveApprovalApp', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'California Approves Banner.png',
    title: 'CALIFORNIA APPROVES',
    info: 'Wordpress',
    info2: '',
    url: 'https://californiaapproves.org',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Portfolio.png',
    title: 'PORTFOLIO',
    info: 'Gatsby',
    info2: '',
    url: 'https://alanjustice.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '-CONTACT-',
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
