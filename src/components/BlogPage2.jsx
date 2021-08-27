import React from 'react';
import styled from 'styled-components'
import imageItem2 from '../img/runonme.jpg'
import imageItem1 from '../img/jump.jpg'


function BlogPage(props) {
    return (
        <Section>
            <Wrapper>
                 <Image {...props}>
                    <img src={props.revert ? imageItem1 : imageItem2} alt=""/>
                </Image>
                <Text>
                    <TextWrap>
                        <h3>{props.revert ? 'Improve Moods' : 'Health Benefits' }</h3>
                        <h1>{props.revert ? 'Makes You More Active And Improve Moods' : 'Physical Exercise Gives Your Body The Wings' }</h1>
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
}

export default BlogPage;
//====================Styled-Components=========================>
const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6.688vw 0;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 75.813vw;
`
export const Image = styled.div`
  width: 35.375vw;
  height: 41.688vw;
  background: pink;
  border-radius:  ${props => props.revert ? '6.250vw 0 0 0' : '0 0 6.250vw 0'};
  overflow: hidden;
  order: ${props => props.revert ? '1' : '0'};


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transform: ${props => props.revert ? 'scale(-1,1)' : 'scale(1)'};
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
`
const TextWrap = styled.div`
  width: 31.375vw;
`