import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { WrappedApp } from '../../Other/CardFlex'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const OurTeamFlex = () => {
    const scrollHandlerLeft = (scroll) => {
        document.getElementById(scroll).scrollLeft -= 100
    }
    const scrollHandlerRight = (scroll) => {
        document.getElementById(scroll).scrollLeft += 100
    }
    return (
        <Container>
            <WrappedContainer>
                <WrappedApp imageUrl="images/ashish.jpg" title="Ashish Saini" text="Vice President" />
                <WrappedApp imageUrl="images/preeti.jpg" title="Preeti Saini" text="Director & CEO" />
            </WrappedContainer>
            <ScrollContainer>
                <ArrowLeftIcon onClick={() => scrollHandlerLeft("scroll1")} />
                <FlexContainer1 id="scroll1">
                    <Flex1>
                        <Image effect='blur' alt="kajal" src='images/kajal.jpg' />

                        <Text>Kajal Goyal </Text>
                        <Textbelow>Software Engineer (QA)</Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image effect='blur' alt="swati" src='images/swatikarnwal.png' />
                        <Text>Swati Karanwal </Text>
                        <Textbelow>Software Engineer (QA)</Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image effect='blur' arun={true} alt="arun" src='images/arun.jpg' />
                        <Text> Arun Saini</Text>
                        <Textbelow>Software Engineer </Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image effect='blur' rishi={true} alt="rishi" src='images/rishi.jpg' />
                        <Text>Rishikesh Sharma</Text>
                        <Textbelow>Software Engineer </Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image effect='blur' alt="aman" src='images/aman.jpg' />
                        <Text>Aman Pant </Text>
                        <Textbelow>Software Engineer </Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image effect='blur' vibhor={true} alt="vibhur" src='images/vibhur.jpg' />
                        <Text>Vibhor Jain </Text>
                        <Textbelow>Software Engineer </Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image effect='blur' alt="robin" src='images/robin.jpg' />
                        <Text>Robin Sharma </Text>
                        <Textbelow>Software Engineer </Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image effect='blur' alt="nikhil" src='images/nikhilrana.png' />
                        <Text>Nikhil Rana </Text>
                        <Textbelow>Software Engineer </Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image effect='blur' alt="indu" src='images/indu.jpg' />
                        <Text>Indu Sharma </Text>
                        <Textbelow>Product Manager </Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image effect='blur' akshay={true} alt="akshay" src='images/akshay.jpg' />
                        <Text>Akshay Jain </Text>
                        <Textbelow>Software Engineer </Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image effect='blur'  alt="mansi" src='images/mansi.png' />
                        <Text>Mansi </Text>
                        <Textbelow>Software Engineer </Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image effect='blur' alt="sanidhya" src='images/sanidhyasingh.png' />
                        <Text>Sanidhya Singh </Text>
                        <Textbelow>Software Engineer </Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image effect='blur' alt="rajdeep" src='images/rajdeepnahar.png' />
                        <Text>Rajdeep Nahar </Text>
                        <Textbelow> Graphic Designer </Textbelow>
                    </Flex1>
                </FlexContainer1>
                <ArrowRightScroll onClick={() => scrollHandlerRight("scroll1")} />
            </ScrollContainer>
            {/* <Cara /> */}
        </Container>
    )
}

export default OurTeamFlex
const Container = styled.div`
margin-top: 20px;
@media(max-width:768px){
   margin-top: 40px;
}
@media(max-width:468px){
   margin-top: 10px;
   margin-left: 10px;
}
 `

const FlexContainer1 = styled.div`
display: flex;
overflow-x: scroll; 
width: 60%;
margin: 30px 20px;
min-height: 200px;
overflow-y: hidden;
scroll-behavior:smooth;
-ms-overflow-style: none;  
scrollbar-width: none;  
::-webkit-scrollbar{
  width: 0 ;
  
}
@media(max-width:768px){
    width: 60%;
    height: fit-content;
    min-height: 200px;
}
@media(max-width:488px){
    width: 60%;
    min-height: 200px;
    margin-right:0;
    margin-left:0;
    margin-top:0;
    border-radius:20px;
}
`
const Flex1 = styled.div`
width: 100%;
height: 150px;
text-align: center;
/* box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */
@media(max-width:768px){
   min-width: 120px;
}
`
const Image = styled(LazyLoadImage)`
height: 120px;
width: 110px;
max-height: 120px;
border-radius: 100%;
margin-right: 10px;
object-fit: cover;
object-position: ${props=>props.arun&&`0 10px`};
object-position: ${props=>props.akshay&&`0 5px`};
@media(max-width:768px){
   width: 70%;
   height: 70%;
}
@media(max-width:488px){
    margin-top:20px;
   width: 60%;
   height: 60%;
}

`
const Text = styled.div`
color: black;
font-size: 13px;
@media(max-width:768px){
    font-size: 10px;
}
`
// const Para = styled.p`
// color: gray;
// font-size: 12px;
// @media(max-width:768px){
//     font-size: 8px;
// }
// `
const ScrollContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: -30px;
margin-top: 50px;
@media(max-width:768px){
    margin-left: -30px;
}
@media(max-width:488px){
    margin-left: 5px;
    margin-top:30px;
}
`
const Textbelow = styled.p`
color: gray;
font-size: 10px;
margin-top: 5px;
font-weight: bold;
`
const WrappedContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const ArrowLeftIcon = styled(ArrowLeft)`
cursor: pointer;
z-index: 100;
margin-bottom: 50px;
@media(max-width:768px){
    margin-bottom: 100px;
}
`
const ArrowRightScroll = styled(ArrowRight)`
cursor: pointer;
margin-bottom: 50px;
@media(max-width:768px){
    margin-bottom: 100px;
}
@media(max-width:488px){
    margin-left:10px;
}
`
