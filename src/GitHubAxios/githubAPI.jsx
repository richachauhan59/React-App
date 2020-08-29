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
            errorMessage: "",
            showMore: false,
            followers: 0,
            following:0
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
    // console.log(this.getData("masai"))
} 

HandleShowMore = (user) => {
    this.setState({
        showMore: true
    })
 axios.get(`${user.followers_url}`)
 .then(res=> this.setState({
     followers:res.data.length,
    //  showMore:false
 }))

 const following = user.following_url.split('{/other_user}').join('')
 axios.get(following).then(res=>this.setState({
     following:res.data.length
 }))
}

    render(){
        const {isLoading, data, query, error} = this.state
        return(
            <div>
                <div >Enter The Name Below</div>
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
                            <div style={{ margin:"40px",display:"flex", direction:"row", width:"80%",height:"200px", border:"2px solid black"}}>
                            <img style={{width:"200px", borderRadius:"50%",height:"100%", border:"2px solid black"}} src={item.avatar_url}></img>
                            <div style={{fontSize:"30px",fontFamily:"monospace", margin:"40px"}}>{item.login}</div>
                            <button onClick={()=>this.HandleShowMore(item)}
                            style={{
                                fontSize:"30px",fontFamily:"monospace",float:"right",height:"80px", width:"auto",background:"green", margin:"40px"
                            }}>Show more</button> 
                           {
                           this.state.showMore ? <div style={{fontSize:"30px",fontFamily:"monospace",margin:"40px"}}><p>Followers:{this.state.followers}{" "}</p></div>:<p></p>
                            }
                           {
                           this.state.showMore ?<div style={{fontSize:"30px",fontFamily:"monospace",margin:"40px"}}> <p>{" "}Following:{this.state.following}</p></div>:<p></p>
                           }
                            </div>
                        ))
                     }
                 </div>
            </div>
        )
    }
}