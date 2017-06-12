import React, { PureComponent } from 'react';
import { onToggle } from '../actions/index'
import { connect } from 'react-redux';

class TodoListItem extends PureComponent{

	constructor(props){
		super(props);
	}

	render(){
		
		// if(  this.props.todo === null || this.props.todo === undefined ){
		// 	return false;
		// }
		const { isCompleted, task } = this.props.todo;
		const textClass = (isCompleted ? 'greenTask list-item' : 'redTask list-item');

		return(
			<li className={textClass}>
				<span onClick={() => this.props.onToggle(task)}>{task}</span>
				<button>Delete task </button>
			</li>
		);
	}

}

// export default TodoListItem;


const selected = (state) => {
	return { todos : state.TodoList.todos };
}
export default connect(selected,{onToggle})(TodoListItem);