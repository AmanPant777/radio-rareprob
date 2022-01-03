import React from 'react'
import { useDispatch} from 'react-redux'
import styled from 'styled-components'
import { addallstation } from '../redux/AllSlice'
import { playStation, stationAdd } from '../redux/PlayingSlice'
import { addRecent, recentPlaying, switchPlaylistFalse} from '../redux/RecentSlice'
import { Link,useLocation } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {BsPlayCircle} from 'react-icons/bs'


const CountryStation = ({text,data,country}) => {

const dispatch=useDispatch()
const location=useLocation()
const {icon}=location?.state


    return (
        <Container>
           <div style={{display:'flex',justifyContent:'space-between'}}>
           <Text>
                {text}
            </Text>
            <Link to={{
                pathname:'/radio-monkey/station',
                search:`?country=${country}&&station=${text}`
            }}
            state={{
                icon:icon
            }}
            >
            <p style={{cursor:'pointer',fontSize:'13px'}}            
            >See All</p>  
            </Link>
            
           </div>
            <MapContainer>
            {data&&data.map((item,index)=>(
                <IconContainer key={index} onClick={
                ()=>  
                {    dispatch(recentPlaying({
                    ...item
                }))
                    dispatch(stationAdd({
                        ...item
                    }))
                    dispatch(switchPlaylistFalse())              
                    dispatch(addRecent({
                  ...item
                })) 
                dispatch(addallstation(
                data
                ))
                dispatch(playStation())
                }}
                >
                    <div style={{position:'relative'}}>
                    <LazyLoadImage1 src={item.favicon===''?
                `/radio/icons/r.png`:
                item.favicon
                }
                alt="radio monkey"
                effect='blur'
                onError={(e)=>e.target.src='/radio/icons/r.png'}
                />
                <BsPlayCircle 
                style={{position:'absolute',bottom:'10px',right:'4px'}}
                />
                    </div>
               
                <IconText>
                      {item.name}
                </IconText>
                </IconContainer>
            ))}
            </MapContainer>
        </Container>
    )
}

export default CountryStation

const Container=styled.div`
margin-top:0;
/* background-color:rgba(119,128,164,0.3); */
padding:10px 0;
`
const Text=styled.p`
font-size: 25px;
font-weight: bolder;
color: white;
@media(max-width:768px){
    font-size: 17px;
}
@media(max-width:468px){
    font-size: 13px;
}
`
const IconContainer=styled.div`
max-width: 100px;
margin: 20px 20px 20px 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
cursor: pointer;
`

const LazyLoadImage1=styled(LazyLoadImage)`
height:100px;
width:100px;
border-radius: 5px;
object-fit: cover;
transition-duration: 0.3s;
&:hover{
    box-shadow: #c20dda58 0px 5px 15px;
    opacity: 0.7;
}
@media(max-width:468px){
    height:70px;
width:70px;
}
`
const IconText=styled.div`
font-size: 15px;
width: 90%;
height: 50px;
text-align: center;
margin-top: 20px;
color: white;
transition-duration: 0.2s;
&:hover{
    color: #8729ed;
}
@media(max-width:768px){
    font-size: 12px;
}
@media(max-width:768px){
    font-size: 10px;
}
`
const MapContainer=styled.div`
display: grid;
grid-template-columns: repeat(7,minmax(0,1fr));
@media(max-width:1268px){
    grid-template-columns: repeat(5,minmax(0,1fr));
}
@media(max-width:768px){
    grid-template-columns: repeat(4,minmax(0,1fr));
}
@media(max-width:468px){
    grid-template-columns: repeat(3,minmax(0,1fr));
}
`