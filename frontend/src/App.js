import React from "react";
import './App.css';

function App() {
  const [R1, setR1] = React.useState(null);
  const [R2, setR2] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setR1(data.message));
  }, []);

  React.useEffect(() => {
    fetch("/alt")
      .then((res) => res.json())
      .then((data) => setR2(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {!R1 ? "Loading Response 1..." : R1}
        </p>

        <p>
        {!R2 ? "Loading Response 2..." : R2}
        </p>
      </header>

    </div>
  );
}

export default App;