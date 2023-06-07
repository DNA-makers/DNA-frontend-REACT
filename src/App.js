import "./App.css";
import { Item } from "./Item";
import React from "react";

class App extends React.component {
  constructor(props) {
    super(props);
    this.state = { genes: [] };
  }

  componentDidMount() {
    this.logJSONData();
  }

  logJSONData() {
    this.url = "";
    fetch(this.url).then((response) => {
      response.json().then((data) => this.setState({ cats: data }));
      console.log(this.state.cats);
    });
  }

  render() {
    let genList;
    return (
      <section class="wrapper">
        <h1>hallo.</h1>
        {!this.state.cats ? (
          <p>loading... of er is iets mis.</p>
        ) : (
          (genList = this.state.genes.map((ding) => <Item />))
        )}
      </section>
    );
  }
}

export default App;
