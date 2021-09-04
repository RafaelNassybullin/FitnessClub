import React from 'react';
import styled from 'styled-components'
import mainImage from '../img/gotogym.jpg'
import Dots from "./assets/IconComponents/Dots";
// import {motion} from "framer-motion";

const MainPage = () => {

    return (
        <Main>
            <Wrap>
                <Text>
                    <h3>__Fitness Club
                        <span>
                            <svg viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                                d="M0.833353 19.6597L1.2396 20.8785C1.26657 20.9594 1.3183 21.0297 1.38747 21.0796C1.45664 21.1294 1.53974 21.1563 1.625 21.1562H2.84375C2.92901 21.1563 3.01211 21.1294 3.08128 21.0796C3.15045 21.0297 3.20218 20.9594 3.22915 20.8785L3.54281 19.9375H4.17594L4.4896 20.8785C4.51657 20.9594 4.5683 21.0297 4.63747 21.0796C4.70664 21.1294 4.78974 21.1563 4.875 21.1562H6.09375C6.17901 21.1563 6.26211 21.1294 6.33128 21.0796C6.40045 21.0297 6.45218 20.9594 6.47915 20.8785L6.8854 19.6597L6.8852 19.6597C6.89909 19.6183 6.9062 19.5749 6.90625 19.5312V17.9062C6.90625 17.7985 6.86345 17.6952 6.78726 17.619C6.71107 17.5428 6.60774 17.5 6.5 17.5H5.28125V16.2812H6.90625C7.01399 16.2812 7.11732 16.2384 7.19351 16.1623C7.2697 16.0861 7.3125 15.9827 7.3125 15.875V13.8438C7.3125 13.736 7.2697 13.6327 7.19351 13.5565C7.11732 13.4803 7.01399 13.4375 6.90625 13.4375H5.6875V13.0312C5.6875 12.9235 5.6447 12.8202 5.56851 12.744L4.89213 12.0676L5.24264 8.5625H6.65517L8.9801 13.2124C9.28132 13.8175 9.7647 14.3129 10.3622 14.629L22.5594 21.1087C22.6534 21.1587 22.7632 21.1698 22.8653 21.1396C22.9673 21.1094 23.0535 21.0403 23.1051 20.9473L25.1364 17.291C25.163 17.2431 25.1797 17.1903 25.1853 17.1357C25.191 17.0812 25.1856 17.0261 25.1693 16.9737C25.1531 16.9213 25.1265 16.8727 25.091 16.8309C25.0555 16.7891 25.012 16.7549 24.9629 16.7304L24.1504 16.3241C24.0893 16.2936 24.0215 16.2789 23.9532 16.2815C23.8849 16.2842 23.8183 16.304 23.7597 16.3391L21.9664 17.4151L13.3426 10.7513L11.4862 5.55339C11.6796 5.23611 11.7817 4.87159 11.7812 4.5V2.46875C11.7812 2.16697 11.6972 1.87116 11.5386 1.61445C11.3799 1.35774 11.1529 1.15028 10.883 1.01532C10.6131 0.880354 10.3109 0.823219 10.0103 0.850314C9.70977 0.877408 9.42269 0.987662 9.18126 1.16872L7.88126 2.14373C7.83081 2.18158 7.78986 2.23065 7.76165 2.28706C7.73345 2.34348 7.71876 2.40568 7.71875 2.46875V4.5C7.71857 4.77969 7.7765 5.05637 7.88887 5.3125H5.28125C4.4196 5.31347 3.59351 5.6562 2.98423 6.26548C2.37495 6.87476 2.03222 7.70084 2.03125 8.5625V13.0312C2.03125 13.139 2.07405 13.2423 2.15024 13.3185L2.26921 13.4375H1.21875C1.11101 13.4375 1.00768 13.4803 0.931489 13.5565C0.855303 13.6327 0.812501 13.736 0.8125 13.8438V15.875C0.812501 15.9827 0.855303 16.0861 0.931489 16.1623C1.00768 16.2384 1.11101 16.2812 1.21875 16.2812H2.84375V17.5H1.21875C1.11101 17.5 1.00768 17.5428 0.931489 17.619C0.855303 17.6952 0.812501 17.7985 0.8125 17.9062V19.5312C0.81255 19.5749 0.819659 19.6183 0.833551 19.6597L0.833353 19.6597ZM2.55094 20.3437H1.91781L1.78239 19.9375H2.68636L2.55094 20.3437ZM5.16781 20.3437L5.03239 19.9375H5.93636L5.80094 20.3437H5.16781ZM6.5 7.75V6.125H8.53125V6.12388C8.86364 6.37413 9.26502 6.51596 9.68084 6.53008C10.0967 6.54421 10.5067 6.42995 10.8553 6.20283L12.1846 9.92478L8.96106 11.3575L7.56358 8.5625H9.34375V7.75H6.5ZM10.9688 4.5C10.9688 4.82323 10.8403 5.13323 10.6118 5.36179C10.3832 5.59035 10.0732 5.71875 9.75 5.71875C9.42677 5.71875 9.11677 5.59035 8.88821 5.36179C8.65965 5.13323 8.53125 4.82323 8.53125 4.5V4.09375H8.9375C9.04524 4.09375 9.14857 4.05096 9.22476 3.97478L9.91829 3.28125H10.9688V4.5ZM21.2603 19.4986L14.0235 15.654L15.4352 13.3952L21.4968 18.0791L21.2603 19.4986ZM23.9865 17.1506L24.2201 17.2674L22.5885 20.2042L22.017 19.9006L22.3074 18.1581L23.9865 17.1506ZM14.7891 12.8959L13.3041 15.2719L10.7434 13.9115C10.2953 13.6744 9.93274 13.3028 9.70681 12.849L9.3248 12.0849L12.4587 10.6921L12.6174 11.1366C12.6435 11.2098 12.6901 11.2739 12.7516 11.3214L14.7891 12.8959ZM9.66872 1.81876C9.78943 1.72822 9.93297 1.67309 10.0833 1.65953C10.2335 1.64598 10.3846 1.67454 10.5196 1.74202C10.6546 1.8095 10.7681 1.91323 10.8474 2.04159C10.9267 2.16995 10.9687 2.31786 10.9688 2.46875H9.75C9.64226 2.46875 9.53893 2.51154 9.46274 2.58772L8.76921 3.28125H8.53125V2.67188L9.66872 1.81876ZM2.84375 12.863V8.5625C2.84448 7.91626 3.10152 7.29669 3.55848 6.83973C4.01544 6.38277 4.63501 6.12573 5.28125 6.125H5.6875V7.75H4.875C4.77425 7.75 4.6771 7.78744 4.6024 7.85504C4.5277 7.92264 4.48079 8.01559 4.47076 8.11583L4.06451 12.1783C4.05852 12.2382 4.06591 12.2987 4.08615 12.3553C4.10638 12.412 4.13894 12.4635 4.18149 12.506L4.875 13.1995V13.4375H3.41829L2.84375 12.863ZM1.625 14.25H6.5V15.4687H1.625V14.25ZM3.65625 16.2812H4.46875V17.5H3.65625V16.2812ZM1.625 18.3125H6.09375V19.125H1.625V18.3125Z"
                                fill="#FF2625" opacity="0.5"/></svg>
                        </span>
                    </h3>
                    <h1>Sweat, Smile And Repeat</h1>
                    <p>A gym is a club, building, or large room, usually containing special equipment, where people go
                        to</p>
                    <Buttons>
                        <button>Join Now</button>
                        <button>Know More</button>
                    </Buttons>
                </Text>
                <Image>
                    <img src={mainImage} alt=""/>
                    <Filter> </Filter>
                </Image>
                <Exersize>Exercise</Exersize>
            </Wrap>
            <DecorBlock>
                <div>{}</div>
            </DecorBlock>
            <DotsDecor><Dots/></DotsDecor>
        </Main>
    );
};

