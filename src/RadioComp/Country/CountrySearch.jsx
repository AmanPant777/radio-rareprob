import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const CountrySearch = ({Data}) => {
    return (<>
         <Heading>Select Country</Heading>
        <Container>
            {Data.map((item,index)=>
              <Grid  key={index}>
              <Link to={{
                  pathname:`/radio-monkey/radiostation`,
                  search:`?country=${item.name}`
              }} state={{icon:item.icon}} >
              <LazyLoadImage1 src={item.icon}
              alt="flag"
              effect="blur"
              />                
              </Link>
              <Name>
                  {item.name}
              </Name>
          </Grid>
            )}
        </Container>
        </>
    )
}

export default CountrySearch

const Container=styled.div`
display: grid;
grid-template-columns: repeat(8,minmax(0,1fr));
width: 80%;
margin: auto;
margin-top: 50px;

@media(max-width:1200px){
    grid-template-columns: repeat(7,minmax(0,1fr));
}
@media(max-width:768px){
    grid-template-columns: repeat(4,minmax(0,1fr));
    width:90%;
}
@media(max-width:468px){
    grid-template-columns: repeat(3,minmax(0,1fr));
}
`
const Heading=styled.div`
width: 79%;
font-size: 25px;
margin: auto;
margin-left:12%;
margin-top: 20px;
font-weight: bolder;
color: white;
@media(max-width:768px){
    font-size:17px;
}
@media(max-width:468px){
    font-size:12px;
    margin-top: 20px;
}
`
const Grid=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 35px;
`
const LazyLoadImage1=styled(LazyLoadImage)`
width: 100px;
height: 100px;
object-fit: cover;
border-radius:20px;
@media(max-width:1268px){
    width: 80px;
height: 80px;
}
@media(max-width:768px){
    width: 70px;
height: 70px;
}
@media(max-width:468px){
    width: 70px;
height: 70px;
}
`
const Name=styled.div`
margin-top:2px;
font-size: 15px;
overflow: hidden;
width:100px;
color: white;
text-overflow: ellipsis;
white-space: nowrap;
text-align:center;
@media(max-width:768px){
font-size: 12px;
}
@media(max-width:468px){
font-size: 10px;
}
`