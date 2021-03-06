import React from 'react'
import styled from 'styled-components'
import {LazyLoadImage} from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
const MusicFeatures = () => {
    return (
        <Container>
            <HeaderTitle>Features</HeaderTitle>
            <GridContainer>
                <Grid>
                    <Title>Equalizer</Title>
                    <ImageContainer>
                        <Image 
                        effect='blur' alt="equalizer" src='images/Equalizerimage.jpg' />
                        <Icon alt="equalizer" src='images/equalizer.png' />
                    </ImageContainer>
                    <Text >Not every person has the same sound quality taste. right?
                        So Here Rocks Player is all set with the Equalizer feature and it will improve the sound quality of your android device with the <strong>Bass Boost, Virtualizer, and Equalizer.</strong> </Text>
                </Grid>
                <Grid>
                    <Title>Discover</Title>
                    <ImageContainer>
                        <Image effect='blur' alt="discover" src='images/Discoverimage.jpg' />
                        <Icon alt="discover" src='images/disc.png' discover={true} />

                    </ImageContainer>
                    <Text>If you're fond of trending music then Rocks player is the one for you.
                        You may find trending songs in this app so that you won't be able to miss any trending music.
                    </Text>
                </Grid>
                <Grid>
                    <Title>Themes</Title>
                    <ImageContainer>
                        <Image effect='blur' alt="themes" src='images/themesmenia.jpg' />
                        <Icon alt="themes" src='images/ICONtheme.png' />
                    </ImageContainer>
                    <Text>Somewhere we all seek variation. isn't it?
                        That is why Rocks Player supports captivating and magical themes so that you can switch to different themes on this app according to your preference.</Text>
                </Grid>
                <Grid>
                    <Title one={true}>Video to mp3 converter</Title>
                    <ImageContainer>
                        <Image effect='blur' alt="video to mp3" src='images/videotomp3.jpg' />
                        <Icon alt="video to mp3" src='images/ICONvideotomp3.png' />
                    </ImageContainer>
                    <Text>We believe, Not everyone prefers to watch videos while listening to songs.
                        So Rocks Player supports mp3 converter.
                        Extract audio from any of your selected video songs and enjoy it wherever you are.</Text>
                </Grid>
                <Grid>
                    <Title>Sleep Timer</Title>
                    <ImageContainer>
                        <Image effect='blur' alt="sleep timer" src='images/SleepTimer.jpg' />
                        <Icon alt="sleep timer" src='images/ICONsleep time.png' />
                    </ImageContainer>
                    <Text> Listening to music after a tiring day is indeed a relaxing thing.
                        But we usually fall asleep. right?
                        Rocks player is introducing a Sleep timer and it works to softly fade the music out and stop it at the selected timing.</Text>
                </Grid>
                <Grid>
                    <Title>Playlists</Title>
                    <ImageContainer>
                        <Image effect='blur' alt="playlist" src='images/Playlist.jpg' />
                        <Icon alt="playlist" src='images/ICONplaylist.png' />
                    </ImageContainer>
                    <Text>Creating a playlist of favorite songs is fascinating.
                        Rocks player allows creating a playlist so that you can play your favorite playlist wherever you are without searching for it.</Text>
                </Grid>
                <Grid>
                    <Title>Ringtone</Title>
                    <ImageContainer>
                        <Image effect='blur' alt="Ringtone" src='images/ringtonimage.jpg' />
                        <Icon alt="Ringtone" src='images/ringtone.png' />
                    </ImageContainer>
                    <Text>Want to make your favorite song as a ringtone?
                        Rocks Player is all set with the Ringtone maker feature so that you can  trim the music and set it as ringtone accordingly.</Text>
                </Grid>
            </GridContainer>
            <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.rocks.music">
                <Image1 alt="google" src="images/icons/google.png" />
            </Link>
            <Div >
            </Div>
        </Container>
    )
}

export default MusicFeatures

const Container = styled.div`
`
const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(4,minmax(0,1fr));
width:100%;
margin-top: -20px;
height:100%;
@media (max-width: 1268px) {
grid-template-columns: repeat(3,minmax(0,1fr));
margin-top: 0px;
}
@media (max-width: 768px) {
grid-template-columns: repeat(3,minmax(0,1fr));
margin-top: 0px;
}
@media (max-width: 488px) {
grid-template-columns: repeat(2,minmax(0,1fr));
margin-top: 0px;
}
`
const Grid = styled.div`
height: 650px;
margin-top:50px;
@media(max-width:1200px){
    height: 700px;
    margin-top: 100px;
}
@media (max-width: 768px) {
    height: fit-content;
    width: 100%;
    margin-top: 10px;
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
`
const Title = styled.div`
font-weight: bold;
padding: 20px 0;
text-align: center;
margin-left: -10%;
font-size: 20px;
@media (max-width: 768px){
    font-size:13px;
    padding: 0 5px;
    margin-bottom: ${props => props.one && ' -12px'};
}
@media (max-width: 555px){
    font-size:9px;
    padding: 0 0;
    margin-bottom: ${props => props.one && ' 1px'};
}
`

const Image = styled(LazyLoadImage)`
width: 90%;
height: 420px;
width: 250px;
min-width: 200px;
object-fit: cover;
margin-top:20px;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
transition: transform .2s;
&:hover{transform: scale(1.1)}; 
@media(max-width:1400px){
    width: 230px;
}
@media(max-width: 768px){
    width: 70%;
    height: 160px;
border-radius: 4px;
margin-left: 5%;
min-width: 150px;
}
@media(max-width: 555px){
    /* width: 80%; */
    min-width: 120px;
    max-width: 200px;
    height: 130px;
    width: 140px;
    margin-left: 5%;
    margin-top: 15px;
   border-radius: 4px;
}
`
const Text = styled.div`
font-size:15px;
width:90%;
margin: auto;
margin-left: 0;
margin-top: 30px;
@media(max-width: 768px){ 
    font-size:9px;
    line-height:1.3;
    width: 70%;
    margin-top: 50px;
    margin-left: 5%;
}
@media(max-width: 488px){ 
    font-size:10px;
    line-height:1.3;
    width: 90%;
    margin-top: 20px;
}
`
const Icon = styled.img`
width: 60px;
top: 8%;
left: 35%;
max-width: ${props => props.discover && `
    40px
`};

position: absolute;
@media (max-width: 768px) {
    width: 25px;
    top: 20%;
    left: 35%;
    max-width: ${props => props.discover && `
    20px
`};
}
`
const ImageContainer = styled.div`
position: relative;
height: 70%;
@media (max-width: 768px) {
    height: 150px;
}
`
const HeaderTitle = styled.div`
padding: 20px 0;
font-size: 30px;
color: #ac2c77;
font-weight: bold;
@media(max-width: 768px){
    font-size:15px;
    padding:0;
    width:70%;
}
`
const Div = styled.div`
height: 100px;
@media(max-width:768px){
    height: 70px;
}
`
const Link = styled.a`
cursor: pointer;
display: inline-block;
max-width: 200px;
margin-left: 47%;
margin-top: 50px;
@media(max-width:768px){
   margin-top: 10px;
}
`
const Image1 = styled.img`
max-width: 280px;
margin-top: 40px;
@media (max-width: 768px){
    width: 180px;
    margin-left: -20%;
}
@media (max-width: 1200px){
    width: 200px;
    margin-top: 40px;
}
@media (max-width: 568px){
    width: 150px;
    margin-top: 20px;
}
`