import React from 'react';
import './App.css';
import MainList from './components/List2/list_main'
import Main from './Profile/main'
import MainButton from './components/React_Menu/button_main'
import State from "./StateFullComps/change"

function App() {
  return (
    <div className="App">
      {/* <Main/>
      <MainList/>
      <MainButton/> */}
      <State/>
    </div>
  );
}

export default App;
