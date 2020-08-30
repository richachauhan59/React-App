import React from 'react'

export default class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            second: 0,
            show: false,
            TimeOut: ""
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.internalId = setInterval(()=>{
            if(this.state.second < 1){
               this.setState({
                    TimeOut: "Time is Over"
               })
            }
            else{
                this.setState({
                    second: this.state.second - 1
                })
            }
        },1000)
    }

    Stop = ()=>{    
        console.log(this.state.second)
        // if(this.state.second > 0){
        //     this.setState({
        //         second: 0,
        //         show: false
        //     })
        //     clearInterval(this.internalId)
        // }
        if(this.state.show == true){
            this.setState({
                second: 0,
                show: false
            })
        }
        else{
            this.setState({
                show: true
            })
        }

        console.log()
        console.log(this.internalId)
        
    }

    // componentWillMount(){
    //     console.log('unmount')
    //     clearInterval(this.internalId)
    // }

    render(){
        return(
            <div>
            <div style={{display:"flex", direction:"row"}}>
                {this.state.show ? <div></div> :
                <form onSubmit={this.handleSubmit}>
                    Enter Seconds : <input type="text" name="second" value={this.state.second} onChange={this.handleChange}></input>
                    <button type="submit"> Submit</button>
                </form>
                }
                <button style={{ margin: "1%",
                width:"200px",
                marginTop:"0px",
                    padding: "1%",
                    fontSize: "larger",
                    height:"50px"
                    }}
                    onClick={this.Stop}>Show/Hide</button> 
            </div>
            {this.state.show ? <div></div> :  <h1 style={{color:"red"}}>{this.state.TimeOut}</h1>}
            </div>
        )
    }
}