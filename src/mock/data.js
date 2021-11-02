import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alan Justice', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'frontend developer portfolio react web javascript wordpress html css gatsby next', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Alan Justice San Diego Web Developer',
  name: 'Alan Justice {webDeveloper}',
  subtitle: '[Web Dev, Content Editor, Email Marketer]',
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
    img: 'ApprovalAppScreenshot.png',
    title: 'VOTING APP',
    info: 'Javascript app showing pros of Approval Voting',
    info2: '',
    url: 'https://awjustice.github.io/ResponsiveApprovalApp/',
    repo: 'https://github.com/awjustice/ResponsiveApprovalApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'AutoShop.png',
    title: 'AUTO SHOP',
    info: 'React homepage',
    info2: '',
    url: 'https://awjustice.github.io/autoshop/',
    repo: 'https://github.com/awjustice/autoshop', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'California Approves Banner.png',
    title: 'CALIFORNIA APPROVES',
    info: 'Wordpress site for political organization',
    info2: '',
    url: 'https://californiaapproves.org',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Portfolio.png',
    title: 'PORTFOLIO',
    info: 'Built with Gatsby',
    info2: '',
    url: 'https://alanjustice.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'CONTACT',
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
