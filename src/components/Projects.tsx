import styled from 'styled-components';
import { projects } from '../utils/projects';
import SingleProject from './SingleProject';

const Wrapper = styled.div`
  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 3rem 1rem;
  }
`;

const Projects = () => {
  return (
    <Wrapper id='projects'>
      <h2>Featured Projects</h2>
      <div className='projects-container'>
        {projects.map((project) => {
          return <SingleProject key={project.name} {...project} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Projects;
