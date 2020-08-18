import React from 'react'


export default class ProfileImg extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <img src={this.props.src} className={this.props.className} alt="Image"></img>
            </div>
        )
    }
}