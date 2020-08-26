import React from 'react'


export default class ReactComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [
            {
              id: "001",
              title: "Buy bread",
              status: true
            },
            {
              id: "002",
              title: "Buy Milk",
              status: false
            },
            {
              id: "003",
              title: "Laundry",
              status: false
            },
            {
              id: "004",
              title: "Fix Motor",
              status: false
            }
          ]
        };
      }
    // make a list of components with the title name
    // if status is true make the text strike through and color green
    // onClick of each item the status should be toggled
   


      handleClick = (id) => {
        const { data } = this.data
        const newData = data.map((item) =>
          item.id !== id ? item : { ...item, status: !item.status }
        );
        this.setState({
          data: newData
        });
      };

    render(){
            
         const { data }= this.state
         console.log(data)
        return(
            
            <div>
             {

                 data.map(item => {
                     const style =  item.status ? {color:"green", textDecoration: "line-through"} : {};
                     return(<div  onClick={() => this.handleClick(item.id)} key={item.id}>
                         <div style={style} >{item.title}</div>
                         </div>
                         )
                    
                         })
             }
            </div>
        )
    }
}











