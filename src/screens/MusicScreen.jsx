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
                    <Icon src='icons/musicplayer.png' />
                </TitleContainer>
                <AboutContainer>
                    <Heading>About an App</Heading>
                    <Text heading={true}>Browse and play your music by albums, artists, genres, songs, playlists,
folders and albums artists.</Text>
                    <Text nomargintop={true} heading={true}>
                    Music Player lets you manage all your audio files and play the music file quickly and easily.
You may easily browse any music. Also, you can create playlist of your favourite songs.
                        </Text>
                    <Text nomargintop={true} heading={true}>It supports various Audio Formats including <strong> MP3, MIDI, WAV, FLAC, AAC, APE etc</strong> </Text>
                    <Heading>Basic Aspects</Heading>
                    <br />
                    <br />
                    <Text zeromargin={true}>
                    Supports music and audio formats, <br /> like <strong> MP3, MIDI, WAV, FLAC, AAC, APE </strong>  etc.
                        </Text>
                    <Text zeromargin={true}> Play song in shuffle order or loop.  </Text>
                    <Text zeromargin={true}> Browse and play music with playlists, albums and artists.  </Text>
                    <Text zeromargin={true}> Show recent playlist and most top song playlists. </Text>
                    <Text zeromargin={true}>
                    Notification STATUS support:display album artwork, <br /> title
                      and artists, play/pause, skip forward <br /> and stop CONTROLS in notification status.     
                        </Text>
                    <Text zeromargin={true}> Powerful Equalizer with bass boost, reverb effect and many more. </Text>
                    <Text zeromargin={true}>  Set music as a ringtone of your choice.
                                </Text>
                    <Text zeromargin={true}> Enable Sleep Timer.
 </Text>
                    <Text zeromargin={true}> Headset/Bluetooth support.
</Text>
                    <Text zeromargin={true}> Music Library wide SEARCH
 </Text>
                    <Text zeromargin={true}> Custom Playlists, set albums, artists, genres, folders songs <br />
to the playlists, show recent playlists.
 </Text>
                    <Text zeromargin={true}> Settings to control Headset settings.</Text>
                    <Text zeromargin={true}> Powerful MP3 Cutter and Ringtone Cutter.</Text>
                    <Text zeromargin={true}> Easily customizable best themes- <br /> Light/Dark/Black/colour themes.</Text>
                </AboutContainer>
            </AboveContainer>
            <GridContainer>
                <MusicFeatures />
                <FooterContainer>
                    <Footer />
                </FooterContainer>
            </GridContainer>
        </Container>
    )
}

export default MusicScreen
const Container = styled.div`
background-image: url("/images/BGimage.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
height: 100%;
width: 99vw;
@media(max-width: 768px){
    margin-top:-19%;
}
`
const AboveContainer = styled.div`
width: 74%;
margin-left: 7%;
margin-top: 20px;
position: relative;
top: 100px;
@media(max-width: 768px){
    width: 88%;
    margin-left: 0;
    height:fit-content;
    margin-left: 3%;
    margin-top: 0;
}
`
const TitleContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
`
const Title = styled.div`
font-size:40px;
color: #D51989;
font-weight: bold;
margin-left: 10px;
@media(max-width: 768px){
    font-size:30px;
}
@media(max-width:488px){
    font-size: 25px;
}
`
const Icon = styled.img`
width: 80px;
height: 80px;
margin-left: 30px;
object-fit: contain;
@media(max-width: 768px){
    width: 100px;
    height: 50px;
}
`
const AboutContainer = styled.div`
width: 70%;
padding: 1px;
@media(max-width: 768px){
    height:fit-content;
}
`
const Heading = styled.div`
padding: 10px;
font-size:25px;
font-weight:bold;
color: #D51989;
margin-top: 20px;
@media(max-width: 768px){
    padding: 0 10px;
    font-size: 20px;
    margin-top: 10px;
}
`
const Text = styled.p`
margin-top: ${props => props.nomargintop ? '10px' : '10px'};
margin-top: ${props => props.zeromargin ?'-10px':'0'};
padding: 10px;
line-height:1.6;
color: rgba(0,0,0,1);
font-size: ${props=>props.heading?'20px':'17px'};

@media(max-width: 768px){
font-size: ${props=>props.heading?'15px':'10px'};
margin-top: ${props => props.nomargintop ? '10px' : '10px'};
padding: 0 10px;
line-height:1.5;
margin-top: ${props => props.zeromargin && '5px'};
}
@media(max-width:488px){
font-size: ${props=>props.heading?'14px':'10px'};

}
`
const GridContainer = styled.div`
margin-top: 450px;
width:75%;
margin-left: 7%;
@media(max-width: 768px){
    margin-top:140px;
    margin-left:3%;
    height: fit-content;
    width: 88%;
    
}
`
const FooterContainer = styled.div`
width: 70%;
margin-top:50px;
`
