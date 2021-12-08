// import { setDoc, doc } from '@firebase/firestore';
// import { Instagram, Twitter, Facebook } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
// import { firestore } from '../../firebase';
import NewForm from '../../Other/NewForm';
import OurTeamFlex from '../OurTeamFlex/  OurTeamFlex';
const OurTeam = () => {


    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [detail, setDetail] = useState('')
    // const [succesfull, setSuccesfull] = useState(false)
    // const [validate,setValidate]=useState(false)


    // const onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     if (name.length > 0 && email.length > 0 && detail.length > 0) {
    //         setDoc(doc(firestore, "user", email), {
    //             name: name,
    //             email: email,
    //             detail: detail,
    //         }).then(() => {
    //             setValidate(false)
    //             setName('')
    //             setEmail('')
    //             setDetail('')
    //             alert('Feedback Submitted Succesfully')
    //             setSuccesfull(true)
    //         })
    //             .catch((error => console.log(error)))
    //     } else {
    //         setValidate(true)
    //     }
    // }


    return (
        <Container>
            <RareprobText>
            Rareprob Solutions is a Private Limited Company incorporated on 28 September 2018. As everything is evolving with time so people are looking for digital solutions for accomplishing their needs. We believe every new thing starts with a unique and authentic plan. So our team is working with the concept of concretizing ideas into utilizable apps. Currently, More than 10 apps are running including RocksPlayer, Gallery, RadioMonkey, Video to Mp3 Converter and many more. We're further working on upcoming apps so that your ideas will match directly with our innovations.
            </RareprobText>
            <OurTeamTitle>Meet Our Team</OurTeamTitle>
            {/* <OurTeamText>"Teamwork is the ability to work together towards a common vision. The ability to direct individual accomplishments towards organizational objectives. It is the fuel that allows common people to gain uncommon results."</OurTeamText> */}
            <OurTeamFlex />
            <NewForm/>
            <div style={{height: '200px'}}></div>
            {/* <FormContainer >
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
                    {validate&&(
                        <h1>All Fields are necessary</h1>
                    )}
                </Form>
            </FormContainer> */}

            {/* <ImageContainer>
                <ImageFeedback alt="feedback" src="images/feedback.png" />
                <FeedbackContainer>
                    <Container1 style={{ marginTop: 20 }}>
                        Rareprob solutions private limited Shop 3 Galli No. 2, <br /> Omnagar Shahibadad, Gaziabad 201007
                    </Container1>
                    <Container1 one={true}>
                        asddev86@gmail.com
                        <p >2019, All Rights Reserved</p>
                    </Container1>
                    <Container1 makeflex={true} one={true}>
                        Follow Us: <Link target="_blank" href="https://www.instagram.com/rareprob_/?utm_medium=copy_link">
                            <Instagram />
                        </Link>
                        <Link target="_blank" href=" https://mobile.twitter.com/rare_prob">
                            <Twitter />
                        </Link>
                        <Link target="_blank" href="https://www.facebook.com/rareprobsolution.sul.7">
                            <Facebook />
                        </Link>
                    </Container1>
                </FeedbackContainer>
            </ImageContainer> */}

        </Container>
    )
}

export default OurTeam
const Container = styled.div`
width: 100%;
height: 100%;
margin-top: 40px;
`
const OurTeamTitle = styled.h2`
color: red;
text-align: center;
font-size: 50px;
padding: 20px;
margin-top: 70px;
margin-left: 20px;
@media(max-width: 768px){
    font-size: 20px;
padding: 0px;
margin-right: 30px;
margin-top: 20px;
}
@media(max-width: 488px){
    font-size: 20px;
padding: 0px;
margin-right: 0;
margin-top: 20px;
}
`
// const OurTeamText = styled.p`
// font-size:18px;
// text-align: center;
// line-height:1.6;
// width: 70%;
// margin: auto;
// @media(max-width: 768px){
//     font-size: 12px;
// }
// `

