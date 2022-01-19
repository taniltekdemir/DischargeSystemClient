import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import UserSave from './Components/UserSave';
import Collection from './Components/Collection';
import Debt from './Components/Debt';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Menu></Menu>}></Route>
            <Route path="/userSave" element={<UserSave></UserSave>}></Route>
            <Route path="/collection" element={<Collection></Collection>}></Route>
            <Route path="/debt" element={<Debt></Debt>}></Route>
          </Routes>
      </div>
    );
  }
}

export default App;
