import React from 'react'
import styles from './styles.module.css'
import Table from './Table.jsx'


export default class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name :"",
            age :"",
            marital : false,
            role:"Full Stack Developer",
            gender:"",
            items:[]
        }
    }
        // full name
        // age
        // marital status ( use checkbox )
        // gender ( use radio button ) ( M / F / Do not prefer to reveal )
        // role applying for: ( use select tag ) ( Full stack developer / Android developer / Frontend developer )
        
      HandleSubmit= (e)=>{
       e.preventDefault();
       const {name, age, marital, role, gender, items} = this.state

       const data = {
           name:name,
           age:age,
           marital : marital,
           role:role,
           gender:gender,

       }

    //    items.push({
    //      name: this.state.name,
    //      age: this.state.age,
    //      marital: this.state.marital,
    //      role: this.state.role,
    //      gender:this.state.gender
    //    });
   
       this.setState({
         items: [...items, data]
       });
     };
   
     onValueChange = (e) => {
         const {name, value, checked, type} = e.target;
        
         let val = type === "checkbox" ? checked : value

         this.setState({
             [name]: value
         })
     }
    

    render(){
        return(
            <div>
             <form onSubmit={this.HandleSubmit}>

                 <div>Name: {' '}
                 <input 
                 name="name"
                 type="text"
                 value={this.state.name}
                 onChange={this.onValueChange}
                />
                 </div>
                 
                 <div>
                 Age: {' '}
                 <input 
                 name="age"
                 value={this.state.age}
                 onChange={this.onValueChange}
                 />
                 </div>

                 <div>
                 Marital Status: {' '}
                 <input 
                 name="marital"
                 type="checkbox" 
                 value={this.state.marital}
                 onChange={this.onValueChange}  
                 />
                </div>  
            
                <div className="radio">
                   <div> Select the Gender: {" "}</div>
                        <label>
                            <input
                            name="gender"
                            type="radio"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.onValueChange}
                            />
                            Male
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input
                            name="gender"
                            type="radio"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.onValueChange}
                            />
                            Female
                        </label>
                        </div>

                 <div>
                 Role: {' '}
                 <select 
                 name="role"
                 onChange={this.onValueChange}
                 >
                     {
                     ["Full stack developer", "Android developer", "Frontend developer"].map((a)=> (
                        <option >{a}</option>
                     ))
                    }
                 </select>
                 </div>
                 <div>
                 <input type="submit" value="submit"/>
                 </div>
             </form>

             <Table items= {this.state.items }/>

            </div>
        )
    }
}











