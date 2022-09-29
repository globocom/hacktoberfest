import React from 'react'

import {TextField} from '@material-ui/core'

import { styled } from '@material-ui/styles';

const HacktoberTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff',
      },
      '&:hover fieldset': {
        borderColor: '#fff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fff',
      },
    },
});


const HacktoberfestTextInput = (props: any) => {
  return (
    <HacktoberTextField {...props}/>
  )
}

export default HacktoberfestTextInput