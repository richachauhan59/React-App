import React, { Fragment } from 'react'
import Button from './buttonOfReact'
import styles from './ReactMenu.module.css'




export default class MainButton extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
       
        return(
            <div  >
               <div className={styles.cont}>
               <Button title="JOIN US" className={styles.btn1}/>
               <Button title="SETTINGS" className={styles.btn2}/>
               </div>
               <div className={styles.cont}>
               <Button title="LOGIN" className={styles.btn3} />
               <Button title="CONTACT US" className={styles.btn4}/>
               </div>
               <div className={styles.cont}>
               <Button title="SEARCH" className={styles.btn5}/>
               <Button title="HELP" className={styles.btn6}/>
               </div>
               <div className={styles.cont}>
               <Button title="HOME" className={styles.btn7}/>
               <Button title="DOWNLOAD" className={styles.btn8}/>
               </div>
                    
            </div>
        )
    }
}