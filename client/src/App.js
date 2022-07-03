import "./App.css";
import {useState} from 'react';

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [gender, setGender] = useState("");

  const returnInfo = () => {
    console.log(name + age + sex + gender)
  };

  return (
    <div className="App">
      <div className="information">
        <h2>Checklist</h2>
        <label>Name:</label>
          <input type="text" 
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        <label>Age</label>
          <input type="number" 
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
        <label>Sex</label>
        <input type="text" 
            onChange={(event) => {
              setSex(event.target.value);
            }}
        />
        <label>Gender</label>
        <input type="text" 
            onChange={(event) => {
              setGender(event.target.value);
            }}
        />
        <button onClick={returnInfo}>Add to Database</button>
      </div>
    </div>
  );
}

export default App;
