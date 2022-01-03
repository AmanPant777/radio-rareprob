import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import Header from '../../RadioComp/Header'
import axios from 'axios'
import {  useSelector ,useDispatch} from 'react-redux'
import {  recentPlaying, removeSidebar, switchPlaylist } from '../../redux/RecentSlice'
import { playStation, stationAdd } from '../../redux/PlayingSlice'
import { addallstation } from '../../redux/AllSlice'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {BsPlayCircle} from 'react-icons/bs'
import Loader from 'react-loader-spinner'
import CountryStation from '../../RadioComp/CountryStation'
import Sidebar from '../../RadioComp/Sidebar'
import AllAudioPlayer from '../../RadioComp/AllAudioPlayer'

const CountryPage = () => {
    const [most,setMost]=useState()
    const [AllStation,setAllStations]=useState()
    const dispatch=useDispatch()
    const user=useSelector(state=>state.user.users)
    const sidebar=useSelector(state=>state.user.sidebar)
    const playing=useSelector(state=>state.user.playing)
    
   
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('country');
    const [isloading,setIsLoading]=useState(true)

    const container=document.getElementById('container')
    useEffect(()=>{
        if(container){
            container.addEventListener('click',()=>{
               dispatch(removeSidebar())
            })
        }
     
    },[container,dispatch])

    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

    useEffect(()=>{ 
        const fetchmostplayed=async()=>{
            const stationmostplayed = await axios.get('https://nl1.api.radio-browser.info/json/stations/search',{
                params:{
                    country:id,
                    order:'clickcount',
                    reverse:true,
                    limit:10
                }
            })
              setMost(stationmostplayed.data)
              setIsLoading(false)
            }
        fetchmostplayed()
    },[id])


    useEffect(()=>{
        const fetchmostplayed=async()=>{
            const allStations = await axios.get('https://nl1.api.radio-browser.info/json/stations/search',{
                params:{
                    country:id,
                    limit:7
                }
            })
              setAllStations(allStations.data)
              setIsLoading(false)
            }
        fetchmostplayed()
    },[id])   

    return (
       <Container>
           <HeaderContainer>
           <Header screen={true} onstation=''/>
           </HeaderContainer>

           {playing===''?(
               ''
               ):(
                <AllAudioPlayer/>
           )}

           <StationContainer id='container'>
               {user.length===0?'':(
                   <div >
            <RecentTitle >Recent Played</RecentTitle>
                          <RecentContainer >
                       
                      
                       {user?.map((item,index)=>
                           <div 
                           key={index} 
                           style={{display:'flex',flexDirection:'column',margin:"0px 10px 0 0",cursor:'pointer'}}>
                               <ImageContainer style={{position:'relative'}}>
                               <LazyLoadImage1 
                                 onClick={()=>{
                                    dispatch(recentPlaying({
                                      ...item
                                  }))
                                  dispatch(switchPlaylist())
                                  dispatch(stationAdd({
                                      ...item
                                  }))
                                  
                                  dispatch(addallstation(
                                    user
                                    ))
                                    dispatch(playStation())
                                 }}
                                 onError={(e)=>e.target.src='/radio/icons/r.png'}
                               src={item.favicon===''?`/radio/icons/r.png`:item.favicon} alt="recent" 
                               effect='blur'
                               />
                               <BsPlayCircle1
                               />
                               </ImageContainer>
                               <RecentText >{item.name}</RecentText>
                               
                           </div>
                           )}
                       
                          
                       </RecentContainer>
                   </div>
                   
                  
                )} 
              
              
                {isloading?(
                   <div style={{margin:'auto',justifyContent:'center',display:'flex',flexDirection:'column',height:'70vh',alignItems:'center'}}>
                   <Loader
            type='Oval'
            height={400}
            width={100}
            color='#952bf1'
           />
             </div>
                ):(
                <>
                <div style={{marginTop:'30px'}}>

            <CountryStation 
            data={most&&most.filter(item=>item.stationuuid!=='7b95d030-8791-4914-88c6-b351ed0158d4'&&item.stationuuid!=='0ab6a1f5-c47f-4280-b9d7-cbcf4d4be51d'&&item.stationuuid!=="4d7eb49e-55b2-4ff2-bb9c-0083c4b74bf4"&&item.stationuuid!=='962af6d2-0601-11e8-ae97-52543be04c81')} 
            country={id} text="Most Played" />   
              </div>
              <CountryStation data={AllStation} text="All Stations" country={id}/>
                </>
                )}

           </StationContainer>

           {sidebar&&(
                <SidebarContainer>
                <Sidebar/>
            </SidebarContainer>
           )}

       </Container>
    )
}

export default CountryPage
const LazyLoadImage1=styled(LazyLoadImage)`
width: 100px;
height: 100px;
border-radius: 10px;
transition-duration: 0.3s;
&:hover{
    box-shadow: #c20dda58 0px 5px 15px;
    opacity: 0.7;
}
@media(max-width:468px){
  width: 70px;
  height: 70px;
}
`
const ImageContainer=styled.div`
    height: 100px;
    width: 100px;
    @media(max-width:468px){
  width: 70px;
  height: 70px;
}
`

const BsPlayCircle1=styled(BsPlayCircle)`
position: absolute;
bottom: 10%;
right: 2px;
@media(max-width:1300px){
  bottom: 10%;
  right: 1px;
}
@media(max-width:468px){
  bottom: 2px;
  right: 1px;
  width: 15px;
}
`

const Container=styled.div`
background-color: #141414;
min-height: 1200px;
`
const HeaderContainer=styled.div`
position: fixed;
width: 100%;
z-index: 400;
`
const StationContainer=styled.div`
padding-top:100px;
width: 75%;
margin: auto;
`
const SidebarContainer=styled.div`
position: fixed;
right: 0;
top: 60px;
min-height: 90vh;
border-radius: 20px 0 0 20px;
background-color: rgba(86, 45, 152,0.3);
@media(max-width:468px){
  width: 60px;
}
`
const RecentContainer=styled.div`
display:grid;
margin: auto;
margin-top:30px;
grid-template-columns: repeat(6,minmax(0,1fr));
@media(max-width:768px){
grid-template-columns: repeat(4,minmax(0,1fr));
}
@media(max-width:468px){
grid-template-columns: repeat(3,minmax(0,1fr));
}
`
const RecentTitle=styled.h1`
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
const RecentText=styled.p`
  margin-top: 10px;
  color: white;
  font-size: 15px;
  @media(max-width:768px){
  font-size: 12px;
  }
  @media(max-width:468px){
  font-size: 10px;
  }
`