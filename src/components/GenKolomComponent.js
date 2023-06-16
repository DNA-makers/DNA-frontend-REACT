import React, { useEffect, useState } from "react";
import GenComponent from "../components/GenComponent";

const MyComponent = (props) => {
  const [data, setData] = useState(null);
  const getAdvice = (gen_code) => {
    props.getAdvice(gen_code);
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/gen")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (data === null) {
    return (
      <article className="kolom">
        <p>Loading...</p>
      </article>
    );
  }

  return (
    <article className="kolom">
      {/* <p>afwijkend: {props.variant}</p> */}
      {data.map((ding) => (
        <GenComponent
          key={ding.id}
          gen_code={ding.gen_code}
          variant={props.variant}
          divergent={ding.divergent}
          getAdvice={getAdvice}
        />
      ))}
      {/* <article className="kolom">
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
      </article> */}
    </article>
  );
};

export default MyComponent;
