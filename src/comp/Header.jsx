import React from 'react'
import styled from 'styled-components'
const Header = ({home,handleProduct,product}) => {
    return (
    <Container>
        <Image src='/icons/logo-01.png'/>
        <ContainerTitle>
            <HomeContainer >
                <a href={`#${home}`}>
                <Home>Home </Home>
                </a>
            </HomeContainer>
            <AboutContainer>
                <a href="#about">
                <About >About</About>
                </a>
            </AboutContainer>
            <ProductContainer onClick={() => handleProduct(!product)}>
                <Product>Product</Product>
            </ProductContainer>
            {/* <IconContainer >
                <Icon one={true}></Icon>
                <Icon two={true}></Icon>
                <Icon three={true}></Icon>
            </IconContainer> */}
        </ContainerTitle>
    </Container>
    )
}

export default Header
const Container=styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
@media(max-width: 768px){
    width: 90vw ;
    height: 70%;
}
`
const Image=styled.img`
width: 100px;
height: 70px;
object-fit: cover;
@media(max-width: 768px){
    height: 50px;
    width: 50px;
}
`
const ContainerTitle=styled.div`
display: flex;
justify-content: space-between;
flex: 0.4;
align-items: center;
display: flex;
@media(max-width: 768px){
    padding: 0;
    flex: 1;
}
`
const HomeContainer=styled.div`
`
const Home=styled.div`
color: black;
background-color:  rgba(255, 255, 255, 0.5);
border-radius: 50px;
padding: 5px;
font-size:20px;
width: 150px;
cursor: pointer;
text-align: center;
@media(max-width: 768px){
    padding: 1px;
    font-size:10px;
    width: 60px;
}
`
const AboutContainer=styled.div``
const About=styled.div`
color: black;
background-color:  rgba(255, 255, 255, 0.5);
border-radius: 50px;
padding: 5px;
font-size:20px;
cursor: pointer;
width: 150px;
text-align: center;
@media(max-width: 768px){
    padding: 1px;
    font-size:10px;
    width: 60px;
}
`
const ProductContainer=styled.div``
const Product=styled.div`
color: black;
background-color:  rgba(255, 255, 255, 0.5);
border-radius: 20px  0 0 20px;
padding: 5px;
font-size:20px;
width: 140px;
text-align: center;
cursor: pointer;
@media(max-width: 768px){
    padding: 1px;
    font-size:10px;
    width: 60px;
}
// `
// const IconContainer=styled.div`
// position: relative;
// height: 50px;
// width: 100px;
// margin-top:20px;
// @media(max-width: 768px){
//     height: 40px;
//     width: 50px;
// }
// `
/* const Icon=styled.img`
width: 40px;
background-color: white;
border-radius: 50px;
position: absolute;
height: 8px;
@media(max-width: 768px){
    width:20px;
    height: 5px;
}
${({one})=>one&&`
top: 0;
left:10px;
`};
${({two})=>two&&`
top: 10px;
left:0;
`};
${({three})=>three&&`
top: 20px;
left:10px;
`};
` */


