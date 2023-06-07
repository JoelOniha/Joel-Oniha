import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import PostTable from './components/PostTable';
import { Post } from './models/post';

function App() {
  const [posts, setPosts] = useState([]);

  const url = 'https://pokeapi.co/api/v2/pokemon/';

  async function fetchPosts() {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data = await res.json();

    let postData = data.results.map((post) => {
      return new Post(post.name);
    });

    setPosts(postData);
  }

  return (
    <div className="text-center mt-5 mx-5">
      <button className="btn btn-primary" onClick={fetchPosts}>
        Fetch Posts
      </button>

      <PostTable posts={posts}></PostTable>
    </div>
  );
}

export default App;
