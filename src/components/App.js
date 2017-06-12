import React, { PureComponent } from 'react';

import TodoList from './TodoList';
import Header from './Header';
import AddTodo from './AddTodo';

import './App.css'

export default class App extends PureComponent {

  render() {
    return (
      <div className="wrapper">
        <Header />
        <AddTodo />
      	<TodoList />
      </div>
    );
  }


}
