import React, { Component } from 'react'
import axios from 'axios'

//Toptal coding test question 3

/*
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      input:'',
      list:[{'name':'england', 'capital':'london'}, {'name':'france', 'capital':'paris'}, {'name':'nigeria', 'capital':'lagos'}, {'name':'ghana', 'capital':'accra'}, {'name':'kenya', 'capital':'addis ababa'}, {'name':'usa', 'capital':'new york'}]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput=(value)=>{
    if(!value){
      this.setState({
        input:[]
      })
     }else{
  
   let matches = this.state.list.filter(item=>{
     let regx = new RegExp(`${value}`, "gi");
     return item.name.match(regx) || item.capital.match(regx)
   });
   this.setState({
     input:matches
   })
  }
  }

  handleSubmit=(e)=>{
    e.preventDefault();

  }

  render() {
    return (
       <div className="App">
       <div className="autocomplete">
       <form action="" className='form'>
       <div className="input-group">
       <input type="text" className="in-f" onChange={(e)=>this.handleInput(e.target.value)}/>
       <button className='btn btn-primary' type='submit'><i className="fa fa-search"></i></button>
       </div>
       <div className="list-item">
        <ul>
        {this.state.input && this.state.input.map((item, i)=>(
          <li key={i}> {item.name ? item.name : 'not found'} : {item.capital  ? item.capital : '...'}</li>
        ))}
        </ul>
       </div>
       <style>
       {
         `.App{
           width:100%;
         }
         .btn{
          height:39px;
         }
         .in-f:focus, .btn:focus{
          outline:none;
         }
         .in-f{
           border-radius: 5px 0 0 5px;
           height:39px;
         }
         .input-group{
           margin-top:10px;
           display:flex;
           align-items:center;
           justify-content:center;
         }
         .autocomplete{
           margin-right: auto;
         }
         `
       }
       </style>
       </form>
       </div>
       </div>
    );
  }
}

export default App
*/

//Toptal coding test question 1
/*
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      count:42
    }

    this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)
  }

  incrementCounter=()=>{
    this.setState({
      count:this.state.count + 1
    })
  }

  decrementCounter=()=>{
    this.setState({
      count:this.state.count - 1
    })
  }

  render(){
    return(
      <div className="App">
        <div className="count">{this.state.count}</div>
        <div className="buttons">
        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
        <button className="btn btn-danger" onClick={this.decrementCounter}>Decrement</button>
        </div>
      </div>
    )
  }
}

export default App
*/

//Toptal coding test Question 2

