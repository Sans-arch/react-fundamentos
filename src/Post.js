import React from 'react';

export default function Post(props) {
  return (
    <>
      <article>
        <strong>{props.post.title}</strong><br />
        <small>{props.post.subtitle}</small>
      </article>
      <br />
    </>
  );
}
