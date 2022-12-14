import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// redux
// import reduxStore from './redux/store';
// import { Provider as ReduxProvider } from 'react-redux';


const allEl = document.querySelector("body");
window.addEventListener("keydown", (event) => {
  if (event.keyCode === 87) {
    if (allEl.classList.contains("wireframe")) {
      allEl.classList.remove("wireframe");
    } else {
      allEl.classList.add("wireframe");
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ReduxProvider store={reduxStore}>
    <App />
  // </ReduxProvider>
);

