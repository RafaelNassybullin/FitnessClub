import React from 'react';
import styled from 'styled-components'


const Subscribe = () => {
    return (
        <Section>
            <h1>Subscribe Our Fitness Articles</h1>
            <p>Physical activity is defined as any bodily movement produced by
                skeletal muscles that results in energy expenditure</p>
            <label>
                <input type="text" placeholder={'Type Your Email Address'}/>
                <button>Subscribe</button>
            </label>
            <DecorBlock>
                <div>{}</div>
            </DecorBlock>
            <Talia>Talia</Talia>
            <Push>PushMan</Push>
            <Run>RunGirl</Run>
        </Section>
    );
};

export default Subscribe;


const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 9.5vw 0 16.375vw 0;
  position: relative;
  h1 {
    font-size: 2.750vw;
    color: var(--dark);
    font-family: JosefinSans-Bold, sans-serif;
  }

  p {
    font-size: 1.500vw;
    width: 39.563vw;
    line-height: 160%;
    font-family: Alegreya-Regular, sans-serif;
    margin: 1.500vw 0 2.281vw 0;
    text-align: center;
  }

  label {
    width: 39.563vw;
    height: 4.750vw;
    background: #fff;
    border-radius: 2.281vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.500vw;
    box-shadow: 0 2.500vw 7.500vw #FFA9A975;

    input {
      font-size: 1.5vw;
      height: 3.000vw;
      margin-left: 3.5vw;
      width: 21.563vw;
      outline: none;
      border: none;
      background: transparent;
      font-family: Alegreya-Regular, sans-serif;
    }
  }

  button {
    margin: 0;
  }
`

const Run = styled.div`
    position: absolute;
    bottom: 11.875vw;
    right: 20%;
`

const Talia = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
`
const Push = styled.div`
    position: absolute;
    bottom: 11.875vw;
    left: 20%;
`
const DecorBlock = styled.div`
  position: absolute;
  top: 1.188vw;
  left: 0;
  

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