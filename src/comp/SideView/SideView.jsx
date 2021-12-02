import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Scrollspy from 'react-scrollspy'
const SideView = () => {

  const [show, setShow] = useState(true)
  const controlNavbar = () => {
    if (window.scrollY > 500) {
      setShow(false)
    } else {
      setShow(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])


  return (<>
    <Container show={show}>
      <IconContainer>
        <Scrollspy items={['section-1', 'section-2', 'section-3']} currentClassName="is-current" offset={-50}>
          <li>
            <ActiveLink href="#section-1" >
              <Icon src="images/icons/videoplayer.png" />
              <Title>Video Player Pro</Title>
            </ActiveLink>

          </li>
          <li>
            <ActiveLink href="#section-2" >
              <Icon src="images/icons/musicplayer.png" />
              <Title>Music Player</Title>
            </ActiveLink>

          </li>
          <li>
            <ActiveLink href="#section-3">
              <Icon src="images/icons/gallery.png" big={true} />
              <Title>Gallery</Title>
            </ActiveLink>
          </li>
        </Scrollspy>
        <ActiveLink target="_blank" href="https://play.google.com/store/apps/details?id=mp3converter.videotomp3.ringtonemaker">
          <Icon src="images/icons/mp3.png" />
          <Title> MP3 Converter</Title>

        </ActiveLink>
        <ActiveLink target="_blank" href="https://play.google.com/store/apps/details?id=com.asd.emicalculator">
          <Icon src="images/icons/calculator.png" calculator={true} />
          <Title>Calculator </Title>
        </ActiveLink>
        <ActiveLink target="_blank" href="https://play.google.com/store/apps/details?id=instagram.video.downloader.story.saver.instasaver">
          <Icon src="images/icons/insta_new_icon.png" />
          <Title>Video Downloader</Title>
        </ActiveLink>
        <ActiveLink target="_blank" href="https://play.google.com/store/apps/details?id=radio.fm.mytunner.gaana.liveradio.radiostation.pocketfm">
          <Icon src="images/icons/radio.png" />
          <Title>Radio Fm</Title>
        </ActiveLink>
        <ActiveLink target="_blank" href="https://play.google.com/store/apps/details?id=com.asddev.statussaver">
          <Icon src="images/icons/status_saver.png" />
          <Title>Status Saver</Title>
        </ActiveLink>
        <ActiveLink target="_blank" href="https://play.google.com/store/apps/details?id=games.find.diff.gamma">
          <Icon src="images/icons/game.png" />
          <Title>Game</Title>
        </ActiveLink>
        <ActiveLink target="_blank" href="https://play.google.com/store/apps/details?id=shareit.sharefiles.filetransfer.easyshare.copydata">
          <Icon src="images/icons/share.png" />
          <Title>ShareOn</Title>
        </ActiveLink>
      </IconContainer>
    </Container>
    <Jump src="images/icons/arrow7.png" alt="" />
  </>
  )
}

export default SideView

const Container = styled.div`
color: black;
height:80vh;
border-radius: 40px 0 0 40px;
margin-top:70px;
scroll-behavior:smooth;
overflow-y: scroll;
-ms-overflow-style: none;  
scrollbar-width: none;  
background-color: ${props => props.show ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.2)'};
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
/* ::-webkit-scrollbar-track{
    background-color: rgba(236, 226, 226,0.3);
    border-radius: 5px;
}
::-webkit-scrollbar-thumb{
    background: linear-gradient(transparent, #be4343);
    border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover{
    background: linear-gradient(transparent, #e00e0e);
} */

@media(max-width: 768px){
  margin-top: 100%;
}
@media(min-height:700px){
margin-top:90px;
}
@media(max-width:488px){
margin-top:60px;
border-radius: 20px 0 0 20px;

}
`
const IconContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.div`
text-align: center;
padding: 0px;
width: 100%;
font-size:12px;
position: absolute;
right: -10px;
@media(max-width:1200px){
  position: relative;
  right: 0;
  margin-top: 5px;
}
@media(max-width: 768px){
  font-size: 10px;
}
@media(max-width: 568px){
  display: none;
}
`
const Icon = styled.img`
width:40px;
margin-left: -70px;
width: ${props => props.calculator && '50px'};
width: ${props => props.big && '40px'};
cursor: pointer;
transition: transform .2s;
&:hover{transform: scale(1.3)}; 
@media(max-width: 768px){
  width: 20px;
}
@media(max-width:1200px){
  margin-left: 0;
  width: 25px;
}
@media(max-width:488px){
  right: 0;
  width: 20px;
  margin-top: 5px;
}
`
const ActiveLink = styled.a`
text-decoration: none;
color: black;
flex-direction: row;
display: flex;
justify-content: space-around;
align-items: center;
position: relative;
border-bottom: ${props => props.videoHighlight && '4px solid red'};
padding: 5px;
margin-top: 30px;
@media(min-height:780px){
  padding: 10px;
}
@media(min-height:1000px){
  padding: 15px;
}
@media(max-width:1200px){
  flex-direction: column;
}
@media(max-width:7680px){
margin-top  :10px ;
}
`
const Jump = styled.img`
width: 38px;
margin-left: 35%;
margin-top: 10%;
transform-origin: 50% 50%;
animation: jump .9s linear alternate infinite;
@media(max-width:780px){
  width: 23px;
  margin-left: 30%;
}
`