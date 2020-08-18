import React from 'react'
import styles from './profile.module.css'
import Image from './image'
import Button from './button'




export default class Profile extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        const {name, location, description, skills, src} = this.props.data
        return(
            <div>
               <div className={styles.main}>
               <Button title="Pro" className={styles.btn_pro} />
                    <Image src={src} className={styles.ClassImg}/>
                
                    <h2>{name}</h2>
                    <h3>{location}</h3>
                    <p>{description}</p>
                    <div className={styles.btn}>
                    <Button title="Message" className={styles.btn_msg} />
                    <Button title="Following" className={styles.btn_foll} />
                    </div>
                    <h3>SKILLS</h3>
                    <div className={styles.skillsDiv}>
                    {
                        skills.map(item=>(
                            <Button title={item} className={styles.skills} />
                        ))
                    }
                    </div>
               </div>
            </div>
        )
    }
}