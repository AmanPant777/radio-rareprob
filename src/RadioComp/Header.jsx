import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { activeSidebar } from '../redux/RecentSlice'
import { useLocation } from 'react-router'
import {BsFlagFill} from 'react-icons/bs'
const Header = ({onstation}) => {
    const dispatch=useDispatch()
    const location=useLocation()
    const icon=location?.state
    const [Flagicon,setFlagIcon]=useState(false)
    
    useEffect(()=>{
     if(icon){
         setFlagIcon(icon.icon)
     }
    },[icon])
    
    return (
       <Container screen>
           <Link style={{flex:'2.4'}}
           to={onstation!==''?`/radio-monkey/radiostation?country=${onstation}`:'/radio-monkey'} 
           state={
               icon&&{icon:icon.icon?icon.icon:'/icons/r.png'}
        }
           >
           <Icon src='/radio/fm1.png'/>           
           </Link>
           <HeaderContainer>
               <SocialLink target='_blank' rel='noreferrer' 
               href="https://play.google.com/store/apps/details?id=radio.fm.mytunner.gaana.liveradio.radiostation.pocketfm"
               style={{justifyContent:'space-around',alignItems:'flex-start'}}
               >
                 <Text>Install app for better Experience</Text>
                 <img src="/radio/icons/radio_download.svg" 
                 alt="download" 
                 style={{width:'25px',marginRight:10,marginLeft:5}}
                 />
               {/* <img style={{width:'30px'}} src="/images/icon/radio_download.svg" alt="" />  */}
               </SocialLink>
               <Text>Follow us on Social Media</Text>
               <Icon1>
                   <img 
                   src="/radio/icons/radio_facebook.svg" 
                   alt="facebbok" 
                   width={25}
                   />
                   <img 
                   width={25}
                   src="/radio/icons/radio_insta.svg" alt="instagram" />
               </Icon1>
               <Icon2  onClick={()=>dispatch(activeSidebar())}>
                  {/* <FlagImage src="https://flagicons.lipis.dev/flags/4x3/in.svg" alt='flag'/> */}
                 {/* <AiOutlineFlag size="30px"/> */}
                 {Flagicon?(
                 <IconImage  src={Flagicon} alt="flag" style={{color:'red'}}/>
                 ):(
                     <BsFlagFill size="10px"/>
                 )}
               </Icon2>
               <InstallImageLink target='_blank' rel='noreferrer' 
               href="https://play.google.com/store/apps/details?id=radio.fm.mytunner.gaana.liveradio.radiostation.pocketfm">
                   <InstallImage 
                   src="/icons/radio_download.svg"
                   alt="radio-monkey"
                   />
               </InstallImageLink>
           </HeaderContainer>
       </Container>
    )
}

export default Header

const InstallImageLink=styled.a`
display: none;
    @media(max-width:468px){
        display: flex;
    }
`
const InstallImage=styled.img`
width: 30px;
margin-right: 30px;
`

const Container=styled.div`
min-height: ${props=>props.screen?'50px':'70px'};
width: 100%;
background:linear-gradient(to right, #952bf1,#862aee, #8729ed, #803dec);
color: white;
display: flex;
justify-content: space-between;
align-items: center;
z-index:400;
position: fixed;
max-height: 80px;
min-height: 60px;
@media(max-width:768px){
    max-height:50px;
    height:40px;
}
@media(max-width:468px){
justify-content: space-between;
}
`
const Icon=styled.img`
max-width: 150px;
margin-left: 10%;
transition-duration: 0.3s;
padding: 10px;
object-fit: contain;
&:hover{
    transform: scale(1.1);
    padding: 2px;
}
@media(max-width:768px){
    max-width:120px;
}
`
const HeaderContainer=styled.div`
display: flex;
align-items:center;
justify-content:space-between;
max-width: 70%;
@media(max-width:468px){
    flex:1;
    justify-content:space-between;
    align-items:center;
}
`
const Text=styled.div`
margin-left: 10px;
font-size: 14px;
max-width: 110px;
color: white;
text-align: right;
@media(max-width:768px){
    font-size:10px;
    width:80px;
}
@media(max-width:468px){
    display: none;
}
`
const SocialLink=styled.a`
display:flex;
@media(max-width:468px){
    display: none;
}
`

const Icon2=styled.div`
margin-left: 40px;
margin-right: 20px;
border: 2px solid white;
border-radius:100%;
align-items: center;
justify-content: center;
display: flex;
width:35px;
height:35px;
cursor: pointer;
@media(max-width:768px){
    width:35px;
}
@media(max-width:468px){
    width:30px;
    margin-left:0;
    margin-right:0;
}
`
const Icon1=styled.div`
@media(max-width:468px){
    display: none;
}
display:flex;
align-items:center;
`
const IconImage=styled.img`
height:100%;
width:100%;
border-radius:100%;
object-fit:cover;
`