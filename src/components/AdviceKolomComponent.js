import { useEffect, useState } from "react";
import "./AdviceKolomComponent";
import AdviceComponent from "./AdviceComponent";

const AdviceKolomComponent = (props) => {
  const [data, setData] = useState(null);
  const gen_code = props.gen_code;
  //   const setAdvice = props.setAdvice;

  useEffect(() => {
    if (gen_code) {
      fetch("http://127.0.0.1:8000/advise/" + gen_code)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [gen_code]);

  console.log(gen_code);
  return (
    <article className="kolom">
      {data && (
        <AdviceComponent
          key={data.id}
          gen_code={data.gen_code}
          advise={data.advise}
        />
      )}

      {/* {data && <AdviceComponent />} */}
    </article>
  );
};

export default AdviceKolomComponent;
