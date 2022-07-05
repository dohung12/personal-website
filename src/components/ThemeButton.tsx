import { useThemeContext } from '../context/themeContext';
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
    <label htmlFor='switch'>
      <input
        type='checkbox'
        name='switch'
        role='switch'
        onClick={handleClick}
      />
      Switch Theme
    </label>
  );
};

export default ThemeButton;
