import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Contacts from "./Components/Contacts";
import AddContact from "./Components/AddContact";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <div className="head-menu">
        <ul>
          <li><NavLink to="/">Contacts</NavLink></li>
          <li><NavLink to="/add">Add Contact</NavLink></li>
        </ul>
      </div>
        <Routes>
          <Route exact path="/" element={<Contacts />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<AddContact />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
