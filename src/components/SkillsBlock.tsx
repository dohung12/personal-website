// import React from 'react';
import styled from 'styled-components';
import { frontEndSkills, backEndSkills } from '../utils/skills';

const Wrapper = styled.article`
  text-transform: capitalize;

  .skills-container {
    display: flex;
    gap: 1rem;
  }

  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    img {
      width: 6rem;
    }
  }
`;

const SkillsBlock = () => {
  return (
    <Wrapper id='skills'>
      <h2>Skills</h2>
      <h4>Front-end</h4>
      <div className='skills-container'>
        {frontEndSkills.map((skill) => {
          return (
            <div className='skill' key={skill.name}>
              <img src={skill.icon} alt='skill icon' />
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
      <h4>Back-end</h4>
      <div className='skills-container'>
        {backEndSkills.map((skill) => {
          return (
            <div className='skill' key={skill.name}>
              <img src={skill.icon} alt='skill icon' />
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default SkillsBlock;
