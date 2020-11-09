import React, { Component } from "react";
import Layout from "./Layuot";
import ContactForm from "./ContactForm";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { Title, Notification } from "./conponents.styled";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import "./transition.css";

export default class App extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    filter: PropTypes.string,
  };
  state = {
    contacts: [],
    filter: "",
    alert: false,
  };
  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");
    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      });
    }
  }
  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState((prevState) => {
      return !this.uniqContact(contact)
        ? {
            contacts: [...prevState.contacts, contact],
            alert: false,
          }
        : this.setState({ alert: true });
    });
    setTimeout(() => this.setState({ alert: false }), 1500);
  };

  uniqContact = (contactList) => {
    const { contacts } = this.state;
    return contacts.find(({ name }) => name === contactList.name);
  };
  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };
  getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    const { filter, contacts, alert } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Layout>
        <CSSTransition
          in={true}
          appear
          timeout={250}
          classNames="Title-fade"
          unmountOnExit
        >
          <Title>Phonebook</Title>
        </CSSTransition>
        <ContactForm onAddContact={this.addContact} />

        <CSSTransition
          in={contacts.length > 1}
          timeout={250}
          classNames="Filter-fade"
          unmountOnExit
        >
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        </CSSTransition>
        <CSSTransition
          in={contacts.length > 0}
          appear
          timeout={250}
          classNames="List-fade"
          unmountOnExit
        >
          <ContactList
            contacts={filteredContacts}
            onRemove={this.removeContact}
          />
        </CSSTransition>

        <CSSTransition
          in={alert}
          appear
          classNames="Notification-fade"
          timeout={250}
          unmountOnExit
        >
          <Notification>Contact already exists!</Notification>
        </CSSTransition>
      </Layout>
    );
  }
}
