import React from 'react'
import styled from'styled-components'
import GalleryFeature from '../comp/GalleryFeature/GalleryFeature'
import pexels from './pexels.mp4'
const GalleryScreen = () => {
    return (
        <Container>
       <VideoContainer>
                   <Video  autoPlay="autoPlay" playsinline autoplay muted loop >
                      <source src={pexels} type="video/mp4"/>
                  </Video>
                  <IconContainer>
                      <Icon src="icons/gallery.png"/>
                      <IconTitle>Gallery</IconTitle>
                  </IconContainer>
       </VideoContainer>
       <FeatureContainer>
           <GalleryFeature/>
       </FeatureContainer>
        </Container>
    )
}

export default GalleryScreen

const Container=styled.div`
@media(max-width: 768px){
    width: 100vw;
    margin-top: -50px;
}
`
const VideoContainer=styled.div`
width: 100%;
height: 100%;
margin-top:-55px;
position: relative;
@media(max-width: 768px){
    height: 200px;
}
`
const Video=styled.video`
width: 99%;
height: 500px;
object-fit: cover;
margin-left: 0.3%;
@media(max-width: 768px){
    height: 100%;
    width: 98%;
    object-fit:cover;
}
`
const Icon=styled.img`
@media(max-width: 768px){
height: 50px;
}
`
const IconTitle=styled.p`
font-size: 100px;
font-weight: bold;
color: white;
@media(max-width: 768px){
    font-size:30px;
}
`
const IconContainer=styled.div`
position: absolute;
top: 15%;
left: 35%;
display: flex;
flex-direction: column;
align-items: center;
@media(max-width: 768px){
    top: 30%;
    left: 30%;
}
`
const FeatureContainer=styled.div`

`