import { setDoc ,doc} from '@firebase/firestore';
import { Facebook, Instagram, Twitter } from '@material-ui/icons'
import React,{useState} from 'react'
import styled from 'styled-components'
import {  firestore } from '../../firebase';
import OurTeamFlex from '../OurTeamFlex/  OurTeamFlex';
const OurTeam = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [detail,setDetail]=useState('')

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        if( name.length>0 && email.length>0 && detail.length>0){
            setDoc(doc(firestore, "user",email), {
                name: name,
                email: email,
                detail: detail,
              }).then(()=>console.log('Added Succesfully')).catch((error=>console.log(error)))
        }else{
            return;
        }
        

        // db.collection('user').doc().set({
        //     name,
        //     email,
        //     detail
        // }).then(()=>console.log('Successfully submited')).catch((error)=>console.log(error))
    }
    return (
        <Container>
            <OurTeamTitle>Our Team</OurTeamTitle>
            <OurTeamText>"Teamwork is the ability to work togethor towards a common vision.The ability to direct indivisual accomplishments towards organization objectives. It is the fuel that allow common people to gain uncommom results."</OurTeamText>     
            <OurTeamFlex/>

            {/* <GridContainer>
             <Grid>
                 <Image src="images/Discoverimage.jpg"/>
                 <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus obcaecati saepe possimus doloribus eius magni ullam voluptate qui quis voluptatem similique beatae sunt dolorum esse odio nobis ipsa, mollitia officia!</Text>
             </Grid>

             <Grid>
             <Image src="images/Discoverimage.jpg"/>
                 <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe cum recusandae possimus, consequuntur distinctio laudantium fugit vel nisi culpa natus ipsum animi nihil libero cupiditate tempora quod vero debitis?</Text>
             </Grid>
             <Grid>
             <Image src="images/Discoverimage.jpg"/>
                 <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, explicabo. Quis aspernatur dolore omnis illum perferendis doloremque qui beatae modi voluptatum libero reiciendis provident numquam, adipisci est vel doloribus? Quidem?</Text>
             </Grid>
             <Grid>
             <Image src="images/Discoverimage.jpg"/>
                 <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolore, aliquid nisi molestias ducimus excepturi libero similique quibusdam debitis quis. Eum ea animi doloribus mollitia expedita quod facilis numquam vel?</Text>
             </Grid>
            </GridContainer> */}

            <FormContainer id="about">
                <FormTitle>Write To Us</FormTitle>
                <Form onSubmit={onSubmitHandler}>
                    <FlexForm>
                        <InputEmail  placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                        <InputName type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                    </FlexForm>
                    <DetailContainer>
                    <InputDetail placeholder="Details" onChange={(e)=>setDetail(e.target.value)}/>
                    <Button type="submit" >Submit</Button>
                    </DetailContainer>
                </Form>
            </FormContainer>
            <ImageContainer>
                <ImageFeedback src="images/feedback.png"/>
                <FeedbackContainer>
                    <Container1 style={{marginTop:20}}>
                    Rareprob solutions private limited Shop 3 Galli No. 2, Omnagar Shahibadad, Gaziabad 201007 
                    </Container1>
                    <Container1 style={{marginTop:20}}>
                        asddev86@gmail.com
                        <p style={{marginTop:10}}>2019, All Rights Reserved</p>
                    </Container1>
                    <Container1 makeflex={true}>
                        Follow Us: <Instagram /> <Facebook/> <Twitter/>
                    </Container1>
                </FeedbackContainer>
            </ImageContainer>
        </Container>
    )
}

export default OurTeam
const Container=styled.div`
width: 100%;
height: 100%;
`
const OurTeamTitle=styled.h2`
color: red;
text-align: center;
font-size: 50px;
padding: 20px;
@media(max-width: 768px){
    font-size: 20px;
padding: 0px;
}
`
const OurTeamText=styled.p`
font-size:18px;
text-align: center;
line-height:1.6;
@media(max-width: 768px){
    font-size: 12px;
}
`
const  GridContainer=styled.div`
display: grid;
grid-template-columns: repeat(4,minmax(0,1fr));
margin-top:70px;
@media(max-width: 768px){
grid-template-columns: repeat(2,minmax(0,1fr));
margin-top:10px;
width: 100%;
}
`
const Grid=styled.div`
@media(max-width: 768px){
}
`
const Image=styled.img`
width: 90%;
border-radius: 20px;
height: 200px;
@media(max-width: 768px){
    width: 90%;
    border-radius:10px;
}
`
const Text=styled.div`
color: red;
margin-top:10px;
font-size:15px;
line-height:1.2;
width: 90%;
@media(max-width: 768px){
    font-size:8px;
}
`
const FormContainer=styled.div`
margin-top: 100px;
@media(max-width: 768px){
    margin-top:0;
}
`
const FormTitle=styled.div`
color: red;
font-size: 39px;
font-weight: bold;
@media(max-width: 768px){
    font-size: 20px;
}
`
const Form=styled.form`
margin-top: 20px;
`
const FlexForm=styled.div`
display: flex;
justify-content: space-between;
`
const InputEmail=styled.input`
border-color: red;
outline: none;
padding:14px;
width: 49%;
border-radius: 40px;
color: red;
&::placeholder{
    color: red;
    font-size:20px;
}
@media(max-width: 768px){
padding:5px;
width: 50%;
border-radius: 20px;
&::placeholder{
    color: red;
    font-size:12px;
}
}
`
const InputName=styled(InputEmail)`
`
const InputDetail=styled(InputEmail)`
padding: 20px;
margin-top:30px;
width: 100%;
border-radius: 60px;
@media(max-width: 768px){
padding: 20px;
margin-top:10px;
border-radius: 30px;
@media(max-width: 768px){
    padding: 10px;
}
}
`
const Button=styled.button`
position: absolute;
top: 45%;
right: 40px;
width:9em;
height:2em;
background-color: red;
border: none;
color:white;
font-size:20px;
border-radius:40px;
font-weight: bold;
@media(max-width: 768px){
    top: 40%;
    width:5em;
    height:20px;
    font-size:8px;
    right: 20px;

}
`
const DetailContainer=styled.div`
position: relative;
`
const ImageContainer=styled.div``
const ImageFeedback=styled.img`
width: 70%;
margin-top:40px;
margin-left: 17%;
`    
const FeedbackContainer=styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
height: 200px;
@media(max-width: 768px){
    flex-direction: column;
}
`
const Container1=styled.div`
flex: 0.4;
font-size: 18px;
flex:${props=>props.makeflex&&'0.3'} ;
text-align: center;
display: ${props=>props.makeflex&&'flex'};
margin-top: 3%;
${({makeflex})=>
    makeflex&&`
        justify-content: space-around;
        align-items: center;
    `
};
@media(max-width: 768px){
    font-size: 12px;
}
`
const FlexContainer=styled.div`
display: flex;
border: 2px solid red;
align-items: center;
justify-content: center;
`