// const FormContainer = styled.div`
// margin-top: 100px;
// width: 70%;
// margin:100px auto;
// padding: 20px;
// border-radius: 40px;
// background-color: rgba(255,255,255,1);
// @media(max-width: 768px){
//     margin-top:0;
//     width: 80%;
// }
// `

// const FormTitle = styled.div`
// color: red;
// font-size: 39px;
// font-weight: bold;
// @media(max-width: 768px){
//     font-size: 20px;
// }
// `


// const Form = styled.form`
// margin-top: 20px;
// `


// const FlexForm = styled.div`
// display: flex;
// justify-content: space-between;
// `


// const InputEmail = styled.input`
// border-color: rgba(224, 32, 32,0.5);
// outline: none;
// padding:14px;
// width: 49%;
// border-radius: 40px;
// color: red;
// &::placeholder{
//     color: red;
//     font-size:20px;
// }
// @media(max-width: 768px){
// padding:5px;
// width: 49%;
// border-radius: 20px;
// &::placeholder{
//     color: red;
//     font-size:12px;
// }
// }
// `
// const InputName = styled(InputEmail)`
// `


// const InputDetail = styled(InputEmail)`
// padding: 20px 10px;
// margin-top:30px;
// width: 100%;
// border-radius: 60px;
// @media(max-width: 768px){
// padding: 20px;
// margin-top:10px;
// border-radius: 30px;
// @media(max-width: 768px){
//     padding: 10px;
// }
// }
// `


// const Button = styled.button`
// position: absolute;
// top: 44%;
// right: 13px;
// width:6em;
// height:2em;
// background-color: ${props => props.succesfull ? 'gray' : 'red'};
// border: none;
// color:white;
// outline: none;
// font-size:20px;
// border-radius:40px;
// font-weight: bold;
// transition: transform .2s;
// &:hover{transform: ${props => props.succesfull ? '' : ' scale(1.1)'}};
// @media(max-width: 768px){
//     top: 40%;
//     width:5em;
//     height:20px;
//     font-size:8px;
//     right: 20px;
//    border-radius: 9px;}
// `



// const DetailContainer = styled.div`
// position: relative;
// `
// const ImageContainer = styled.div`
// @media(max-width:768px){
//     margin-top: 0;
// }
// `
// const ImageFeedback = styled.img`
// width: 50%;
// margin-top:10px;
// margin-left: 30%;
// @media(max-width:768px){
//     margin-top: -40px;
//     margin-left: 13%;
// }
// @media(max-width:488px){
//     margin-top: -40px;
//     margin-left: 16%;
// }
// `
// const FeedbackContainer = styled.div`
// display: flex;
// justify-content: center;
// align-items: flex-start;
// height: 200px;
// width: 65%;
// margin:auto;
// margin-left: 20%;
// @media(max-width: 768px){
//     flex-direction: column;
//     align-items: center;
//     margin-bottom: 40px;
//     margin-left: 11%;
// }
// @media(max-width: 488px){
//     flex-direction: column;
//     align-items: center;
//     margin-bottom: 40px;
//     margin-left: 15%;
// }
// `
// const Container1 = styled.div`
// flex: 0.4;
// font-size: 15px;
// flex:${props => props.makeflex && '0.3'} ;
// text-align: center;
// display: ${props => props.makeflex && 'flex'};
// margin-top: 18px;
// flex: ${props => props.makeflex && '0.2'};
// ${({ makeflex }) =>
//         makeflex && `
//         justify-content: space-around;
//         align-items: center;

//     `
//     };
// @media(max-width: 768px){
//     font-size: 12px;
//     margin-top: ${props => props.one && `  -40px`};
// }
// `
// const Link = styled.a`
// cursor: pointer;
// text-decoration:none;
// color:black;
// `

const RareprobText=styled.h1`
font-size:17px;
color: rgba(0,0,0,0.7);
width: 70%;
margin: auto;
line-height:1.8;
text-align: center;
@media(max-width: 768px){
    font-size: 12px;
}
@media(max-width: 468px){
    font-size: 10px;
}
`