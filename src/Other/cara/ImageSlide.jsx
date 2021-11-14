import React from 'react'
import styled from 'styled-components'
const ImageSlide = ({ image }) => {
    const styles = {
        height: '290px',
        width: '210px',
        backgroundImage: `url(${image.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: 'scale(1.2)',
        zIndex: '10',
        marginTop: '40px',
        borderRadius: '10px',
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
@media(max-width:908px){
    width: 100px;
    height: 180px;
    margin: 0 40px;
    margin-bottom: 40px;
}
@media(max-width:608px){
    width: 50px;
    height: 10px;
    margin: 0 40px;
    margin-bottom: 40px;
}
`
const TextContainer = styled.div`
position: absolute;
bottom: 0;
width: 100%;
text-align: center;
background-color: rgba(0,0,0,0.5);
`
const Title = styled.h3`
font-size: 12px;
font-weight: bold;
color: white;
`
const Text = styled.p`
font-size: 9px;
color: rgba(255,255,255,0.8);
`