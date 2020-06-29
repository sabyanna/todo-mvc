import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import MainPage from './components/MainPage';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <header className="App-header">
          Todos
          <MainPage/>
        </header>
      </div>
    </Provider>
    
  );
}

export default App;
