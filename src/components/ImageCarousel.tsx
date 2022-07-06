import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  .main-image {
    height: 600px;
    border: 2px solid var(--primary);
  }
  img {
    width: 100%;
    display: block;
    border-radius: 0.25rem;
    object-fit: cover;
    border: 1px solid var(--contrast);
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--primary);
  }
  @media (max-width: 576px) {
    .main-image {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main-image {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

interface Props {
  images: string[];
}

const ImageCarousel = ({ images }: Props) => {
  const [main, setMain] = useState(images[0]);
  return (
    <Wrapper>
      <img src={main} alt='' className='main-image ' />
      <div className='gallery'>
        {images.map((image, index) => {
          return (
            <img
              src={image}
              alt=''
              key={index}
              className={`${image === main ? 'active' : null}`}
              onClick={() => setMain(images[index])}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ImageCarousel;