/*
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      item:'',
      list:[],
      count:0
    }
    this.addItem = this.addItem.bind(this);
    this.changeItem = this.changeItem.bind(this);
    this.markItem = this.markItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }
  changeItem=(key, value)=>{
    this.setState({
      [key]: value
    })
  }

  addItem=()=>{
    const list = [...this.state.list];
    const item ={
      id: 1 + Math.random(),
      value: this.state.item,
      isDone: false,
    }

    list.push(item);

    this.setState({
      item: '',
      list:list
    })
  }

markItem=(id)=>{
  const list = [...this.state.list]
  this.setState(list.map(task=>{
    if(task.id == id){
      if(!task.isDone){
        task.isDone = !task.isDone
        this.state.count = this.state.count - 1
      }else{
        task.isDone = !task.isDone
        this.state.count = this.state.count + 1
      }
    }
  }))
}

deleteItem=(id)=>{
  const list = [...this.state.list];
  const updated = list.filter(task=> task.id != id)
  this.setState({
    list:updated
  })
}

editItem=(id)=>{
  const list = [...this.state.list];
  this.setState(list.map(task=>{
    if(task.id == id){
      task.value = this.state.item;
      this.state.item = ''
    }
  }))
}
  render(){
    return(
      <div className="App">
        <div className="to-do-app">
        <div className="count">
       <span className='left-t'>{'Total Task: ' + this.state.list.length }</span> 
       <span>{'Task Remaining: ' + (this.state.list.length - Math.abs(this.state.count)) }</span> 
      </div>
        <div className="input-group">
          <input type="text" value={this.state.item} onChange={(e)=>this.changeItem('item', e.target.value)}/>
          <button className="btn btn-primary" onClick={this.addItem}>Add Item</button>
        </div>
        <div className="list-con">
          <ul>
          {this.state.list && this.state.list.map(task=>(
            <li className={task.isDone ? 'mark task box':'task box'} key={task.id}>
              {task.value.slice(0, 20)}
              <div className="btns">
              <button className="avt" onClick={()=>this.markItem(task.id)}><i className="fa fa-times"></i></button>
              <button className="avt" onClick={()=>this.editItem(task.id)}><i className="fa fa-pen"></i></button>
              <button className="avt" onClick={()=>this.deleteItem(task.id)}><i className="fa fa-trash"></i></button>
              </div>
            </li>
          ))}
          </ul>
          </div>    
        <style>
        {
          `.App{
            width:100%;
            display:flex;
          }
          .count{
            margin-bottom:10px;
          }
          .to-do-app{
            margin-left:auto;
            margin-right:auto;
            border: 2px solid black;
            padding:5px 10px;
            margin-top:15px;
            border-radius: 5px;
            box-shadow: 1px 2px 1px 2px rgba(20%, 30%, 20%, 0.2);
          }
          
          .list-con{
            width:100%;
            margin-top: 20px;
          }
          ul{
            list-style-type:none;
            display:flex;
            flex-direction:column;
          }
          .box{
            background:lightgrey;
            margin-left:-12%;
            margin-right:auto;
            width:100%;
            padding: 10px;
            display:flex;
          }
          .task:nth-child(2n + 1){
            background:#fff;
          }
          .btns{
            margin-left:auto;
          }
          .avt{
            margin-right:10px;
          }
          .avt:last-child{
            margin-right:0;
          }
          .mark{
            text-decoration:line-through;
          }
          .count{
            display:flex;
          }
          .left-t{
            margin-right:auto;
          }
          `
        }
        </style>
        </div> 
      </div>
    )
  }
}

export default App

*/

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       input:'',
//       list:[]
//     }
//     this.changeInput = this.changeInput.bind(this)
//     this.submitInput = this.submitInput.bind(this)
//   }
// componentDidMount(){
//   axios.get('http://localhost:4000/cities').then(res=>this.setState({
//     list:res.data
//   })).catch(err => console.log(err))
// }

// changeInput=(value)=>{
//   if(!value){
//     this.setState({
//       input:[]
//     })
//   }else{
//     let matches = this.state.list.filter(input=>{
//       let rgx = new RegExp(`${value}`, "gi");
//       return input.country.match(rgx) || input.capital.match(rgx)
//     })

//     this.setState({
//       input:matches
//     })
//   }
// }

// submitInput=(event)=>{
//   event.preventDefault()
// }
//   render(){
//     return(
//       <div className="App">
//         <div className="autocomplete">
//           <div className="input-group">
//             <input type="text" onChange={(e)=>this.changeInput(e.target.value)}/>
//             <button className="btn btn-primary" onClick={(e)=>this.submitInput(e)}><i className="fa fa-search"></i></button>
//           </div>
//         </div>
//         <div className="list-item">
//           {this.state.input && this.state.input.map((val, i)=>(
//             <li key={i}>{val.country} : {val.capital} </li>
//           ))}
//         </div>
//       <style>
//         {
//           `.App{
//             width:100%;
//             display:flex;
//             flex-direction:column;
//           }
//           .list-item{
//             margin-top: 10px;
//             margin-left:auto;
//             margin-right:auto;
//           }
//           .autocomplete{
//             margin-left:auto;
//             margin-right:auto;
//             padding:5px 10px;
//             margin-top:15px;
//             border-radius: 5px;
//             box-shadow: 1px 2px 1px 2px rgba(20%, 30%, 20%, 0.2);
//           }
//         `
//         }
//         </style>
//       </div>
//     )
//   }
// }

// export default App

import { Routes, Route} from 'react-router-dom'
import Home from './component2/Home'

import Data from './component2/Data'
import Login from './component2/Login'
export default function App() {
  return (
    <div>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='data' element={<Data/>} />
      <Route path='login' element={<Login/>} />
    </Routes>

    </div>
  )
}
