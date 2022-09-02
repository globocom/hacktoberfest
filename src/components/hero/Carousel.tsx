import React from "react"
import { Typography, IconButton, Grid, makeStyles } from "@material-ui/core"
import { TinderLikeCard } from 'react-stack-cards'


const Carousel = (props: any) => {

  console.log('props', props)

  // return <>
  // { props.rules.map((rule: String, index: any) => <>
  //     <div key={index} className="ruleCard">
  //       { rule }
  //     </div>
  //   </>)}
  // </>

  const numbers = [0, 1, 2, 3]
  const arr = ["first", "second", "third", "fourth"]



  return <TinderLikeCard
    width="450"
    height="250"
    direction={'swipeDown'}
    images={arr}
    // ref={(node) => this.Tinder = node}
  >
  { numbers.map( i => <div>{i}</div> )}
  </TinderLikeCard>
}

export default Carousel
