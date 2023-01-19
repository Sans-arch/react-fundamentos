import React from "react";

import Header from "./Header";
import Post from "./Post";

// Props -> Properties
function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      <Post
        likes={20}
        post={{
          title: 'Título da notícia 01',
          subtitle: 'Subtítulo da notícia 01'
        }}
      />
      <Post
        likes={10}
        post={{
          title: 'Título da notícia 02',
          subtitle: 'Subtítulo da notícia 02'
        }}
      />
      <Post
        likes={50}
        post={{
          title: 'Título da notícia 03',
          subtitle: 'Subtítulo da notícia 03'
        }}
      />
    </>
  );
}

export default App;
