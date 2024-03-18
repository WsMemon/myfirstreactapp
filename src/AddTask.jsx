import { useState } from 'react';

export default function AddTask({onAddTask}) {
  const [text, setText] = useState('');
  return (
    <>
    <div className="row">
        <div className="col-md-6 col-10 mx-auto">
                <input
                className='form-control'
                placeholder="Add task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
        <div className="col-md-6 col-10 mx-auto">
            <button
            className="btn btn-primary"
            onClick={() => {
            setText('');
            onAddTask(text);
            }}>
            Add
        </button>
        </div>
    </div>
    </>
  );
}
