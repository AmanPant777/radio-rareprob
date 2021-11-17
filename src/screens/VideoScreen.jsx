import React from 'react'
import styled from 'styled-components'
import VideoFeature from '../comp/VideoFeature/VideoFeature'
import kid from './kids.mp4'
const VideoScreen = () => {
    return (
        <Container >
            <AboveContainer>
                <Image src='icons/videoplayer.png' />
                <Title>Video Player Pro</Title>
                <AboutTitle>About  App</AboutTitle>
                <AboutText>
                    Rocks Player Ultra HD Video Player is Simple and Fast video player
                    with which you can play HD & ultra HD video of all formats.
                    Rocks Player offer unique set of features like Gesture
                    control for Volume, Brightness, Playback speed and Forward,
                    Assistance of subtitles of videos, Auto sensor etc.
                    Rocks Player give you enjoy smoother, better quality videos
                    movies.
                </AboutText>
                <KeyTitle>Key Features</KeyTitle>
                <KeyGrayTitle>Smooth Gesture</KeyGrayTitle>
                <Text>Gesture control for Volume, Brightness, Playback speed and Forward</Text>
            </AboveContainer>
            <Video autoPlay="autoPlay" playsinline autoplay muted loop >
                <source src={kid} type="video/mp4" />
            </Video>
            <PictureInPictureContainer>
                <PictureContainer>
                    <PictureTitle>Picture-in-picture mode  </PictureTitle>
                    <PictureText>View video in pip mode without block screen.</PictureText>
                    <PictureImage src='/images/pop.png' />
                </PictureContainer>
                <PictureContainer>
                    <PictureTitle>Online Entertainment</PictureTitle>
                    <PictureText>Now enjoy offline and online entertainement in a Single App</PictureText>
                    <PictureImage src='/images/online.png' />
                </PictureContainer>
            </PictureInPictureContainer>
            <VideoFeatureContainer>
                <VideoFeature />
            </VideoFeatureContainer>
        </Container>
    )
}

export default VideoScreen

const Container = styled.div`
height:fit-content;
width:100%;
margin-top: -5px;
background-image: linear-gradient(315deg, #f6f6f6 0%, #e9e9e9 74%);
@media(max-width: 768px){
}
`
const AboveContainer = styled.div`
width: 75%;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 10%;
padding-top: 40px;
/* top: 40px; */
@media(max-width: 768px){
    width: 85%;
    margin-left:3%;

}
`
const Image = styled.img`
margin-top: 20px;
width: 100px;
@media(max-width: 768px){
    width: 70px;
    margin-top:-10px;
}
`
const Title = styled.div`
font-size:40px;
color: red;
padding: 20px;
font-weight: bold;
@media(max-width: 768px){
    font-size:20px;
    padding: 10px;
}
`
const AboutTitle = styled.h2`
font-size: 25px;
margin-top: 30px;
color: red;
word-spacing: 10px;
font-weight: 900;
@media(max-width: 768px){
    font-size:15px;
}
`
const AboutText = styled.div`
text-align: center;
line-height:1.7;
margin-top: 30px;
@media(max-width: 768px){
font-size:12px;
}
`
const KeyTitle = styled.div`
color: red;
margin-top: 30px;
font-size:30px;
font-weight: 900;
word-spacing: 5px;
@media(max-width: 768px){
    margin-top:2%;
    font-size: 20px;
}
`
const Text = styled.div`
margin-top:30px;
font-size:20px;
width: 40%;
text-align: center;
color: rgba(0,0,0,0.8);

@media(max-width: 768px){
    margin-top:13px;
    width: 80%;
    font-size: 15px;
    overflow-x: hidden;

}
`
const KeyGrayTitle = styled.div`
margin-top: 30px;
font-size: 30px;
font-weight: bold;
color: rgba(0,0,0,0.7);
@media(max-width: 768px){
    margin-top:2%;
    font-size: 15px;
}
`
const PictureInPictureContainer = styled.div`
width: 70%;
display: flex;
/* margin-left: 5%; */
margin: auto;
justify-content:space-between;
@media(max-width: 768px){
    margin-top:10px;
    width:85%;
    height: fit-content;
    margin-left: 3%;
}
`
const PictureContainer = styled.div`
width: 45%;
padding: 20px; 
@media(max-width: 768px){
    padding:0;
    width:50%;
}
`
const PictureTitle = styled.div`
font-weight: bold;
font-size:30px;
text-align: center;
padding: 20px;
color: rgba(0,0,0,0.7);
@media(max-width: 768px){
    font-size:15px;
    padding:5px;
}
`
const PictureText = styled.div`
font-size: 15px;
color: rgba(0,0,0,0.7);

text-align: center;
@media(max-width: 768px){
    font-size:11px;
}
`
const PictureImage = styled.img`
width: 100%;
height: 450px;
object-fit:contain;
margin-top: 20px;
@media(max-width: 768px){
    height: 60%;
}
`
const VideoFeatureContainer = styled.div`
width: 75%;
margin-left: 10%;
@media(max-width: 768px){
    width: 70%;
    margin-left: 5%;
}
`
const Video = styled.video`
width: 40%;
margin-left: 28%;
margin-top: 40px;
border-radius: 35px;
margin-right: auto;
@media(max-width: 768px){
   width: 60%;
   margin-left: 16%;
   border-radius:30px;
}
`