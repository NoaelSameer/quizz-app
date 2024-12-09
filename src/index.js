import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/css/index.css';
import App from './App';
import Quizz from './Quizz';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {path:"/", element: <App />},
  {path:"/quizz", element:<Quizz /> }
  // {path:"/gallery", element: <Gallery />},
  // Add more routes as needed
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
