import './App.css';
import Person from './components/Persons';

function App() {
  return (
    <div className="App">
      
      <Person 
      fullName = {"Doe, jane"}
      initialAge = {45}
      hairColor = {" Black "}/>
      
      <Person 
      fullName = {"Smith, John"}
      initialAge = {88}
      hairColor = {" Brown "}/>
      
      <Person 
      fullName = {"Fillmore, Millard"}
      initialAge = {50}
      hairColor = {" Brown "}/>

      <Person 
      fullName = {"Smith, Maria"}
      initialAge = {62}
      hairColor = {" Brown "}/>
    </div>
  );
}

export default App;
