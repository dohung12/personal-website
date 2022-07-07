import { BsCircleHalf } from 'react-icons/bs';
import styled from 'styled-components';
import { useThemeContext } from '../context/themeContext';

const Wrapper = styled.label`
  svg {
    color: var(--primary);
  }
`;

const ThemeButton = () => {
  const { theme, setTheme } = useThemeContext();

  const handleClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');

    if (theme === 'light') {
      document.documentElement.dataset.theme = 'dark';
    } else {
      document.documentElement.dataset.theme = 'light';
    }
  };

  return (
    <Wrapper htmlFor='switch'>
      <input
        type='checkbox'
        name='switch'
        role='switch'
        onClick={handleClick}
      />
      <BsCircleHalf />
    </Wrapper>
  );
};

export default ThemeButton;
