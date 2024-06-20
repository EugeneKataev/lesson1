import './App.css';
import React from 'react';
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
      <Provider store={store}>
        <div className="App">
            <AddTodo />
          <TodoList />
        </div>
      </Provider>
  );
}

export default App;
