import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import Music from "./Components/Music/Music";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends";


const App = (props) => {
debugger;
    return (
        <BrowserRouter>
            <div className='app-wraper'>
                <Header/>
                <div className='app-wrapper-navbar'>
                    <Navbar/>
                </div>
                <div className='app-wrapper-friends'>

                    <Friends sidebar={props.state.sidebar}/>
                </div>
                {/*<Profile />*/}
                <div className="app-wrapper-content">
                    {/*<Route path='/dialogs' component={Dialogs} />
      <Route path='/profile' component={Profile} />
      <Route path='/music' component={Music} />
      <Route path='/news' component={News} />
      <Route path='/settings' component={Settings} />*/}


                    <Route path='/profile' render={() => <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch} />}/>
                    <Route path='/dialogs' render={() => <Dialogs
                        store={props.store} />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/friends' render={() => <Friends
                        sidebar={props.state.sidebar}/>}/>


                    {/*<Settings />*/}
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
