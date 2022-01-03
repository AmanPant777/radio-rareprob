import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import SearchCountry from './SearchCountry'

const Stations = () => {
    return (
            <Container >
                <Header />
                <SearchContainer>
                <SearchCountry/>
                </SearchContainer>
            </Container>
    )
}

export default Stations

const Container=styled.div`
min-height: 300vh;
height: 100%;
max-height: 100%;
background-color:#141414;
`
const SearchContainer=styled.div`
    position: relative;
    top: -20px;
    padding: 40px 0;
    padding-bottom: 100px;
`