import React from "react";
import "./App.css";

// Importing Components
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const name = require("@rstacruz/startup-name-generator");
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      headerText: "Name It!",
      headerExpaned: true,
      suggestedNames: [],
    };
  }

  handleInputChange = inputText => {
    if (inputText.length <= 0) {
      this.setState({ suggestedNames: [] });
    } else {
      this.setState({
        headerExpaned: inputText.length <= 0,
        suggestedNames: inputText ? name(inputText) : [],
      });
    }
  };

  render() {
    return (
      <div>
        <Header
          headerExpaned={this.state.headerExpaned}
          headerTitle={this.state.headerText}
        />
        <SearchBox onInputChange={this.handleInputChange} />
        <ResultsContainer suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;
