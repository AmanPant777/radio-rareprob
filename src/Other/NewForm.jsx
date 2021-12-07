import React,{useState} from 'react'
import styled from 'styled-components'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {AiOutlineLink,AiFillInstagram,AiFillFacebook} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'
import { setDoc, doc } from '@firebase/firestore';
import {firestore} from '../firebase'

const NewForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [detail, setDetail] = useState('')
  const [succesfull, setSuccesfull] = useState(false)
  const [validate,setValidate]=useState(false)

  // useEffect(()=>{
  //   if(name.length === 0 && email.length === 0 && detail.length === 0){
  //     setValidate(false)
  //   }
  // },[])

  const submitHandler =(e)=>{
     e.preventDefault()
     if (name.length > 0 && email.length > 0 && detail.length > 0) {
      setDoc(doc(firestore, "user", email), {
          name: name,
          email: email,
          detail: detail,
      }).then(() => {
          setValidate(false)
          setName('')
          setEmail('')
          setDetail('')
          alert('Feedback Submitted Succesfully')
          setSuccesfull(true)
      })
          .catch((error => console.log(error)))
  } else {
      setValidate(true)
  }
  }
    return (
        <>
        <Contact>Contact Us</Contact>
        <Container>
            <AddresContainer>
              <Adress>
                <HiOutlineLocationMarker size="30px" color="red"/>
                <AdressText>
                Rareprob solutions private limited Doon Express Business Park, Subhash Nagar, Dehradun, Uttarakhand - 248001
                </AdressText>
              </Adress>
              <Message>
                  <GrMail size="30px" color="red"/>
               <AdressText>
               asddev86@gmail.com
               </AdressText>
               </Message> 
               <Follow>
                   <AiOutlineLink size="30px" color="red"/>
                   <AiFillInstagram size="20px" color="black" style={{marginLeft:'10px'}}/>
                   <AiFillFacebook size="20px" color="black"/>
               </Follow>             
            </AddresContainer>
            <FormContainer onSubmit={submitHandler}>
            <NameInput  value={name} placeholder="NAME" onChange={(e)=>setName(e.target.value)}/>
            <EmailInput type="email" value={email} placeholder="EMAIL" onChange={(e)=>setEmail(e.target.value)}/>
            <DetailInput value={detail} placeholder="MESSAGE" onChange={(e)=>setDetail(e.target.value)}/>
            {validate&&(
              <p style={{color:'red'}}>All fields are required</p>
            )}
            <SubmitButton disabled={succesfull} sucess={succesfull} type="submit" >
              {succesfull?'Submited':'Submit'}
            </SubmitButton>
            </FormContainer>
        </Container>
        </>
    )
}

export default NewForm

const Container=styled.div`
margin: auto;
display: flex;
margin-left: 20%;
width: 900px;
height:300px;
margin-top:50px;
@media(max-width:1200px){
  width: 60%;
}
@media(max-width:768px){
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: space-around;
  height: 400px;
  margin-left: 10%;
}
`
const AddresContainer=styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: baseline;
@media(max-width:768px){
justify-content:space-between;
height:700px;
}
`
const FormContainer=styled.form`
width: 50%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
@media(max-width: 768px){
  margin-top: 20px;
  justify-content:space-between;
  height: 800px;
}
`
const Adress=styled.div`
display: flex;
align-items: center;
justify-content: baseline;
`
const Message=styled.div`
display: flex;
align-items: center;
justify-content: baseline;
`

const AdressText=styled.p`
font-size:15px;
width: 60%;
margin-left: 10px;
@media(max-width:1200px){
  font-size:13px;
}
@media(max-width:768px){
width: 100%;
}
`
const Follow=styled.div`
display: flex;
align-items: center;
justify-content: baseline;
`
const NameInput=styled.input`
background-color: rgba(0,0,0,0.1);
padding: 10px;
border-radius: 2px;
outline: none;
border: none;
width: 350px;
@media(max-width:1200px){
  width: 250px;
}
`
const EmailInput=styled.input`
background-color: rgba(0,0,0,0.1);
padding: 10px;
border-radius: 2px;
outline: none;
border: none;
width: 350px;
@media(max-width:1200px){
  width: 250px;
}
`
const DetailInput=styled.input`
background-color: rgba(0,0,0,0.1);
padding: 10px;
border-radius: 2px;
outline: none;
border: none;
width: 350px;
@media(max-width:1200px){
  width: 250px;
}
`
const SubmitButton=styled.button`
background-color:${props=>props.sucess?'grey':'red'} ;
outline: none;
border: none;
padding: 10px;
width: 350px;
border-radius:40px;
color: white;
font-size:18px;
transition-duration: 0.3s;
&:hover{
  transform:${(props)=>props.sucess?'':'scale(1.1)'};
}
@media(max-width:1200px){
  width: 250px;
}
`
const Contact=styled.h1`
color: gray;
text-align: center;
`