import React from 'react';
import Profile from './Profile'

const data = {
    name: "Richa Chauhan",
    location: "Bangalore",
    description: "Full Stack Developer",
    skills: ["UI UX", "Frontend Development", "React", "Design", "HTML", "CSS", "JavaScript", "Node"],
    src: 'https://media-exp1.licdn.com/dms/image/C5603AQE5PuLyCFG1Cw/profile-displayphoto-shrink_400_400/0?e=1600905600&v=beta&t=VUEXo2hqYLWq6gbc9bD5_4SdTpvkC99kIaKONVljmbc'
}

function App() {

    return (
        <div className="App">
            <Profile data={data} />
        </div>
    );

}
export default App