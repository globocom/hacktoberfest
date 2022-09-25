import { createTheme } from '@material-ui/core/styles'

const theme = createTheme()

theme.palette = {
  ...theme.palette,
  primary: {
    main: "#000",
    contrastText: "#FFF",
    light: "#4E3BFB",
    dark: "#090055",
  },
  secondary: {
    main: "#fff",
    contrastText: "#fff",
    light: "#000",
    dark: "#bf497b",
  },
  background: {
    default: "#000000",
    paper: "#FFFFFF"
  },
  text: {
    primary: "#FFF",
    secondary: "#000",
    disabled: "#FFFFFFA3",
    hint: "#FFF",
  },
  type: "light",
}

theme.typography = {
  ...theme.typography,
  h1: {
    fontSize: "3.75rem",
    lineHeight: "64px",
    fontWeight: "bolder",
  },
  h2: {
    fontSize: '1.5rem', //24px
    lineHeight: '36px'
  },
  h3: {
    fontSize: '1.25rem', //20px
    lineHeight: '30px',
    fontWeight: "normal"
  },
  h5:{
    fontSize: '0.825rem', //12px
    lineHeight: '16px',
    fontWeight: "normal"
  },
  subtitle1: {
    fontSize: '1.125rem',
    lineHeight: '27px'
  },
  subtitle2: {
    fontSize: '1.25rem',
    lineHeight: '24px'
  },
  body1: {
    fontSize: '1.125rem', //18px
    lineHeight: '27px',
  },
  body2: {
    fontSize: '1rem', //16px
    lineHeight: '24px'
  },
  caption: {
    fontSize: '0.875rem',
    lineHeight: '14px'
  },
  fontFamily: "Globotipo Variable"
}

export default theme
