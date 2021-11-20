import React from 'react'
import styled from 'styled-components'
import VideoFeature from '../comp/VideoFeature/VideoFeature'
const VideoScreen = () => {
    return (
        <Container >
            <AboveContainer>
                <HeadingContainer>
                <Image src='images/icons/videoplayer.png' />
                <Title>Video Player Pro</Title>
                </HeadingContainer>
                <AboutTitle>About an app</AboutTitle>
                <AboutText>
                Rocks Player Ultra HD Video Player is a Simple and Fast Video Player in which you can play HD and Ultra HD videos of all formats. Rocks Player offers a unique set of features like Gesture controls for Volume, Brightness and Playback speed along with forward and rewind. The assistance of subtitles of videos, Auto sensor etc. Also, Rocks Player supports smoother and better quality videos & movies.
                </AboutText>
                <KeyTitle>Key Features</KeyTitle>
                <HeadingContainer two={true}>
                <KeyGrayTitle>Smooth Gesture</KeyGrayTitle>
                <Text>Gesture control for Volume, Brightness, Playback speed and Forward</Text>
                <Image1 src="images/kids.png"/>
                </HeadingContainer>
            </AboveContainer>
            {/* <Video autoPlay="autoPlay" playsinline autoplay muted loop >
                <source src={kid} type="video/mp4" />
            </Video> */}
            <PictureInPictureContainer>
                <PictureContainer>
                    <PictureTitle>Picture-in-picture mode</PictureTitle>
                    <PictureText>View video in pip mode without block screen.</PictureText>
                    <PictureImage src='/images/pop.png' one={true}/>
                </PictureContainer>
                <PictureContainer>
                    <PictureTitle>Online Videos</PictureTitle>
                    <PictureText>Search and play online trending videos with category like music, sports, news, comedy, technology and many more</PictureText>
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
/* display: flex;
flex-direction: column;
justify-content: center;
align-items: center; */
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
@media(max-width: 468px){
    width: 60px;
    margin-top:-10px;
}
`
const Title = styled.div`
font-size:40px;
color: red;
padding: 20px;
font-weight: bold;
@media(max-width: 768px){
    font-size:30px;
    padding: 10px;
}
@media(max-width: 488px){
    font-size:25px;
    padding: 5px 10px;
}
`
const AboutTitle = styled.h2`
font-size: 25px;
margin-top: 30px;
color: red;
word-spacing: 2px;
font-weight: 900;
@media(max-width: 768px){
    font-size:20px;
}
`
const AboutText = styled.div`
text-align: left;
line-height:1.7;
margin-top: 30px;
color: black;
font-size: 22px;
@media(max-width: 1200px){
font-size:20px;
}
@media(max-width: 768px){
font-size:15px;
}
`
const KeyTitle = styled.div`
color: red;
margin-top: 30px;
font-size:30px;
font-weight: 900;
word-spacing: 5px;
@media(max-width: 768px){
    margin-top:30px;
    font-size: 20px;
}
`
const Text = styled.div`
margin-top:30px;
font-size:20px;
width: 40%;
text-align: center;
color: rgba(0,0,0,0.9);
@media(max-width: 768px){
    margin-top:13px;
    width: 80%;
    font-size: 15px;
    overflow-x: hidden;
}
@media(max-width:498px){
    margin-top:5px ;
    font-size:13px ;
}
`
const KeyGrayTitle = styled.div`
margin-top: 30px;
font-size: 30px;
font-weight: bold;
color: rgba(0,0,0,0.8);
@media(max-width: 768px){
    margin-top:2%;
    font-size: 15px;
}
@media(max-width: 498px){
    margin-top:0;
    font-size: 15px;
}
`
const PictureInPictureContainer = styled.div`
width: 70%;
display: flex;
/* margin-left: 5%; */
margin: auto;
margin-top: 30px;
justify-content:space-between;
@media(max-width: 788px){
    margin-top:30px;
    width:85%;
    max-height: 500px;
    margin-left: 3%;
}
@media(max-width: 498px){
    margin-top:30px;
    width:88%;
    max-height: 400px;
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
color: rgba(0,0,0,0.8);
@media(max-width: 768px){
    font-size:15px;  
    padding:5px;
}
@media(max-width: 498px){
    font-size:15px;
    padding:5px;
}
`
const PictureText = styled.div`
font-size: 15px;
color: rgba(0,0,0,0.9);
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
    height: 300px;
}
@media(max-width: 498px){
    height: 200px;
    margin-top: ${props=>props.one&&`40px`};
}
`
const VideoFeatureContainer = styled.div`
width: 75%;
margin-left: 10%;
@media(max-width: 768px){
    width: 70%;
    margin-left: 2%;
}
`
// const Video = styled.video`
// width: 40%;
// margin-left: 28%;
// margin-top: 40px;
// border-radius: 30px;
// margin-right: auto;
// @media(max-width: 768px){
//    width: 50%;
//    margin-left: 20%;
//    border-radius:20px;
// }
// @media(max-width: 498px){
//    width: 48%;
//    margin-left: 21%;
//    margin-top: 5px;
//    border-radius:20px;
// }
// `
const HeadingContainer=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: ${props=>props.two&&`40px`};
`
const Image1=styled.img`
max-width: 550px;
object-fit: contain;
@media(max-width:788px){
    max-width: 450px;
}
@media(max-width:488px){
    max-width: 280px;
    margin-left: 20px;
}
`