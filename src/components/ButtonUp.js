import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { useScrollPosition } from "react-use-scroll-position"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

const ButtonUp = () => {
  const { x, y } = useScrollPosition()
  if (y > 120) {
    return (
      <>
        <a onClick={() => scrollTo("#up")} className="show" id="button">
          <FontAwesomeIcon className="arrowUp" icon={faChevronUp} />
        </a>
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
