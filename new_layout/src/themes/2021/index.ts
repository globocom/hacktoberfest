import { createTheme } from '@material-ui/core/styles'

const theme = createTheme()

theme.palette = {
  ...theme.palette,
  primary: {
    main: "#211680",
    contrastText: "#DAD6FF",
    light: "#4E3BFB",
    dark: "#090055",
  },
  secondary: {
    main: "#E85593",
    contrastText: "#fff",
    light: "#000",
    dark: "#bf497b",
  },
  background: {
    default: "#EAF1FC",
    paper: "#E5E5E5"
  },
  text: {
    primary: "#090055",
    secondary: "#090055",
    disabled: "#DEDEDE",
    hint: "#090055",
  },
  type: "light",
}

theme.typography = {
  ...theme.typography,
  h1: {
    fontSize: "3rem",
    lineHeight: "48px",
    [theme.breakpoints.up("md")]: {
      fontSize: "5rem",
      lineHeight: "68px",
    }
  },
  h2: {
    fontSize: '1.5rem', //24px
    lineHeight: '36px',
  },
  h3: {
    fontSize: '1.25rem', //20px
    lineHeight: '30px'
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
    fontSize: '0.75rem',
    lineHeight: '14px'
  },
  fontFamily: "Roboto"
}

export default theme
