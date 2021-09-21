import React from "react"
import Spacing from "@components/spacing"
import { Grid, Typography, Button } from "@material-ui/core"
import ArrowDownIcon from "@material-ui/icons/ArrowDownward"

const DesktopView = () => {
  return (
    <React.Fragment>
      <Spacing
        desktop={{ margin: "0px 0px 72px" }}
        smart={{ margin: "0px 0px 24px" }}
      >
        <Grid
          container
          alignItems="center"
          alignContent="center"
          justifyContent="center"
        >
          <Spacing smart={{ margin: "16px 0px" }}>
            <Grid item xs={12}>
              <Typography variant="h2" align="center" component="h2">
                {" "}
                01 a 31 de outubro
              </Typography>
            </Grid>
          </Spacing>
          <Grid item xs={8}>
            <Typography align="center" variant="h3" component="h3">
              Contribua e ganhe uma camiseta exclusiva
            </Typography>
          </Grid>
          <Spacing smart={{ margin: "40px 0px 0px" }}>
            <Grid item xs={8}>
              <Button
                style={{ backgroundColor: "#fff", borderRadius: "64px" }}
                fullWidth
                variant="contained"
              >
                <pre style={{ fontFamily: "inherit" }}>
                  <b>Participar</b>
                  com sua conta do github
                </pre>
              </Button>
            </Grid>
          </Spacing>
        </Grid>
      </Spacing>

      <Spacing smart={{ margin: "32px 0px 0px" }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <ArrowDownIcon />
          </Grid>
          <Grid item>
            <Typography align="center" component="p">
              {" "}
              como funciona{" "}
            </Typography>
          </Grid>
        </Grid>
      </Spacing>
    </React.Fragment>
  )
}

export default DesktopView
