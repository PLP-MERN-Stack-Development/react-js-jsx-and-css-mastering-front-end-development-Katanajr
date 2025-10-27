import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Button from './Button';
import { Link } from 'react-router-dom';


const Navbar = () => {
const { theme, toggleTheme } = useContext(ThemeContext);


return (
<nav className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
<h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">PLP Task Manager</h1>
<div className="flex items-center gap-4">
<Link to="/" className="hover:underline">Tasks</Link>
<Link to="/posts" className="hover:underline">API Posts</Link>
<Button variant="secondary" size="sm" onClick={toggleTheme}>
{theme === 'light' ? 'Dark Mode' : 'Light Mode'}
</Button>
</div>
</nav>
);
};


export default Navbar;