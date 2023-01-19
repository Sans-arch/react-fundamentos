import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      {props.children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

Header.defaultProps = {
  title: `JStack's Blog`
};
