import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk , faTwitter, faGooglePlusG, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'


const FooterComponent = () => {
    return (
        <Footer>
            <Wrapper>
                <LogoBlock>
                    <LogoWrap>
                        <Logo>
                            <svg  viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g >
                    <path
                        d="M38.1859 15.7237C38.3419 15.8797 38.5459 15.9573 38.7499 15.9573C38.9538 15.9573 39.1582 15.8793 39.3142 15.7237L44.8725 10.1653C46.4648 8.57266 46.4648 5.98099 44.8725 4.38834C43.2799 2.79532 40.6878 2.79605 39.0956 4.38834L38.7499 4.73331L38.4049 4.38834C36.8115 2.79568 34.2206 2.79568 32.6279 4.38834C31.8563 5.15994 31.4311 6.1857 31.4311 7.27664C31.4311 8.36758 31.8563 9.39371 32.6279 10.1649L38.1859 15.7237ZM33.7562 5.51663C34.2418 5.03104 34.879 4.78897 35.5162 4.78897C36.1534 4.78897 36.7914 5.0314 37.2766 5.51663L38.1859 6.4263C38.3357 6.57571 38.5385 6.65994 38.7499 6.65994C38.9615 6.65994 39.1644 6.57571 39.3142 6.4263L40.2239 5.51663C41.195 4.54507 42.7738 4.54617 43.7442 5.51663C44.7147 6.48709 44.7147 8.06656 43.7442 9.03702L38.7499 14.031L33.7562 9.03702C33.286 8.5668 33.0267 7.94131 33.0267 7.27701C33.0271 6.61197 33.286 5.98648 33.7562 5.51663Z"
                        fill="#FF2625"/>
                    <path
                        d="M46.2329 46.2799C39.4129 47.0365 34.0044 44.0167 33.9502 43.9864C33.7667 43.8816 33.5492 43.8534 33.3452 43.9094C33.2591 43.9325 24.6806 46.232 17.7713 44.6983C13.464 43.7406 9.40121 40.7066 6.43454 38.4914C6.0361 38.194 5.65854 37.9116 5.30405 37.6527C4.81992 37.2986 4.05014 37.0042 3.37155 36.7442C3.06686 36.6277 2.64938 36.4677 2.55966 36.4116C2.48203 36.3509 2.43954 36.2615 2.43954 36.1593V34.31C2.478 32.8466 8.61349 10.3294 9.56491 7.46487C9.58835 7.43118 9.6799 7.36489 9.74728 7.33303L21.8894 1.78713L25.8148 6.89761C26.0085 7.16238 25.9902 7.53262 25.7719 7.77688L21.893 12.1253C21.6392 12.4102 21.2119 12.4413 20.9467 12.2197L19.3783 10.7736C19.1944 10.6044 18.933 10.5484 18.688 10.5934C18.4422 10.6374 18.2225 10.8124 18.109 11.0351C17.9779 11.2932 16.7903 11.6096 15.5788 11.6188L15.1841 11.5789C14.8676 11.5412 14.5608 11.7063 14.4062 11.985C14.2509 12.2637 14.2773 12.6079 14.4721 12.8606C14.8091 13.296 15.0716 13.6458 15.2203 13.8465L15.9967 27.0436C15.5155 28.9179 15.0746 29.4503 14.9651 29.5569C14.6417 29.6591 14.407 29.9612 14.407 30.3179C14.407 30.7584 14.7644 31.1159 15.2049 31.1159C16.1098 31.1159 16.8789 29.9268 17.4963 27.6054C23.8424 22.8571 29.3806 27.3384 29.8149 27.7072C31.8305 29.7301 31.9554 31.0738 31.9594 31.1334C31.969 31.5656 32.3224 31.9135 32.7574 31.9135C33.198 31.9135 33.5554 31.5564 33.5554 31.1159C33.5554 30.9324 33.4887 29.3581 31.4237 27.0835C33.3712 24.6892 35.5886 23.3101 38.0308 23.0098C42.2415 22.4912 45.781 25.3228 45.8165 25.351C46.1585 25.6293 46.6602 25.578 46.9386 25.2367C47.2169 24.8958 47.1667 24.3941 46.8261 24.1154C46.6613 23.981 42.7433 20.829 37.8521 21.4241C34.9931 21.7709 32.4267 23.317 30.2144 26.0233C28.4189 24.8024 23.2707 22.039 17.5132 25.6531L16.799 13.5165C16.7917 13.3854 16.7514 13.2583 16.683 13.1466C17.3971 13.062 18.2474 12.8756 18.8641 12.4699L19.8921 13.4173C20.849 14.2204 22.2505 14.1204 23.0832 13.188L26.9621 8.83926C27.6777 8.03762 27.7374 6.82546 27.0918 5.94143L22.7675 0.311669C22.542 0.0176013 22.1428 -0.0823742 21.8033 0.0721667L9.09396 5.87734C8.96103 5.93557 8.28683 6.26186 8.06528 6.92837C7.61337 8.28481 0.843964 32.4265 0.843964 34.3074V36.1597C0.843964 36.7541 1.11093 37.3037 1.57565 37.6681C1.8082 37.8501 2.15573 37.9878 2.80136 38.2346C3.3287 38.4368 4.05051 38.7125 4.36215 38.9407C4.71298 39.197 5.08578 39.4757 5.47983 39.7702C8.56222 42.0722 12.7835 45.2245 17.4256 46.2561C24.0339 47.7246 31.7913 45.9492 33.4539 45.5303C34.5643 46.1041 38.638 48 43.9712 48C44.7581 48 45.573 47.959 46.409 47.8656C46.847 47.8173 47.1623 47.4225 47.114 46.9849C47.0649 46.5462 46.669 46.2283 46.2329 46.2799Z"
                        fill="#3A1212"/>
                    <path
                        d="M42.3249 36.6121C42.2809 36.2129 41.9429 35.9023 41.5316 35.9023C41.0911 35.9023 40.7337 36.2598 40.7337 36.7003C40.7337 37.2332 41.1274 39.0375 46.1877 39.8805C46.232 39.8878 46.2763 39.8915 46.3195 39.8915C46.7026 39.8915 47.0406 39.615 47.1058 39.225C47.1779 38.7903 46.8842 38.3794 46.4499 38.3065C42.9112 37.7169 42.3721 36.7183 42.3249 36.6121Z"
                        fill="#FF2625"/>
                    <path
                        d="M27.006 40.7073C16.5562 42.9456 12.0844 35.7957 11.8995 35.4906C11.6713 35.1138 11.1824 34.9926 10.8056 35.2189C10.4277 35.4456 10.3054 35.9356 10.532 36.3135C10.5848 36.401 11.8544 38.4852 14.5691 40.2605C16.4398 41.4833 19.2922 42.7292 23.1502 42.7292C24.4352 42.7292 25.8316 42.5911 27.34 42.2681C27.7711 42.1758 28.0457 41.7514 27.9534 41.3207C27.8608 40.8901 27.4371 40.6143 27.006 40.7073Z"
                        fill="#FF2625"/>
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="48" height="48" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
                        </Logo>
                        Golds Gym
                    </LogoWrap>
                    <p>A Modified Fitness Club that provide fitness & nutrition related services to improve your health</p>
                    <Icons>
                        <div> <FontAwesomeIcon icon={faVk} /> </div>
                        <div> <FontAwesomeIcon icon={faTwitter} /> </div>
                        <div> <FontAwesomeIcon icon={faGooglePlusG} /> </div>
                        <div> <FontAwesomeIcon icon={faLinkedinIn} /> </div>
                    </Icons>
                </LogoBlock>
                <Resources>
                    <h2>Resources</h2>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Activity</p>
                    <p>Instructors</p>
                </Resources>
                <About>
                    <h2>About</h2>
                    <p>Blog</p>
                    <p>FAQs</p>
                    <p>Policy</p>
                    <p>Contact</p>
                </About>
                <HelpfulLinks>
                    <h2>Helpful Links</h2>
                    <p>Articles</p>
                    <p>Nutritions</p>
                    <p>Meditation</p>
                    <p>Services</p>
                </HelpfulLinks>
            </Wrapper>
        </Footer>
    );
};

