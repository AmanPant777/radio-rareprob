// import { SearchRounded } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { activeSidebar } from '../redux/RecentSlice'
import { useDispatch } from 'react-redux'
import {DATA} from './data'
import SearchResults from 'react-filter-search';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Sidebar = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [value,setValue]=useState('')
    return (
        <>
        <SearchContainer>
            <SearchInput placeholder="Search Country" 
            value={value} 
            onChange={(e)=>{
                setValue(e.target.value)
            }}
            />
        </SearchContainer>
        <CountryContainer>
           <SearchResults
           value={value}
           data={DATA}
            renderResults={results=>(
                <div>
                     {results.map((item,index)=>(
                    <FlagContainer key={index} 
                    onClick={()=>{
                        navigate(`/radio-monkey/radiostation?country=${item.name}`,{
                        state:{icon:item.icon}
                    })
                    dispatch(activeSidebar())
                }
                     }
                    >
                    <LazyLoadImage1 src={item.icon} alt="flag"
                    effect='black-and-white'
                    />
                    <FlagName>{item.name}</FlagName>
                </FlagContainer>
            ))}
                </div>
            )
            }
           />
        </CountryContainer>
        <Link to ="/">
        <h6 style={{textAlign:'center',marginTop:"30px",marginBottom:'10px'}}>See All</h6>
        </Link>
        </>
    )
}

export default Sidebar

const SearchContainer=styled.div`
display: flex;
align-items: center;
padding: 10px 5px;
text-align: center;
@media(max-width:468px){
    width: 30px;
}
`
const SearchInput=styled.input`
border-radius:50px;
padding: 5px 10px;
background-color: rgba(0,0,0,0.4);
border: none;
outline: none;
max-width: 100px;
margin: auto;
&::placeholder{
  font-size: 9px;
  color: white;
}
@media(max-width:468px){
    border-radius: 10px;
    padding: 2px 5px;
    
&::placeholder{
  font-size: 7px;
}
}
`
const CountryContainer=styled.div`
height: 70vh;
overflow-y:overlay;
&::-webkit-scrollbar{
    display: none;
}
`
const FlagContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;

`
const LazyLoadImage1=styled(LazyLoadImage)`
width: 50px;
object-fit: cover;
cursor: pointer;
min-height: 50px;
border-radius: 5px;
@media(max-width:468px){
    width: 25px;
    height: 25px;
    max-height: 25px;
    max-width: 25px;
    min-height: 25px;
}
`
const FlagName=styled.p`
font-size: 8px;
margin-top: 5px;
width: 100px;
text-align: center;
color: rgba(255,255,255,0.8);
@media(max-width:468px){
    font-size: 7px;
}
`