import { Button } from 'react-bootstrap';
import { useState } from 'react';
import getJoke from '../api/jokeData';
import Joke from '../components/Joke';

function Home() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get A Joke');
  // This calls the getAjoke api and sets the joke to the item in the Joke component and changes the button.
  const getAJoke = () => {
    getJoke().then((jokeObj) => {
      setJoke(jokeObj);
      setBtnText('Get A Punchline');
    });
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
      <Joke joke={joke} btnText={btnText} />
      {/* If btnText is Get a Joke or Get NAother Joke, when clicked, it gets a joke; if not those, then it change sthe button to get Another Joke without fetching a joke. */}
      {btnText === 'Get A Joke' || btnText === 'Get Another Joke'
        ? <Button type="button" onClick={getAJoke}>{btnText}</Button>
        : <Button type="button" onClick={() => setBtnText('Get Another Joke')}>{btnText}</Button> }
    </div>
  );
}

export default Home;
