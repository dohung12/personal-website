import { useState } from 'react';
import styled from 'styled-components';
import { ProjectProps } from '../utils/projects';
import { FaHome, FaGithub, FaEye } from 'react-icons/fa';

import ProjectModal from './ProjectModal';
import StacksContainer from './StacksContainer';

const Wrapper = styled.div`
  border-radius: var(--border-radius);
  box-shadow: 0 5px 15px rgb(0 0 0 / 10%);

  :hover {
    box-shadow: 0 5px 15px rgb(0 0 0 / 30%);
    transform: scale(1.02);
    transition: var(--transition);
  }

  .project-container {
    position: relative;

    img {
      border-top-left-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
      border-bottom: 3px solid var(--contrast);
    }

    .project-icon {
      position: absolute;
      font-size: 1.75rem;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      background: var(--primary);
      width: 4rem;
      height: 4rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
      color: #fff;
      border: 0.375rem solid var(--contrast);
    }
  }

  .project-details {
    padding: 2rem 1.5rem;
    .title {
      margin-bottom: 0;
    }

    .desc {
      height: 100px;
    }

    .show-more {
    }
  }

  .project-footer {
    display: flex;
    justify-content: space-around;
    color: var(--secondary);
    margin-bottom: 1rem;
    svg {
      color: var(--contrast);
    }

    a {
      text-transform: capitalize;
      color: var(--primary);
      transition: var(--transition);
      justify-self: end;
    }
  }
`;

const SingleProject = (props: ProjectProps) => {
  const { name, images, desc, stack, livePreview, viewCode } = props;
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Wrapper>
        <div className='project-container'>
          <img src={images[0]} alt='single project' />
          <a
            href={livePreview}
            className='project-icon'
            target='_blank'
            rel='noreferrer'
          >
            <FaHome />
          </a>
        </div>
        <div className='project-details'>
          <h4 className='title'>{name}</h4>
          <StacksContainer stacks={stack} limit={3} />
          <p className='desc'>{desc}</p>

          <button onClick={toggleModal} className='show-more outline'>
            Show More
          </button>
        </div>
        <div className='project-footer'>
          <div>
            <span>
              <FaGithub />
            </span>
            <a href={viewCode} target='_blank' rel='noreferrer'>
              source code
            </a>
          </div>
          <div>
            <span>
              <FaEye />
            </span>
            <a href={livePreview} target='_blank' rel='noreferrer'>
              live preview
            </a>
          </div>
        </div>
      </Wrapper>
      {showModal && (
        <ProjectModal
          dataTarget={name}
          showModal={showModal}
          toggleModal={toggleModal}
          projectProps={props}
        />
      )}
    </>
  );
};

export default SingleProject;
