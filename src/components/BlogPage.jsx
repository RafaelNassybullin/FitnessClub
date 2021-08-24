import React from 'react';
import styled from 'styled-components'
import imageItem from '../img/runonme.jpg'

const BlogPage = () => {

    return (
        <Section>
            <Wrapper>
                <Image>
                    <img src={imageItem} alt=""/>
                </Image>
                <Text>
                    <TextWrap>
                        <h3>Health Benefits</h3>
                        <h1>Physical Exercise Gives Your Body The Wings</h1>
                        <p>Physical activity and exercise can have immediate and long-term health benefits. Most
                            importantly,
                            regular activity can improve your quality of life.Exercise can improve your health and
                            reduce the
                            risk of </p>
                        <button>Learn more</button>
                    </TextWrap>
                </Text>
            </Wrapper>

        </Section>
    );
};

export default BlogPage;
//====================Styled-Components=========================>
const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 75.813vw;
`
const Image = styled.div`
  width: 35.375vw;
  height: 41.688vw;
  background: pink;
  border-radius: 0 0 6.250vw 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 1.625vw;
    color: var(--red);
    text-transform: capitalize;
  }

  h1 {
    font-size: 2.750vw;
    color: var(--dark);
    text-transform: capitalize;
    font-family: JosefinSans-Bold, sans-serif;
    line-height: 130%;
    margin: 1.563vw 0;
  }

  p {
    font-family: Alegreya-Regular, sans-serif;
    line-height: 160%;
    font-size: 1.375vw;
    font-weight: 500;
    margin-bottom: 2.250vw;
  }

  button {

  }

`
const TextWrap = styled.div`
  width: 31.375vw;
`