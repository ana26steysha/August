import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Information.css";

function Information() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/information/json"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);
}

export default Information;
