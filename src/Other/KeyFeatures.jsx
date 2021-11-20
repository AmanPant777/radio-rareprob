import React from 'react'
import styled from 'styled-components'
const KeyFeatures = () => {
    return (
        <Container>
           <FlexContainer>
                <Flex>
                    <Image src='images/icons/clrg.svg'/>
                    <Text>
                      <Para> <strong> Collage Maker</strong></Para>
                
               <Para>  Create a collage with 2 to 9 pics</Para>
               
             <Para>Set border and round shape on photos</Para>

                 <Para> shuffle the layout, recreate option for the collage in the same screen different multiple layout support   </Para>
                
                    </Text>
                </Flex>
                <Flex>
                    <Image src='images/icons/lock.svg'/>
                    <Text>
                        <Para> <strong> Gallery Vault feature for Photos and Videos</strong></Para>
                    <Para>  Create PIN for lock private photos </Para>
                  <Para>  User can lock a video and photo in private folder</Para>
                  <Para>
                  Pin recovery in a single click, in case of forgetting the pin
                  </Para>
                    </Text>
                </Flex>
           </FlexContainer>
           <FlexContainer>
                <Flex>
                    <Image src='images/icons/color.svg'/>
                    <Text>
                        <Para> <strong> Edit Photos
                   </strong></Para>
                   <Para> Edit your photos by adding text on your photo with different styles and sizes  </Para>
                  <Para>Crop Photo freely with multi-aspect ratio. </Para>
                  <Para>Also, Rotate photo to perfect angle, horizontal and vertical according to your preference.</Para>
                    </Text>
                </Flex>
                <Flex>
                    <Image src='images/icons/status.svg'/>
                    <Text>
                        <Para><strong> Status downloader
                        </strong>
                        </Para>
                        <Para> Looking for story downloader?</Para>
                <Para> Gallery supports story downloader. </Para>
                 <Para> Download your friend's WhatsApp stories and share them with other social media platforms too. </Para>
                    </Text>
                </Flex>
           </FlexContainer>
           <FlexContainer>
                <Flex>
                    <Image src='images/icons/insta.svg'/>
                    <Text>
                        <Para> <strong> Insta Downloader
                   </strong></Para>
                   <Para> Instagram posts can be downloaded easily through the Gallery app. </Para>
                  <Para> Here users can download photos, reels and other videos easily within the seconds. </Para>
                    </Text>
                </Flex>
                <Flex>
                    <Image src='images/icons/web.svg'/>
                    <Text>
                        <Para><strong> Private Browser
                        </strong>
                        </Para>
                        <Para> Gallery app supports a Private browser.</Para>
                <Para> Users can browse photos, videos and other things easily just by copying or entering URL. </Para>
                    </Text>
                </Flex>
           </FlexContainer>
        </Container>
    )
}

export default KeyFeatures

const Container=styled.div`
display: flex;
width: 100%;
flex-direction: column;
`
    
const FlexContainer=styled.div`
display:flex;
justify-content: space-between;
align-items: center;
`

const Flex=styled.div`
display: flex;
margin-top: 40px;
margin-right: 80px;
width: 100%;
@media(max-width:1200px){
margin-right: 0;
}
@media(max-width:768px){
    font-size: 13px;
    margin-right: 20px;
    width: 50%;
}
@media(max-width:488px){
    font-size: 10px;
    margin-right: 10px;
}
`
const Image=styled.img`
max-width: 80px;
@media(max-width:1200px){
    max-width: 70px;
}
@media(max-width:768px){
    max-width: 50px;
}
@media(max-width:488px){
    max-width: 40px;
}
`
    
const Text=styled.p`
max-width: 400px;
margin-left: 30px;
@media(max-width:1200px){
max-width: 300px;

}
@media(max-width:768px){
    margin-left: 5px;
}
@media(max-width:488px){
    margin-left: 4px;
}
`
const Para=styled.p`
@media(max-width:1200px){
    font-size: 13px;

}
@media(max-width:768px){
    font-size: 11px;
    
}
@media(max-width:488px){
    font-size: 9px;
line-height: 1.4;
}
`