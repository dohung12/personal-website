import ThemeButton from './ThemeButton';
import Logo from './Logo';
import styled from 'styled-components';

const Wrapper = styled.nav`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding-right: 1rem;
  height: var(--nav-height);
  background-color: var(--background-color);
  z-index: 1000;

  position: fixed;
  top: 0;
  width: 100%;

  .logo {
    height: 4rem;
    padding: 0;
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <ul>
        <li className='logo'>
          <Logo />
        </li>
      </ul>

      <ul>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#skills'>Skills</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
        <li>
          <ThemeButton />
        </li>
      </ul>
    </Wrapper>
  );
};

export default Navbar;
