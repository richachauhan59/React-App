import React from 'react'

export default class GitHub extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            query: "richachauhan59",
            data: []
        }
    }
    componentDidMount(){
        fetch("https://api.github.com/users/" + this.state.query)
        .then((data) => data.json())
        .then((data)=> this.setState({data:data}))
    }
    // Create a component that accepts a github user name
    // on mounting of the component
    // use fetch api and load the users details and populate on the page with image,
    // url and other relevant information
    render(){
        const {data} = this.state
        console.log(data)
        return(
            <div style={{width:"50%",height:"250px", border:"2px solid black",display:"flex",direction:"row" }}>
                <div>
                <img style={{paddind:"1%",margin:"15px", width:"200px", borderRadius:"50%", border:"2px solid black" }} src={data.avatar_url} />
                </div>
                <div>
                <div>
                <h2>Name:{data.name}</h2>
                </div>
                <div>
                <h2>Bio: {data.bio}</h2>
                </div>
                <div>
                <h2>Location: {data.location}</h2>
                </div>
                <div>
                <h2>Login: {data.login}</h2>
                </div>
                <div>
                <h2>URL: {data.url}</h2>
                </div>
                </div>
            </div>
        )
    }
}