import { FaEye, FaGithub } from 'react-icons/fa';
import styled from 'styled-components';
import { ProjectProps } from '../utils/projects';
import ImageCarousel from './ImageCarousel';
import StacksContainer from './StacksContainer';

const Wrapper = styled.dialog`
  article {
    width: 90%;
    max-width: unset;
    height: max-content;
  }

  .project-container {
    display: grid;
    gap: 1rem;

    @media (min-width: 600px) {
      grid-template-columns: 3fr 1fr;
    }
  }

  .btn-container {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    margin-bottom: 0.5rem;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

interface Props {
  toggleModal: () => void;
  dataTarget: string;
  showModal: boolean;
  projectProps: ProjectProps;
}

const ProjectModal = ({
  toggleModal,
  dataTarget,
  showModal,
  projectProps,
}: Props) => {
  const { name, images, desc, stack, livePreview, viewCode } = projectProps;

  return (
    <Wrapper open={showModal}>
      <article>
        <button
          aria-label='Close'
          className='close contrast'
          data-target='modal-example'
          onClick={toggleModal}
        ></button>

        <div className='project-container'>
          <ImageCarousel images={images} />
          <div>
            <hgroup>
              <h3>{name}</h3>
              <p>
                <strong>Description: </strong>
                {desc}
              </p>
              <strong> Stacks:</strong>
              <StacksContainer stacks={stack} />
            </hgroup>
            <div className='btn-container'>
              <a href={viewCode} role='button' className='contrast outline'>
                <FaGithub />
              </a>
              <a href={livePreview} role='button' className='contrast outline'>
                <FaEye />
              </a>
            </div>
          </div>
        </div>

        <button
          className='secondary'
          data-target={dataTarget}
          onClick={toggleModal}
        >
          Close
        </button>
      </article>
    </Wrapper>
  );
};

export default ProjectModal;
