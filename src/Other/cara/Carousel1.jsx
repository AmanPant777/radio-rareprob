import React from 'react'
import PropTypes from 'prop-types'
import ImageSlide from './ImageSlide'
import Arrow from './Arrow'
import FadedImageSlider from './FadeImageSlider'
import styled from 'styled-components'
const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GOTO_START_INDEX':
            return Object.assign({}, state, { index: 0 })
        case 'GOTO_END_INDEX':
            return Object.assign({}, state, {
                index: action.payload
            })
        case 'INCREMENT_INDEX':
            return Object.assign({}, state, {
                index: state.index + 1
            })
        case 'DECREMENT_INDEX':
            return Object.assign({}, state, {
                index: state.index - 1
            })
        default:
            return state
    }
}

const Carousel = ({ images }) => {
    const [{ index }, dispatch] = React.useReducer(reducer, {
        index: 0
    })
    return (
        <Container>
            <Arrow
                direction="left"
                clickFunction={() =>
                    index === 0
                        ? dispatch({ type: 'GOTO_END_INDEX', payload: images.length - 1 })
                        : dispatch({ type: 'DECREMENT_INDEX' })
                }
                glyph="&#9664;"
            />

            <div style={{ display: 'flex' }}>
                <FadedImageSlider
                    url={index === 0 ? images[images.length - 1].imageUrl : images[index - 1].imageUrl}
                    title={index === 0 ? images[images.length - 1].title : images[index - 1].title}
                    text={index === 0 ? images[images.length - 1].text : images[index - 1].text}

                />
                {/* <ImageSlide url={images[index].imageUrl} title={images[index].title} text={images[index].text} /> */}
                <ImageSlide image={images[index]} />

                <FadedImageSlider
                    url={index === images.length - 1 ? images[0].imageUrl : images[index + 1].imageUrl}
                    title={index === images.length - 1 ? images[0].title : images[index + 1].title}
                    text={index === images.length - 1 ? images[0].text : images[index + 1].text}
                />
            </div>

            <Arrow
                direction="right"
                clickFunction={() =>
                    index === images.length - 1
                        ? dispatch({ type: 'GOTO_START_INDEX' })
                        : dispatch({ type: 'INCREMENT_INDEX' })
                }
                glyph="&#9654;"
            />
        </Container>
    )
}

Carousel.propTypes = {
    images: PropTypes.array.isRequired
}

export default Carousel

const Container = styled.div`
display: flex;
align-items:center;
justify-content: center;
`