export const CREATE_TODO = 'CREATE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function onSubmitCall(todo){
	return{
		type : CREATE_TODO,
		payload : todo
	}
}

export function onToggle(todo){
	return{
		type : TOGGLE_TODO,
		payload : todo
	}
}