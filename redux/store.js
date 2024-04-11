
import { createStore } from 'redux';

const initialState = {
    tasks: []
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      case 'REMOVE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload.id)
        };
      default:
        return state;
    }
  };
  
  const store = createStore(reducer);
  
  export default store;
