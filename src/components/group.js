import React, { Component } from "react"
import Header from "../components/header.js"
import TaskItem from "../components/taskItem.js"
import SubHeading from "../components/subHeading.js"
import GroupIcon from "../components/groupIcon.js"
import "../css/app.css"

const locking = (item, list) => {
    let lock = false

    for (let i = 0; i < item.dependencyIds.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (item.dependencyIds[i] === list[j].id) {
                if (list[j].completedAt === null) lock = true
            }
        }
    }
    if (item.dependencyIds <= 0) lock = false
    return lock
}

const GenerateTaskItems = (props) => {

    return props.tasks.map(item => {
        let locked = locking(item, props.list)
        return <TaskItem key={item.id} complete={props.complete} locked={locked} props={item} />


    })
}
class generateTaskGroup extends Component {

    state = {
        active: false
    }

    collapseTasks = (active) => {
        this.setState({ active: active ? false : true })
    }

    render() {
        return (
            <React.Fragment>
                <div className="groupHeader" onClick={e => this.collapseTasks(this.state.active)}>
                    <GroupIcon active={this.state.active}></GroupIcon>
                    <div className="titleSection">
                        <Header title={this.props.title} />
                        <SubHeading tasks={this.props.tasks}></SubHeading>
                    </div>
                </div>
                {this.state.active ? <GenerateTaskItems tasks={this.props.tasks} list={this.props.list} complete={this.props.complete} /> : null}
            </React.Fragment >
        )
    }
}

export default generateTaskGroup