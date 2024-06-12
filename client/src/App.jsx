import axios from 'axios';

import './App.scss';
import MainPage from './pages/MainPage';
import TodosPage from './pages/TodosPage';
import { useState, useEffect } from 'react';

function App() {
  
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
      setIsAuthorized(true);
    }
  }, []);
  
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
