import React, { Component } from 'react'

export default class TodoAddBtn extends Component {
  render() {
    return (
      <div>
        <button className="bg-orange-300
                           text-black
                           mt-5
                           hover:bg-orange-100"
                onClick={this.props.handleAddTodo}>+</button>
      </div>
    )
  }
}
