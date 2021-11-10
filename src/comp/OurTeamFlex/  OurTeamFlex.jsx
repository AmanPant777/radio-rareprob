import React from 'react'
import styled from 'styled-components'
const   OurTeamFlex = () => {
    return (
        <Container>
            <GridContainer1>
                <Grid1>
                    <Image1 src="https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"/>
                    <Text1>Cristiano Ronaldo</Text1>
                    <p>Portugal, Real Madrid, Juventus, Manchester United </p>
                </Grid1>
                <Grid1>
                    <Image1 src='https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'/>
                    <Text1>Cristiano Ronaldo</Text1>
                </Grid1>
            </GridContainer1>
            <FlexContainer1>
                <Flex1>
                    <Image src='https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'/>
                    <Text>Messi </Text>
                </Flex1>
                <Flex1>
                    <Image src='https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'/>
                    <Text>Messi </Text>
                </Flex1>
                <Flex1>
                <Image src='https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'/>
                    <Text>Messi </Text>
                </Flex1>
                <Flex1>
                <Image src='https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'/>
                    <Text>Messi </Text>
                </Flex1>
                <Flex1>
                <Image src='https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'/>
                    <Text>Messi </Text>
                </Flex1>

            </FlexContainer1>
            <FlexContainer1>
                <Flex1>
                    <Image src='https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'/>
                    <Text>Messi </Text>
                </Flex1>
                <Flex1>
                    <Image src='https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'/>
                    <Text>Messi </Text>
                </Flex1>
                <Flex1>
                <Image src='https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'/>
                    <Text>Messi </Text>
                </Flex1>
                <Flex1>
                <Image src='https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'/>
                    <Text>Messi </Text>
                </Flex1>
                <Flex1>
                <Image src='https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'/>
                    <Text>Messi </Text>
                </Flex1>
            </FlexContainer1>
        </Container>
    )
}

export default   OurTeamFlex
const Container=styled.div`

 `
const GridContainer1=styled.div`
display: grid;
grid-template-columns: repeat(2,minmax(0,1fr));
 `
const Grid1=styled.div` 
width: 90%;
margin: auto;
`
const Image1=styled.img`
width: 100%;
`
const Text1=styled.p`
`
const FlexContainer1=styled.div`
display: flex;
overflow-x: scroll; 
margin-top: 30px;
`
const Flex1=styled.div`
width: 300px;
height: 150px;
`
const Image=styled.img`
height: 110px;
width: 160px;
margin-right: 10px;
`
const Text=styled.div``
    
 

