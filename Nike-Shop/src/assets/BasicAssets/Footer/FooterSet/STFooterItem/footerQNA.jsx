/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import "../../../basicSet.css";
import "bootstrap/dist/css/bootstrap.css";
import accData from "./footerQNAData";
import Accordion from "react-bootstrap/Accordion";

function ItemBuild(props) {
  return (
    <Accordion.Item eventKey={props.id}>
      <Accordion.Header>{props.question}</Accordion.Header>
      <Accordion.Body>{props.answer}</Accordion.Body>
    </Accordion.Item>
  );
}

function FqAcc() {
  return accData.map((item) => {
    return (
      <ItemBuild id={item.id} question={item.question} answer={item.answer} />
    );
  });
}

export default FqAcc;
