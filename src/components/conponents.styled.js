import styled from "styled-components";

const Container = styled.form`
  width: 60vw;
  min-width: 500px;
  height: auto;
  box-shadow: 3px 3px 5px grey;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
`;
const Title = styled.h2`
  margin-top: 50px;
  color: rgb(3, 102, 214);
  font-size: 70px;
  font-weight: bold;
`;
const Input = styled.input`
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 7px;
  background-color: white;
  padding-left: 25px;
  width: 90%;
  height: 50px;
  border: 2px solid gray;
  border-radius: 10px;
  outline: none;
  &:active,
  :focus {
    outline: none;
    border-color: rgb(3, 102, 214);
  }
`;
const Lable = styled.label`
  margin-left: 5%;
`;
const Button = styled.button`
  margin-top: 20px;
  background-color: rgb(3, 102, 214);
  margin-bottom: 30px;
  width: 90%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid transparent;
  outline: none;
  color: white;
  margin-left: auto;
  margin-right: auto;
  font-size: 22px;
`;

const FilterBox = styled.div`
  padding-top: 30px;
  width: 60vw;
  min-width: 500px;
  height: auto;
  box-shadow: 3px 3px 5px grey;
  border: 1px solid lightgray;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  margin-bottom: 10px;
`;
const FilterInput = styled.input`
  margin: 2px auto 20px;
  background-color: white;
  padding: 5px;
  width: 90%;
  height: 50px;
  padding-left: 25px;
  border-radius: 10px;
  border: 2px solid gray;
  outline: none;
  &:active,
  :focus {
    outline: none;
    border-color: rgb(3, 102, 214);
  }
`;

const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 7px;
  background-color: white;
  width: 90%;
  height: 50px;
  box-shadow: 3px 3px 5px grey;
  border: 1px solid lightgray;
  border-radius: 10px;
`;
const ItemName = styled.p`
  width: 50%;
  text-align: left;
  margin-left: 20px;
  height: auto;
`;
const ItemNumber = styled.p`
  width: 30%;
  text-align: left;
  height: auto;
`;
const ContactBtn = styled.button`
  background-color: whitesmoke;
  font-size: 24px;
  width: 36px;
  height: 36px;
  border-radius: 7px;
  border: 1px solid transparent;
  margin-right: 10px;
  background-color: red;
  color: white;
  font-weight: bold;
  padding-bottom: 7px;
`;
const Notification = styled.div`
  background-color: red;
  width: 300px;
  position: absolute;
  top: 50px;
  right: 20%;
  text-align: center;
  height: 70px;
  border: 1px solid transparent;
  border-radius: 10px;
  padding-top: 20px;

  font-size: 22px;
  color: white;
`;
export {
  Title,
  Container,
  Input,
  Lable,
  Button,
  ItemName,
  ItemNumber,
  ContactItem,
  ContactBtn,
  FilterBox,
  FilterInput,
  Notification,
};
