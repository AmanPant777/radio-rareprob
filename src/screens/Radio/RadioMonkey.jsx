import React from 'react'
import {useState,useEffect} from 'react'
import styled from 'styled-components'
import SplashScreen from '../../RadioComp/SplashScreen'
import Stations from '../../RadioComp/Stations'

const RadioMonkey = () => {
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
       setTimeout(()=>{
         setLoading(false)
       },3000)
    },[])
    
    if(loading){
     return (
        <SplashScreen/>
     )
    }
        return (
            <Container>
                <Stations/>
            </Container>
            
        )
    }
export default RadioMonkey

const Container=styled.div`
background:black;
`