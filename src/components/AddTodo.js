import React, { PureComponent } from 'react';
import { onSubmitCall } from '../actions/index'
import { connect } from 'react-redux';

class AddTodo extends PureComponent{

	render(){
		
		return(
			<form onSubmit={this.onFormSubmit.bind(this)}>
				<input type="text" placeholder="Add new todo" ref="createtodo" />
				<button type="submit">Add</button>
			</form>
		);
	}

	onFormSubmit(event){
		event.preventDefault();
		this.props.onSubmitCall(this.refs.createtodo.value);
		this.refs.createtodo.value = '';
	}

}

// export default AddTodo;

const selected = (state) => {
	return { todos : state.TodoList.todos };
}
export default connect(selected,{onSubmitCall})(AddTodo);