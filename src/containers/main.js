import React, { Component } from 'react';
import "../css/font.css"
import GenerateTaskGroup from "../components/group"

const payload = [{
  id: 1,
  group: "Purchases",
  task: "Go to the bank",
  dependencyIds: [],
  completedAt: null,
},
{
  id: 2,
  group: "Purchases",
  task: "Buy hammer",
  dependencyIds: [1],
  completedAt: null,
},
{
  id: 3,
  group: "Purchases",
  task: "Buy wood",
  dependencyIds: [1],
  completedAt: null,
},
{
  id: 4,
  group: "Purchases",
  task: "Buy nails",
  dependencyIds: [1],
  completedAt: null,
},
{
  id: 5,
  group: "Purchases",
  task: "Buy paint",
  dependencyIds: [1],
  completedAt: null,
},
{
  id: 6,
  group: "Build Airplane",
  task: "Hammer nails into wood",
  dependencyIds: [2, 3, 4],
  completedAt: null,
},
{
  id: 7,
  group: "Build Airplane",
  task: "Paint wings",
  dependencyIds: [5, 6],
  completedAt: null,
},
{
  id: 8,
  group: "Build Airplane",
  task: "Have a snack",
  dependencyIds: [],
  completedAt: null,
}]

class TaskList extends Component {

  state = {
    list: payload,
    taskGroups: {}
  }

  buildGroup = () => {
    let payload = this.state.list;
    let _taskGroups = this.state.taskGroups;
    for (let i = 0; i < payload.length; i++) {
      if (!_taskGroups.hasOwnProperty(payload[i].group)) {
        _taskGroups[payload[i].group] = []
        _taskGroups[payload[i].group].push(payload[i])

      } else {
        _taskGroups[payload[i].group].push(payload[i])
      }
    }
    this.setState({ taskGroups: _taskGroups })
  }

  //updates the task status
  complete = (id) => {

    let _list = this.state.list

    _list.map(elem => {
      if (elem.id === id) {
        elem.completedAt = elem.completedAt ? null : Date();
      }
    })

    this.setState({ list: _list })
  }

  //function that is the entry point for the children.
  generateTaskLists = () => {
    let group = []
    let _taskGroups = this.state.taskGroups

    if (Object.keys(_taskGroups).length < 0) return //check if there is something to render
    for (let task in _taskGroups) {
      //generate the task groups.
      group.push(<GenerateTaskGroup key={task} title={task} tasks={_taskGroups[task]} list={this.state.list} complete={this.complete} />)
    }

    return group
  }

  componentDidMount() {
    this.buildGroup();
  }


  render() {
    console.log(this.state)
    return (
      <div>
        {this.generateTaskLists()}
      </div>
    );
  }
}

export default TaskList