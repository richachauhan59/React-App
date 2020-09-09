import React from 'react'
import InputForm from './InputForm'
import Table from './TableForm'


export default class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name :"",
            age :"",
            marital : false,
            address: "",
            department : "HR",
            dept : "all" ,
            salary: "",
            sort: "",
            items:[]
        }
    }

HandleDelete = (key) =>{
this.setState({
    items:this.state.items.filter(elem => elem !== key)
})
}


HandleEdit = (key) =>{
    this.setState({
        name: key.name,
        age: key.age,
        marital: key.marital,
        address: key.address,
        department: key.department,
        salary:key.salary
    })

    this.setState({
        items:this.state.items.filter(elem => elem !== key)
    })

}

    HandleSubmit= (e)=>{
        e.preventDefault();
        const {name, age, marital, address, department, salary, items} = this.state
 
        const data = {
            name:name,
            age:age,
            marital : marital,
            address : address,
            department : department,
            salary : salary,
        }
        this.setState({
          items: [...items, data]
        });
        console.log(items)
      };

      HandleChange = (e) => {
          const {name, value, checked, type} = e.target;
         
          let val = type === "checkbox" ? checked : value

          this.setState({
              [name]: value
          })
      }


      HandleFilter = (key) =>{
       this.setState({
           dept: key
       })
      }

      HandleSort = (key) =>{
        this.setState({
            sort: key
        })
      }

    render(){
        return(
            <div>

                <button onClick={() =>this.HandleFilter("HR")}> HR</button>
                <button onClick={() =>this.HandleFilter("Manufacturing") }>Manufacturing</button>
                <button onClick={() =>this.HandleFilter("Sales") }>Sales</button>
                <button onClick={() =>this.HandleFilter("Management") }>Management</button>

                <button onClick={()=> this.HandleSort("asc")}>Asc Sorting</button>
                <button onClick={()=> this.HandleSort("dsc")}>Dsc sorting</button>
                <form onSubmit={this.HandleSubmit}>
                    Name
                    <InputForm
                    placeholder="Name"
                    onChange={this.HandleChange}
                    value={this.state.name}
                    name="name" 
                    type="text"
                   />
                   Age
                    <InputForm
                    placeholder="Age"
                    onChange={this.HandleChange}
                    value={this.state.age}
                    name="age" 
                    type="number"
                   />
                    Address  
                    <InputForm
                    placeholder="Address"
                    type="text"
                    onChange={this.HandleChange}
                    value={this.state.address}
                    name="address" 
                   />
                   <div>
                   Department
                   <select value={this.state.department} onChange={this.HandleChange} name="department">
                       <option value="HR">HR</option>
                       <option value="Manufacturing">Manufacturing</option>
                       <option value="Sales">Sales</option>
                       <option value="Development">Development</option>
                       <option value="Management">Management</option>
                   </select>
                   </div>
                   Salary
                    <InputForm
                    placeholder="Salary"
                    type="number"
                    onChange={this.HandleChange}
                    value={this.state.salary}
                    name="salary" 
                   />
                   Marital Status
                   <input type="checkbox" name="marital" value={this.state.marital} />
                    <input type="submit"/>
                </form>
                
                <Table HandleEdit={this.HandleEdit}
                 HandleDelete={this.HandleDelete} 
                 state={this.state} items={this.state.items}/>

            </div>
        )
    }
}