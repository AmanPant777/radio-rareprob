import React,{useState} from 'react'
import {DATA} from './data'
import SearchBox from './SearchBox'
import styled from 'styled-components'
import CountrySearch from './Country/CountrySearch'

const SearchCountry = () => {
    const [filter,setFilter]=useState('')
    const [filteredData,setFilteredData]=useState(DATA)

    const handleChange=(e)=>{
        e.preventDefault()
        if(e.target.value.length>0){
            setFilter(e.target.value)
        setFilteredData(filteredData.filter((country=>country.name.toLowerCase().includes(filter.toLowerCase()))))
        }else {
            setFilteredData(DATA)
        }
      }
       
    return (
    <Container>
        <SearchBox placeholder="Search Country" 
        handleChange={handleChange}
        
        />
        <CountrySearch Data={filteredData}/>
    </Container>
    )
}

export default SearchCountry

const Container=styled.div`
top: 60px;
position: relative;
`