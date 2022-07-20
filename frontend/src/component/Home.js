import React, {useContext ,useState, useReducer} from 'react';

let initialState=0;
const reducer=(state, action)=>{
  switch (action.type) {
    case 'increment':
      return state + 1;
      break;
    case 'decrement':
      return state - 1;
      case 'reset':
      return initialState;
    default:
      return state
      break;
  }
}

function Home() {
  const [state, dispatch]=useReducer(reducer, initialState);
  
  return (
  
    <div className="App">
    {state}
    <i className='fas fas-facebook'></i>
    <form>
      <input type='button' value='Increment' className='btn btn-success' onClick={(e)=>{dispatch({type:'increment'})}}/>
      <input type='button' value='Decrement' className='btn btn-warning' onClick={(e)=>{dispatch({type:'decrement'})}}/>
      <input type='button' value='Reset' className='btn btn-danger' onClick={(e)=>{dispatch({type:'reset'})}}/>
    </form>
    </div>
  );
}

export default Home;
