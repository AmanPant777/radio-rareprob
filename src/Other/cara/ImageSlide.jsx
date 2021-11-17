import React from 'react'
import styled from 'styled-components'
const ImageSlide = ({ image }) => {
    const styles = {
        height: '210px',
        width: '170px',
        backgroundImage: `url(${image.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: 'scale(1.2)',
        zIndex: '10',
        marginTop: '50px',
        borderRadius: '3px',
        boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',

    }

    return <Div className="image-slide" style={styles} >
        <TextContainer>
            <Title>
                {image.title}
            </Title>
            <Text>
                {image.text}
            </Text>
        </TextContainer>
    </Div>
}

export default ImageSlide
const Div = styled.div`
position: relative;
@media(max-width:768px){
    max-width: 100px;
    max-height: 130px;
    margin: 0 40px;
    margin-bottom: 40px;
}

`
const TextContainer = styled.div`
position: absolute;
bottom: 0;
width: 100%;
text-align: center;
background-color: rgba(255,255,255,1);
padding: 3px;
`
const Title = styled.h3`
font-size: 12px;
font-weight: bold;
color: rgba(0,0,0,0.7);
@media(max-width:768px){
    font-size: 9px;
}
`
const Text = styled.p`
font-size: 9px;
color: rgba(0,0,0,0.7);
@media(max-width:768px){
    font-size: 8px;
}
`