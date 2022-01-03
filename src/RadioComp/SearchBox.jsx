import React from 'react'
import styled from 'styled-components'

const SearchBox = ({placeholder,handleChange}) => {
    return (
       <Container>
           <SearchContainer>
           <img src="radio/icons/radio_search.svg" 
           alt="search" 
           width={30}
           style={{marginLeft:'10px'}}
           />
           <Search placeholder={placeholder} onChange={handleChange}/>
           </SearchContainer>
       </Container>
    )
}

export default SearchBox


const Container=styled.div`
min-height: 80px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Search=styled.input`
padding: 10px 10px;
border: none;
outline: none;
background-color: #35313133;
width: 100%;
height: 50px;
color: white;
&::placeholder{
    color: white;
    font-size: 15px;
    text-align: center;
}
caret-color: white;
@media(max-width:468px){
    height: 40px;
    
&::placeholder{
    font-size: 11px;
}
}
`
const SearchContainer=styled.div`
display: flex;
justify-content: space-around;
align-items: center;
background-color: rgba(255,255,255,0.2);
border-radius: 50px;
width: 540px;
margin-top: 20px;
@media(max-width:768px){
    width:350px;
}
@media(max-width:468px){
    width:250px;
}
`