import React, {useState} from 'react';
import styled from 'styled-components'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css'

import SwiperCore, {Navigation, Controller, EffectFade} from 'swiper';
import childImage from '../img/learn-child.jpg'
import childImage2 from '../img/learnChildren2.jpg'
import Icon from "./assets/Icon";

SwiperCore.use([Navigation, Controller, EffectFade]);
const Testimonials = () => {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    return (

        <Section>
            <Wrapper>
                <Image>
                <Swiper modules={[Controller, EffectFade]}
                        onSwiper={setControlledSwiper}
                        draggable={false}
                        effect='fade'
                        speed={800}
                        allowTouchMove={false}>
                    <SwiperSlide>
                        <img src={childImage} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={childImage2} alt=""/>
                    </SwiperSlide>
                </Swiper>
            </Image>
            <Text>
                <h2>Testimonial</h2>
                <h1>That’s What Our Super Client Says</h1>
                <Swiper className={'text-swiper'}
                        modules={[Controller]}
                        controller={{control: controlledSwiper}}
                        spaceBetween={'13%'}
                        speed={800}
                        grabCursor={true}>
                    <TextWrap>
                        <SwiperSlide className={'text-slider'}>
                            <Wrap>
                                <h5>“Gale is an amazing trainer as well as a great person. She is so flexible when it
                                    comes to my
                                    crazy work schedule and makes sure to always fit me in. Every day she pushes me
                                    harder towards
                                    my goals.”</h5>
                                <h3>Jessica Parker</h3>
                                <p>Mariland,USA</p>
                            </Wrap>
                        </SwiperSlide>
                        <SwiperSlide className={'text-slider'}>
                            <Wrap>
                                <h5>“Gale is an amazing trainer as well as a great person. She is so flexible when it
                                    comes to my
                                    crazy work schedule and makes sure to always fit me in. Every day she pushes me
                                    harder towards
                                    my goals.”</h5>
                                <h3>Jessica Parker</h3>
                                <p>Mariland,USA</p>
                            </Wrap>
                        </SwiperSlide>
                    </TextWrap>
                </Swiper>
            </Text>
            </Wrapper>
            <DecorBlock>
                <div>{}</div>
            </DecorBlock>
            <ExersizeOnBall>
                <Icon ball/>
            </ExersizeOnBall>
            <Squats>
                <Icon squats/>
            </Squats>
        </Section>

    );
};

export default Testimonials;

const Section = styled.section`
  display:flex;
  align-items:center;
  justify-content:center;
  
  
  //margin: 0 auto;
  padding: 6vw 0 11.563vw 0;
  position: relative;
`

const Wrapper = styled.div`
  width: 73.125vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
`
const Image = styled.div`
  width: 31.250vw;
  height: 44.938vw;
  border-radius: 6.250vw 0 0 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const DecorBlock = styled.div`
  position: absolute;
  top: 3.000vw;
  right: 0;
  transform: scale(-1,1);

  div {
    position: relative;
    width: 7.125vw;
    height: 9.894vw;
    background: #FF262512;
    border-radius: 0.313vw;

    &:after {
      content: '';
      width: 6.438vw;
      height: 13.563vw;
      background: #FF262512;
      border-radius: 0.313vw;
      position: absolute;
      bottom: -8.313vw;
      right: -1.250vw;
    }
  }

`
const ExersizeOnBall = styled.div`
width: 3.250vw;
  height: 3.250vw;
  position: absolute;
  top: 0;
  right: 23.438vw;
`
const Squats = styled.div`
  width: 3.625vw;
  height: 3.625vw;
  position: absolute;
  top: 0;
  left: 7.438vw;
`
const Text = styled.div`
  position: relative;
  z-index: 80;

  h2 {
    font-size: 1.625vw;
    color: var(--red);
    line-height: 160%;
  }

  h1 {
    font-size: 2.750vw;
    font-weight: 700;
    width: 23.125vw;
    color: var(--dark);
    line-height: 130%;
    margin: 3.000vw 0 2.5vw 0;
  }

  .text-swiper {
    margin-left: -16%;
    background: white;
    border-radius: 0 6.250vw 0 0;
    width: 39.000vw;
    height: 26.625vw;
    box-shadow: 0 2.500vw 7.500vw #FFA9A975;
    padding: 4.938vw 3.750vw;
  }
`
const TextWrap = styled.div`
  z-index: 99;

  .slider {
    background: #d20e0e;
  }
`
const Wrap = styled.div`
  h5 {
    font-size: 1.375vw;
    font-family: JosefinSans-Italic, sans-serif;
    font-weight: 400;
    width: 31.438vw;
    line-height: 160%;
    margin-bottom: 2.438vw;
  }

  h3 {
    margin: 1.000vw 0;
    font-size: 1.500vw;
  }

  p {

    font-size: 1.125vw;
  }
`
