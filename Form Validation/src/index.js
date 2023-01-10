import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './formStyle.css';
// import App from './App';
import KeyCodes from './KeyCodes';
import reportWebVitals from './reportWebVitals';
import FormValidation from './FormValidation';
import TodoApp from './TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormValidation/>
    {/* <TodoApp /> */}
     {/* <KeyDetail value={'Test'} property={'propertyValue'} /> */}
    {/* <KeyListener/> */}
    {/* <KeyCodes/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
