import React from 'react'
import styled from 'styled-components'
const MusicFeatures = () => {
    return (
        <Container>
            <HeaderTitle>Features</HeaderTitle>
           <GridContainer>
               <Grid>
                   <Title>Equalizer</Title>
                   <ImageContainer>
                   <Image src='images/Equalizerimage.jpg'/>
                   <Icon src='images/ringtone.png'/>
                   </ImageContainer>
                  
                   <Text>Rocks player is the best Audio player application for android devices.
Please Note: This is a music player, not a music downloader.
It is a simple yet stylish music player for android.</Text>
               </Grid>
               <Grid>
                   <Title>Discover</Title>
                   <ImageContainer>
                   <Image src='images/Discoverimage.jpg'/>
                   <Icon src='images/ringtone.png'/>
                   </ImageContainer>
                   <Text>Rocks player is the best Audio player application for android devices.
Please Note: This is a music player, not a music downloader.
It is a simple yet stylish music player for android.</Text>
               </Grid>
               <Grid>
                   <Title>Themes</Title>
                   <ImageContainer>
                   <Image src='images/Themesimage.jpg'/>
                   <Icon src='images/ICONtheme.png'/>
                   </ImageContainer>
                   <Text>Rocks player is the best Audio player application for android devices.
Please Note: This is a music player, not a music downloader.
It is a simple yet stylish music player for android.</Text>
               </Grid>
               <Grid>
                   <Title>Video to mp3 converter</Title>
                   <ImageContainer>
                   <Image src='images/videotomp3.jpg'/>
                   <Icon src='images/ICONvideotomp3.png'/>
                   </ImageContainer>
                   <Text>Rocks player is the best Audio player application for android devices.
Please Note: This is a music player, not a music downloader.
It is a simple yet stylish music player for android.</Text>
               </Grid>
               <Grid>
                   <Title>Sleep Timer</Title>
                   <ImageContainer>
                   <Image src='images/SleepTimer.jpg'/>
                   <Icon src='images/ICONsleep time.png'/>
                   </ImageContainer>
                   <Text>Rocks player is the best Audio player application for android devices.
Please Note: This is a music player, not a music downloader.
It is a simple yet stylish music player for android.</Text>
               </Grid>
               <Grid>
                   <Title>Playlists</Title>
                   <ImageContainer>
                   <Image src='images/Playlist.jpg'/>
                   <Icon src='images/ICONplaylist.png'/>
                   </ImageContainer>
                   <Text>Rocks player is the best Audio player application for android devices.
Please Note: This is a music player, not a music downloader.
It is a simple yet stylish music player for android.</Text>
               </Grid>
               <Grid>
                   <Title>Ringtone</Title>
                   <ImageContainer>
                   <Image src='images/ringtonimage.jpg'/>
                   <Icon src='images/ringtone.png'/>
                   </ImageContainer>
                   <Text>Rocks player is the best Audio player application for android devices.
Please Note: This is a music player, not a music downloader.
It is a simple yet stylish music player for android.</Text>
               </Grid>
           </GridContainer>
        </Container>
    )
}

export default MusicFeatures

const Container=styled.div``
const GridContainer=styled.div`
display: grid;
grid-template-columns: repeat(4,minmax(0,1fr));
width:100%;
margin-top: -20px;
height:100%;
@media (max-width: 768px) {
grid-template-columns: repeat(2,minmax(0,1fr));
margin-top: 0px;
}
`
const Grid=styled.div`
height: 600px;
margin-top:20px;
@media (max-width: 768px) {
    height: 400px;
    width: 100%;
}
`
const Title=styled.div`
font-weight: bold;
padding: 20px 0;
text-align: center;
margin-left: -10%;
@media (max-width: 768px){
    font-size:12px;
    padding: 0 5px;
    text-align: left;
}
`
    
const Image=styled.img`
width: 90%;
height: 85%;
object-fit: cover;
margin-top:20px;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
transition: transform .2s;
&:hover{transform: scale(1.1)}; 
@media(max-width: 768px){
    width: 90%;
    height: 80%;
}
`
const Text=styled.div`
font-size:15px;
width:90%;
margin: auto;
@media(max-width: 768px){ 
    font-size:8px;
}
`
const Icon=styled.img`
width: 60px;
top: 8%;
left: 28%;
position: absolute;
@media (max-width: 768px) {
    width: 50px;
}
`
const ImageContainer=styled.div`
position: relative;
height: 70%;
@media (max-width: 768px) {
    height: 60%;
}
`
const HeaderTitle=styled.div`
padding: 20px 0;
font-size: 30px;
color: #ac2c77;
font-weight: bold;
@media(max-width: 768px){
    font-size:15px;
    padding:0;
    width:70%;
    margin-left: 5%;
}
`