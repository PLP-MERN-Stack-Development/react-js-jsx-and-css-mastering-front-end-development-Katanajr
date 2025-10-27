import React from 'react';


const Card = ({ title, children }) => {
return (
<div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
{title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
{children}
</div>
);
};


export default Card;