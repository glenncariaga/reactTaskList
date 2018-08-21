import React from "react"
import "../css/font.css"

const header = (props) => {
    return (
        <div className='title'>
            <div>{[props.title]}</div>
        </div>
    )
}
export default header