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
  return <div>Task</div>;
}
