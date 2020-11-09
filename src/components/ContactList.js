import React from "react";
import {
  ContactItem,
  ContactBtn,
  ItemName,
  ItemNumber,
} from "./conponents.styled";
import PropTypes from "prop-types";
import { Html5Entities } from "html-entities";
import { TransitionGroup, CSSTransition } from "react-transition-group";
export default function ContactList({ contacts, onRemove }) {
  return (
    <TransitionGroup component="ul" className="list">
      {contacts.map(({ id, name, number }) => (
        <CSSTransition key={id} timeout={250} classNames="Item-fade">
          <ContactItem>
            <ItemName>{name}</ItemName>
            <ItemNumber>{number}</ItemNumber>
            <ContactBtn onClick={() => onRemove(id)}>
              {Html5Entities.decode("&#10006")}
            </ContactBtn>
          </ContactItem>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onRemove: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
