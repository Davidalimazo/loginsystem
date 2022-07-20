import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.change= this.change.bind(this);
        this.state={
            count:0
        }
    }
    change(){
        this.setState({
            count:this.state.count + 1
        })
    }
  
    render() {
     
      return (
        <div>
        {this.state.count}
        <button className="btn btn-primary" onClick={this.change}>Change</button>
        </div>
      );
    }
  }
  export default Calculator