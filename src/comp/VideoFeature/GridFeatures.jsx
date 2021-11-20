import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
const GridFeatures = () => {
    return (
        <Container>
            {/* <Title>Basic Aspects</Title> */}
            <GridContainer>
                <Grid >
                    <ImageContainer one={true}></ImageContainer>
                    <ImageTitle>Video Player for all formats</ImageTitle>
                    <ImageText>Supports all possible formats of videos like <strong> 8k,4k,MKV,MP4</strong>  etc</ImageText>
                </Grid>
                <Grid>
                    <ImageContainer two={true}></ImageContainer>
                    <ImageTitle>Music Player</ImageTitle>
                    <ImageText>Search and Manage Tracks, Artists, Albums, Genres, recent playlist and create playlist.</ImageText>
                </Grid>
                <Grid>
                    <ImageContainer three={true}></ImageContainer>
                    <ImageTitle>Online Videos</ImageTitle>
                    <ImageText>Search and play online trending videos with category like music, sports, news, comedy, technology and many more</ImageText>
                </Grid>
                <Grid>
                    <ImageContainer four={true}></ImageContainer>
                    <ImageTitle>Photo Albums</ImageTitle>
                    <ImageText>Search and manage photos from local storage in device.</ImageText>
                </Grid>
                <Grid>
                    <ImageContainer five={true}></ImageContainer>
                    <ImageTitle>Customize Themes</ImageTitle>
                    <ImageText>Different Themes with gradient color and Night/Day mode.</ImageText>
                </Grid>
                <Grid>
                    <ImageContainer six={true}></ImageContainer>
                    <ImageTitle>More Features</ImageTitle>
                    <ImageText>Dual audio, subtitle search, PIP mode in the video player.Playback speed, easy control on volume and brightness.</ImageText>
                </Grid>
            </GridContainer>
            <LinkContainer>
                <Link href="https://play.google.com/store/apps/details?id=com.rocks.music.videoplayer">
                    <Image src='images/icons/google.png' />
                </Link>
            </LinkContainer>

            <div style={{ height: '100px' }}>

            </div>

            <Footer color={true} />
        </Container>
    )
}

export default GridFeatures

const Container = styled.div`
margin-top: 50px;
@media(max-width:788px){
    margin-top: 30px;
    margin-left: 20px;
}
`
// const Title = styled.div`
// color: rgba(0,0,0,0.7);
// font-size: 40px;
// font-weight: bold;
// text-align: center;
// padding: 20px;
// @media(max-width: 768px){
//     font-size:20px;
//     padding: 0;
//     padding-top: 6px;
// }

const Grid = styled.div`
height: 250px;
margin-top: 20px;
@media(max-width: 768px){
    height: 160px;
    margin: 0;
}
@media(max-width: 468px){
    height: 160px;
    margin-top: 10px;
}
`
const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(3,minmax(0,1fr));
margin-top:0px;
@media(max-width: 768px){
    grid-template-columns: repeat(2,minmax(0,1fr));
    margin-top:10px;
}
`
const ImageContainer = styled.div`
margin: auto;
height: 40%;
width: 50%;
background-repeat:no-repeat;
margin-top: 20px;
border-radius:10px;
align-items: center;
text-align: center;
background-position:center;
background-image: url(${props => props.one ? 'images/icons/video.svg' : props.two ? 'images/icons/music.svg' : props.three ? 'images/icons/online.svg' : props.four ? 'images/icons/photo.svg' : props.six ? 'images/icons/more.svg' : props.five ? 'images/icons/themes.svg' : ''});
transition: transform .2s;
&:hover{transform: scale(1.1)}; @media(max-width:768px){
  margin-top: 20px;
  width:90% ;
}
@media(max-width: 768px){
    height: 40px;
    width: 40px;
    margin-top: 0;
}
`
const ImageTitle = styled.p`
font-size: 20px;
padding: 10px;
color: rgba(0,0,0,0.8);
margin-top: 20px;
text-align: center;
font-weight: bold;
@media(max-width: 768px){
    font-size: 13px;
    margin-top: 0;
}
`
const ImageText = styled.p`
font-size: 15px;
text-align: center;
width: 88%;
margin: auto;
color: rgba(0,0,0,0.9);
@media(max-width: 768px){
    font-size:10px;
    line-height: 1.5;
    width: 97%;
}
`
const Link = styled.a`
cursor: pointer;
display: inline-block;
max-width: 200px;
margin-top: 40px;
margin-left: -15px;
@media(max-width:768px){
   margin-top: 20px;
   margin-bottom: 40px;
   margin-left: 17px;
}
`
const Image = styled.img`
max-width: 280px;
@media (max-width: 768px){
    width: 180px;
    margin-left: -20%;
}
@media (max-width: 1200px){
    width: 200px;
}
@media (max-width: 568px){
    width: 150px;
    
}
`
const LinkContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media(max-width:768px){
    padding-bottom: 20px;
}
`