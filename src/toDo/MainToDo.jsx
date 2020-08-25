import React from 'react'
import Input from '../React Events/Input.jsx'
// import Login from './login'

export default class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            current:{
                text:"",
                key:""
            }
            // name: "",
            // tasks: [ ]
        }
      }

      HandleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          current:{
              text: e.target.value,
              key : Date.now()
          }
        });
      };

      Add = (e) => {
        //   e.preventDefault()
         const newItem = this.state.current;
        if(newItem.text !== ''){
            const newitems = [...this.state.items, newItem]
            this.setState({
                items: newitems,
                current:{
                    text:"",
                    key:""
                }
            })
        }
      }
    
    render(){
        return(
            <div>
                
               Add Items
                <Input name="name" value={this.state.name} placeholder="Name" onChange={this.HandleChange}/>
                <button onClick={this.Add}>ADD</button>
                <div style={{marginTop: "5%" , height:"auto", width:"500px", background:"grey",}}>
        {
            (this.state.items.map(a=>{
                return(
               <div>
                   <p>{a.text}</p>
               </div>
                )
            }))
        }
                </div>
                {/* <Login onClick={this.HandleSubmit} isAuth={this.state.isAuth}/> */}
            </div>
        )
    }
}