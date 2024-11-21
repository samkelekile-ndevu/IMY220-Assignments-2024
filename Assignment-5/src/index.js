import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

// They do not have to use App, they can import StarWars directly to index.js
root.render(<App/>);