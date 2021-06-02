import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme()

theme.palette = {
  ...theme.palette,
  primary: {
    main: "#211680",
    contrastText: "#fff",
    light: "#000",
    dark: "#000"
  },
  secondary: {
    main: "#E85593",
    contrastText: "#fff",
    light: "#000",
    dark: "#000"
  },
  type: "light",
}

theme.typography = {
    ...theme.typography,
    h1: {
      fontSize: '3rem',
      lineHeight: '48px',
      [theme.breakpoints.up('md')]: {
        fontSize: '5rem',
        lineHeight: '68px'
      }
    },
    h2: {
      fontSize: '1.5rem',
      lineHeight: '36px',
    },
    h3: {
      fontSize: '1.25rem',
      lineHeight: '30px',
      [theme.breakpoints.up('md')]: {
        lineHeight: '24px'
      }
    },
    body1: {
      
    },
    fontFamily: 'Roboto',
}


export default theme

