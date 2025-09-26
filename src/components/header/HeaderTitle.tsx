import React from "react"
import { makeStyles, Theme, Typography, Grid, useMediaQuery } from "@material-ui/core"
import { Image } from "@components/image"

const useStyles = makeStyles((theme: Theme) => {
  return {
    fontSection: {
      color: theme.palette.text.primary,
      fontWeight: 400,
      fontStyle: "regular",
      lineHeight: "100%",
      [theme.breakpoints.up("md")]: {
        fontSize: "69px !important",
      },
    },
    projectTitle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    description: {
      fontSize: "18px",
      lineHeight: "100%",
      color: theme.palette.text.primary,
      fontWeight: 400,
      lineSpacing: "0%",
      marginTop: "32px",
    },
  }
})

interface HeaderTitleProps {
  title: string;
  description?: string;
  imagePath?: string;
}

const HeaderTitle = ({ title, description, imagePath }: HeaderTitleProps) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery((theme: Theme) =>
      theme.breakpoints.up(theme.breakpoints.values.lg)
    )
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      style={{ minHeight: '180px', borderRadius: 0 }}
    >
      <Grid item xs={12} md={10} lg={10} className={classes.projectTitle} style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
        <Typography
          variant="h2"
          component="h1"
          align="left"
          className={classes.fontSection}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            className={classes.description}
            component="p"
            align="left"
            color="textPrimary"
            variant="body1"
          >
            {description}
          </Typography>
        )}
      </Grid>
      
      {imagePath && isDesktop && (
        <Grid item xs={12} md={2} lg={2} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%' }}>
          <Image
            src={imagePath}
            alt="Header image"
            width="187" 
            height="220"
          />
        </Grid>
      )}
    </Grid>
  );
}

export default HeaderTitle
