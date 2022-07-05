import html5 from '../assets/icons/html5.png';
import css3 from '../assets/icons/css3.png';
import cloudinary from '../assets/icons/cloudinary.png';
import express from '../assets/icons/express.png';
import javascript from '../assets/icons/javascript.png';
import mongodb from '../assets/icons/mongodb.png';
import mongoose from '../assets/icons/mongoose.png';
import nodejs from '../assets/icons/nodejs.png';
import passportjs from '../assets/icons/passportjs.png';
import react from '../assets/icons/react.png';

interface SkillInterface {
  name: string;
  icon: string;
}

const frontEndSkills: SkillInterface[] = [
  {
    name: 'HTML',
    icon: html5,
  },
  {
    name: 'CSS',
    icon: css3,
  },
  {
    name: 'JS',
    icon: javascript,
  },
  {
    name: 'React',
    icon: react,
  },
];

const backEndSkills: SkillInterface[] = [
  {
    name: 'Node',
    icon: nodejs,
  },
  {
    name: 'Express',
    icon: express,
  },
  {
    name: 'MongoDb',
    icon: mongodb,
  },
  {
    name: 'Mongoose',
    icon: mongoose,
  },
  {
    name: 'Cloudinary',
    icon: cloudinary,
  },
  {
    name: 'passportjs',
    icon: passportjs,
  },
];
export { frontEndSkills, backEndSkills };
