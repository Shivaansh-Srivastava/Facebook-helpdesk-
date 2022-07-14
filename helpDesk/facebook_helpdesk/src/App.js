import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Login from './Login';
import SignUp from './SignUp';
import FBLogin from './fbLogin';
import DisConnectPage from './DisConnectPage';
import Messenger from './messenger';

class App extends React.Component
{
  constructor()
  {
    super()
  }

  render()
  {
    return(
      <Router>
        <Routes>
          <Route exact path='/' element={<SignUp />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/fblogin' element={<FBLogin />}></Route>
          <Route exact path='/connection' element={<DisConnectPage />}></Route>
          <Route exact path='/messenger' element={<Messenger />}></Route>
        </Routes>
      </Router>
    )
  }
}

export default App;
