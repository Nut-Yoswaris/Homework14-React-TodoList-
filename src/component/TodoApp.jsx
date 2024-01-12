import { useEffect, useState } from "react"
import axios from 'axios'
import DashBoard from "./DashBoard"
import FormAddTodo from "./FormAddTodo"
import TodoContainer from "./TodoContainer"

function TodoApp() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [trigger, setTrigger] = useState(false)
  const apiUrl = "http://localhost:8000/todos"

  useEffect( ()=>{
    setIsLoading(true)
    axios.get(apiUrl).then( res=>{
      setData(res.data)
      setIsLoading(false)
    })
  }, [trigger])

  const hdlAdd = (newJob) => {
    axios.post(apiUrl,newJob)
    .then(res=>{
      // console.log(res)
      // alert("เพิ่มข้อมูลเสร็จสิ้นแล้ว")
      setTrigger(prv=>!prv)
    })
    .catch(error => {
      console.error("Error Add data", error);
    });
  }

  const handleDelete = (deleteID) => {
    // console.log("Deleting ID:", deleteID);
    const result = window.confirm("คุณต้องการลบรายการนี้หรือไม่?");
    if(result) {
    axios.delete(`${apiUrl}/${deleteID}`)
      .then(res => {
        setTrigger(prev => !prev);
      })
      .catch(error => {
        console.error("Error deleting data", error);
      });
    }
  };

  const handleEdit = (updatedData) => {
    // console.log(updatedData);
    const { id, ...data } = updatedData;

    axios.patch(`${apiUrl}/${id}`, data)
      .then(res => {
        console.log("Data updated successfully:", res.data);
        alert("แก้ไขข้อมูลเรียบร้อยแล้ว")
        setTrigger(prev => !prev);
      })
      .catch(error => {
        console.error("Error editing data", error);
      });
  };

  if (isLoading) {
    return ( <h1>Loading...</h1> )
  }

  return (
    <div className="todo-app">
      <DashBoard task={data.length}/>
      <FormAddTodo hdlAdd={hdlAdd}/>
      <TodoContainer todos={data} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  )
}

export default TodoApp