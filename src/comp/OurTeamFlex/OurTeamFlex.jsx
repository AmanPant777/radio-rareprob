import React from 'react'
import styled from 'styled-components'
import { WrappedApp } from '../../Other/CardFlex'
import Cara from '../../Other/Carousel';
const OurTeamFlex = () => {
    // const scrollHandlerLeft = (scroll) => {
    //     document.getElementById(scroll).scrollLeft -= 60
    // }
    // const scrollHandlerRight = (scroll) => {
    //     document.getElementById(scroll).scrollLeft += 60
    // }
    return (
        <Container>
            <WrappedContainer>
                <WrappedApp imageUrl="images/ashish.jpg" title="Asish Saini" text="Vice President" />
                <WrappedApp imageUrl="images/preeti.jpg" title="Preeti Saini" text="Director & CEO" />
            </WrappedContainer>
            {/* <ScrollContainer>
                <ArrowLeftIcon onClick={() => scrollHandlerLeft("scroll1")} />
                <FlexContainer1 id="scroll1">
                    <Flex1>
                        <Image src='images/kajal.jpg' />
                        <Text>Kajal Goyal </Text>
                        <Textbelow>Software Engineer (QA)</Textbelow>
                    </Flex1>
                    <Flex1>
                        <Image src='images/akshay.jpg' />
                        <Text>Akshay Jain </Text>
                        <Textbelow>Software Engineer</Textbelow>
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
                </FlexContainer1>
                <ArrowRight onClick={() => scrollHandlerRight("scroll1")} />

            </ScrollContainer> */}
            <Cara />
        </Container>
    )
}

export default OurTeamFlex
const Container = styled.div`
margin-top: 100px;
@media(max-width:768px){

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
// const FlexContainer1 = styled.div`
// display: flex;
// overflow-x: scroll; 
// margin-top: 30px;
// scroll-behavior:smooth;
// -ms-overflow-style: none;  
// scrollbar-width: none;  
// height: 250px;
// ::-webkit-scrollbar{
//   width: 0;
// }
// @media(max-width:768px){
//     width: 70%;
//     height: fit-content;
// }
// `
// const Flex1 = styled.div`
// width: 100%;
// height: 150px;
// @media(max-width:768px){
//    width: 150px;

// }
// `
// const Image = styled.img`
// height: 200px;
// width: 150px;
// margin-right: 10px;
// object-fit: cover;
// @media(max-width:768px){
//    width: 150px;
//    height: 80%;
//    object-fit: cover;
// }
// `
// const Text = styled.div`
// color: black;
// `
// const Para = styled.p`
// color: gray;
// font-size: 12px;
// `
// const ScrollContainer = styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
// margin-left: -50px;
// @media(max-width:768px){
//     margin-left: 20px;
// }
// `
// const Textbelow = styled.p`
// color: gray;
// font-size: 10px;
// `
const WrappedContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`