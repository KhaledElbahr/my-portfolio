import { Project } from './../models/project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'GDG 6 October',
    image: '../../../assets/images/gdg-october-logo.png',
    description: 'Google Developers Groups 6 October City are for developers who are interesting Google\'s Developer technology, everything from the android, App engine, google chrome platforms, product APIs like the maps API, YouTube API, google calendar API.',
    features: ['Introduction about GDG Community', 'OUR UPCOMING EVENTS', 'OUR PREVIOUS EVENTS', 'OUR AMAZING TEAM', 'OUR SPONSORS', 'OUR PARTNERS', 'CONTACT US'],
    tech: ['html', 'css', 'js', 'jQuery', 'bootstrap', 'Font Awesome']
  },
  {
    id: 2,
    title: 'IEEE KSB',
    image: '../../../assets/images/ieee-ksb-logo.png',
    description: 'I\'m the Front-End developer responsbile for building a website for our team IEEE KSB which will has two modules User module (an overview about us, our events, team members, join us, …etc.) and others for Admin (a managment system for the website). The goal of that website is to increase our publicity and inspire a global community through IEEE’s highly cited publications, conferences, technology standards, and professional and educational activities. It will coming soon, we are in the Deployment Phase.',
    features: ['Introduction about IEEE KSB Community', 'OUR PREVIOUS EVENTS', 'Last Articles', 'OUR VOLUNTEERS', 'OUR PARTNERS', 'CONTACT US'],
    tech: ['Angular', 'HTML5', 'Scss', 'TyspeScript', 'material UI']
  },
  {
    id: 3,
    title: 'FLMarket',
    image: '../../../assets/images/FLMarket-logo.png',
    description: 'FLMarket is an online platform for super markets which connect the ordinary. Our goal was to make a website which includes supermarkets in many areas as the customer visit the website, he will see all the supermarkets available in his area and he will be able to order items from any supermarket and see his order statue at any time.',
    features: ['Find what supermarket sells the items you are looking for', 'Buy what you need anywhere you are', 'Track your order and get it to your doorstep', 'Download our free app for online groceries shopping', 'Current Super Markets', 'CONTACT US'],
    tech: ['Html5', 'Css3', 'js', 'jQuery', 'bootstrap', 'Font Awesome']
  },
  {
    id: 4,
    title: 'Super Market',
    image: '../../../assets/images/super-market-logo.png',
    description: 'Super Market was a project for college that test our learning curve for web development. In this website you can search for the items you need, navegiate between Categories, Buy what you need, Enjoy with more Offers and CONTACT US',
    features: ['Find you are looking for', 'Buy what you need', 'Navegiate between Categories', 'Enjoy with Current Offers', 'CONTACT US'],
    tech: ['Html5', 'Css3', 'js', 'jQuery', 'bootstrap', 'Font Awesome']
  },
  {
    id: 5,
    title: 'Blood Bank',
    image: '../../../assets/images/blood-bank-logo.png',
    description: 'This\'s my graduation project. This project is developed to manage the blood stock in the “Blood Bank for Kafr El-Sheikh Unversity”. The system allow user to add new blood and manage blood details in the database. Also, it allows to add new Blood Donor and manage its details in the database. Blood stock reports and alert if there is lack of blood bottles. The goal of blood management system is to ensure all the acceptors and donors to find what they want in their need of blood by make full use of our Human wealth in the Unversity. Lack of blood groups, especially rare species. In this project mainly 4 modules are there: Hospital staff Administration. Blood Bank staff Administration, Donors,	Doctors.',
    features: ['Blood donation management', 'Blood safety', 'Blood Reports',
    'Detect Blood expiration date', 'Blood transfusion management', 'Blood donor’s data management', 'Emergency issues of blood'],
    tech: ['Angular', 'HTML5', 'Scss', 'TyspeScript', 'material UI']
  },
  {
    id: 6,
    title: 'ShareDwa',
    image: '../../../assets/images/ShareDwa-logo.png',
    description: 'Share Dwa is an application to donate for the extra medicine to save the huge amounts of wasted medicine Also, we are aim to create a community from the donators and increase the awareness of the wasted medicine and how’s this might be a critical action in person life.',
    features: ['Request pickup to donate with the unneeded medicine to specific NGO', 'Search for medicine', 'Check the requested medicine in the social media', 'Deliver the requests depend on demand and the covering area', 'Tracking the pickup order state'],
    tech: ['.NET', 'MVC']
  }
];

