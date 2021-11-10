import React from 'react'
import styled from 'styled-components'
import Scrollspy from 'react-scrollspy'
const SideView = () => {

    return (<>
        <Container>
            <IconContainer>
            <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current" offset={-50}>
    <li>
      <ActiveLink href="#section-1" >
                <Icon src="icons/videoplayer.png" />   
                </ActiveLink>
                <Title>Video Player Pro</Title>
      </li>
    <li>
      <ActiveLink  href="#section-2" >
                <Icon src="icons/musicplayer.png" />
                 
                </ActiveLink>
                <Title>Music Player</Title>
              
      </li>
    <li>
      <ActiveLink href="#section-3">
               <Icon src="icons/gallery.png" big={true} />
                 
               </ActiveLink>
               <Title>Gallery</Title>
      </li>
              </Scrollspy>              
              <ActiveLink >
              <Icon src="icons/mp3.png" calculator={true}/>
                <Title>Video to MP3 Converter</Title>
              </ActiveLink>
              <ActiveLink >
              <Icon src="icons/calculator.png" calculator={true}/>
                <Title>Claculator</Title>
              </ActiveLink> 
              <ActiveLink >
              <Icon src="icons/insta_new_icon.png" calculator={true}/>
                <Title>Instagram</Title>
              </ActiveLink>   
              <ActiveLink >
              <Icon src="icons/radio.png" calculator={true}/>
                <Title>Radio</Title>
              </ActiveLink>   
              <ActiveLink >
              <Icon src="icons/status_saver.png" calculator={true}/>
                <Title>Status</Title>
              </ActiveLink>  
              <ActiveLink >
              <Icon src="icons/game.png" calculator={true}/>
                <Title>Game</Title>
              </ActiveLink>  
              <ActiveLink >
              <Icon src="icons/share.png" calculator={true}/>
                <Title>Share</Title>
              </ActiveLink> 
            </IconContainer>
        </Container>
        <Jump width="64" src="icons/arrow7.png" alt="" />
        </>
    )
}

export default SideView

const Container=styled.div`
color: black;
height:80vh;
border-radius: 40px 0 0 40px;
margin-top:70px;

scroll-behavior:smooth;
overflow-y: scroll;
-ms-overflow-style: none;  
scrollbar-width: none;  
background-color: rgba(255,255,255,0.4);
width: 100%;
/* ::-webkit-scrollbar{
  width: 6px;

	background-color: #c79a9c;
}
::-webkit-scrollbar-thumb
{
	background-color: #a56b6b;
  height: 10px;
} */


::-webkit-scrollbar{
  width: 0;
}
::-webkit-scrollbar-track{
    background-color: rgba(236, 226, 226,0.3);
    border-radius: 5px;
}
::-webkit-scrollbar-thumb{
    background: linear-gradient(transparent, #be4343);
    border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover{
    background: linear-gradient(transparent, #e00e0e);
}

@media(max-width: 768px){
  margin-top: 50%;
  margin-right: 5%;
}
`
const IconContainer=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Title=styled.div`
text-align: center;
padding: 10px;
font-size:11px;
@media(max-width: 768px){
  font-size: 10px;
}
`
const Icon=styled.img`
width:40px;
width: ${props=>props.calculator&&'40px'};
width: ${props=>props.big&&'40px'};
cursor: pointer;
@media(max-width: 768px){
  width: 30px;
}
`
const ActiveLink=styled.a`
text-decoration: none;
color: black;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
border-bottom: ${props=>props.videoHighlight&&'4px solid red'};
padding: 5px;
`
const Jump=styled.img`
width: 38px;
margin-left: 35%;
margin-top: 10%;
transform-origin: 50% 50%;
animation: jump .9s linear alternate infinite;
`