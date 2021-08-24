import {createGlobalStyle} from 'styled-components'
const GlobalStyles = createGlobalStyle`
  
  :root {
    --v: 1;
    --nav-color:#011B3C;
    --button-color:#01FCAE;
    --red:#FF2625;
    --white:#FFFAFB;
    --dark:#3A1212;
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
    background: #FBD15C;
  }

  body {
    font-family: JosefinSans-Regular, sans-serif;
    overflow-x:hidden ;
    position: relative;
    background: #FFFAFB;
    color: #837171;
  }

  ul {
    list-style: none;
  }
  
`
export default GlobalStyles