import React from 'react'
// import './styles.module.css'

export default class Table extends React.Component{
    constructor(props){
        super(props)

    }

    // HandleDelete = (key) => {
    //     var list = this.props.items
    //     const delItems = list.filter(item => item.key !==key  )

    //     this.props.items =  delItems
    // }

    render(){
        const items = this.props.items
        console.log(this.props.state.sort)
        var count = 0
        return(
            <div>
                <table style={{border:"2px solid black", borderCollapse:"collapse"}}>
                    <tr>
                        <th>S.no.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Marital Status</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Address</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
   
                    {items.filter(elem => {
                        if(this.props.state.dept=== "all"){
                            return elem
                        }
                        if(this.props.state.dept !== "all" ){
                            return elem.department === this.props.state.dept
                        }
                    }).sort((a,b) => {
                        if(this.props.state.sort === "asc"){
                            return a.salary - b.salary
                        }
                        if(this.props.state.sort === "dsc"){
                            return b.salary - a.salary
                        }
                        if(this.props.state.sort === ""){
                            return 0
                        }
                    })
                    .map(item => {
                        return(
                            <tr>
                                <td>{count++}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.marital ? "Married" : "Not Married"}</td>
                                <td>{item.department}</td>
                                <td>{item.salary}</td>
                                <td>{item.address}</td>
                                <td><button onClick={ () => this.props.HandleDelete(item)} >Delete</button></td>
                                <td><button onClick={ () => this.props.HandleEdit(item)} >Edit</button></td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}
