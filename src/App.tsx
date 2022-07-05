import { useThemeContext } from './context/themeContext';
import {
  Navbar,
  AboutBlock,
  Contact,
  Projects,
  SkillsBlock,
} from './components/index';

function App() {
  const { theme } = useThemeContext();
  return (
    <main>
      <Navbar />
      <AboutBlock />
      <SkillsBlock />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
