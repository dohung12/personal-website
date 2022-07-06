import ThemeButton from './ThemeButton';
import Logo from './Logo';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import SmallNav from './SmallNav';
const Wrapper = styled.nav`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding-right: 1rem;
  height: var(--nav-height);
  background-color: var(--background-color);

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 998;

  .logo {
    height: 4rem;
    padding: 0;
  }

  .menu-bar {
    display: inline-block;
    padding-left: 1rem;
    svg {
      width: 2rem;
      height: 2rem;
    }
    @media (min-width: 600px) {
      display: none;
    }
  }

  .link {
    display: none;

    @media (min-width: 600px) {
      display: inline-block;
    }
  }
`;

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Wrapper>
        <ul className='menu-bar'>
          <li>
            <FaBars onClick={toggleSidebar} />
          </li>
        </ul>
        <ul>
          <li className='logo'>
            <Logo />
          </li>
        </ul>

        <ul>
          <li className='link'>
            <a href='#about'>About</a>
          </li>
          <li className='link'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='link'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='link'>
            <a href='#contact'>Contact</a>
          </li>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </Wrapper>
      {showSidebar && (
        <SmallNav showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      )}
    </>
  );
};

export default Navbar;
