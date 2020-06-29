import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { useScrollPosition } from "react-use-scroll-position"

const ButtonUp = () => {
  const { x, y } = useScrollPosition()
  if (y > 120) {
    return (
      <>
        <a onClick={() => scrollTo("#up")} className="show" id="button"></a>
      </>
    )
  } else {
    return (
      <>
        <a></a>
      </>
    )
  }
}

export default ButtonUp
