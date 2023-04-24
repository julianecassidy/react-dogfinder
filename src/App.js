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
 * - isLoaded: boolean for whether dog list has been received from AJAX request
 * 
 * App -> { Nav, Routes }
 */
function App() {

  const [names, setNames] = useState([]);

  async function getDogNames() {
    const results = await axios.get("http://localhost:5001/dogs");
    const dogNames = results.data.map(dog => dog.name);
    setNames([dogNames]);
  }

  console.log("names", names);

  return (
    <div className="App">
      <h1>Dogfinder</h1>
      {names.length > 0
        ? (<BrowserRouter>
          {names && (
            <div>
              (<Nav names={names} />
              <RoutesList getDogNames={getDogNames} />)
            </div>
          )}
        </BrowserRouter>)
        : <p>Fetching dogs...</p>
      }
    </div>
  );
}

export default App;
