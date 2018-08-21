import React from "react"
import incomplete from "../assets/Incomplete.svg"
import complete from "../assets/Completed.svg"
import lockImg from "../assets/Locked.svg"
import "../css/font.css"

const taskItem = (props) => {

  if (props.locked) {
    return (
      <React.Fragment>
        <li className="locked"><img src={lockImg} alt='' /> {props.props.task}</li>
      </React.Fragment>
    )
  } else {
    return (<React.Fragment>
      <li className={props.props.completedAt ? "completed" : null} onClick={e => props.complete(props.props.id)}>
        {props.props.completedAt !== null ? <img src={complete} alt='' /> : <img src={incomplete} alt='' />}
        {props.props.task}</li>

    </React.Fragment>)
  }
}

export default taskItem