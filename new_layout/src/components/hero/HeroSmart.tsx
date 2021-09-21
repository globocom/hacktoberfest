import React from "react"
import Spacing from "@components/spacing"
import { Grid, Typography, Button } from "@material-ui/core"
import { Image } from "@components/image"
import ArrowDownIcon from "@material-ui/icons/ArrowDownward"
import { makeStyles, Theme } from "@material-ui/core/styles"


const useStyles = makeStyles((theme: Theme) => ({
  button: {
    backgroundColor: "#fff", 
    fontFamily: "inherit", 
    borderRadius: "64px",
    textTransform: "none",
    color: theme.palette.text.primary
  },
  howWorks: {
    position: 'absolute',
    width: "100%",
    bottom: '30px'
  }

}))


const SmartView = () => {
    const classes = useStyles()
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
            <Spacing smart={{ margin: "20px 0px 0px" }}>
              <Grid item xs={12}>
                <Typography variant="h2" align="center" component="h2">
                  {" "}
                  01 a 31 de outubro
                </Typography>
              </Grid>
            </Spacing>
            <Spacing smart={{ margin: "40px 0px 0px" }}>
              <Grid item xs={12}>
                <Image
                  style={{ width: "90%", display: "block", margin: "0px auto" }}
                  src={`hero/hero.svg`}
                />
              </Grid>
            </Spacing>
            <Spacing smart={{ margin: "60px 0px 0px" }}>
              <Grid item xs={8}>
                <Typography align="center" variant="h3" component="h3">
                  Contribua e ganhe uma camiseta exclusiva
                </Typography>
              </Grid>
            </Spacing>
            <Spacing smart={{ margin: "40px 0px 0px" }}>
              <Grid item xs={8}>
                <Button
                  className={classes.button}
                  fullWidth
                  variant="contained"
                >
                  <span>
                  <b>PARTICIPAR</b><br/>
                  com sua conta do github
                  </span>
                </Button>
              </Grid>
            </Spacing>
            <Grid item>
              <Image
                src={`hero/beer.svg`}
                style={{
                  position: "absolute",
                  left: "-30px",
                  top: "35%",
                  zIndex: "-1",
                }}
              />
              <Image
                src={`hero/major_tom.svg`}
                style={{
                  position: "absolute",
                  right: "-33px",
                  width: "33%",
                  top: "67%",
                  zIndex: "-1",
                }}
              />
            </Grid>
          </Grid>
        </Spacing>
  
        <div className={classes.howWorks}>
            <Typography align="center" component="p">
              <ArrowDownIcon /> como funciona
            </Typography>
        </div>
      </React.Fragment>
    )
  }

  export default SmartView