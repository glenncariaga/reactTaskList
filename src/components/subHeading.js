import React from "react"
import "../css/font.css"

const header = (props) => {
    let start = props.tasks.reduce((acc, curr) => {
        if (curr.completedAt !== null) {
            acc = acc + 1
        }
        return acc
    }, 0)
    return (
        <div className='subHeading'>
            <div>{start} of {props.tasks.length} Tasks Completed</div>
        </div>
    )
}
export default header