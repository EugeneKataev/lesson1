import axios from 'axios';

import './App.scss';
import MainPage from './pages/MainPage';
import TodosPage from './pages/TodosPage';
import { useState } from 'react';

function App() {

  const savedToken = localStorage.getItem('token');
  const [isAuthorized, setIsAuthorized] = useState(Boolean(savedToken));
  const [token, setToken] = useState(savedToken || null);
  
  const handleUserSignIn = (token) => {
    console.log(`my token: ${token}`);
    setIsAuthorized(true);
    setToken(token);
    localStorage.setItem('token', token);
  }

  const handleSignOut = () => {
    setIsAuthorized(false);
    setToken(null);
    localStorage.removeItem('token');
  }

  return (
    <div className="App">
      {!isAuthorized && <MainPage handleAuth={handleUserSignIn} />}
      {isAuthorized && <TodosPage token={token} handleSignOut={handleSignOut} />}
      {/*  */}
    </div>
  );
}

export default App;
