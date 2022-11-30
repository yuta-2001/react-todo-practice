import React from 'react'
import Item from './Item';

const TodoList = ({ todos, toggleTodo }) => {
	return todos.map((todo) => <Item key={todo.id} todo={todo} toggleTodo={toggleTodo} />);
};

export default TodoList