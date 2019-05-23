import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <SearchResults />
      </div>
    </Provider>

  );
}

export default App;
