import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from './components/Login';



function App() {

  const [user, loading] = useAuthState(auth);

  if(loading){
    return(
      <AppLoading>
        <AppLoadingContent>
          <img 
            src="https://image.flaticon.com/icons/png/512/2111/2111615.png"
            alt="" />
        </AppLoadingContent>
      </AppLoading>
    )
  }

  return (
    <div className="app">
      <Router>
        {/* To add the login make the user !user */}
        {!user ? 
        (<Login />):(
          <>
            <Header />
            <AppBody>
              <Sidebar user={user} />
              <Switch>
                  <Route exact path="/">
                    <Chat />
                  </Route>
              </Switch>
            </AppBody>
          </>
        )}
        
        
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`
const AppLoadingContent = styled.div`
   text-align: center;
  padding-bottom: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
  }
`
