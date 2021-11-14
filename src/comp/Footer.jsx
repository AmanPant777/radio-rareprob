import React from 'react'
import styled from 'styled-components'
import { ArrowDownward } from '@material-ui/icons';
import Zoom from 'react-reveal/Zoom'
const Footer = ({ color, text, icon, read }) => {
    return (
        <Zoom>
            <Container>
                {text && <Title >
                    Rocks Player Ultra HD Video Player is a Simple and Fast Video Player with which yu can play HD and Ultra HD videos of all formats. Rocks Player offers unique set of features like Gesture control for Volume Brightness, Playback speed and Forward, Assistance of subtitles of videos, Auto sensor etc.Rocks Player give yu enjoy smoother, better quality videos & movies.
                </Title>}
                {
                    icon && (<IconContainer>
                        <Link href="https://play.google.com/store/apps/dev?id=6259831402052261779">
                            <Icon src='/icons/google.png' />
                        </Link>
                        <ReadMoreContainer href="#section-1">
                            <ReadMore read>read more</ReadMore>
                            <ArrowContainer >
                                <ArrowDownwardStyle style={{ color: color && 'black' }} />
                            </ArrowContainer>
                        </ReadMoreContainer>
                    </IconContainer>)
                }

            </Container>
        </Zoom>

    )
}
export default Footer

const Container = styled.div`

`
const Title = styled.div`
color: white;
font-size:17px;
text-align:center;
width:90%;
margin-left: 4%;
@media(max-width: 568px){
    font-size:9px;
}
@media(max-width: 1200px){
    font-size:15px;
}
@media(max-width: 800px){
    font-size:9px;
}
@media(max-width: 450px){
   display: none;
}
`

const IconContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 96%;
margin-left:auto;
margin-top: 50px;
@media(max-width:1200px){
margin-top:35px ;
}
@media(max-width:788px){
margin-top:12px ;
}
@media(max-width:568px){
margin-top:50px ;
}
`
const Icon = styled.img`
width: 220px;
object-fit: contain;
@media (max-width: 768px){
    width: 90px;
}
@media (max-width: 1200px){
    width: 100px;
}
@media (max-width: 568px){
    width: 60px;
}
`
const ReadMoreContainer = styled.a`
color: white;
flex: 1;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
margin-left:-20%;
cursor: pointer;
`
const ReadMore = styled.div`
color: ${props => props.color && 'black'};
color: ${props => props.read ? 'white' : 'black'};

@media (max-width: 1200px){
    font-size:15px;
}
@media (max-width: 980px){
    font-size:13px;
}
@media (max-width: 768px){
    font-size:10px;
}
@media (max-width: 568px){
    font-size:8px;
}
`
const Link = styled.a`
cursor: pointer;
z-index: 100;
`
const ArrowDownwardStyle = styled(ArrowDownward)`
width: 40px;
`
const ArrowContainer = styled.div`
@media(max-width:768px){
    display: none;
}
`
