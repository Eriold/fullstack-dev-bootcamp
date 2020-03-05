import React, { Component } from "react";
import { getLanguaje } from "../api/annex";
import { getTraslate } from "../api/annex";

export default class TextRight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languaje: [],
      translate: "",
      text: ""
    };
  }

  componentDidMount() {
    this.setState({
      languaje: getLanguaje("en"),
      translate: getTraslate("Example Text, hello world", "en", "ru")
    });
  }

  render() {
    const { languaje } = this.state;
    const { text } = this.props;
    const { leftLanguaje } = this.props;
    const { rightLanguaje } = this.props;
    const translate = getTraslate(text, leftLanguaje, rightLanguaje);
    console.log(languaje);
    return (
      <div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={translate}
        ></textarea>
        <select name="languaje1" id="left">
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
        {/* <select id={languaje.dirs} value={languaje.langs}></select> */}
      </div>
    );
  }
}
