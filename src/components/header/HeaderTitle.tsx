import React from "react"
import { makeStyles, Theme, Typography, Grid } from "@material-ui/core"
import { Image } from "@components/image"

const useStyles = makeStyles((theme: Theme) => ({
  fontSection: {
    fontSize: '42px',
    marginLeft: "20px",
    color: theme.palette.text.primary,
    fontFamily: "Globotipo Variable",
    fontWeight: 400,
    lineHeight: '58.8px',
  },
  projectTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
}))

const HeaderTitle = (props: HeaderTitleProps) => {
  const classes = useStyles()

  return (
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item className={classes.projectTitle} >
          <Image src={`2023/white-raio.svg`} />
          <Typography variant="h2" component="h2" align="left" className={classes.fontSection} color="secondary">
            {props.title}
          </Typography>
        </Grid>
      </Grid>
  )
}

interface HeaderTitleProps {
  title: String
}

export default HeaderTitle
