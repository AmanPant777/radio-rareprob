import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const FadedImageSlide = ({ url, title, text }) => {
    const styles = {
        height: '200px',
        width: '150px',
        opacity: '0.5',
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: '40px',
        borderRadius: '10px',
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
@media(max-width:908px){
    width: 50px;
    height: 10px;
    border: 2px solid red;
    display: none;
}
`
const TextContainer = styled.div`
position: absolute;
bottom: 0;
width: 100%;
text-align: center;
`
const Title = styled.h3`
font-size: 12px;
font-weight: bold;
`
const Text = styled.p`
font-size: 9px;
color: rgba(0,0,0,0.7);
`