import React from 'react'

export default class Login extends React.Component{
    render(){
        const {isAuth} = this.props

        if(!isAuth){
            return(<div><button onClick={this.props.onClick}>Sign In</button></div>)
        }
        else{
            return(<div><button onClick={this.props.onClick}>Sign Out</button></div>)
        }
    }
}