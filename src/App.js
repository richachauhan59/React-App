import React from 'react';
import './App.css';
import MainList from './components/List2/list_main'
import Main from './Profile/main'
import MainButton from './components/React_Menu/button_main'
import State from "./StateFullComps/change"
import Restaurent from './RestaurentDetails/RestMain.jsx'
import Card from './Optional/MainProfileCard'
import IsAuth from './React Events/IsAuth'
import ToDo from './toDo/MainToDo'
import DisplayCard from './DisplayCard/mainCard'
import Form from './Forms/MainForm'
import FormBasic from './React Forms-basic/formBasic'
import LineThrough from './React - Update-lineThrough/todoLinethrough'
import GitHub from './GitHub/GitHub.jsx'
import Timer from './Timer_ComponentWillUnmount/Timer.jsx'
import GitHubAPI from './GitHubAxios/githubAPI'
import SideBar from './React Sidebar/SideBar'
import CardNavbar from './React_Card_Navbar/navbar'
import ToggleToDo from './4thSEPT/ToggleTodoMain'
import ReactForm from './4thSept_Form/FormMain'

function App() {
  return (
    <div className="App">
      {/* <Main/>  
      <MainList/>
      <MainButton/> */}
      {/* <State/> */}
      <Restaurent/>
      {/* <Card/> */}

      {/*DATE  25/Aug/2020 */}

      {/* <IsAuth/> */}
      {/* <ToDo/> */}
      {/* <DisplayCard/> */}

      {/*DATE  26/Aug/2020 */}
      {/* <Form/> */}
      {/* <FormBasic/> */}
      {/* <LineThrough/> */}

      {/* DATE 27/AUG/2020 */}
      {/* <GitHub/> */}
      {/* <Timer/> */}

      {/* DATE 28/ AUG/ 2020 */}
      {/* <GitHubAPI/> */}

      {/* DATE 31/AUG/2020 */}
      {/* <SideBar/> */}

      {/* DATE 2/SEPT/2020 */}
      {/* <CardNavbar/> */}

      {/* DATE 4/SEPT/2020 */}
      {/* <ToggleToDo/> */}
      {/* <ReactForm/> */}

    </div>
  );
}

export default App;
