import React from 'react';
import PropTypes from 'prop-types';

export default function Joke({ joke }) {
  return (
    <>
      <h1>{joke.setup}</h1>
      <h2>{joke.delivery}</h2>
    </>
  );
}

Joke.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string.isRequired,
    delivery: PropTypes.string.isRequired,
  }).isRequired,
};
