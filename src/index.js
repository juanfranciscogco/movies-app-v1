import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { App } from './App'
import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<App />);
//root.render(<Contenido titulo='titulo' contenido='Hi from React'>Hi from react children</Contenido>);
// root.render(Contenido('titulo', 'Hi from React'));

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
