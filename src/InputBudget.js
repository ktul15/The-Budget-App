import React, { Component } from 'react'

class InputBudget extends Component{
    constructor(props){
        super(props);
        this.state={
            input: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e){
        this.setState({
            input: Number(e.target.value)
        })
    }
    handleClick(e){
        this.props.addBudget(this.state.input)
    }
    render(){
        return(
            <div className='InputBudget'>
                Please enter your Budget
                <input type='text' onChange={this.handleChange} />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

export default InputBudget