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

function App() {
  return (
    <div className="App">
      {/* <Main/>
      <MainList/>
      <MainButton/> */}
      {/* <State/> */}
      {/* <Restaurent/> */}
      {/* <Card/> */}

      <IsAuth/>

      <ToDo/>

    {/* <DisplayCard/> */}

    </div>
  );
}

export default App;
