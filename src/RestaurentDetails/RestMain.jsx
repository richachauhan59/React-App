import React from 'react'
import data from './data.json'
import styles from './Rest.module.css'
import Image from './Image.jsx'
import Button from './Button'

export default class Rest extends React.Component{
        constructor(props) {
        super(props);
        this.state = {
        filterRating: 0,
        paymentMethod: "All",
        sortMethod: null
        };
    }

    HandleRating = (key) =>{
       this.setState({
           filterRating:key
       })
    } 

    HandlePayment = (key) =>{
        this.setState({
            paymentMethod: key
        })
    }
    
    // Sorting = (key) =>{
    //     this.setState({
    //         sortMethod: key
    //     })
    // }

    render(){
        return(
            <div>
                <h1 style={{textAlign:"center"}} >Restaurent Deatils </h1>
                <div style={{marginLeft:"45%"}}>
                
                <p>Sort On the Basis Of Rating</p>
                <div style={{display:"flex", direction:"row"}}>

                    <button onClick={() => this.Sorting("asc")} className={styles.btn }>Ascending Order</button>
                    <button onClick={() => this.Sorting("dsc")} className={styles.btn } > Descending Order</button>
                {
                    ["1","2", '3',"4", "All"].map((a, index) =>{
                        return(
                            <button key={index} onClick={() => this.HandleRating(a)} className={styles.btn} >{a}</button>
                        )
                    })
                }
                </div>

                <p>Payment Methods</p>
                <div style={{display:"flex", direction:"row"}}>
                {
                    ["cards","cash", "All"].map((a, index) =>{
                        return(
                            <button key={index} onClick={() => this.HandlePayment(a)} className={styles.btn} >{a}</button>
                        )
                    })
                }
                   
                </div>
                </div>
                <div className={styles.mainDiv}>
                {
                data
                // .sort((a,b) =>{
                //     if(this.state.sortMethod == "asc"){
                //        return Math.abs(a.rating - b.rating)
                //     }
                // })
                .filter(elem => {
                    if(elem.payment.cards ==( this.state.paymentMethod == "cards")){
                        
                        return true
                    }
                    if(elem.payment.cash == (this.state.paymentMethod == "cash")){
                        
                        return true
                    }
                    if(this.state.paymentMethod == "All"){
                        return true
                    }
                })
                .filter(elem =>{
                    if(this.state.filterRating == "All"){
                        return true
                    }
                    if(  elem.rating >= this.state.filterRating){
                        return true
                    }
                   
                })
                 .map(x=>(<div className={styles.ChildDiv}>
                                    <Image className={styles.img} src={x.src}/>
                                    <div className={styles.detDiv}>
                                        <h1>{x.name}</h1>
                                        {x.cuisine.map((y, i)=>(<span key={i}>{y + ", "}</span>))}
                                        <p>{"Cost for Two : " + x.costForTwo}</p>
                                        <p>{"Minimum Order : $" + x.costForTwo + " - Upto " + x.deliveryTime + " mins"}</p>
                                        <p>Accepts: {(x.payment.cash ? "Cash" :"Cards" ) }</p>
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





