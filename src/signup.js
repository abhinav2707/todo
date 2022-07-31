import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  
  const handleChange = (e) => {
    setName(e.target.value);
    console.log(e.target.name)
  }
 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  }
  const handleSubmit = (e) => {
    if (password != confPassword) {
        alert("password not same")
      console.log("password Not Match");
    } else {
      console.log('A form was submitted with Name :' + name );
    }
    e.preventDefault();
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => { handleSubmit(e) }}>
         
          <h3> Sign-up Form </h3>
          <label >
            Name:
          </label><br />
          <input type="text" value={name} required  onChange={(e) => setName(e.target.value)} /><br />
          
          <label>
            Password:
          </label><br />
          <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
          <label>
            Confirm Password:
          </label><br />
          <input type="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /><br />
          
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App