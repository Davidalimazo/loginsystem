import React, {useState, useEffect} from 'react';
import './Todo.css';
function Todo() {
    //Javascript Here
    const [taskName, setTaskName]=useState('');
    const [date, setDate]=useState('');
    const [description, setDescription]=useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(taskName === '' && date === '' && description === ''){
            console.log('Please Fill appropriate fields')
           
        }else{
            fetch('http://localhost:3030/add', {method:'POST', headers:{'content-Type':'Application/json'}, body:JSON.stringify({taskName, date, description})}).then(res=>console.log('success')).catch(err=>console.log(err.message));
        }
    }
    return (
        <div className='container my-todo-con'>
            <center><h2>Add Task</h2></center>
            <div className="form-con">
            <form className='form form-group' onSubmit={handleSubmit}>
                <div className="input-group">
                
                <input type="text" className="form-control" placeholder='Tast Name' onChange={(e)=>setTaskName(e.target.value)} />
                </div>
                <div className="input-group">
                <input type="date" className="form-control" placeholder='Date' onChange={(e)=>setDate(e.target.value)}/>
                </div>
                <div className="input-group">
                
                <textarea placeholder='Description' className="form-control" rows={4} cols={5} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div className="input-group">
                
                <input type="submit" className="btn btn-primary" placeholder='Tast Name' />
                </div>
            </form>
            </div>
        </div>
    )
}

export default Todo
