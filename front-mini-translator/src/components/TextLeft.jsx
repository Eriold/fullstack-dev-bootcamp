import React, { Component } from "react";
import { getLanguaje } from "../api/annex";
import TextRight from "./TextRight";

export default class TextLeft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languaje: [],
      text: "",
      translate: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      languaje: getLanguaje("en")
    });
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    // console.log(this.state.text);
    alert("A name was submitted: " + this.state.text);
    event.preventDefault();
  }

  render() {
    const { languaje } = this.state;
    const { text } = this.state;
    // console.log(languaje);
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={this.state.text}
              onChange={this.handleChange}
            ></textarea>

            {/* <select name="option1" id="left">
            {languaje.dirs.map(dirs => (
            //   <option value={dirs.dirs}></option>
            ))}
          </select> */}
            <select name="languaje1" id="left">
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </select>
            <TextRight text={text} leftLanguaje="es" rightLanguaje="en" />
            <input type="submit" value="Translate" />
          </form>
        </div>
      </>
    );
  }
}
