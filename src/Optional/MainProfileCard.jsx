import React from 'react'
import Image from './Image'
import Name from './Name'


export default class Main extends React.Component{
    constructor(props){
        super(props)
    }




render(){
    return(
        <div>
            <div style={{float:"left"}}>
            <Image src={Obj1.img} />
            </div>
            <div>
            <Name fname={Obj1.first_name} lname={Obj1.last_name}/>
            </div>
        </div>
    )
}


}

const Obj1 = {
    first_name : "Richa",
    last_name:  "Chauhan",
    Job: "Full Stack Developer",
    years_of_exp : "2 Yrs",
    img : "https://media-exp1.licdn.com/dms/image/C5603AQE5PuLyCFG1Cw/profile-displayphoto-shrink_100_100/0?e=1603929600&v=beta&t=Jlz0pM5rLJebUucPGdbvBH4_U_UWkrJ9MU0PLMxmVv4"

}
