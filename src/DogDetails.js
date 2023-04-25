import { useParams, Navigate } from "react-router-dom";

/** Details about a dog
 *
 * Props:
 * dogs: array of dog objects
 *
 * State:
 * -
 *
 * Routed at:
 * "/dogs/:name"
 */

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.filter(dog => dog.name === name)[0];

  if (!dog) return <Navigate to="/dogs" />

  console.log("dog from detais", dog);
  return (
    <div className="DogDetail">
      {/* TODO: alt tag could be dog's name - more helpful */}
      <img src={`/${dog.src}.jpg`} alt="dog" />
      <h3>{dog.name}</h3>
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((fact, i) =>
          <li key={i}>{fact}</li>
        )}
      </ul>

    </div>
  );
}

export default DogDetails;