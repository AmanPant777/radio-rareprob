import React from 'react'
import styled from 'styled-components'
import OurTeam from '../OurTeam/OurTeam'
import Zoom from 'react-reveal/Zoom'

const GalleryFeature = () => {
    return (
      <Container>
          <AboutTitle first={true}>About App</AboutTitle>
          <AboutText>Photo Editor and Collage Maker Gallery App with gallery-vault features is a nice app for android devices which has these features.</AboutText>
          <AboutTitle>Key Features</AboutTitle>
          <GridContainer>
              <Grid>
                  <CircleContainer>
                      <Circle big={true} one={true}>
                      </Circle>
                      <CircleText>
                          <p>Collage Maker</p>
                          <p>Create a collage with 2 to 9 pics</p>
                          <p>Set border and round shape on photos</p>
                          <p>shuffle the layout, recreate option for the collage in the same screen different multiple layout support </p>
                      </CircleText>
                  </CircleContainer>
              </Grid>
              <Grid>
              <CircleContainer>
                      <Circle two={true} minusspace={true}>
                      </Circle>
                      <CircleText>
                          <p>Gallery Vault feature for Photos and Videos</p>
                          <p>Create PIN for lock private photos</p>
                          <p>User can lock a video and photo in private folder</p>
                          <p>Pin recovery in a single click, in case of forgetting the pin</p>
                      </CircleText>
                  </CircleContainer>
              </Grid>
              <Grid> 
                  <CircleContainer>
                      <Circle three={true} minusspace={true}>
                      </Circle>
                      <CircleText>
                          <p>Add coloured text to photos</p>
                          <p>Add text on Photo with yur choice of text color</p>
                          <p>Apply text on Photo and apply different styles and text size to the text.</p>
                      </CircleText>
                  </CircleContainer>
                  </Grid>
              <Grid>
                   <CircleContainer>
                      <Circle four={true} minusspace={true}>  
                      </Circle>
                      <CircleText>
                          <p>Rotate and crop photos</p>
                          <p>Crop Photo freely (in multi-aspect ratio)</p>
                          <p>Crop photo for multiple aspect ratios.</p>
                          <p>Rotate photo to perfect angle, horizontal, vertical etc.</p>
                      </CircleText>
                  </CircleContainer>
                </Grid>
          </GridContainer>
          <Zoom>
          <Image src="images/artboard.png"/>
          </Zoom>
          <OurTeamContainer >
            <OurTeam/>
          </OurTeamContainer>
      </Container>
    )
}
export default GalleryFeature

const Container=styled.div`
width: 75%;
margin-left: 9%;
@media (max-width:768px){
    width: 70%;
    margin-left: 5%;
}
`
const AboutTitle=styled.p`
color: red;
padding: 20px 0;
font-size:25px;
font-weight:bold;
margin-top: ${props=>props.first&&'20px'};
@media(max-width: 768px){
    padding: 10px 0;
    font-size:13px;
}
`
const AboutText=styled.p`
font-size:25px;
width:80%;
line-height:1.7;
@media(max-width: 768px){
    font-size:10px;
line-height:1.2;

}
`
const GridContainer=styled.div`
display: grid;
grid-template-columns: repeat(2,minmax(0,1fr));
width: 80%;
@media (max-width: 768px) {
    width: 100%;
    height:fit-content;
}
`
const Grid=styled.div`
height:200px;
margin: 20px 0;
@media(max-width: 768px){
    margin: 0;
    height: fit-content;
}
`    
const CircleContainer=styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Circle=styled.div`
height:80px;
width:160px;
background-image: url(${props=>props.one?'icons/clrg.svg':props.two?'icons/lock.svg':props.three?'icons/color.svg':props.four?'icons/crop.svg':''});
background-repeat: no-repeat;
background-size: contain;
width: ${props=>props.minusspace&&` 120px`};
@media(max-width: 768px){
    border-radius:70%;
    height: 40px;
    width: 40px;
    padding: 10px;
    margin-right: 10px;
}
`
const CircleText=styled.p`
color: gray;
line-height:1.5;
@media(max-width: 768px){
    padding: 0;
    font-size: 8px;
    width: 80%;
line-height:1.2;

}
`     
const Image=styled.img`
width: 60%;
margin: auto;
object-fit: contain;
margin-left: 15%;
height:500px;
@media(max-width: 768px){
    width: 100%;
    margin-left: 0;
    object-fit:contain;
   height: 200px;
   object-fit: cover;
}
`
const OurTeamContainer=styled.div`
width: 100%;
height: 100%;
margin-top: 50px;
@media (max-width: 768px) {
    margin-left: 0;
margin-top: 0px;
}
`