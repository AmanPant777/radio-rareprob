import React from 'react'
import styled from 'styled-components'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import GridFeatures from './GridFeatures'
const VideoFeature = () => {
    return (
        <Container>
            <FeatureContainer>
                <FeatureTitle>Multi-featured App</FeatureTitle>
                <FeatureText>Music, Photos, Videos and Online Trending videos are accessible.</FeatureText>
                <ImageContainer>
                    <Image effect='blur' alt="All Features" src="images/picture.png" />
                    {/* <FeatureImage src='/images/mobile1.png' middle={true}/>
                 <FeatureImage src="/images/mobile2.png" right={true}/>
                 <FeatureImage src="/images/mobile3.png" left={true}/> */}
                </ImageContainer>
            </FeatureContainer>
            <GridFeatures />
        </Container>
    )
}
export default VideoFeature
const Container = styled.div`
width: 100%;
height: 100%;
margin-top: 60px;
@media(max-width:788px){
    margin-top:30px;
    margin-left: 50px;
}
@media(max-width:498px){
    margin-left: 20px;
    margin-top: 30px;
}
`
const FeatureContainer = styled.div`
@media(max-width:488px){
    margin-left: 20px;
}
`
const FeatureTitle = styled.div`
text-align: center;
font-size:30px;
color: rgba(0,0,0,0.8);
font-weight:bold;
padding:20px;
@media(max-width: 768px){
    font-size:20px;
    padding:0;
}
@media(max-width: 498px){
    font-size:15px;
    padding:0;
}
`
const FeatureText = styled.div`
text-align: center;
font-size:20px;
color: rgba(0,0,0,0.9);
@media(max-width: 768px){
    font-size:11px;
    padding-top: 5px;
}
`

const ImageContainer = styled.div`
position: relative;
width:60%;
margin: auto;
@media(max-width: 768px){
    width: 90%;
    margin-left: 10%;
}
`
const Image = styled(LazyLoadImage)`
object-fit: contain;
width: 90%;
margin-top: 40px;

@media(max-width:1200px){
  margin-top: 20px;
  width:85% ;
margin-left: 25px;
}
@media(max-width:768px){
  margin-top: 20px;
  width:80% ;
}
@media(max-width:498px){
  margin-top: 10px;
  margin-left: 10px;
  width: 80%;
}
`