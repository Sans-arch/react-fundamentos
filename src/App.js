import React from "react";

import Header from "./Header";
import Post from "./Post";

const posts = [
  { title: 'Title#01', subtitle: 'Sub#01', likes: 20 },
  { title: 'Title#02', subtitle: 'Sub#02', likes: 10 },
  { title: 'Title#03', subtitle: 'Sub#03', likes: 50 },
  { title: 'Title#04', subtitle: 'Sub#03', likes: 50 },
];

// Props -> Properties
function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.title}
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
