import React from 'react';
import './Todo.css';
class ClassTodo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            taskName:'',
            date:'',
            description:''
        }
        this.changeTask = this.changeTask.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
    }
    
    handleSubmit =(e)=>{
        e.preventDefault();
        if(this.state.taskName === '' && this.state.date === '' && this.state.description === ''){
            console.log('Please Fill appropriate fields')
           
        }else{
            fetch('http://localhost:3030/add', {method:'POST', headers:{'content-Type':'Application/json'}, body:JSON.stringify({taskName:this.state.taskName, date:this.state.date, description:this.state.description})}).then(res=>console.log('success')).catch(err=>console.log(err.message));
        }
    }

    changeTask=(e)=>{
        this.setState({
            taskName:e.target.value
        })
    }
    changeDate=(e)=>{
        this.setState({
            date:e.target.value
        })
    }
    changeDescription=(e)=>{
        this.setState({
            description:e.target.value
        })
    }
    render(){
        return(
            <div className='container my-todo-con'>
            <center><h2>Add Task</h2></center>
            <div className="form-con">
            <form className='form form-group' onSubmit={this.handleSubmit}>
                <div className="input-group">
                
                <input type="text" className="form-control" placeholder='Tast Name' onChange={(e)=>this.changeTask(e)} />
                </div>
                <div className="input-group">
                <input type="date" className="form-control" placeholder='Date' onChange={(e)=>this.changeDate(e)}/>
                </div>
                <div className="input-group">
                
                <textarea placeholder='Description' className="form-control" rows={4} cols={5} onChange={(e)=>this.changeDescription(e)}/>
                </div>
                <div className="input-group">
                
                <input type="submit" className="btn btn-primary" placeholder='Tast Name' />
                </div>
            </form>
            </div>
        </div>
        )
    }
}
export default ClassTodo;