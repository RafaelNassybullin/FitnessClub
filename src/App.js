import React from "react";
import GlobalStyle from "./components/assets/GlobalStyles";
import Fonts from "./components/assets/Fonts";
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

        </>
    );
}

export default App;

