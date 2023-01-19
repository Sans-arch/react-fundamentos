import React, { useState } from "react";

import Header from "./Header";
import Post from "./Post";

// Props -> Properties
// Quando o state muda, a function App() é carregada inteira novamente e
// consequentemente a tela é re-renderizada com os novos valores do state
function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20 },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10 },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50 },
    { id: Math.random(), title: 'Title#04', subtitle: 'Sub#03', likes: 50 },
  ]);

  function handleRefresh(e) {
    setPosts(prev => [...prev, {
      id: Math.random(),
      title: `Title#0${posts.length + 1}`,
      subtitle: `Sub#0${posts.length + 1}`,
      likes: 50
    }]);
  }

  return (
    <>
      <Header title="JStack's Blog">
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle
          }}
        />
      ))}
    </>
  );
}

export default App;
