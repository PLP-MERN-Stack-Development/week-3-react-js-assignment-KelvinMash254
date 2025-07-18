import { useState, useEffect } from 'react';
import './App.css';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import Card from './components/Card';
import { fetchPosts } from './api/fetchPosts';

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        setPosts(data.slice(0, 5)); // Limit to first 5 posts
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      {/* Task Manager Component */}
      <TaskManager />

      {/* Counter Section */}
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 mt-8 transition-all duration-300">
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg mb-4">
            Edit{' '}
            <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">
              src/App.jsx
            </code>{' '}
            and save to test HMR
          </p>

          <div className="flex items-center gap-4 my-4">
            <button
              onClick={() => setCount((count) => count - 1)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-transform duration-300 hover:scale-105"
            >
              -
            </button>
            <span className="text-xl font-bold">{count}</span>
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-transform duration-300 hover:scale-105"
            >
              +
            </button>
          </div>

          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Implement your TaskManager component here
          </p>
        </div>
      </div>

      {/* API Data Section */}
      <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 transition-all duration-300">
        <h2 className="text-2xl font-bold mb-4">API Data</h2>
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <ul className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id} title={post.title} content={post.body} />
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}

export default App;
