import React from 'react';
import styled from 'styled-components'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import SwiperCore, {EffectCoverflow, Pagination, Navigation} from 'swiper';
import fitoNyash from '../img/fito-nyash.jpg'
import indokach from '../img/indokach.jpg'
import indys from '../img/indys.jpg'


SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Slider = () => {

    return (
        <Section>
            <h5>Our Instructors</h5>
            <h1>Meet Our Extreamly Talented Trainers</h1>
            <Wrapper>
                <Swiper
                    className={'swipe'}
                    navigation={true}
                    effect={"coverflow"}
                    centeredSlidesBounds={true}
                    slidesPerView={3}
                    loop={true}
                    spaceBetween={'9.7%'}
                    coverflowEffect={{
                        rotate: '30',
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false
                    }}
                >
                    <SwiperSlide className={'slide'}><Block><img src={fitoNyash} alt=""/>
                        <div className="name"><h3>Monica Sellesa</h3><h4>Nutrition Expert</h4></div>
                    </Block></SwiperSlide>
                    <SwiperSlide className={'slide'}><Block><img className={'top'} src={indys} alt=""/>
                        <div className="name"><h3>Jhonson Russoe</h3><h4>Meditation Expert</h4></div>
                    </Block></SwiperSlide>
                    <SwiperSlide className={'slide'}><Block><img src={indokach} alt=""/>
                        <div className="name"><h3>Jason Holder</h3><h4>Cardio Expert</h4></div>
                    </Block></SwiperSlide>
                    <SwiperSlide className={'slide'}><Block><img src={fitoNyash} alt=""/>
                        <div className="name"><h3>Monica Sellesa</h3><h4>Nutrition Expert</h4></div>
                    </Block></SwiperSlide>
                    <SwiperSlide className={'slide'}><Block><img src={indokach} alt=""/>
                        <div className="name"><h3>Jason Holder</h3><h4>Cardio Expert</h4></div>
                    </Block></SwiperSlide>
                    <SwiperSlide className={'slide'}><Block><img className={'top'} src={indys} alt=""/>
                        <div className="name"><h3>Jhonson Russoe</h3><h4>Meditation Expert</h4></div>
                    </Block></SwiperSlide>
                    <SwiperSlide className={'slide'}><Block><img src={indokach} alt=""/>
                        <div className="name"><h3>Jason Holder</h3><h4>Cardio Expert</h4></div>
                    </Block></SwiperSlide>
                </Swiper>
            </Wrapper>
        </Section>
    );
};

export default Slider;

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 6vw 0 11.563vw 0;
  h5 {
    font-size: 1.625vw;
    color: var(--red);
  }
  h1 {
font-size: 2.750vw;
    width: 27.813vw;
    color: var(--dark);
    text-align: center;
    font-weight: bold;
    margin: 1.875vw 0 0 0;
    line-height: 130%;
  }
`
const Wrapper = styled.div`
  width: 65vw;
  height: 31.250vw;
  .swipe {
    width: 100%;
    height: 36vw;
    //background-color: aqua;
    display: flex;
    justify-content: space-between;
    padding: 4vw 0;
  }

  .slide {
    width: 16.625vw;
    height: 31.250vw;
    margin: 0;

  }
`
const Block = styled.div`
  width: 17.625vw;
  height: 29.25vw;
  border-radius: 1.250vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-size: 40px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }

  .name {
    position: absolute;
    width: 100%;
    height: 8.500vw;
    bottom: 0;
    left: 0;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: Alegreya-Regular, sans-serif;
    
    h4 {
      font-size: 1.250vw;
    }

    h3 {
      font-size: 1.800vw;
      line-height: 160%;
      font-weight: 700;
    }
  }
`