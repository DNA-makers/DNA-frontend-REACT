import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/gen/3")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>API Data</h1>
      <ul>
        <li>ID: {data.id}</li>
        <li>User ID: {data.user_id}</li>
        <li>Gen Code: {data.gen_code}</li>
        <li>Diplotype: {data.diplotype}</li>
        <li>Phenotype: {data.phenotype}</li>
        <li>Divergent: {data.divergent}</li>
        <li>Created At: {data.created_at}</li>
        <li>Updated At: {data.updated_at}</li>
      </ul>
    </div>
  );
};

export default MyComponent;
