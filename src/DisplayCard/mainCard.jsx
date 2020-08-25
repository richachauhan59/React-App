import React from 'react'
import Button from './CardButton'

export default class Auth extends React.Component{
    constructor(props) {
        super(props);
        // this.state = {
        //   name: "",
        //   password: "",
        //   isAuth: false
        // };
    }

    array =[
        {
          "name": "Agnes",
          "dob": "10th December, 1992"
        },
       { 
          "name": "Mridul",
          "dob": "9th Jan, 1991"
        },
      {
          "name": "Pranav",
          "dob": "27th October, 1992"
        },
      ]
      HandleClick = (e)=>{
        console.log(e.target.title)
      }
    render(){
        return(
            <div>
              <Button onClick={this.handleClick} title={this.array[0].name}/>
              <Button onClick={this.handleClick} title={this.array[1].name}/>
              <Button onClick={this.handleClick} title={this.array[2].name}/>
            </div>
        )
    }
}











