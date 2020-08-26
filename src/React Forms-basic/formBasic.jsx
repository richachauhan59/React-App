import React from 'react'
import '../Forms/styles.module.css'


export default class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name :"",
            email :"",
            data:[]
        }
    }
        

    // create a form
    // accept username & email
    // on submit add into a tabular format
    // each item should have a delete button
    // on delete, remove the item from the list


      HandleSubmit= (e)=>{
       e.preventDefault();
       const {name, email, data} = this.state

       const item = {
           id:Date.now(),
           name:name,
           email: email
       }
       this.setState({
         data: [...data, item]
       });
     };
   
     onValueChange = (e) => {
         const {name, value, checked, type} = e.target;
    
         this.setState({
             [name]: value
         })
     }

     HandleDelete = (id) =>{
            const { data } = this.state;
            const newData = data.filter((item) => item.id !== id);
            this.setState({
              data: newData
            });
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
                 Email: {' '}
                 <input 
                 name="email"
                 value={this.state.email}
                 onChange={this.onValueChange}
                 />
                 </div>
                 <div>
                 <input type="submit" value="submit"/>
                 </div>
             </form>

             <table style={{border:"2px solid black", borderCollapse:"collapse"}}>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>

             {(this.state.data).map(item => {
                        return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td><button onClick={() => this.HandleDelete(item.id)}>delete</button></td>
                            </tr>
                        )
                    })}
             
             </table>

            </div>
        )
    }
}











