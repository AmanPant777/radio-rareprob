import { setDoc, doc } from '@firebase/firestore';
import { Instagram, Twitter } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { firestore } from '../../firebase';
import OurTeamFlex from '../OurTeamFlex/  OurTeamFlex';
const OurTeam = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [detail, setDetail] = useState('')
    const [succesfull, setSuccesfull] = useState(false)
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (name.length > 0 && email.length > 0 && detail.length > 0) {
            setDoc(doc(firestore, "user", email), {
                name: name,
                email: email,
                detail: detail,
            }).then(() => {
                setName('')
                setEmail('')
                setDetail('')
                alert('Feedback Submitted Succesfully')
                setSuccesfull(true)
            })
                .catch((error => console.log(error)))
        } else {
            return;
        }
    }

    return (
        <Container>
            <OurTeamTitle>Our Team</OurTeamTitle>
            <OurTeamText>"Teamwork is the ability to work togethor towards a common vision.The ability to direct indivisual accomplishments towards organization objectives. It is the fuel that allow common people to gain uncommom results."</OurTeamText>
            <OurTeamFlex />
            <FormContainer id="about">
                <FormTitle>Write To Us</FormTitle>
                <Form onSubmit={onSubmitHandler} id="formid">
                    <FlexForm>
                        <InputEmail placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
                        <InputName type="email" placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)} value={email} />
                    </FlexForm>
                    <DetailContainer>
                        <InputDetail placeholder="Details"
                            onChange={(e) => setDetail(e.target.value)}
                            value={detail}
                        />
                        <Button
                            type="submit" succesfull={succesfull}
                        >{succesfull ? 'Submited' : 'Submit'}</Button>
                    </DetailContainer>
                </Form>
            </FormContainer>
            <ImageContainer>
                <ImageFeedback src="images/feedback.png" />
                <FeedbackContainer>
                    <Container1 style={{ marginTop: 20 }}>
                        Rareprob solutions private limited Shop 3 Galli No. 2, Omnagar Shahibadad, Gaziabad 201007
                    </Container1>
                    <Container1 one={true}>
                        asddev86@gmail.com
                        <p >2019, All Rights Reserved</p>
                    </Container1>
                    <Container1 makeflex={true} one={true}>
                        Follow Us: <Link href="https://www.instagram.com/rareprob_/?utm_medium=copy_link">
                            <Instagram />
                        </Link>
                        <Link href=" https://mobile.twitter.com/rare_prob">
                            <Twitter />
                        </Link>
                    </Container1>
                </FeedbackContainer>
            </ImageContainer>
        </Container>
    )
}

export default OurTeam
const Container = styled.div`
width: 100%;
height: 100%;
`
const OurTeamTitle = styled.h2`
color: red;
text-align: center;
font-size: 50px;
padding: 20px;
@media(max-width: 768px){
    font-size: 20px;
padding: 0px;
margin-right: 30px;
margin-top: 20px;
}
`
const OurTeamText = styled.p`
font-size:18px;
text-align: center;
line-height:1.6;
width: 70%;
margin: auto;
@media(max-width: 768px){
    font-size: 12px;
}
`

const FormContainer = styled.div`
margin-top: 100px;
width: 80%;
margin:100px auto;
padding: 20px;
border-radius: 40px;
background-color: rgba(255,255,255,1);
@media(max-width: 768px){
    margin-top:0;
}
`
const FormTitle = styled.div`
color: red;
font-size: 39px;
font-weight: bold;
@media(max-width: 768px){
    font-size: 20px;
}
`
const Form = styled.form`
margin-top: 20px;
`
const FlexForm = styled.div`
display: flex;
justify-content: space-between;
`
const InputEmail = styled.input`
border-color: rgba(224, 32, 32,0.5);
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
const InputName = styled(InputEmail)`
`
const InputDetail = styled(InputEmail)`
padding: 20px 10px;
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
const Button = styled.button`
position: absolute;
top: 44%;
right: 13px;
width:6em;
height:2em;
background-color: ${props => props.succesfull ? 'gray' : 'red'};
border: none;
color:white;
outline: none;
font-size:20px;
border-radius:40px;
font-weight: bold;
transition: transform .2s;
&:hover{transform: ${props=>props.succesfull?'':' scale(1.1)'}};
@media(max-width: 768px){
    top: 40%;
    width:5em;
    height:20px;
    font-size:8px;
    right: 20px;
   border-radius: 9px;}
`



const DetailContainer = styled.div`
position: relative;
`
const ImageContainer = styled.div`
@media(max-width:768px){
    margin-top: 0;
}
`
const ImageFeedback = styled.img`
width: 70%;
margin-top:40px;
margin-left: 17%;
@media(max-width:768px){
    margin-top: 0;
    margin-left: 11%;
}
`
const FeedbackContainer = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
height: 200px;
width: 70%;
margin:auto;
@media(max-width: 768px){
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    margin-left: 11%;
}
`
const Container1 = styled.div`
flex: 0.4;
font-size: 14px;
flex:${props => props.makeflex && '0.3'} ;
text-align: center;
display: ${props => props.makeflex && 'flex'};
margin-top: 18px;
flex: ${props => props.makeflex && '0.2'};
${({ makeflex }) =>
        makeflex && `
        justify-content: space-around;
        align-items: center;

    `
    };
@media(max-width: 768px){
    font-size: 12px;
    margin-top: ${props => props.one && `  -40px`};
}
`
const Link = styled.a`
cursor: pointer;
text-decoration:none;
color:black;
`
