import React from "react";
import { FilterBox, FilterInput, Lable } from "./conponents.styled";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
export default function Filter({ value, onChangeFilter }) {
  return (
    <CSSTransition
      in={true}
      timeout={500}
      classNames="Filter-fade"
      unmountOnExit
    >
      <FilterBox>
        <Lable htmlFor="filter">Find contacts by name </Lable>
        <FilterInput
          type="text"
          id="filter"
          placeholder="search..."
          value={value}
          onChange={(e) => onChangeFilter(e.target.value)}
        ></FilterInput>
      </FilterBox>
    </CSSTransition>
  );
}
Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  value: PropTypes.string,
};
