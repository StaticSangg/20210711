import React, { useState } from 'react';
import Person from "./components/Person"

function App() {
  const [personList, setPersonList] = useState([
    {name : '이유승', age : 18, height : 123},
    {name : '이유승', age : 18, height : 123},
    {name : '이유승', age : 18, height : 123}
  ])
  
  return (
    <div>
      <Person name={personList[0].name}></Person>
      <Person name={personList[1].name}></Person>
      <Person name={personList[2].name}></Person>
    </div>
  );
}

export default App;
