import React from 'react'


export default function Name(props){
    return (
        <div>
            <h3>{props.fname + " " + props.lname}</h3>
        </div>
    )
}
