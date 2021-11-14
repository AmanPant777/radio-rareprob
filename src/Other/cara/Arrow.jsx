import React from 'react'
import PropTypes from 'prop-types'

const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
        style={{ fontSize: '32px', cursor: 'pointer' }}
        className={`slide-arrow ${direction}`}
        onClick={clickFunction}
    >
        {glyph}
    </div>
)

Arrow.propTypes = {
    direction: PropTypes.string.isRequired,
    clickFunction: PropTypes.func.isRequired,
    glyph: PropTypes.string.isRequired
}

export default Arrow
