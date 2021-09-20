import React from "react"
import Spacing from "@components/spacing"
import { Typography } from "@material-ui/core"
import Slider from "react-slick"
import { CarouselProps } from './index'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface RuleProps {
  rule: string,
  index: number
}

const Rule = (props: RuleProps) => (
  <React.Fragment>
    <Spacing smart={{margin: "0px 0px 24px"}}>
      <Typography variant="h1" color="textPrimary">
        {props.index + 1}.<br/>
      </Typography>
    </Spacing>
    <Typography variant="h2" style={{fontWeight: 'normal'}} color="textPrimary">
        {props.rule}
    </Typography>
  </React.Fragment>
)

const Carousel = (props: CarouselProps) => {
    const { rules } = props
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <React.Fragment/>,
      prevArrow: <React.Fragment/>,
    }
  
    return (
      <Spacing desktop={{ margin: "40px auto" }} smart={{ margin: "20px auto" }}>
        <div style={{ width: "80%" }}>
          <Slider {...settings}>
            {rules.map((rule, index) => <Rule key={index} rule={rule} index={index}/>)}
          </Slider>
        </div>
      </Spacing>
    )
  }

export default Carousel