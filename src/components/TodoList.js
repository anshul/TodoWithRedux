import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import TodoListItem from './TodoListItem';

class TodoList extends PureComponent{

	render(){
		// console.log(JSON.stringify(this.props.todos));
		const listItems = this.props.todos.map( (todo,index) => <TodoListItem key={index} todo={todo} /> );

		return(
			<ul>
				 {listItems}
			</ul>
		);
	}

}

// export default TodoList;


const selected = (state) => {
	return { todos : state.TodoList.todos };
}
export default connect(selected)(TodoList);