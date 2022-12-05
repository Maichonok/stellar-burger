import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

import { App } from './components/App/App';
import { Login } from './pages/login/Login';
import { Profile } from './pages/profile/Profile';
import { Register } from './pages/register/Register';
import { Forgot } from './pages/forgotPassword/forgotPassword';
import { Reset} from './pages/reset/Reset';
import Header from "./components/Headers/AppHeader";
import rootReducer from './services/rootReducer'

import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgot-password">
            <Forgot />
          </Route>
          <Route path="/reset">
            <Reset />
          </Route>
          <Route exact path="/">
            <App />
          </Route>
        </Switch>  
      </Router>
    </Provider>
  </React.StrictMode>
);