import React from "react";
import styled from 'styled-components'

function Test() {

    return (
        <>
            <Block>
                <h1>aaaaaaaaaaa</h1>
            </Block>
        </>
    );
}

export default Test

//====================Styled-Components=========================>

const Block = styled.div`
  width: 80vw;
  background: #f5c966;
  height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin: 0 auto;

  h1 {
    font-size: 38px;
    font-family: Alegreya-Black, sans-serif;
    color: white;
  }
`