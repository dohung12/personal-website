import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';
import zalo from '../assets/icons/zalo.png';

const Wrapper = styled.article`
  text-align: center;

  .btn-container {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    svg,
    img {
      height: 3rem;
      width: 3rem;
    }
  }
`;

const Contact = () => {
  return (
    <Wrapper id='contact'>
      <hgroup>
        <h2>Contact</h2>
        <h6>Send me an email at</h6>
        <h3>dohuyhung12@gmail.com</h3>
      </hgroup>
      <h6>Reach me through</h6>
      <div className='btn-container'>
        <a
          href='https://github.com/dohung12'
          target={'_blank'}
          rel='noreferrer'
        >
          <FaGithub />
        </a>
        <a
          href='https://zalo.me/0906830600'
          target={'_blank'}
          rel='noreferrer'
          data-tooltip='Zalo'
        >
          <img src={zalo} alt='zalo' />
        </a>
      </div>
    </Wrapper>
  );
};

export default Contact;
