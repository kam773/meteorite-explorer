import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import SearchResults from './components/SearchResults/SearchResults';
import Header from './components/Header/Header'

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Header />
        <div className="container">
          <SearchResults />
        </div>
      </React.Fragment>
    </Provider>

  );
}

export default App;
