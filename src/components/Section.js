import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Section = ({
    title,description,backgroundImg,leftBtnText,rightBtnText
}) => {

    return (
        <Wrap bgImg = {backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
            <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText && <RightButton>
                            {rightBtnText}
                        </RightButton>}
                        
                    </ButtonGroup>
            </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width:100vw;
    height:100vh;
    background:${props => `url('/images/${props.bgImg}') no-repeat center center/cover`}
    `

const ItemText = styled.div
`
padding-top: 15vh;
text-align:center;
`

const ButtonGroup = styled.div
`
display:flex;

@media (max-width:768px) {
    flex-direction:column;
}
`
const LeftButton = styled.div
`
    background-color: rgba(23,26,32,0.8);
    height:40px;
    width:250px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.8;
    text-transform:uppecase;
    font-size:1rem;
    cursor:pointer;
    margin:8px;
`
const RightButton = styled(LeftButton)
`
 background:white;
 color:black;
 opacity:0.7;
`
const DownArrow = styled.img
`
 height:40px;
 animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``