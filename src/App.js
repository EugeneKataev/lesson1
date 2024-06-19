import './App.css';
import React from 'react';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
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
