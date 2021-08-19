import React from "react";
import styled from 'styled-components'

function Navbar() {

    return (
        <>
            <Header>
                <h1>Rapael</h1>
            </Header>
        </>
    );
}

export default Navbar

//====================Styled-Components=========================>

const Header = styled.div`
  width: 100%;
  background: var(--nav-color);
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  h1 {
    font-size: 38px;
    color: white;
  }
`