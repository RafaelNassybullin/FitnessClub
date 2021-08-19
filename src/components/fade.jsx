import React from "react";
import styled from 'styled-components'


function Fade() {
    return (
        <>
            <Post>
                <h1>Post one</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae?</p>
            </Post>
        </>
    )
}

export default Fade;

//====================Styled-Components=========================>

const Post = styled.div`
  width: auto;
  box-shadow: 5px 5px 10px #c9c9c9;
  background: #e8e0e0;
  padding: 25px 40px;
  margin: 20px;
  border-radius: 15px;

  h1 {
    font-size: 32px;
    margin-bottom: 25px;
  }

  p {
    font-size: 18px;
  }
`