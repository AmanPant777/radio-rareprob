import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
const GridFeatures = () => {
    return (
        <Container>
            <Title>Specialities</Title>
            <GridContainer>
                <Grid >
                    <ImageContainer one={true}></ImageContainer>
                    <ImageTitle>Video Player for all formats</ImageTitle>
                    <ImageText>Supports all possible formats of videos like 8k,4k,MKV,MP4 etc</ImageText>
                </Grid>
                <Grid>
                    <ImageContainer two={true}></ImageContainer>
                    <ImageTitle>Music Player</ImageTitle>
                    <ImageText>Search and Manage Tracks, Artists, Albums, Genres, recent playlist and create playlist.</ImageText>
                </Grid>
                <Grid>
                    <ImageContainer three={true}></ImageContainer>
                    <ImageTitle>Online Videos</ImageTitle>
                    <ImageText>Search and play online trending videos with category like music, sports, news, commedy, technology etc.</ImageText>
                </Grid>
                <Grid>
                    <ImageContainer four={true}></ImageContainer>
                    <ImageTitle>Photo albums</ImageTitle>
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
                    <ImageText>Dual Audio,subtitle search, PIP mode in video player playback speed, easy control on volume and brightness etc.</ImageText>
                </Grid>
            </GridContainer>
            <div style={{ height: '100px' }}>

            </div>
            <Footer color={true} />
        </Container>
    )
}

export default GridFeatures

const Container = styled.div`
margin-top: 50px;

`
const Title = styled.div`
color: gray;
font-size: 40px;
font-weight: bold;
text-align: center;
padding: 20px;
@media(max-width: 768px){
    font-size:20px;
    padding: 0;
    padding-top: 6px;
}
`
const Grid = styled.div`
height: 250px;
margin-top: 20px;
@media(max-width: 768px){
    height: 160px;
    margin: 0;
}
`
const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(3,minmax(0,1fr));
margin-top:-40px;
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
background-image: url(${props => props.one ? 'icons/video.svg' : props.two ? 'icons/music.svg' : props.three ? 'icons/online.svg' : props.four ? 'icons/photo.svg' : props.six ? 'icons/more.svg' : props.five ? 'icons/themes.svg' : ''});
transition: transform .2s;
&:hover{transform: scale(1.1)}; 
@media(max-width: 768px){
    height: 40px;
    width: 40px;
    margin-top: 0;
}
`
const ImageTitle = styled.p`
font-size: 20px;
padding: 10px;
color: gray;
margin-top: 20px;
text-align: center;
font-weight: bold;
@media(max-width: 768px){
    font-size: 11px;
    margin-top: 0;
}
`
const ImageText = styled.p`
font-size: 15px;
text-align: center;
color: gray;
width: 98%;
@media(max-width: 768px){
    font-size:9px;
}
`