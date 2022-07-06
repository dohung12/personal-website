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
    name: "Where's My Money?",
    images: [
      WMM_dashboard,
      WMM_categoryReport,
      WMM_createNewExpense,
      WWW_monthlyReport,
      WWW_searchExpense,
    ],
    desc: 'A MERN app to record spending history.',
    stack: ['react', 'node', 'express', 'mongoose', 'passportjs', 'mongodb'],
    livePreview: 'https://wmm-276.herokuapp.com/landing',
    viewCode: 'https://github.com/dohung12/mern-expenses-tracker',
  },
  {
    name: 'Odin Book',
    images: [OD_dashboard, OD_landing, OD_post, OD_searchPerson, OD_searchPost],
    desc: "A MERN Application, call Odin Book. Where user can making new friends, create posts and comment on friends' posts.",
    stack: ['react', 'node', 'express', 'mongoose', 'passportjs', 'mongodb'],
    livePreview: 'https://odin-book.herokuapp.com/landing',
    viewCode: 'https://github.com/dohung12/odin-book',
  },
  {
    name: "Where's Waldo? ",
    images: [WIW_dashboard, WIW_lvl1, WIW_lvl2],
    desc: 'Players are challenged to find a character named Wally, hidden in the a large picture that contains numerous characters.',
    stack: ['react', 'typescript', 'firebase'],
    livePreview: 'https://dohung12.github.io/Where-is-waldo/',
    viewCode: 'https://github.com/dohung12/Where-is-waldo',
  },
];

export { projects };
