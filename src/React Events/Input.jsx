import React from 'react'


export default function Input(props){
    return(
        <div>
            <input name={props.name} value={props.value} placeholder={props.placeholder} onChange={props.onChange}></input>
        </div>
    )
}