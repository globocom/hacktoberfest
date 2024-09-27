import { createTheme } from '@material-ui/core/styles'

const theme = createTheme()

theme.palette = {
  ...theme.palette,
  primary: {
    main: "#7F00FA",
    contrastText: "#fff",
    light: "#C6B6D9",
    dark: "#220A42"
  },
  secondary: {
    main: "#FF0099",
    contrastText: "#000",
    light: "#000",
    dark: "#17042B",
  },
  table: {
    background: "#491B77"
  },
  background: {
    default: "#21083B",
    paper: "#FFFFFF"
  },
  action:{
    ...theme.palette.action,
    disabledBackground: "#7d7d7d",
    disabled: "#b8b8b8"
  },
  text: {
    primary: "#fff",
    secondary: "#fff",
    disabled: "#FFFFFFA3",
    hint: "#FFF",
  },
  type: "light",
}

theme.breakpoints = {
  ...theme.breakpoints,
  values: {
    ...theme.breakpoints.values,
    xs: 320,
    sm: 375,
    md: 768,
    lg: 1024,
    xl: 1980
  }
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
    fontSize: '1.5rem', //24px
    lineHeight: '32px',
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
