import React, { Component } from "react";
import { Container, Input, Button, Lable } from "./conponents.styled";
import PropTypes from "prop-types";

export default class ContactForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    value: PropTypes.string,
  };
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    if (this.state) e.preventDefault();
    this.props.onAddContact(this.state);

    this.setState({ name: "", number: "" });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Container onSubmit={this.handleSubmit}>
        <Lable htmlFor="name"> Name</Lable>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Name Surname"
          required
          value={name}
          onChange={this.handleInputChange}
        />

        <Lable htmlFor="number"> Number</Lable>
        <Input
          type="tel"
          name="number"
          id="number"
          placeholder="667-67-67"
          required
          value={number}
          onChange={this.handleInputChange}
        />

        <Button type="submit">Add contact</Button>
      </Container>
    );
  }
}
