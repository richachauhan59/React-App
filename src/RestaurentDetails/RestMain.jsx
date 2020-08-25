import React from 'react'
import data from './data.json'
import styles from './Rest.module.css'
import Image from './Image.jsx'
import Button from './Button'

export default class Rest extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1 style={{textAlign:"center"}} >Restaurent Deatils </h1>
                <div style={{marginLeft:"45%"}}>
                
                <p>Sort On the Basis Of Rating</p>
                <div style={{display:"flex", direction:"row"}}>
                    <Button className={styles.btn} label="1" />
                    <Button className={styles.btn} label="2" />
                    <Button className={styles.btn} label="3" />
                    <Button className={styles.btn} label="4" />
                    <Button className={styles.btn} label="All" />
                </div>

                <p>Payment Methods</p>
                <div style={{display:"flex", direction:"row"}}>
                    <Button className={styles.btn} label="Cash Only" />
                    <Button className={styles.btn} label="Card only" />
                    <Button className={styles.btn} label="All" />
                </div>
                </div>
                <div className={styles.mainDiv}>
                {
                data.map(x=>(<div className={styles.ChildDiv}>
                                    <Image className={styles.img} src={x.src}/>
                                    <div className={styles.detDiv}>
                                        <h1>{x.name}</h1>
                                        {x.cuisine.map(y=>(<span>{y + ", "}</span>))}
                                        <p>{"Cost for Two : " + x.costForTwo}</p>
                                        <p>{"Minimum Order : $" + x.costForTwo + " - Upto " + x.deliveryTime + " mins"}</p>
                                        <p>Accepts: {(x.payment.cash ? "Cash" :"Cards") }</p>
                                         <hr/>
                                         <Button className={styles.btn} label="Order online"/>   
                                    </div>
                                    <div className={styles.ratingDiv}>
                                        <p>reviews : {x.reviews}</p>
                                        <p>Votes: {x.votes}</p>
                                        <Button className={styles.btn} label={x.rating}/>
                                    </div> 
                            </div>))           
                }
                </div>
            </div>
        )
    }
}