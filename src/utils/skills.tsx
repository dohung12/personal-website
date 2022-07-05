import html5 from '../assets/images/html5.png';
import css3 from '../assets/images/css3.png';
import cloudinary from '../assets/images/cloudinary.png';
import express from '../assets/images/express.png';
import javascript from '../assets/images/javascript.png';
import mongodb from '../assets/images/mongodb.png';
import mongoose from '../assets/images/mongoose.png';
import nodejs from '../assets/images/nodejs.png';
import passportjs from '../assets/images/passportjs.png';
import react from '../assets/images/react.png';

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
