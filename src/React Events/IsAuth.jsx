import React from 'react'
import Input from './Input.jsx'
import Login from './login'

export default class Auth extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          password: "",
          isAuth: false
        };
      }

      HandleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [e.target.name] : e.target.value
        });
      };
    
      HandleSubmit = ()=>{
          const{name, password} = this.state
          if(name === 'admin' && password === "admin"){
              this.setState({
                  isAuth: true
              })
          }
      }
    render(){
        return(
            <div>
                Name:
                <Input name="name" value={this.state.name} placeholder="Name" onChange={this.HandleChange}/>
                Password:
                <Input name="password" value={this.state.password} placeholder="Password" onChange={this.HandleChange}/>
                <Login onClick={this.HandleSubmit} isAuth={this.state.isAuth}/>
                <h1>{this.state.password}</h1>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}