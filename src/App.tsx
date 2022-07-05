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
