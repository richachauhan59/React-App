import React from 'react'
import './styles.module.css'

export default class Table extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        const items = this.props.items
        return(
            <div>
                <table style={{border:"2px solid black", borderCollapse:"collapse"}}>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Marital Status</th>
                        <th>Gender</th>
                        <th>Role Applying for</th>
                    </tr>
    
                    {items.map(item => {
                        return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.marital ? "Married" : "Not Married"}</td>
                                <td>{item.gender}</td>
                                <td>{item.role}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}




