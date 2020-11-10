import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Navbar from './Common/Navbar';
import Sidebar from './Common/Sidebar';
import Footer from './Common/Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
      <Sidebar />
      <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();