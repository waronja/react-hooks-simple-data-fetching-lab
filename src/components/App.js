// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  if (!message) {
    return <p>Loading...</p>;
  } else {
    return (
        <img src={message} alt="A Random Dog" />
    );
  }
}

export default App;