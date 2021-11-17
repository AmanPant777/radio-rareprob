import { ArrowLeft,ArrowRight } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { WrappedApp } from '../../Other/CardFlex'

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
                        <Image src='images/kajal.jpg' />
                       
                        <Text>Kajal Goyal </Text>
                        <Textbelow>Software Engineer (QA)</Textbelow>
                       
                       
                    </Flex1>
                    <Flex1>
                        <Image src='images/swatikarnwal.png' />
                        <Text>Swati Karnwal </Text>
                        <Textbelow>Software Engineer (QA)</Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image src='images/arun.jpg' />
                        <Text> Arun Saini</Text>
                        <Textbelow>Software Engineer </Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image src='images/rishi.jpg' />
                        <Text>Rishikesh Sharma</Text>
                        <Textbelow>Software Engineer </Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image src='images/aman.jpg' />
                        <Text>Aman Pant </Text>
                        <Textbelow>Software Engineer </Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image src='images/vibhur.jpg' />
                        <Text>Vibhor Jain </Text>
                        <Textbelow>Software Engineer </Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image src='images/robin.jpg' />
                        <Text>Robin Sharma </Text>
                        <Textbelow>Software Engineer </Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image src='images/nikhilrana.png' />
                        <Text>Nikhil Rana </Text>
                        <Textbelow>Software Engineer </Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image src='images/rajdeepnahar.png' />
                        <Text>Rajdeep Nahar </Text>
                        <Textbelow>Senior Graphic Designer </Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image src='images/akshay.jpg' />
                        <Text>Akshay Jain </Text>
                        <Textbelow>Software Engineer </Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image src='images/mansi.png' />
                        <Text>Mansi </Text>
                        <Textbelow>Software Engineer </Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image src='images/sanidhyasingh.png' />
                        <Text>Sanidhya Singh </Text>
                        <Textbelow>Software Engineer </Textbelow>
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
}
 `
// const GridContainer1 = styled.div`
// display: grid;
// grid-template-columns: repeat(2,minmax(0,1fr));
//  `
// const Grid1 = styled.div` 
// width: 90%;
// margin: auto;
// @media(max-width:768px){
//     width: 100%;
// }
// `
// const Image1 = styled.img`
// width: 100%;
// height: 400px;
// @media(max-width:1200px){
//     width: 200px;
//     height: 300px;
// }
// @media(max-width:768px){
//     width: 100%;
//     height: 300px;
// }
// @media(max-width:468px){
//     width: 100%;
//     height: 150px;
// }
// object-fit: cover;
// `
// const Text1 = styled.p`
// color: red;
// font-weight: bold;
// font-size: 16px;
// @media(max-width:768px){
//     font-size: 13px;
// }
// `
const FlexContainer1 = styled.div`
display: flex;
overflow-x: scroll; 
margin-top: 30px;
width: 60%;
min-height: 300px;
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
const Image = styled.img`
height: 200px;
width: 150px;
margin-right: 10px;
object-fit: cover;
border-radius: 10px;
@media(max-width:768px){
   width: 100%;
   height: 90%;
   /* margin-right: -40px; */
   object-fit: cover;
}
`
const Text = styled.div`
color: black;
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
margin-left: -50px;
margin-top: 50px;
@media(max-width:768px){
    margin-left: -30px;
}
`
const Textbelow = styled.p`
color: gray;
font-size: 10px;
`
const WrappedContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const ArrowLeftIcon=styled(ArrowLeft)`
cursor: pointer;
z-index: 100;
`
const ArrowRightScroll=styled(ArrowRight)`
cursor: pointer;
`
