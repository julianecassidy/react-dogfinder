import "./DogList.css";
import { Link } from "react-router-dom";


/** List of dogs
 *
 * Props:
 * dogs: array of dog objects
 *
 * State:
 * -
 *
 * Routed at:
 * "/dogs"
 */

function DogList({ dogs }) {
  console.log("DogList", dogs);

  return (
    <div className="DogList">
      {dogs.map(dog => (
        // TODO: each dog div needs a key
        <div className="DogList-dog">

          <Link to={`/dogs/${dog.name}`}>
            <img src={`/${dog.src}.jpg`} alt="dog" />
          </Link>

          <h3>{dog.name}</h3>
          <p>Age: {dog.age}</p>
          <ul>
            {dog.facts.map((fact, i) =>
              <li key={i}>{fact}</li>
            )}
          </ul>

        </div>
      ))}

    </div>
  );


}

export default DogList;