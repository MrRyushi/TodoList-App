import React, { Component } from 'react'

export default class TodoContainer extends Component {
  render() {
    return (
      <div className="todoContainer">
        <input type='text'
               className='font-sans
                          text-4xl
                          text-orange-100
                          text-left
                          ms-2
                          bg-inherit
                          outline-none
                          mt-3.5
                          w-full'
               placeholder='My Todo'></input>
        <button className='btn-toggle'></button>

      </div>
    )
  }
}
