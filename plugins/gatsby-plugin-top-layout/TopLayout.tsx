import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import { CurrentTheme } from "../../src/themes"
import SnackbarContextProvider from '../../src/components/snackbar/HacktoberfestSnackbar'

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/qa/foundation/typefaces/globotipo.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Helmet>
      <ThemeProvider theme={CurrentTheme}>
        <CssBaseline />
        <SnackbarContextProvider>
          {props.children}
        </SnackbarContextProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}
