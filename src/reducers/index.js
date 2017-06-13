import { combineReducers } from 'redux';
import { CREATE_TODO, TOGGLE_TODO } from '../actions/index'

const initialState = [
  {id: 1, task : 'task 1',isCompleted: true},
  {id: 2, task : 'task 2',isCompleted: false},
  {id: 3, task : 'task 3',isCompleted: false}
];

const todoItem = (state = {}, action ) => {
  switch(action.type){
    case CREATE_TODO :
      return { ...state, id: (new Date() / 1), task : action.payload , isCompleted : false };
    case TOGGLE_TODO :
     if (state.id !== action.payload) {
          return state
        };
        return { ...state, isCompleted: !state.isCompleted };
    default:
      return state;
  }
}

const TodoList = (state = initialState , action) => {
  switch(action.type){
    case CREATE_TODO :
      return [...state,  todoItem(undefined, action)];
    case TOGGLE_TODO :
      return state.map(todo => todoItem(todo, action));
      // return { ...state , todos: [ ...state.todos, state.todos.map( todo => todoItem(todo,action) ) ]};
    default:
      return state;
  }
}


const RootReducer = combineReducers({
  TodoList,
})

export default RootReducer;