let nextTaskId = 1;

export const addTask = (taskContent) => ({
  type: 'ADD_TASK',
  payload: {
    id: nextTaskId++,
    content: taskContent
  }
});

export const removeTask = (taskId) => ({
  type: 'REMOVE_TASK',
  payload: {
    id: taskId
  }
});