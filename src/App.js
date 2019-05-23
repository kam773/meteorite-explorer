import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello</h1>
      </div>
    </Provider>

  );
}

export default App;
