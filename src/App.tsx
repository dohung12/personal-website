import styled from 'styled-components';
import {
  Navbar,
  AboutBlock,
  Contact,
  Projects,
  SkillsBlock,
} from './components/index';

const Wrapper = styled.main`
  .main {
    margin: 1rem;
    margin-top: calc(1rem + var(--nav-height));
    @media (min-width: 600px) {
      margin: 3rem;
      margin-top: calc(3rem + var(--nav-height));
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Navbar />
      <div className='main'>
        <AboutBlock />
        <SkillsBlock />
        <Projects />
        <Contact />
      </div>
    </Wrapper>
  );
}

export default App;
