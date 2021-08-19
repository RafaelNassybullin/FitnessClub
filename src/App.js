import React, {useState} from "react";
import Fade from "./components/fade";
import GlobalStyle from "./components/GlobalStyles";
import styled from 'styled-components'
import Drawerr from "./components/Drawer";
import Navbar from "./components/NavBar";

function App() {

    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <Button onClick={() => setIsActive(true)}>Toggle</Button>
            <Drawerr isActive={isActive} setIsActive={setIsActive}>
                <h1>Свайпни вниз</h1>
            </Drawerr>
            <Fade/>
            <Fade/>
            <Fade/>
            <Fade/>
            <Fade/>
            <Fade/>
        </>
    );
}

export default App


//====================Styled-Components=========================>

const Button = styled.button`
  background: palegreen;
  font-size: 18px;
  font-weight: 700;
  border-radius: 50px;
  margin: 20px;
  outline: none;
  border: none;
  padding: 15px 30px;
  color: white;
  cursor: pointer;

  &:hover {
    background: pink;
  }
`


