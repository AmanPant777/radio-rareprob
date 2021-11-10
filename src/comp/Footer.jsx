import React from 'react'
import styled from 'styled-components'
import { ArrowDownward } from '@material-ui/icons'; 
import Zoom from 'react-reveal/Zoom'
const Footer = ({color,text,icon,read}) => {
    return (
        <Zoom>
<Container>
            {text &&  <Title >
                 Rocks Player Ultra HD Video Player is a Simple and Fast Video Player with which yu can play HD and Ultra HD videos of all formats. Rocks Player offers unique set of features like Gesture control for Volume Brightness, Playback speed and Forward, Assistance of subtitles of videos, Auto sensor etc.Rocks Player give yu enjoy smoother, better quality videos & movies. 
            </Title> }
            {
                icon&&(  <IconContainer>
                    <a href="https://play.google.com/store/apps/dev?id=6259831402052261779">
                    <Icon src='/icons/google-01.png'/>
                       
                    </a>
                     <ReadMoreContainer>
                         <ReadMore read>read more</ReadMore>
                         <ArrowDownward style={{color:color&&'black'}}/>
                     </ReadMoreContainer>
                 </IconContainer>)
            }
           
        </Container>
        </Zoom>
        
    )
}
export default Footer

const Container=styled.div`
@media(max-width:768px){
    margin-top: 30%;
}
`
const Title = styled.div`
color: white;
font-size:17px;
text-align:center;
width:95%;
margin-left: 10%;
@media(max-width: 768px){
    font-size:8px;
}
`

const IconContainer=styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 75%;
margin-left:10%;
`
const Icon=styled.img`
width: 300px;
object-fit: contain;
margin-left: -30px;
@media (max-width: 768px){
    width:100px;
    height: 100px;
}
`
const ReadMoreContainer=styled.div`
color: white;
flex: 0.7;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
`
const ReadMore=styled.div`
color: ${props=>props.color&&'black'};
color: ${props=>props.read?'white':'black'};

@media (max-width: 768px){
    font-size:10px;
}
`
    
