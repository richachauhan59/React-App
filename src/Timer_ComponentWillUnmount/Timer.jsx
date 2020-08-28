import React from 'react'

export default class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            time: 0
        }
    }

    HandleChange = e =>{
        this.setState({
            time: e.target.value
        })
        console.log(this.state.time)
    }



    componentWillMount = ()=>{

    }


    getData = () => {
        this.setState({
        isLoading: true
        });
        setTimeout(() => {
        this.setState({
            count: this.state.count + 1,
            data: "OUTPUT",
            isLoading: false
        });
        }, 2000);
    };


    // Create a component Time that has an input box
    // user can input seconds in the input box
    // use setInterval to reduce the seconds to 0
    // on 0 it show a message to the user that the countdown is over
    // Create a button SHOW/HIDE on the parent component that will conditionally render the Time component
    // it will toggle
    // If you hide it, then make sure the setInterval is cleared
    

    render(){
        return(
            <div>
                <p>Enter the time here</p>
                <input
                name="time"
                type="number"
                value={this.state.time} 
                placeholder="sec"
                onChange={this.HandleChange}/>
            </div>
        )
    }

} 