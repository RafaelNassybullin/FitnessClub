import React from "react";

// import mainIcon from '../img/icon/main-icon'
import styled from 'styled-components'
import MainIcon from "./MainIcon";

function Navbar() {

    return (
            <Header>
                <nav>
                    <Logo>
                        <MainIcon/>
                    </Logo>
                    <ul>
                        <li>home</li>
                        <li>training</li>
                        <li>contact</li>
                    </ul>
                    <Burger>524</Burger>
                </nav>
            </Header>
    );
}

export default Navbar

//====================Styled-Components=========================>
const Logo = styled.div`
  color: white;
`
const Burger = styled.div`
  width: 46px;
  height: 46px;
  background: #090000;
  color: white;
`
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  height: 60px;
  top: 26px;
  left: 0;

  nav {
    width: 73.125vw;
    margin: 0 auto;
    font-size: 1.875vw;
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
      color: #030000;

      li {
        margin: 0 1.938vw;
        text-transform: capitalize;
        cursor: pointer;
      }
    }
  }

`