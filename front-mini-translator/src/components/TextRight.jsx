import React, { Component } from "react";
import { getLanguaje } from "../api/annex";
import { getTraslate } from "../api/annex";

export default class TextRight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languaje: [],
      translate: ""
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
    console.log(languaje);
    return (
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        {/* <select id={languaje.dirs} value={languaje.langs}></select> */}
      </div>
    );
  }
}
