import React, { useEffect, useState } from "react";
import GenComponent from "../components/GenComponent";

const MyComponent = (props) => {
  const [data, setData] = useState(null);
  const [active, setActive] = useState(null);

  const getAdvice = (gen_code) => {
    // setSelectedGen(gen_code);
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
        <p className="kolom-item">Loading...</p>
      </article>
    );
  }

  return (
    <article className="kolom">
      {data.map((ding) => (
        <GenComponent
          key={ding.id}
          active={active === ding}
          gen_code={ding.gen_code}
          getAdvice={getAdvice}
          variant={props.variant}
          divergent={ding.divergent}
          phenotype={ding.phenotype}
          diplotype={ding.diplotype}
          onClick={() => {
            setActive(ding);
            getAdvice(ding.gen_code);
          }}
        >
          {ding}
        </GenComponent>
      ))}
    </article>
  );
};

export default MyComponent;
