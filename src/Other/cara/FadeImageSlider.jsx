import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const FadedImageSlide = ({ url, title, text }) => {
    const styles = {
        height: '250px',
        width: '170px',
        opacity: '1',
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: '30px ',
        borderRadius: '3px',
        boxShadow: 'rgba(63, 35, 35, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
    }

    return <Div className="image-slide" style={styles} >
        <TextContainer>
            <Title>
                {title}
            </Title>
            <Text>
                {text}
            </Text>
        </TextContainer>
    </Div>
}

FadedImageSlide.propTypes = {
    url: PropTypes.string.isRequired
}

export default FadedImageSlide

const Div = styled.div`
position: relative;
@media(max-width:768px){
    width: 50px;
    height: 10px;
    display: none;
}
`
const TextContainer = styled.div`
position: absolute;
bottom: 0;
width: 100%;
text-align: center;
background-color: rgba(255,255,255,1);
padding: 5px;
`
const Title = styled.h3`
font-size: 12px;
font-weight: bold;
color: rgba(0,0,0,0.7);
`
const Text = styled.p`
font-size: 9px;
color: rgba(0,0,0,0.7);
`