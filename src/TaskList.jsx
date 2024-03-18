import { useState } from 'react';

export default function TaskList({tasks, onChangeTask, onDeleteTask}) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({task, onChange, onDelete}) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className="form-control"
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button className="btn btn-success" onClick={() => setIsEditing(false)}> Save </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {" "+task.text}
        <button className="btn btn-primary" onClick={() => setIsEditing(true)}> Edit </button>
      </>
    );
  }
  return (
    <label>
      <input
        className="form-check-input"
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
        style={{ width: '30px',height: '30px' }}
      />
      {taskContent}
      <button className="btn btn-danger" onClick={() => onDelete(task.id)}> Delete </button>
    </label>
  );
}
