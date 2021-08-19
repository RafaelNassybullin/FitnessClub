import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --v: 1;
    --nav-color:#011B3C;
    --button-color:#01FCAE;
  }
  @media (max-width: 758px) {
    :root {
      --v: 2;
    }
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::selection {
    background: pink;
  }

  body {
    font-family: sans-serif;
    overflow-x:hidden ;
  }

  ul {
    list-style: none;
  }

`


export default GlobalStyles