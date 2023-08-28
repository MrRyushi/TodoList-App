import './App.css'
import TodoAddBtn from './components/TodoAddBtn'
import TodoContainer from './components/TodoContainer'
import TodoTitle from './components/TodoTitle'
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todos: []
    }

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  
  handleAddTodo(){
    const newTodos = [...this.state.todos, {}];

    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className='mainContainer my-0 w-full'>
        <TodoTitle />
        {this.state.todos.map((todo, index) => (<TodoContainer key={index}/>))}
        <TodoAddBtn handleAddTodo={this.handleAddTodo}/>
    </div>

    )
  }
}

