import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AppRouter from './router/AppRouter';
import Footer from './components/Footer';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
import HeaderTwo from './components/HeaderTwo';

ReactDOM.render(<Home/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 