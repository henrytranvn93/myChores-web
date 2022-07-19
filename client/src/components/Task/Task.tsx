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
  return <div>
    <input type="checkbox"/>
    <label>{description}</label>
    <p>Assignee: {assignee}</p>
    <h3>{reward}</h3>

  </div>;
}
