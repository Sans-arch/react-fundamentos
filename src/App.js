import React from "react";

import Post from "./Post";

const tituloZeroum = 'Título Zero UM';

// Props -> Properties
function App() {
  return (
    <>
      <h1 id="idDoTitulo">JStack's Blog</h1>
      <h2>Posts da semana</h2>

      <hr />

      <Post
        post={{
          title: 'Título da notícia 01',
          subtitle: 'Subtítulo da notícia 01'
        }}
      />
      <Post
        post={{
          title: 'Título da notícia 02',
          subtitle: 'Subtítulo da notícia 02'
        }}
      />
      <Post
        post={{
          title: 'Título da notícia 03',
          subtitle: 'Subtítulo da notícia 03'
        }}
      />
    </>
  );
}

export default App;