export default FooterComponent;

//====================Styled-Components=========================>

const Footer = styled.footer`
  display: grid;
  place-items: center;
  background: #FFF4F5;
  padding: 4.188vw 0 7.000vw 0;
  h2{
    font-size: 1.500vw;
    margin-bottom: 2.438vw;
    color: var(--dark);
  }
  p{
    font-size: 1.500vw;
    font-family: Alegreya-Regular, serif;
    line-height: 2.125vw;
    color: #504747;
  }
`
const Wrapper = styled.div`
  width: 73.125vw;
  display: flex;
`
const LogoBlock = styled.div`
  width: 20.813vw;
  margin-right: 10.500vw;
  p{
    width: 22vw;
    margin-bottom: 1.625vw;
  }
`
const Icons = styled.div`
  display: flex;
  div {
    width: 2.794vw;
    height: 2.794vw;
    background: #fff;
    border-radius: 50%;
    margin-right: 0.875vw;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 300ms ease-in-out;
    transition-property: background-color, color;
    font-size: 1.106vw;
    color: #000000;
    cursor: pointer;
    &:hover {
      background: var(--red);
      color: white;
    }
  }
`
const LogoWrap = styled.div`
  font-family: AbrilFatface-Regular, serif;
  font-size: 1.750vw;
  display: flex;
  font-style: italic;
  align-items: flex-end;
  margin-bottom: 2.063vw;
  color: var(--dark);
`
const Logo = styled.div`
  margin-right: 0.875vw;
  width: 3.000vw;
  height: 3.000vw;
`
const Resources = styled.div`
  width: 6.938vw;
  margin-right: 10.500vw;
  h2{
    
  }
  p{
    margin-bottom: 1.500vw;
  }
`
const About = styled.div`
  width: 4.625vw;
  margin-right: 10.500vw;
  h2{
    
  }
  p{
    margin-bottom: 1.500vw;
  }
`
const HelpfulLinks = styled.div`
  width: 9.250vw;
  p{
    margin-bottom: 1.500vw;
  }
`
