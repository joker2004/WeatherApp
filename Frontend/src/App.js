import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// class imports
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = `http://localhost:4000/`;

  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios(url);

      setData(results.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  // console.log(data);

  return isLoading ? (
    <div className="loading">
      <h1>Loading</h1>{" "}
    </div>
  ) : (
    <div className="App">
      <Card data={data} />
    </div>
  );
};

export default App;
