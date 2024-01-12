import React from 'react'

function DashBoard(props) {
  const {task} = props
  return (
    <>
     <div className='dash-board-name'>
      <h1>Yoswaris Empam</h1>
    </div>
    <div className='dash-board'>
      <h2>{new Date().toDateString()}</h2>
      <p className='text-data'>{task} Tasks</p>
    </div>
    </>
  )
}

export default DashBoard