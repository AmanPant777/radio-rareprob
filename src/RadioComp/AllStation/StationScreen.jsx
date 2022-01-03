import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../Header'
import { useDispatch } from 'react-redux'
import { addRecent, recentPlaying, removeSidebar, switchPlaylistFalse } from '../../redux/RecentSlice'
import { playStation, stationAdd } from '../../redux/PlayingSlice'
import { addallstation } from '../../redux/AllSlice'
import { useSelector } from 'react-redux'
import AllAudioPlayer from '../AllAudioPlayer'
import Sidebar from '../Sidebar'
import {BsPlayCircle} from 'react-icons/bs'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Loader from 'react-loader-spinner'



const StationScreen = () => {
    const queryParams=new URLSearchParams(window.location.search)
    const country=queryParams.get('country')
    const stationFetch=queryParams.get('station')
    const dispatch=useDispatch()
    const [data,setData]=useState([])
    const play=useSelector(state=>state.playing)
    const sidebar=useSelector(state=>state.user.sidebar)
    const [isLoading,setIsLoaded]=useState(true)


   useEffect(()=>{
    if(stationFetch==='Most Played'){
        const fetch=async()=>{
            const DATA=await axios.get('https://nl1.api.radio-browser.info/json/stations/search',{
              params:{
                  country:country,
                  order:'clickcount',
                  reverse:true,
              },
            responseType:"json"
            })
              setData(DATA.data)
              setIsLoaded(false)

          }
          fetch()
    }else{
        const fetch=async()=>{
            const DATA=await axios.get('https://nl1.api.radio-browser.info/json/stations/search',{
              params:{
                  country:country,
                  reverse:true,
                  
              },
              responseType:"json"
            })
              setData(DATA.data)
              setIsLoaded(false)
          }
          fetch()
    }
        
   },[country,stationFetch])

   useEffect(()=>{
    var container=document.getElementById('container')
    if(container){
       container.addEventListener('click',()=>{
          dispatch(removeSidebar())
       })
    }
   },[dispatch])


   useEffect(()=>{
    window.scrollTo(0,0)
  },[])

 
  

    return (
        <Container>
            <Header onstation={country}/>
            {isLoading?(
                <div style={{margin:'auto',justifyContent:'center',display:'flex',flexDirection:'column',height:'100vh',alignItems:'center'}}>
                      <Loader
               type='Oval'
               height={500}
               width={200}
               color='#952bf1'
              />
                </div>
             
            ):(
                <StaionContainer id='container'>
                <Heading >{stationFetch}</Heading>
                {data&&(
                    <GridContainer>
                    {data?.map((item,index)=>(
                         <Grid key={index}
                         onClick={
                             ()=>  
                             {    dispatch(recentPlaying({
                                 ...item
                             }))
                                 dispatch(stationAdd({
                                     ...item
                                 }))
                                 dispatch(switchPlaylistFalse())
                                 dispatch(addRecent({
                               ...item
                             })) 
                             dispatch(addallstation(
                             data
                             ))
                             dispatch(playStation())
                             }}
                         >
                             <div style={{position:'relative'}}>
                             
                             <LazyLoadImage1
                               id={item.stationUrl}
                                // src={item.favicon===''?'/icons/r.png':item.favicon} 
                                src={item.favicon}
                                onError={(e)=>e.target.src='/radio/icons/r.png'}
                                alt="music"  effect="blur"/>
                                
                                <BsPlayCircle 
                                style={{position:'absolute',bottom:'10px',right:'2px'}}/>
                             </div>
                         <IconText>{item.name}</IconText>
                         </Grid>
                   ))}
                </GridContainer>
                )}
            </StaionContainer>
            )}
            
           
           {play.stationUrl?(
               <AllAudioPlayer/>
           ):('')}
           
               {sidebar&&(
                <SidebarContainer>
                   <Sidebar />
                </SidebarContainer>
               )}
        </Container>
    )
}

export default StationScreen

const StaionContainer=styled.main`
position:relative;
top:100px;
width:80%;
margin:auto;
height:100%;
padding-bottom:100px;
@media(max-width:468px){
    width: 70%;
    margin: auto 10%;
    }
`
const Heading=styled.h1`
font-size: 25px;
font-weight: bolder;
color: white;
@media(max-width:768px){
        font-size: 17px;
    }
    @media(max-width:468px){
        font-size: 13px;
    }
`

const GridContainer=styled.div`
display:grid;
grid-template-columns: repeat(7,minmax(0,1fr));
margin-top:50px;

@media(max-width:768px){
grid-template-columns: repeat(5,minmax(0,1fr));
}
@media(max-width:468px){
grid-template-columns: repeat(4,minmax(0,1fr));
margin-top:20px;
}

@media(max-width:368px){
grid-template-columns: repeat(3,minmax(0,1fr));
}
`
const Grid=styled.div`
margin:40px 0;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
height:100px;
@media(max-width:468px){
    margin: 20px 20px;
}

`
const LazyLoadImage1=styled(LazyLoadImage)`
width:100px;
height:100px;
min-width: 70px;
max-width: 100px;
min-height: 100px;
object-fit:cover;
border-radius:5px;
cursor: pointer;
transition-duration: 0.3s;
&:hover{
    box-shadow: #c20dda58 0px 5px 15px;
    opacity: 0.7;
}
@media(max-width:768px){
    width:80px;
height:80px; 
min-width: 80px;
min-height: 80px;
}
@media(max-width:468px){
    width:60px;
height:60px; 
min-width: 60px;
min-height: 60px;

}
`
const IconText=styled.p`
font-size:15px;
text-align:center;
margin-top:5px;
height:20px;
color: white;
@media(max-width:768px){
font-size:12px;
}
@media(max-width:468px){
font-size:10px;
margin-top: 0;
white-space: nowrap;
text-overflow: clip;
width: 50px;
overflow: hidden;
&:hover{
    overflow: visible;
    white-space: pre-wrap;
    width: 50px;
}
}
`
const Container=styled.div`
background-color:#141414;
height:100%;
`
const SidebarContainer=styled.div`
position: fixed;
right: 0;
top: 60px;
min-height: 80vh;
border-radius: 30px 0 0 30px ;
background-color: rgba(86, 45, 152,0.3);
@media(max-width:468px){
    width: 70px;
    border-radius: 20px 0 0 20px ;
}
`