import { useEffect, useState } from "react";
import "./AdviceKolomComponent";
import AdviceComponent from "./AdviceComponent";

const AdviceKolomComponent = (props) => {
  const [data, setData] = useState(null);
  const gen_code = props.gen_code;
  //   const setAdvice = props.setAdvice;

  useEffect(() => {
    if (gen_code || gen_code === "") {
      // als gen_code "" is dan krijgt het alle adviezen
      fetch("http://127.0.0.1:8000/advise/" + gen_code)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [gen_code]);

  console.log(gen_code);
  return (
    <article className="kolom advice-kolom">
      {data && //als er data is
        data.map(
          (
            ding //maak advies component aan voor elk advies
          ) => (
            <AdviceComponent
              key={ding.id}
              gen_code={ding.gen_code}
              advise={ding.advise}
              title={ding.title}
            />
          )
        )}
    </article>
  );
};

export default AdviceKolomComponent;
