import React from 'react'
import { Button, CircularProgress } from '@material-ui/core'
import { makeStyles, Theme } from "@material-ui/core/styles"


interface LoadingButtonProps {
    fullWidth?:boolean,
    children?: React.ReactNode,
    isLoading: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: 'auto',
    minWidth: 120,
    height: "44px",
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 24px',
    fontFamily: "Globotipo Variable",
    fontSize: "16px",
    fontWeight: 400,
    fontStyle: "normal",
    lineHeight: "100%",
    letterSpacing: "0%",
    borderRadius: "40px",
    border: "1px solid transparent",
    /* two backgrounds: first is the inner color, second is the border gradient */
    backgroundImage: "linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(90deg, #FFBD09 0%, #FF111E 100%)",
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    color: theme.palette.text.primary,
    textAlign: "center",
    textTransform: "none",
    boxShadow: 'none',
    opacity: 1,
    transform: "rotate(0deg)",
    position: "relative",
    transition: "all 0.3s ease",
    '&:hover': {
    /* on hover fill with gradient and change text color - keep two layers to avoid seam on rounded edges */
    backgroundImage: "linear-gradient(90deg, #FFBD09 0%, #FF111E 100%), linear-gradient(90deg, #FFBD09 0%, #FF111E 100%)",
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
    color: '#FFFFFF',
      "&::before": {
        display: "none",
      },
    },
  },
  full: {
    width: '100%',
  },
  buttonContainer: {
    marginTop: "44px",
  },
}))
const LoadingButton = (props: LoadingButtonProps) => {
    const classes = useStyles()

    const className = `${classes.button} ${props.fullWidth ? classes.full : ''}`.trim()

    return (
        <div>
            <Button className={className} disabled={props.isLoading} type="submit" variant="contained" size="large" fullWidth={props.fullWidth} disableElevation>
                {props.isLoading ? "Processando..." : props.children}
                {props.isLoading && <CircularProgress size="1.1rem" color="inherit"/> }
            </Button>
        </div>
    )
}

export default LoadingButton
