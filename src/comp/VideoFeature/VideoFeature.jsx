import React from 'react'
import styled from 'styled-components'
import GridFeatures from './GridFeatures'
const VideoFeature = () => {
    return (
        <Container>
            <FeatureContainer>
                 <FeatureTitle>All Features in Single App</FeatureTitle>
                 <FeatureText>Music,Photos,Videos and Online Tranding videos in Single App.</FeatureText>
                 <ImageContainer>
                     <Image src="images/picture.png"/>
                 {/* <FeatureImage src='/images/mobile1.png' middle={true}/>
                 <FeatureImage src="/images/mobile2.png" right={true}/>
                 <FeatureImage src="/images/mobile3.png" left={true}/> */}
                 </ImageContainer>
            </FeatureContainer>
            <GridFeatures/>
        </Container>
    )
}
export default VideoFeature
const Container=styled.div`
width: 100%;
height: 100%;
margin-top: 60px;
@media(max-width:768px){
    margin-top:0;
    margin-left: 20px;
}
`
const FeatureContainer=styled.div`

`
const FeatureTitle=styled.div`
text-align: center;
font-size:40px;
color: gray;
font-weight:bold;
padding:20px;
@media(max-width: 768px){
    font-size:20px;
    padding:0;
}
`
const FeatureText=styled.div`
text-align: center;
font-size:20px;
color: gray;
@media(max-width: 768px){
    font-size:11px;
    padding-top: 6px;
}
`
// const FeatureImage=styled.img`
// margin-top:20px;
// position:absolute;
// width: 200px;
// left:${props=>props.left&&'4%'};
// z-index:${props=>props.middle&&'10'};
// right:${props=>props.right&&'4%'};
// object-fit:contain;
// height: ${props=>props.middle&&` 450px`};
// left:${props=>props.middle&&'33%'};
// top:${props=>props.left?'80px':props.right?'80px':'45px'};
// @media(max-width: 768px){
//     width:50%;
//     right:${props=>props.right&&'0'};
//     left:${props=>props.left&&'0'};
//     margin-top: 0;
//     top:${props=>props.middle&&' -40px'};
// right:${props=>props.right&&'-15%'};
// width: ${props=>props.middle&&` 110px`};
// }
// `
const ImageContainer=styled.div`
position: relative;
width:60%;
margin: auto;
@media(max-width: 768px){
    width: 90%;
    margin-left: 10%;
}
`
const Image=styled.img`
object-fit: contain;
width: 100%;
margin-top: 40px;
@media(max-width:768px){
  margin-top: 20px;
}
`