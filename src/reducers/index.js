import { combineReducers } from 'redux';
import { CREATE_TODO, TOGGLE_TODO } from '../actions/index'

const initialState = {todos : [
  {task : 'task 1',isCompleted: true},
  {task : 'task 2',isCompleted: false},
  {task : 'task 3',isCompleted: false}
]};

const TodoList = (state = initialState , action) => {
	switch(action.type){
		case CREATE_TODO :
			return { ...state , todos :[...state.todos ,{task : action.payload , isCompleted : false }]}
		case TOGGLE_TODO :
			return { ...state , todos :[ ...state.todos, state.todos.map( todo => todoItem(todo,action) ) ]};
		// case TOGGLE_TODO :
		// 	return { ...state , 
		// 			todos :[ ...state.todos , state.todos.find((todo) => {
		// 				if(todo.task === action.payload){
		// 					todo.isCompleted = !todo.isCompleted;
		// 				}
		// 			})
		// 		]};
		default:
			return state;
	}
}

const todoItem = (state = [] , action ) => {
	switch(action.type){
		case TOGGLE_TODO :
		// console.log("STATE"+JSON.stringify(state));
		// console.log("ACTION"+JSON.stringify(action));
		 if (state.task !== action.payload) {
	        return state
	      }

	      return Object.assign({}, state, {
	        isCompleted: !state.isCompleted
	      })
		default:
			return state;
	}
}

const RootReducer = combineReducers({
  TodoList,
  todoItem
})

export default RootReducer;