export default MainPage;
//====================Styled-Components=========================>
const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  @media (max-width: 770px) {
    height: 126vw;
  }

`
const Wrap = styled.div`
  width: 86.500vw;
  height: 62.938vw;
  display: grid;
  grid-template-columns: 45% 55%;
  position: relative;
  @media (max-width: 758px) {
    grid-template-columns: 100%;
  }
`
const Exersize = styled.div`
  font-size: 12.500vw;
  color: #FF262526;
  position: absolute;
  font-family: JosefinSans-SemiBold, sans-serif;
  bottom: -6.250vw;
  left: 0;
  z-index: -6;
  @media (max-width: 758px) {
    font-size: 17.5vw;
    bottom: -72.25vw;
    left: -44px;
  }
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 7vw;
  @media (max-width: 758px) {
    order: 1;
    transform: translateY(-83vw);
    margin-left: 7vw;
  }

  h3 {
    font-size: 1.875vw;
    color: #FF2625;
    font-family: Alegreya-Regular, sans-serif;
    @media (max-width: 758px) {
      font-size: 4.875vw;
    }

    span {
      margin-left: 1.125vw;

      svg {
        width: 1.875vw;
        height: 1.875vw;
      }
    }
  }

  h1 {
    font-size: 5.000vw;
    font-family: JosefinSans-Bold, sans-serif;
    color: #3A1212;
    margin: 3.125vw 0;
    @media (max-width: 758px) {
      font-size: 11vw;
      color: #3A1212;
      text-shadow: 0 0 2vw white;
    }
  }

  p {
    font-size: 1.500vw;
    line-height: 160%;
    margin-bottom: 3.125vw;
    font-family: Alegreya-Regular, sans-serif;
    @media (max-width: 758px) {
      font-size: 4vw;
      color: #ffffff;
      //background-: #FBD15C;
    }
  }
