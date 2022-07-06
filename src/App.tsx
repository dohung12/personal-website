import styled from 'styled-components';
import {
  Navbar,
  AboutBlock,
  Contact,
  Projects,
  SkillsBlock,
} from './components/index';

const Wrapper = styled.main`
  .content {
    margin: 3rem;
    margin-top: calc(3rem + var(--nav-height));
  }
`;

function App() {
  return (
    <Wrapper>
      <Navbar />
      <div className='content'>
        <AboutBlock />
        <SkillsBlock />
        <Projects />
        <Contact />
      </div>
    </Wrapper>
  );
}

export default App;
