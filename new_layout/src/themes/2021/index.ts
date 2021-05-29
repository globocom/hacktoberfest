import { createMuiTheme } from '@material-ui/core/styles'


const theme = createMuiTheme({
  palette: {
      primary: {
        main: "#211680",
        contrastText: "#fff"
      },
      secondary: {
        main: "#dc004e",
      },
      type: "light",
    },
    typography: {
      fontFamily: 'Roboto'
    }
})

export default theme

