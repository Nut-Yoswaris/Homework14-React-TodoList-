import React, { useState } from 'react';

function TodoItem(props) {
  const { job, handleDelete, handleEdit } = props;
  const [editText, setEditText] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const hdlDeleteItem = (e) => {
    e.preventDefault();
    let deleteID = job.id;
    if (deleteID) {
      handleDelete(deleteID);
    }
  };

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    let updatedData = {id:job.id , todo: editText,
    };
    handleEdit(updatedData);
    setIsEdit(false);
  };

  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  return (
    <div className='todo-item'>
      <p>{job.todo}</p>
      {isEdit ? (
        <form className='todo-item-save' onSubmit={handleSaveClick}>
          <input
            type='text'
            value={editText}
            onChange={handleChange}
          />
          <button type='submit'>Save</button>
        </form>
      ) : (
        <div className='todo-item-button'>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={hdlDeleteItem}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;