import React from 'react';
import './App.css';
import Forecast from "./components/forecast/forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Strive Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Strive School
      </footer>
    </div>
  );
}

export default App;
