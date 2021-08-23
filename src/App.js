import React from "react";
import GlobalStyle from "./components/GlobalStyles";
import Fonts from "./components/Fonts";
import Navbar from "./components/NavBar";
import MainPage from "./components/MainPage";
// import Test from "./components/Test";


// import {motion} from "framer-motion/dist/framer-motion";
// import styled from 'styled-components'

function App() {

    return (
        <>
          <GlobalStyle/>
          <Fonts/>

          <Navbar/>
        <MainPage/>

          {/*<Test/>*/}
        </>
    );
}
export default App;

