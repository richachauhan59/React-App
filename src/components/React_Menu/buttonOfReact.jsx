import React from 'react'
// import styles from './profile.module.css'


export default class button extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div> 
               <button className={this.props.className}>{this.props.title}</button>
            </div>
        )
    }
}