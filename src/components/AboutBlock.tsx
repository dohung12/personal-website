import styled from 'styled-components';
import main from '../assets/main.svg';

const Wrapper = styled.section`
  height: calc(100vh - var(--nav-height));
  img {
    display: none;

    @media (min-width: 600px) {
      display: block;
    }
  }

  .content {
    text-align: center;
    align-self: center;
    margin: 0 2rem;

    h6 {
      text-align: justify;
    }
  }
`;

const AboutBlock = () => {
  return (
    <Wrapper id='about' className='grid'>
      <img src={main} alt='main' />
      <div className='content'>
        <hgroup>
          <h2>Hi, I'm Do Hung</h2>
          <h6>
            I am a web developer. I love Javascript (and its endless list of
            frameworks). I enjoy coding and the challenge of learning something
            new everyday.
          </h6>
        </hgroup>
        <a href='#contact' role={'button'}>
          Get In Touch
        </a>
      </div>
    </Wrapper>
  );
};

export default AboutBlock;
