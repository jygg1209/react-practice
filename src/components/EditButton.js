import React from "react";
import { Button } from "antd";

const EditButton = (props) => {
    if (props.editable) {
      return (
        <>
          <Button type="primary" onClick={props.showModal}>Confirm</Button>
          <Button type="primary" onClick={props.toggle}>
            Cancel
          </Button>
        </>
      );
    } else {
      return (
        <Button type="primary" onClick={props.toggle}>
          Edit
        </Button>
      );
    }
  };
  
  export default EditButton;