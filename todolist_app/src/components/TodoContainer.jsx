import React, { Component } from 'react'

export default class TodoContainer extends Component {
  render() {
    return (
      <div className="todoContainer">
        <input type='text'
               className='font-sans
                          text-orange-100
                          text-left
                          ms-2
                          bg-inherit
                          outline-none
                          mt-3.5
                          w-11/12
                          lg:text-4xl
                          sm:text-4xl'
               placeholder='My Todo'></input>
        <input type='checkbox' 
               className='checked:bg-blue-500
                          lg:w-8
                          lg:h-8
                          sm:w-3
                          sm:h-3'></input>
      </div>
    )
  }
}
