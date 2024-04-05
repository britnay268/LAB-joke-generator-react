import { Button } from 'react-bootstrap';
import { useState } from 'react';
import getJoke from '../api/jokeData';
import Joke from '../components/Joke';

function Home() {
  const [joke, setJoke] = useState({});
  const getAJoke = () => {
    getJoke().then(setJoke);
    console.warn(joke);
  };
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome Home!</h1>
      <Joke joke={joke} />
      <Button type="button" onClick={getAJoke}>Get a Joke</Button>
    </div>
  );
}

export default Home;
