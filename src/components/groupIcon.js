import React from "react"
import "../css/app.css"
import group from "../assets/Group.svg"

const groupIcon = (props) => {
    console.log(props)
    return (
        <img src={group} className={props.active ? "icon rotate" : "icon"} alt='' />
    )
}

export default groupIcon