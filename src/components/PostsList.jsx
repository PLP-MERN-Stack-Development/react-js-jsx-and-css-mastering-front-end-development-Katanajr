import React, { useEffect, useState } from 'react';
import Card from './Card';
import Button from './Button';


const PostsList = () => {
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [page, setPage] = useState(1);
const [search, setSearch] = useState('');


useEffect(() => {
const fetchPosts = async () => {
try {
setLoading(true);
const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
const data = await res.json();
setPosts((prev) => [...prev, ...data]);
} catch (err) {
setError('Failed to load posts');
} finally {
setLoading(false);
}
};
fetchPosts();
}, [page]);


const filteredPosts = posts.filter((post) =>
post.title.toLowerCase().includes(search.toLowerCase())
);


return (
<Card title="API Posts">
<input
type="text"
placeholder="Search posts..."
value={search}
onChange={(e) => setSearch(e.target.value)}
className="w-full mb-4 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
/>


{error && <p className="text-red-500">{error}</p>}


<ul className="space-y-4">
{filteredPosts.map((post) => (
<li key={post.id} className="border-b dark:border-gray-700 pb-2">
<h3 className="text-lg font-semibold">{post.title}</h3>
<p className="text-gray-600 dark:text-gray-400">{post.body}</p>
</li>
))}
</ul>


{loading && <p className="text-gray-500">Loading...</p>}


{!loading && (
<div className="flex justify-center mt-4">
<Button onClick={() => setPage((prev) => prev + 1)} variant="primary">
Load More
</Button>
</div>
)}
</Card>
);
};


export default PostsList;