import React from 'react'
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom';
const SplashScreen = () => {
    return (
        <Container>
            <IconContainer>
                <Zoom>
                <Icon src="/radio/fm1.png"/>
                </Zoom>
                <Text>
                   MADE IN INDIA
                </Text>
            </IconContainer>
        </Container>
    )
}

export default SplashScreen
const Container=styled.div`
min-height: 100vh;
min-width: 100vw;
background-color: #803DEC;
`
const IconContainer=styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
min-height: 50vh;
position: relative;
top: 300px;
`
const Icon=styled.img`
max-width: 350px;
@media(max-width:768px){
    max-width:200px;
}
`
const Text=styled.p`
color: white;
font-size: 12px;
`