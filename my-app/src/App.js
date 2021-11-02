import React, { Component } from "react";
import UserOutput from "./User/UserOutput";
import UserInput from "./User/UserInput";
import Validation from "./Component/Validation";
import Char from "./Component/Char";
import "./App.css";
class App extends Component {
  state = {
    userName: "HKhansh",
    lengthText: 0,
    letters: [],
  };

  usernameChangedHandler = (e) => {
    this.setState({
      userName: `${e.target.value}`,
    });
  };

  lengthInputHandler = (e) => {
    this.setState({
      lengthText: e.target.value.length,
    });
  };

  letterHandler = (e) => {
    this.setState({ letters: [...e.target.value] });
  };

  deleteLetterHandler = (id) => {
    const letter = [...this.state.letters];
    letter.splice(id, 1);
    this.setState({
      letters: letter,
    });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          name=""
          onChange={(event) => {
            this.lengthInputHandler(event);
            this.letterHandler(event);
          }}
          value={this.state.letters.join("")}
        />
        <Validation value={this.state.lengthText} />
        {this.state.letters.map((letter, index) => {
          return (
            <Char
              value={letter}
              key={index}
              deleteLetter={() => this.deleteLetterHandler(index)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
