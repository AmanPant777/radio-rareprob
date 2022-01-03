import React, { useEffect } from 'react'
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { Box } from '@material-ui/core';
import styled from 'styled-components'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const VolumeControl = () => {
    const [value, setValue] = React.useState(100);
    useEffect(()=>{
      if(document.getElementsByTagName('video')[0]){
        document.getElementsByTagName('video')[0].volume=value/100
      }
      if(document.getElementsByTagName('audio')[0]){
        document.getElementsByTagName('audio')[0].volume=value/100
      }
    },[value])

    const handleChange = (event, newValue) => {
        setValue(newValue);
      }

    return (
        <Container style={{marginRight:'40px'}}>
            <Box sx={{width:130}}>
              
       <Stack spacing={2} direction="row" sx={{ mb:1 }} alignItems="center">
       <VolumeUpIcon
       color='primary'
       style={{color:'red !important',zIndex:100}}
       titleAccess='volume'
       />
        <Slider  
        aria-label="Volume" 
        value={value} 
        onChange={handleChange}
        getAriaValueText={(value)=>value}
        valueLabelDisplay="auto"
        color='secondary'
        
         />
      </Stack>
            </Box>
        </Container>
    )
}

export default VolumeControl


const Container=styled.div`
 
`