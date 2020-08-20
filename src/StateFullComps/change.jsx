import React from 'react'

export default class State extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: "MASAI",
            value: 0
        }
    }
    handleClick = ()=>{
        this.setState({
            name: this.state.name + " "  +"SCHOOL"
        })
    }
    handleAdd = () =>{
        this.setState({
            value: this.state.value + 1
        })
    }
    handleDec = () =>{
        this.setState({
            value: this.state.value - 1
        })
    }

    render(){
        return(
            <>
            <h1>{this.state.name}</h1>
            <button onClick={this.handleClick} >Change</button>
            <h1>{this.state.value}</h1>
            <button onClick={this.handleAdd} >ADD</button>
            <button onClick={this.handleDec} >Decrease</button>
            </>
        )
    }
}

//1
// create a class component
// create a state variable with text "MASAI"
// create a button with a label "CHANGE"
// on click of button, change the text of "MASAI" to "MASAI SCHOOL"
// the UI should be updated on click of these buttons

//2
// create a class component
// create a state variable counter with value 0
// create two buttons, ADD AND DECREASE
// on click of the buttons, increment or decrement the value of counter by 1
// the UI should be updated on click of these buttons
