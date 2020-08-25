import React from 'react'
// import styles from "./Rest.module.css"

export default function Image(props){
    return(
        <div>
            <img className={props.className} src={props.src}></img>
        </div>
    )
}