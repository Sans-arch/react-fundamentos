import React, { useState } from "react";

import Header from "./Header";
import Post from "./Post";

import { ThemeProvider } from './ThemeContext';

// Props -> Properties
function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: false },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10, read: true },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50, read: false },
    { id: Math.random(), title: 'Title#04', subtitle: 'Sub#03', likes: 50, read: true },
  ]);

  function handleRefresh(e) {
    setPosts(prev => [...prev, {
      id: Math.random(),
      title: `Title#0${posts.length + 1}`,
      subtitle: `Sub#0${posts.length + 1}`,
      likes: 50,
      read: false
    }]);
  }

  function handleRemovePost(postId) {
    setPosts(prevState => prevState.filter(post => post.id !== postId));
  }

  return (
    <ThemeProvider>
      <Header>
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>
  );
}

export default App;
