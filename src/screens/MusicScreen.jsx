import React from 'react'
import styled from 'styled-components'
import Footer from '../comp/Footer'
import MusicFeatures from '../comp/MusicFeatures'
const MusicScreen = () => {
    return (
       <Container>
          <AboveContainer>
          <TitleContainer>
              <Title>Music Player</Title>
              <Icon src='icons/musicplayer.png'/>
          </TitleContainer>
          <AboutContainer>
              <Heading>About App</Heading>
              <Text>Browse and play your music by albums,artists,genres,songs,playlists,folders and albums artists.</Text>              
              <Text nomargintop={true}>Music Player lets you manage all your audio files and play the music file quickly and easily.You may easily browse and play music songs and create your playlists.</Text>
              <Text nomargintop={true}>Audio Player for all types of Audio Formats Music Player supports all music <br/>and audio formats including MP3,MIDI,WAV,FLAC,AAC,APE etc</Text>
              <Heading>Features</Heading>
              <Text zeromargin={true}>Supports all music and audio formats, like MP3,MIDI,WAV,FLAC,AAC,APE etc</Text>
              <Text zeromargin={true}>Play song in shuffle order or loop</Text>
              <Text zeromargin={true}>Browse and play your music by playlists,songs,albums,artists,folders and album artists</Text>
              <Text zeromargin={true}>Show recent playlist and most top song playlists.</Text>
              <Text zeromargin={true}>Notification STATUS support :display album artwork,title <br /> and artists,play/pause,skip forward and stop CONTROLS in notification status.</Text>
              <Text zeromargin={true}>Powerfull Equalizer with bass boost,reverb effect etc </Text>
              <Text zeromargin={true}>Set music as a ringtone of your choice, or you can change it.</Text>
              <Text zeromargin={true}>Sleep Timer</Text>
              <Text zeromargin={true}>Headset/Bluetooth support.</Text>
              <Text zeromargin={true}>Music Library wide SEARCH</Text>
              <Text zeromargin={true}>Custom Playlists,set albums,artists ,genres,folders songs <br /> to the playlists, show recent playlist. </Text>
              <Text zeromargin={true}>Equalizer enable with vitualizer and Bass Boost Features.</Text>
              <Text zeromargin={true}>Folder support play songs by folder.</Text>
              <Text zeromargin={true}>Settings to control Headset settings.</Text>
              <Text zeromargin={true}>Powerfull MP3 Cutter and Ringtone Cutter.</Text>
              <Text zeromargin={true}>Easily custamizable best themes- Light/Dark/Black/colour themes. </Text>
          </AboutContainer>
          </AboveContainer>
          <GridContainer>
             <MusicFeatures/>
             <FooterContainer>
              <Footer/>
          </FooterContainer>
          </GridContainer>
        
       </Container>
    )
}

export default MusicScreen
const Container = styled.div`
height: 100%;
background-image: url("/images/BGimage.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
width: 99vw;
margin-top: -40px;
@media(max-width: 768px){
    margin-top:-23%;
}
`
const AboveContainer=styled.div`
width: 74%;
margin-left: 10%;
@media(max-width: 768px){
    width: 70%;
    margin-left: 0;
    height:fit-content;
    margin-left: 5%;
    
}
`
const TitleContainer=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
margin-top: 40px;
`
const Title=styled.div`
font-size:50px;
color: #ac2c77;
@media(max-width: 768px){
    font-size:20px;
}
`
const Icon=styled.img`
width: 200px;
height: 100px;
object-fit: contain;
flex: 1;
@media(max-width: 768px){
    width: 100px;
    height: 50px;
}
`
const AboutContainer=styled.div`
width: 70%;
padding: 1px;
@media(max-width: 768px){
    height:fit-content;
}
`
const Heading=styled.div`
padding: 10px;
font-size:20px;
font-weight:bold;
color: #ac2c77;
@media(max-width: 768px){
    padding: 0 10px;
    font-size: 12px;
}
`
const Text=styled.p`
margin-top: ${props=>props.nomargintop?'0':'20px'};
margin-top: ${props=>props.zeromargin&&'-20px'};
padding: 10px;
line-height:1.6;
font-size: 15px;
@media(max-width: 768px){
font-size: 9px;
margin-top: ${props=>props.nomargintop?'0':'10px'};
padding: 0 10px;
line-height:1.5;
margin-top: ${props=>props.zeromargin&&'-1px'};

}
`

const GridContainer=styled.div`
margin-top: 12%;
width:75%;
margin-left: 9%;
@media(max-width: 768px){
    margin-top:0;
    margin-left:2%;
    height: fit-content;
    width: 70%;
    margin-left:5%
}
`
const FooterContainer=styled.div`
width: 70%;
margin-top:50px;
`