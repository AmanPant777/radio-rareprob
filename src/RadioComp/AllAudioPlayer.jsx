import React from 'react'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import DialogBox from './DialogBox'
import VolumeControl from './VolumeControl'
import { stationAdd } from '../redux/PlayingSlice'
import { addRecent } from '../redux/RecentSlice'
import Loader from 'react-loader-spinner'

const AllAudioPlayer = () => {
  const station=useSelector(state=>state.playing)
  const dispatch=useDispatch()
  const allstation=useSelector(state=>state.all.station)
  const stationIndex= allstation.findIndex((element)=>element.url_resolved===station.stationUrl)
  const playlist=useSelector(state=>state.user.playlist)
  const [playing,setPlaying]=useState(false)
  const [spinner,setSpinner]=useState(false)
  const [LogoUp,setLogoUp]=useState(false)

    return (
        <Container>
            <ImageContainer>
                {LogoUp&&(
                        <UpStationContainer>
                        <UpStationCondition>
                            <UpStationimage 
                            src={station.station.favicon?station.station.favicon:'/radio/icons/r.png'}
                            onClick={()=>setLogoUp(false)}
                            />
                            <UpArrowDown1 
                            src="\radio\icons\upDown.svg" 
                            alt="uparrow" 
                            onClick={()=>setLogoUp(false)}
                            />
                        </UpStationCondition>
                    </UpStationContainer>
                )}
              {!LogoUp&&(
                    <UpArrow src="\radio\icons\upDown.svg" 
                    alt="uparrow" 
                    onClick={()=>setLogoUp(true)}
                    style={{marginLeft:'10px'}}
                    />
              )}
              {!LogoUp&&(
                   <StationImage 
                   src={station.station.favicon?station.station.favicon:'/radio/icons/r.png'}
                   onClick={()=>setLogoUp(true)}
                   />
              )}
                <div style={{display:'flex',marginLeft:'10px'}}>
                    <div style={{marginTop:'2px',width:'80px'}}>
                    <StationName style={{width:LogoUp&&'80px',}}>
                    {station.station.name}
                    </StationName>
                    </div>
                    {station.station.language===''?(
                      ''
                    ):(
                        <div style={{marginLeft:'20px'}}>
                        <LanguageText>Language</LanguageText>
                        <StationName>
                        {station.station.language}
                        </StationName>
                       </div>
                    )}
                   
                </div>
            </ImageContainer>
            <DialogBox/>
            <PlayingContainer>
                <button
                style={{display:'none'}}
                id="newWindow"
                onClick={()=>{
                   window.open(station.stationUrl,'_target', 'location=yes,height=370,width=320,scrollbars=yes,status=yes')
                }}
                >click</button>
                <LeftArrowImage    src="/radio/icon/radio_next-35.svg" 
            alt="previous" 
            onClick={()=>{
                dispatch(stationAdd({
                ...allstation[stationIndex===0?0:stationIndex-1]
            }))
            if(playlist===false){
                dispatch(addRecent({
                    ...allstation[stationIndex===0?0:stationIndex-1] 
               }))
            }
        }} 
            />
              <div style={{position:'relative'}}>
                  <div style={{position:'absolute'}}>
                      {spinner&&(
                         <Loader
                         type="Oval"
                         height={50}
                         width={50}
                         color="#803DEC"
                         />
                      )}
                 
                  </div>
              {playing?(
                     <PlayImage 
                     src="/radio/icon/playingRadio.svg" 
                     alt="radio" 
                     onClick={()=>{
                      if(document.getElementsByTagName('audio')[0]){
                          document.getElementsByTagName('audio')[0].pause()
                          return;
                      }
                      if(document.getElementsByTagName('video')[0]){
                          document.getElementsByTagName('video')[0].pause()
                      }
                  }}
                     />
                ):(
                    <StartPlayImage 
                    src="/radio/icon/radio.svg" 
                    alt="radio" 
                    onClick={()=>{
                        if(document.getElementsByTagName('audio')[0]){
                            document.getElementsByTagName('audio')[0].play()
                            return;
                        }
                        if(document.getElementsByTagName('video')[0]){
                            document.getElementsByTagName('video')[0].play()
                        }
                    }}
                    />
                )}
              </div>
              <RightArrowImage src="/radio/icon/radio_next-35.svg" alt="next"
                        onClick={()=>{
                            dispatch(stationAdd({
                            ...allstation[allstation.length-1===stationIndex?0:stationIndex+1]
                        }))
                        if(playlist===false){
                        dispatch(addRecent({

                            ...allstation[allstation.length-1===stationIndex?0:stationIndex+1]
                        }))
                        }
                        }}
              />
            </PlayingContainer>
            <ReactPlayer
            url={station.stationUrl}
            playing={true}
            controls={true}
            onBuffer={()=>setSpinner(true)}
            onPlay={()=>{
                setPlaying(true)
                setSpinner(false)
            }}
            onBufferEnd={()=>setSpinner(false)}
            onPause={()=>setPlaying(false)}
            style={{display:'none'}}
            onError={(e)=>{
                document.getElementById('newWindow').click()
                setSpinner(false)
                setPlaying(false)
                console.log(e.target)
            }}
            />
            <VolumeContainer>
                <GoogleContainer>
                    <a target='_blank' rel="noreferrer" href="https://play.google.com/store/apps/details?id=radio.fm.mytunner.gaana.liveradio.radiostation.pocketfm">
                    <GoogleLogo src="/radio/google.png" alt="google"/>
                    </a>
                    <GoogleText>
                        Install App Now
                    </GoogleText>
                </GoogleContainer>
              <VolumeControl/>
            </VolumeContainer>
        </Container>
    )
}

