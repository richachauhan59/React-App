import React from 'react'


export default class ListItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <ul>
                    <li>{this.props.title}</li>
                </ul>
            </div>
        )
    }
}