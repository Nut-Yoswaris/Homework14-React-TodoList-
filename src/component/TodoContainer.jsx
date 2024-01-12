import React from 'react'
import TodoItem from './TodoItem'

function TodoContainer(props) {
  const {todos , handleDelete , handleEdit} = props
  //  console.log(handleDelete , handleEdit)
  return (
    <div className='todo-container'> 
      { todos.map( el=> (
      <TodoItem key={el.id} job={el} handleDelete={handleDelete} handleEdit={handleEdit}/>
    ))   
    }
    </div>
  )
}
export default TodoContainer