import React, { useState } from "react";
import { Modal } from "antd";
import RegisterForm from "./RegisterForm";
import EditButton from "./EditButton";
import UserListTable from "./UserListTable";

const MyContent = () => {
  const [visible, setVisible]   = useState(false);
  const [editable, setEditable] = useState(false);

  //     showModal = () => {
  //     this.setState({
  //       visible: true,
  //     });
  //   };

  //   handleOk = e => {
  //     console.log(e);
  //     this.setState({
  //       visible: false,
  //     });
  //   };

  //   handleCancel = e => {
  //     console.log(e);
  //     this.setState({
  //       visible: false,
  //     });
  //   };

  //   toggleEditable = () => {
  //     this.setState((prevState) => {
  //       return {
  //         editable: !prevState.editable,
  //       };
  //     });
  //   };

  return (
    <div>
      <RegisterForm 
        editable={editable} 
        showModal={() => setVisible(true)} 
      />
      <EditButton
        editable={editable}
        toggle={() => setEditable(!editable)}
        showModal={() => setVisible(true)}
      />
      <UserListTable />
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default MyContent;
