import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Music from "./Components/Music/Music";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import Users from './Components/Users/Users'


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wraper'>
        <Header />
        <Navbar />
        {/* <Profile /> */}
        <div className="app-wrapper-content">
          <Route path='/dialogs' 
          render={ () => <DialogsContainer /> } />
          <Route path='/profile' 
          render={ () => <Profile /> } />
          <Route path='/users'
          render= { () => <UsersContainer />} />
          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/settings' component={Settings} />

          {/*<Settings />*/}
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
