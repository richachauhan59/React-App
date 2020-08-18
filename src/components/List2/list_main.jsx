import React from 'react'
import List from './list'




export default class ListMain extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
       
        return(
            <div>
              <h1> Mobile Operating Systems</h1>
              <List title="Windows Phone"/>
              <List title="Android"/>
              <List title="Black berry"/>
              <List title= "iPhone" />

              <h1> Mobile Manufacturers</h1>
              <List title="Samsung"/>
              <List title="HTC"/>
              <List title="Micromax"/>
              <List title= "Apple" />
            </div>
        )
    }
}