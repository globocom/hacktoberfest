import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Image } from "@components/image"

const useStyles = makeStyles(() => ({
  scrollTop: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    cursor: "pointer",
    color: "#000000",
    "& svg": {
      fill: "#000000",
    },
    "& img": {
      filter: "brightness(0)",
    },
  },
}))


const ScrollTop = () => {
  const classes = useStyles()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className={classes.scrollTop}>
      <Image src="2023/scroll-top.svg" onClick={scrollToTop} />
    </div>
  )
}


export default ScrollTop
