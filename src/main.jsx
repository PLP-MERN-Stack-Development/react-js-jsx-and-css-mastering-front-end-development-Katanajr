import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import TaskManager from './components/TaskManager';
import PostsList from './components/PostsList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<ThemeProvider>
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<App />} />
<Route path="/tasks" element={<TaskManager />} />
<Route path="/posts" element={<PostsList />} />
</Routes>
<Footer />
</BrowserRouter>
</ThemeProvider>
</React.StrictMode>
);