export default AllAudioPlayer

const Container=styled.div`
background-color: #191919;
position: fixed;
bottom: 0;
width: 100%;
height: 70px;
display: flex;
align-items: center;
justify-content: space-between;
z-index: 100;
`
const ImageContainer=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
`
const StationImage=styled.img`
    width: 70px;
    height: 70px;
    margin-left: 10px;
    object-fit: contain;
    border-radius: 10px;
    cursor: pointer;
    @media(max-width:468px){
        width: 40px;
        border-radius: 20px;
    }
`
const StationName=styled.p`
    font-size: 13px;
    color: white;
    @media(max-width:468px){
        font-size: 10px;
    }
`
const GoogleContainer=styled.div`
display: flex;
align-items: center;
margin-top: -10px;
margin-right: 20px;
@media(max-width:468px){
    display: none;
}
`
const VolumeContainer=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex: 0.4;
@media(max-width:468px){
    display: none;
}
`

const GoogleLogo=styled.img`
margin-top: 10px;
width: 180px;
object-fit: contain;
`
const GoogleText=styled.p`
font-size: 15px;
margin-top: 5px;
color: white;
`
const PlayingContainer=styled.div`
    display: flex;
    align-items: center;
    flex: 0.1;
`

const LeftArrowImage=styled.img`
width: 30px;
margin-right: 20px;
transform:rotate(180deg);
cursor: pointer;
transition-duration: 0.3s;
    &:hover{
transform: scale(1.1) rotate(180deg);
    }
    @media(max-width:468px){
        width: 20px;
        margin-right: 5px;
    }
`
const RightArrowImage=styled.img`
cursor: pointer;
width: 30px;
margin-left: 20px;
transition-duration: 0.3s;
    &:hover{
        transform: scale(1.1);
    }
    @media(max-width:468px){
        width: 20px;
        margin-left: 5px;
        margin-right: 5px;
    }
`
const PlayImage=styled.img`
    width: 50px;
    cursor: pointer;
    transition-duration: 0.3s;
    &:hover{
        transform: scale(1.1);
    }
    @media(max-width:468px){
        width: 50px;
    }
`
const StartPlayImage=styled(PlayImage)``

const UpArrow=styled.img`
transform: rotate(-90deg);
width: 16px;
cursor: pointer;
`
const UpArrowDown1=styled(UpArrow)`
transform: rotate(90deg);
position: absolute;
bottom: 10px;
right: 10px;
`
const UpStationContainer=styled.div`
position: absolute;
top: -170px;
`
const UpStationCondition=styled.div`
position: relative;
`

const UpStationimage=styled.img`
object-fit: cover;
width: 150px;
cursor: pointer;
border-radius: 20px;
`
const LanguageText=styled.h5`
color: white;
    @media(max-width:468px){
        font-size: 10px;
    }
`