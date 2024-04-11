// App.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from '../redux/todosSlice';

const App = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [newTaskContent, setNewTaskContent] = useState('');

  const handleAddTask = () => {
    if (newTaskContent.trim() !== '') {
      dispatch(addTask(newTaskContent));
      setNewTaskContent('');
    }
  };

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

  return (
    <div>
      <h1>Task List</h1>
      <div>
        <input
          type="text"
          value={newTaskContent}
          onChange={(e) => setNewTaskContent(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.content}
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
