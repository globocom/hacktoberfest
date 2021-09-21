import React, { useRef } from "react"
import Spacing from "@components/spacing"
import { Typography, IconButton } from "@material-ui/core"
import { CarouselProps } from "./index"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import NavigateBeforesIcon from "@material-ui/icons/NavigateBefore"
import Slider from "react-slick"

interface RuleProps {
  rule: string
  index: number
}

const CustomNextArrow = (props: any) => {
  const { reference } = props
  function nextSlide() {
    try {
      reference.current.slickNext()
    } catch (e) {
      console.warn("Warning", e)
    }
  }

  return (
    <IconButton
      onClick={nextSlide}
      style={{ backgroundColor: "transparent" }}
      color="secondary"
    >
      <NavigateNextIcon />
    </IconButton>
  )
}

const CustomPreviousArrow = (props: any) => {
  const { reference } = props
  function previousSlide() {
    try {
      reference.current.slickPrev()
    } catch (e) {
      console.warn("Warning", e)
    }
  }

  return (
    <IconButton
      onClick={previousSlide}
      style={{ backgroundColor: "transparent" }}
      color="secondary"
    >
      <NavigateBeforesIcon />
    </IconButton>
  )
}

const Rule = (props: RuleProps) => (
  <React.Fragment>
    <Spacing smart={{ margin: "0px 0px 24px" }}>
      <Typography variant="h1" color="textPrimary">
        {props.index + 1}.<br />
      </Typography>
    </Spacing>
    <Typography variant="h2" color="textPrimary">
      {props.rule}
    </Typography>
  </React.Fragment>
)


const Carousel = (props: CarouselProps) => {
  const slickCarouselRef = useRef(null)
  const { rules, showArrows } = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <Spacing desktop={{ margin: "40px auto" }} smart={{ margin: "20px auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {props.showArrows && <CustomPreviousArrow reference={slickCarouselRef} />}
        <div style={{ width: "80%" }}>
          <Slider ref={slickCarouselRef} {...settings}>
            {rules.map((rule, index) => (
              <Rule key={index} rule={rule} index={index} reference={slickCarouselRef} />
            ))}
          </Slider>
        </div>
        {showArrows && <CustomNextArrow />}
      </div>
    </Spacing>
  )
}

export default Carousel
