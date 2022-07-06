import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  .stack {
    background-color: var(--primary);
    color: var(--primary-inverse);

    padding: 0.15rem 0.35rem;
    border-radius: var(--border-radius);
    text-transform: uppercase;
    font-size: 0.66rem;
    letter-spacing: 2px;
    display: block;
    margin: 0.25rem 0.25rem 0;
  }
`;

interface Props {
  stacks: string[];
  limit?: number;
}

const StacksContainer = ({ stacks, limit }: Props) => {
  let result = [];

  if (limit) {
    for (let idx = 0; idx < 3; idx++) {
      const element = stacks[idx];
      result.push(
        <p key={element} className='stack'>
          {element}
        </p>
      );
    }
  } else {
    result = stacks.map((element) => {
      return (
        <p key={element} className='stack'>
          {element}
        </p>
      );
    });
  }

  return <Wrapper>{result}</Wrapper>;
};

export default StacksContainer;
