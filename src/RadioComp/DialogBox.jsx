import {  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import styled from 'styled-components'
import React, { useState } from 'react'
import {  EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'

const DialogBox = () => {
    const [open,setOpen]=useState(false)

    const CopyItem=()=>{
      var URL=document.getElementById('inputCopy')
      URL.select()
      document.execCommand('copy')
    }

    return (
        <div >
             <DialogImage src="/radio/icons/radio_share.svg" alt="share"
             onClick={()=>setOpen(true)}
             />
      <Dialog
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent >
                  <DialogContentText id="alert-dialog-description">
              <WhatsappShareButton style={{marginRight:'10px'}} url="https://play.google.com/store/apps/details?id=radio.fm.mytunner.gaana.liveradio.radiostation.pocketfm">
                  <WhatsappIcon size="50px" round/>
              </WhatsappShareButton>
              <TwitterShareButton style={{marginRight:'10px'}} url="https://play.google.com/store/apps/details?id=radio.fm.mytunner.gaana.liveradio.radiostation.pocketfm">
                  <TwitterIcon size="50px" round/>
              </TwitterShareButton>
              <EmailShareButton style={{marginRight:'10px'}} url="https://play.google.com/store/apps/details?id=radio.fm.mytunner.gaana.liveradio.radiostation.pocketfm">
                  <EmailIcon round size="50px"/>
              </EmailShareButton>
              <FacebookShareButton url="https://play.google.com/store/apps/details?id=radio.fm.mytunner.gaana.liveradio.radiostation.pocketfm">
                            <FacebookIcon round size="50px"/>
              </FacebookShareButton>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{marginRight:15,marginBottom:20}}>
            <InputCopy 
            id="inputCopy" 
            value="https://play.google.com/store/apps/details?id=radio.fm.mytunner.gaana.liveradio.radiostation.pocketfm" type="text" onChange={()=>console.log('')}/>
            <ButtonCopy style={{color:'black'}} onClick={CopyItem}>Copy</ButtonCopy>
{/*             
          <Button style={{color:'black'}} onClick={()=>setOpen(false)}>Disagree</Button>
          <Button onClick={()=>setOpen(false)} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>    
        </div>
    )
}

export default DialogBox

const InputCopy=styled.input`
outline:none;
color:rgba(0,0,0,0.8);
border:1px solid rgba(0,0,0,0.4);
padding:10px;
border-radius: 50px;
`
const ButtonCopy=styled.button`
padding:10px;
background-color:#803DEC;
border:none;
outline:none;
border-radius: 50px;
`
const DialogImage=styled.img`
  width: 40px;
  cursor: pointer;
  @media(max-width:468px){
    width: 28px;
  }
`