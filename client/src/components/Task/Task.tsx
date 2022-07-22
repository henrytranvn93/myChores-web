import React from "react";

type Props = {};

interface TaskProps {
  isDone: boolean;
  description: string;
  type: string;
  assignee: string;
  reward: number;
  id: number;
}

export default function Task({isDone, description, type, assignee, reward, id}: TaskProps) {
  return <div style={{display: "flex", alignItems: "center", width: "400px", justifyContent: "space-around"}}>
    <input type="checkbox"/>
    <label>{description}</label>
    <p>Assignee: {assignee}</p>
    <p><strong>{reward}</strong></p>
    <p>Type: {type}</p>
    <p>Status: {isDone}</p>
    <p>ID of task: {id}</p>

  </div>;
}
