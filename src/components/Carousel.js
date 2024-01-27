import { useEffect, useState } from 'react';
import { shortList, list, longList } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styled from 'styled-components';
import { allWheelsPublic, slider } from '../features/AllWheels';
import { useDispatch, useSelector } from 'react-redux';

const Carousel = () => {
  const dispatch = useDispatch();
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);
useEffect(() => {
  dispatch(slider())
  dispatch(allWheelsPublic())
}, [])
const { isLoading, sliderWheel, } = useSelector((store) => store.allWheel);
// console.log(isLoading, wheels);
  



  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <Wrapper>
      <section className='slider-container'>
      {sliderWheel.map((person, personIndex) => {
        const { _id, images, company, price, type, name } = person;
        // console.log(images?.[0]?.url);
        return (
          <article
            className='slide'
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? 'visible' : 'hidden',
            }}
            key={_id}
          >
            <img src={images?.[0]?.url} alt={name} className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='text'>{type}</p>
            <p className='pr'>{price}</p>
            {/* <FaQuoteRight className='icon' /> */}
          </article>
        );
      })}
      <button type='button' className='prev' onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type='button' className='next' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
    </Wrapper>
  );
};


const Wrapper = styled.main`
background : white;
/* margin-top : -100px; */
padding-top : 2px;
/* background : black; */
.slider-container {
  margin: 0 auto;
  margin-top: 8rem;
  width: 80vw;
  max-width: 800px;
  position: relative;
  height: 450px;
  overflow: hidden;
}
.slide {
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: var(--transition);
}
.person-img {
  background : transparent;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: contain;
  border: 4px solid var(--primary-200);
  box-shadow: var(--shadow-3);
}

.name {
  text-transform: uppercase;
  color: var(--primary-500);
  margin-bottom: 0.75rem;
}
.title {
  text-transform: capitalize;
  color: var(--grey-700);
  margin-bottom: 0.75rem;
}
.text {
  max-width: 35em;
  margin: 0 auto;
  margin-top: 2rem;
  line-height: 2;
  color: var(--grey-500);
}
.icon {
  font-size: 3rem;
  margin-top: 1rem;
  color: var(--primary-500);
}
.prev,
.next {
  position: absolute;
  top: 200px;
  background: var(--grey-500);
  color: var(--white);
  width: 1.25rem;
  height: 1.25rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  border-radius: var(--borderRadius);
  cursor: pointer;
  transition: var(--transition);
}
.prev:hover,
.next:hover {
  background: var(--primary-500);
}
.prev {
  left: 0;
}
.next {
  right: 0;
}
.pr{
  max-width: 35em;
  margin: 0 auto;
  margin-top: 2rem;
  line-height: 2;
  color: green;
}

@media screen and (min-width: 800px) {
  .text {
    max-width: 45em;
  }
  .prev,
  .next {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
}
.next-slide {
  transform: translateX(100%);
}

/* ============= Slick Carousel =============== */

.slick-container {
  margin: 0 auto;
  margin-top: 10rem;
  width: 80vw;
  max-width: 800px;
  text-align: center;
}
.slick-slide img {
  display: inline-block;
}

.slick-prev::before {
  color: var(--primary-500) !important;
}
.slick-next::before {
  color: var(--primary-500) !important;
}
`
export default Carousel;
