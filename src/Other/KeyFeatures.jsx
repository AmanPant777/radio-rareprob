import React from 'react'
import styled from 'styled-components'
const KeyFeatures = () => {
    return (
        <Container>
           <FlexContainer>
                <Flex>
                    <Image src='icons/clrg.svg'/>
                    <Text>
                      <Para> <strong> Collage Maker</strong></Para>
                
               <Para>  Create a collage with 2 to 9 pics</Para>
               
             <Para>Set border and round shape on photos</Para>

                 <Para> shuffle the layout, recreate option for the collage in the same screen different multiple layout support   </Para>
                
                    </Text>
                </Flex>
                <Flex>
                    <Image src='icons/lock.svg'/>
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
                    <Image src='icons/color.svg'/>
                    <Text>
                        <Para> <strong>  Add coloured text to photos </strong></Para>
                   <Para>  Add text on Photo with yur choice of text color </Para>
                  <Para>Apply text on Photo and apply different styles and text size to the text. </Para>
                    </Text>
                </Flex>
                <Flex>
                    <Image src='icons/crop.svg'/>
                    <Text>
                        <Para><strong> 
                        Rotate and crop photos </strong>
                        </Para>
                <Para> Crop Photo freely (in multi-aspect ratio) </Para>
                 <Para> Crop photo for multiple aspect ratios. </Para>
           <Para> Rotate photo to perfect angle, horizontal, vertical etc.  </Para>
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