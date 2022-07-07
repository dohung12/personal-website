import WMM_categoryReport from '../assets/project-preview/wmm/category-report.png';
import WMM_createNewExpense from '../assets/project-preview/wmm/create-new-expense.png';
import WMM_dashboard from '../assets/project-preview/wmm/dashboard.png';
import WWW_monthlyReport from '../assets/project-preview/wmm/monthly-report.png';
import WWW_searchExpense from '../assets/project-preview/wmm/search-expense.png';

import OD_dashboard from '../assets/project-preview/odin-book/dashboard.png';
import OD_landing from '../assets/project-preview/odin-book/landing.png';
import OD_post from '../assets/project-preview/odin-book/post.png';
import OD_searchPerson from '../assets/project-preview/odin-book/searchPerson.png';
import OD_searchPost from '../assets/project-preview/odin-book/searchPost.png';

import WIW_dashboard from '../assets/project-preview/wiw/dashboard.png';
import WIW_lvl1 from '../assets/project-preview/wiw/level-preview.png';
import WIW_lvl2 from '../assets/project-preview/wiw/level2-preview.png';

export interface ProjectProps {
  name: string;
  images: string[];
  desc: string;
  stack: string[];
  livePreview: string;
  viewCode: string;
}

const projects: ProjectProps[] = [
  {
    name: 'Expense Tracking',
    images: [
      WMM_dashboard,
      WMM_categoryReport,
      WMM_createNewExpense,
      WWW_monthlyReport,
      WWW_searchExpense,
    ],
    desc: 'A MERN app to record spending history, and get reports based on different categories.',
    stack: [
      'react',
      'node',
      'express',
      'mongoose',
      'passportjs',
      'mongodb',
      'cloudinary',
    ],
    livePreview: 'https://wmm-276.herokuapp.com/landing',
    viewCode: 'https://github.com/dohung12/mern-expenses-tracker',
  },
  {
    name: 'Odin Book',
    images: [OD_dashboard, OD_landing, OD_post, OD_searchPerson, OD_searchPost],
    desc: 'A MERN app where users can make new friends, create posts and interact with each other.',
    stack: [
      'react',
      'node',
      'express',
      'mongoose',
      'passportjs',
      'mongodb',
      'cloudinary',
    ],
    livePreview: 'https://odin-book.herokuapp.com/landing',
    viewCode: 'https://github.com/dohung12/odin-book',
  },
  {
    name: "Where's Waldo? ",
    images: [WIW_dashboard, WIW_lvl1, WIW_lvl2],
    desc: 'A game in which players are challenged to spot Wally, hidden in a large picture that contains numerous characters.',
    stack: ['react', 'typescript', 'firebase'],
    livePreview: 'https://dohung12.github.io/Where-is-waldo/',
    viewCode: 'https://github.com/dohung12/Where-is-waldo',
  },
];

export { projects };
