import React, {
  useState,
} from "react"

const Collapse = ({ title, content }) => {
  const [isShowing, setisShowing] = useState(false)

  const onCollapsePress = (e) => {
    e.preventDefault()
    const {
      target: {
        nextSibling: divText,
        lastChild: arrow,
      } = {},
    } = e

    if (!isShowing) {
      divText.classList.add("show")
      arrow.classList.add("rotate")
    } else {
      divText.classList.remove("show")
      arrow.classList.remove("rotate")
    }
    setisShowing(!isShowing)
  }

  return (
    <div className="collapse">
      <button type="button" className="collapse__button" onClick={onCollapsePress}>
        {title}

        <p className="collapse__arrow">&lt;</p>
      </button>
      <div className="collapse__content">
        <p className="collapse__text">{content}</p>
      </div>
    </div>
  )
}

export default Collapse
