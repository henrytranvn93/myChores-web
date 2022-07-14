import React, { useState } from 'react'
import Task from '../Task/Task'

type Props = {}

export default function Dashboard({}: Props) {
  const testList = [{
    isDone: false,
    description: "do clothes",
    type: "routine",
    assignee: "Henry",
    reward: 500,
    id: 2125
  },
  {
    isDone: false,
    description: "do dishes",
    type: "routine",
    assignee: "Katy",
    reward: 600,
    id: 2125
  }]

  const [tasks, setTasks] = useState(testList)

  return (
    <>
    <div>Dashboard with members in house with tasks</div>
    {tasks.map(task => 
      <Task/>
    )}
    </>
  )
}