import React from "react"
import { TextField } from "@material-ui/core"
import { styled } from "@material-ui/styles"

const HacktoberTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#000",
  },
  "& .MuiInputLabel-root": {
    color: "#000",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#000",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#000",
    },
    "&:hover fieldset": {
      borderColor: "#000",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000",
    },
    "&.Mui-disabled fieldset": {
      borderColor: "#000",
    },
  },

  "& .MuiInputBase-input": {
    color: "#000",
  },

  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "rgba(0,0,0,0.6)",
  },
});

const HacktoberfestTextInput = (props: any) => <HacktoberTextField {...props} />

export default HacktoberfestTextInput