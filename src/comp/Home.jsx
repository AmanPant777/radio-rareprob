import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Header'
import videoplay from '../back.mp4'
import SideView from './SideView/SideView'
import MusicScreen from '../screens/MusicScreen'
import VideoScreen from '../screens/VideoScreen'
import GalleryScreen from '../screens/GalleryScreen'
import Footer from './Footer'
const Home = () => {
    const [product, setProduct] = useState(true)
    const home = "home"
    return (
        <Container>
            <HeaderContainer >
                <Header home={home} handleProduct={setProduct} product={product} />
            </HeaderContainer>
            <VideoContainer id={home}>
                <Video autoPlay="autoPlay" playsinline autoplay muted loop >
                    <source src={videoplay} type="video/mp4" />
                </Video>
                <FooterContainer>
                    <Footer text={false} icon={true} read={true} />
                </FooterContainer>
                {product && (
                    <SideViewContainer>
                        <SideView />
                    </SideViewContainer>
                )}
            </VideoContainer>
            <VideoPageContainer id="section-1" >
                <VideoScreen />
            </VideoPageContainer>
            <MusicContainer id="section-2">
                <MusicScreen />
            </MusicContainer>
            <MusicContainer id="section-3" style={{ marginTop: -20 }}>
                <GalleryScreen />
            </MusicContainer>
        </Container>
    )
}
export default Home

const Container = styled.div`
width: 100%;
height: 100%;
`
const VideoContainer = styled.div`
width: 100%;
object-fit: contain;
position: relative;
`
const HeaderContainer = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 200;
width: 100%;
height: 80px;
@media (max-width: 768px) {
    width: 100vw;
}
`
const Video = styled.video`
width: 100%;
object-fit: contain;

`
const FooterContainer = styled.div`
position:absolute;
bottom: 10px;
left: 20px;
top: 70%;
width: 90%;
height: fit-content;
@media (max-width: 768px) {
    top: 50%;
    left:5%;
    margin-top: 30px;
}
@media (max-width: 1200px) {
   top: 65%;
}
@media (max-width: 1000px) {
   top: 60%;
}
@media (max-width: 568px) {
   top: 40%;
}
`
const SideViewContainer = styled.div`
right: 0;
top: 0;
height:100vh;
width: 150px;
border-radius: 70px 0 0 70px;
z-index:100;
position: fixed;
@media (max-width: 1200px){
    width: 130px;
}
@media (max-width: 1000px){
    width: 110px;
}
@media (max-width: 768px){
    width: 50px;
}

`
const MusicContainer = styled.div`
margin-top: -40px;
`

const VideoPageContainer = styled.div`
`
