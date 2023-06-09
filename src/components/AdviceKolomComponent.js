import { useEffect, useState } from "react";
import "./AdviceKolomComponent";
import AdviceComponent from "./AdviceComponent";

const AdviceKolomComponent = (props) => {
  const [data, setData] = useState(null);
  const gen_code = props.gen_code;
  const [query, setQuery] = useState("");
  //   const setAdvice = props.setAdvice;

  useEffect(() => {
    if (gen_code || gen_code === "") {
      // als gen_code "" is dan krijgt het alle adviezen
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

  if (props.show_searchbar) {
    return (
      <section className="vertical">
        <article id="search-wrapper" className="kolom">
          <input
            // id="searchbar-input"
            type="text"
            className={props.bar_style}
            placeholder="Zoeken..."
            onChange={(event) => setQuery(event.target.value)}
          />
        </article>

        <article className="kolom advice-kolom">
          {data &&
            data
              .filter((post) => {
                if (query === "") {
                  return post;
                } else if (
                  post.title.toLowerCase().includes(query.toLowerCase()) ||
                  post.advise.toLowerCase().includes(query.toLowerCase()) ||
                  post.gen_code.toLowerCase().includes(query.toLowerCase())
                ) {
                  return post;
                }
                return false;
              })
              .map((post, index) => (
                <AdviceComponent
                  key={post.id}
                  gen_code={post.gen_code}
                  advise={post.advise}
                  title={post.title}
                />
              ))}
        </article>
      </section>
    );
  }

  <article className="kolom-item">
    <h3>{props.title}</h3>
    <p>{props.advise}</p>
  </article>;

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
