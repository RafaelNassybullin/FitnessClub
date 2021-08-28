import React from 'react';
import styled from 'styled-components'
import imageItem2 from '../img/runonme.jpg'
import imageItem1 from '../img/jump.jpg'
import Dots from "./assets/IconComponents/Dots";
import NavelIcon from "./assets/IconComponents/NavelIcon";
import ArmIcon from "./assets/IconComponents/ArmIcon";
import RopeIcon from "./assets/IconComponents/RopeIcon";
import BallIcon from "./assets/IconComponents/BallIcon";
import PushIcon from "./assets/IconComponents/PushIcon";
import SquatsIcon from "./assets/IconComponents/SquatsIcon";


function BlogPage(props) {
    return (
        <Section>
            <Wrapper>
                <Image {...props}>
                    <img src={props.revert ? imageItem1 : imageItem2} alt=""/>

                </Image>
                <Text>
                    <TextWrap>
                        <h3>{props.revert ? 'Improve Moods' : 'Health Benefits'}</h3>
                        <h1>{props.revert ? 'Makes You More Active And Improve Moods' : 'Physical Exercise Gives Your Body The Wings'}</h1>
                        <p>Physical activity and exercise can have immediate and long-term health benefits. Most
                            importantly,
                            regular activity can improve your quality of life.Exercise can improve your health and
                            reduce the
                            risk of </p>
                        <button>Learn more</button>
                    </TextWrap>
                </Text>
                <DotsDecor {...props}><Dots/></DotsDecor>
                {props.revert ? <Arm> <ArmIcon/> </Arm> : <Talia> <NavelIcon/> </Talia>}
                {props.revert ? <Push> <PushIcon/> </Push> : <Squats> <SquatsIcon/> </Squats>}
                {props.revert ? <Ball> <BallIcon/> </Ball> : <Rope> <RopeIcon/> </Rope>}
            </Wrapper>
            {props.revert ? "" : <DecorBlock><div>{}</div></DecorBlock>}
        </Section>
    );
}

export default BlogPage;
//====================Styled-Components=========================>
const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6.688vw 0;
  position: relative;
  
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 75.813vw;
  position: relative;
`
export const Image = styled.div`
  width: 35.375vw;
  height: 41.688vw;
  background: pink;
  border-radius: ${props => props.revert ? '6.250vw 0 0 0' : '0 0 6.250vw 0'};
  overflow: hidden;
  order: ${props => props.revert ? '1' : '0'};


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transform: ${props => props.revert ? 'scale(-1,1)' : 'scale(1)'};
  }
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 1.625vw;
    color: var(--red);
    text-transform: capitalize;
  }

  h1 {
    font-size: 2.750vw;
    color: var(--dark);
    text-transform: capitalize;
    font-family: JosefinSans-Bold, sans-serif;
    line-height: 130%;
    margin: 1.563vw 0;
  }

  p {
    font-family: Alegreya-Regular, sans-serif;
    line-height: 160%;
    font-size: 1.375vw;
    font-weight: 500;
    margin-bottom: 2.250vw;
  }
`
const TextWrap = styled.div`
  width: 31.375vw;
`

const DotsDecor = styled.div`
  position: absolute;
  z-index: 6;
  width: 7.375vw;
  height: 8.375vw;
  top: ${props => props.revert ? 'unset' : '-2.8vw'};
  left: ${props => props.revert ? 'unset' : '-2.8vw'};
  right: ${props => props.revert ? '-0.8vw' : 'unset'};
  bottom: ${props => props.revert ? '-2.8vw' : 'unset'};
`
const Ball = styled.div`
  position: absolute;
  top: -7vw;
  left: 29.563vw;
  width: 3.250vw;
  height: 3.250vw;
`
const Arm = styled.div`
  position: absolute;
  top: -13.125vw;
  left: 52.438vw;
  width: 3.313vw;
  height: 3.313vw;
`

const Talia = styled.div`
  width: 3.125vw;
  height: 3.125vw;
  position: absolute;
  top: -4.96vw;
  right: 20vw;
`
const Push = styled.div`
  position: absolute;
  bottom: 16.875vw;
  width: 3.125vw;
  height: 3.125vw;
  left: -11%;
`
const Squats = styled.div`
  width: 3.625vw;
  height: 3.625vw;
  position: absolute;
  top: 25vw;
  left: -8.562vw;
`

const Rope = styled.div`
  position: absolute;
  top: 8.313vw;
  right: -6.687vw;
  width: 3.125vw;
  height: 3.125vw;
`
const DecorBlock = styled.div`
  position: absolute;
  top: 31vw;
  right: 0;
  transform: scale(-1, 1);

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
