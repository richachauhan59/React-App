import React from 'react'
import axios from 'axios'


export default class API extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query: "",
            data: [],
            isLoading: false,
            error:false,
            errorMessage: ""
        }
    }
    

getData = (query) => {
    this.setState({
        isLoading:true,
        // error: false
    })
    axios.get("https://api.github.com/search/users",{
        params:{
            q: query
        }
    })
    .then(res=>this.setState({
        data: res.data.items,
        isLoading: false,
        // error:false
    }))
    // .catch(err=>{
    //     this.setState({
    //         error:true,
    //         errorMessage:error,
    //         isLoading: false
    //     })
    // })
}

componentDidMount(){
    this.getData("masai")
} 

    render(){
        const {isLoading, data, query, error} = this.state
        return(
            <div>
                 <input
                    name="name"
                    value={query}
                    placeholder="search here"
                    onChange={(e) =>this.setState({query: e.target.value})}
                />
                 <button onClick={() => this.getData(query)}>search</button>
                 <div>
                     {
                        data.map((item) => (
                            <div style={{display:"flex", direction:"row", width:"80%", border:"2px solid black"}}>
                            <img style={{width:"80px", borderRadius:"50%"}} src={item.avatar_url}></img>
                            <div>{item.login}</div>
                            </div>
                        ))
                     }
                 </div>
          


            </div>
        )
    }
}