import React from 'react'
import styled from 'styled-components'
import OurTeam from '../OurTeam/OurTeam'
import Zoom from 'react-reveal/Zoom'
import KeyFeatures from '../../Other/KeyFeatures'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const GalleryFeature = () => {
    return (
        <Container id="section-5">
            <AboutTitle first={true}>About App</AboutTitle>
            <AboutText>Photo Editor and Collage Maker Gallery App with gallery-vault features is an excellent app for android devices supporting various features.</AboutText>
            <AboutTitle>Key Features</AboutTitle>
            <KeyFeatures />
            <Zoom>
                <Image effect='blur' alt="artboard" src="images/artboard.png" />
            </Zoom>
            <Link id="about" target="_blank" href="https://play.google.com/store/apps/details?id=com.rocks.photosgallery">
                <Image1 alt="google" src="images/icons/google.png" />
            </Link>
            <OurTeamContainer >
                <OurTeam />
            </OurTeamContainer>
        </Container>
    )
}
export default GalleryFeature

const Container = styled.div`
width: 75%;
margin-left: 7%;
@media (max-width:768px){
    width: 80%;
    margin-left: 5%;
}
`
const AboutTitle = styled.p`
color: red;
padding: 20px 0;
font-size:25px;
font-weight:bold;
margin-top: ${props => props.first && '20px'};
@media(max-width: 768px){
    padding: 10px 0;
    font-size:13px;
}
`
const AboutText = styled.p`
font-size:22px;
width:80%;
line-height:1.7;
@media(max-width: 1200px){
    font-size:20px;
line-height:1.2;
}
@media(max-width: 768px){
    font-size:15px;
line-height:1.2;
}
`

const Image = styled(LazyLoadImage)`
width: 100%;
margin: auto;
object-fit: contain;
margin-left: 30%;
height:600px;
margin-top:80px;
@media(max-width: 1200px){
    width: 100%;
   height: 500px;
margin-left: 20%;
}
@media(max-width:1000px){
    margin-left: 14%;
}
@media(max-width:768px){
    height: 300px;
    margin-top: 40px;
    margin-left: 40%;
}
@media(max-width:500px){
    margin-left: 15%;
}
@media(max-width:468px){
    height: 200px;
    margin-left: 14%;
}
`
const OurTeamContainer = styled.div`
width: 98vw;
height: 100%;
margin-left: -15%;
margin-top: 50px;
border-radius: 40px;
background-color:#e9d6d616;
@media (max-width: 768px) {
    margin-left: -30px;
margin-top: 0px;
}
`
const Link = styled.a`
cursor: pointer;
display: inline-block;
max-width: 200px;
margin-left: 40%;
margin-top: 40px;
@media(max-width:768px){
   margin-top: 0;
}
`
const Image1 = styled.img`
max-width: 280px;
@media (max-width: 768px){
    width: 180px;
    margin-left: -5%;
}
@media (max-width: 1200px){
    width: 200px;
    margin-top: 40px;
}
@media (max-width: 568px){
    width: 150px;
    margin-top: 20px;
    margin-left: -20%;
}
`