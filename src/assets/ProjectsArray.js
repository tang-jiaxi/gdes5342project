import govtechCoverMobile from './govtechCoverMobile.svg';
import govtechCover from './govtechCover.png';
import saseCoverMobile from './saseCoverMobile.svg';
import saseCover from './saseCover.png';
import portfolioCover from './portfolioCover.svg';
import portfolioCoverMobile from './portfolioCoverMobile.svg';
import radioKCover from './radioKCover.svg';
import radioKCoverMobile from './radioKCoverMobile.svg';
import wtlCover from './wtlCover.svg';
import wtlCoverMobile from './wtlCoverMobile.svg';

export const ProjectsArray = [
  {
    name: "GovTech",
    imageMobile: govtechCoverMobile,
    imagePC: govtechCover,
    imageAlt: "GovTech Case Study Cover",
    title: 'FlexiList Product Development',
    tags: ['UX', 'CS', 'Work'],
    hashtags: ['#Figma', '#React', '#JavaScript', '#TypeScript', '#Illustrator'],
    link: 'govtech',
    index: 0,
  },
  {
    name: "SASE",
    imageMobile: saseCoverMobile,
    imagePC: saseCover,
    imageAlt: "SASE Case Study Cover",
    title: 'Front-end Web Development',
    tags: ['CS', 'School'],
    hashtags: ['#React', '#JavaScript', '#TypeScript'],
    link: 'sase',
    index: 1,
  },
  {
    name: "Portfolio",
    imageMobile: portfolioCoverMobile,
    imagePC: portfolioCover,
    imageAlt: "Portfolio Case Study Cover",
    title: 'Front-end Web Development',
    tags: ['UX', 'CS', 'School'],
    hashtags: ['#Figma', '#React', '#Next.js', 'Tailwind', 'TypeScript'],
    link: 'portfolio',
    index: 3,
  },
  {
    name: "RadioK",
    imageMobile: radioKCoverMobile,
    imagePC: radioKCover,
    imageAlt: "RadioK Case Study Cover",
    title: 'Podcast Website Redesign',
    tags: ['UX', 'Client'],
    hashtags: ['#Figma', '#UserPersona', '#UserJourney'],
    link: 'radiok',
    index: 4,
  },
  {
    name: "WTL",
    imageMobile: wtlCoverMobile,
    imagePC: wtlCover,
    imageAlt: "WTL Case Study Cover",
    title: 'Fashion Designer App Design',
    tags: ['UX', 'Work'],
    hashtags: ['#Figma', '#Illustrator', '#Research'],
    link: 'wtl',
    index: 5,
  }
];