import './App.css';
import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import RoutesList from './RoutesList';
import axios from 'axios';

/** App for Dogfinder
 *
 * Props:
 * - none
 *
 * State:
 * - dogs: array of dog objects
 *
 * App -> { Nav, RoutesList }
 */
function App() {
  const [dogs, setDogs] = useState([]);

  async function getDogs() {
    const results = await axios.get("http://localhost:5001/dogs");
    const dogData = results.data;
    setDogs(dogData);
  }

  let names = [];

  for (let dog of dogs) {
    names.push(dog["name"]);
  }

  // const names = dogs.map(dog => {
  //   console.log("dog in loop", dog)
  //   return dog.name
  // });

  // TODO: could refactor with a second piece of state eg. isLoaded
  // has the advantage of rendering add'l ui components before dogs are
  // returned

  if (dogs.length === 0) {
    getDogs();
    return ("Fetching dogs...");
  } else {

    return (
      <div className="App">
        <h1>Dogfinder</h1>
        <BrowserRouter>

          <Nav names={names} />
          <RoutesList dogs={dogs} />

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
