import React from 'react'

export default function Button(props){
    return(
        <div>
            <button onClick={props.onClick} className={props.className}>{props.label}</button>
        </div>
    )
}