`

const Buttons = styled.div`
  display: flex;

  button {
    @media (max-width: 758px) {
      width: 26.5vw;
      height: 9.625vw;
      font-size: 3.7vw;
    }

  }

  button:last-child {
    margin: 0;
    background: #FFFAFB;
    color: #3A1212;

    &:hover {
      background: #FF2625;
      color: #FFFAFB;
    }
  }
`

const Image = styled.div`
  position: relative;
  z-index: -1;
  border-radius: 0 0 0 6.688vw;
  overflow: hidden;
  @media (max-width: 758px) {
    border-radius: 0 0 0 18.688vw;
    height: 124vw;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`
const Filter = styled.div`
  width: 100%;
  height: 100%;
  
  position: absolute;
  top: 0;
  left: 0;
  @media(max-width: 758px){
      background: #00000012;
  }
`
const DecorBlock = styled.div`
  position: absolute;
  top: 11.688vw;
  left: 0;

  div {
    position: relative;
    width: 7.125vw;
    height: 9.894vw;
    background: #FF262512;
    border-radius: 0.313vw;
    @media (max-width: 758px) {
      width: 10.125vw;
      height: 19.894vw;
    }

    &:after {
      content: '';
      width: 6.438vw;
      height: 13.563vw;
      background: #FF262512;
      border-radius: 0.313vw;
      position: absolute;
      bottom: -8.313vw;
      right: -1.250vw;
      @media (max-width: 758px) {
        width: 9.438vw;
        height: 17.563vw;
        bottom: -7.313vw;
        right: -2.25vw;
        z-index: -2;
      }
    }
  }

`

const DotsDecor = styled.div`
  width: 7.375vw;
  height: 8.375vw;
  position: absolute;
  bottom: -4vw;
  right: 1.500vw;
  @media (max-width: 758px) {
    width: 17.375vw;
    bottom: 4vw;
  }
`
