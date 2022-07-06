import styled from 'styled-components';

const Wrapper = styled.dialog`
  article {
    width: 60%;
  }
`;

interface Props {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

const SmallNav = ({ showSidebar, toggleSidebar }: Props) => {
  return (
    <Wrapper open={showSidebar}>
      <article>
        <button
          aria-label='Close'
          className='close contrast'
          data-target='modal-example'
          onClick={toggleSidebar}
        ></button>
        <aside>
          <nav>
            <ul>
              <li>
                <a href='#about' onClick={toggleSidebar}>
                  About
                </a>
              </li>
              <li>
                <a href='#skills' onClick={toggleSidebar}>
                  Skills
                </a>
              </li>
              <li>
                <a href='#projects' onClick={toggleSidebar}>
                  Projects
                </a>
              </li>
              <li>
                <a href='#contact' onClick={toggleSidebar}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <button className='secondary' onClick={toggleSidebar}>
          Close
        </button>
      </article>
    </Wrapper>
  );
};

export default SmallNav;
