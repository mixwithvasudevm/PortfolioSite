import React, {  useEffect } from "react";

import Form from "../components/Form";

const Add = () => {
  useEffect(() => {
    document.title = "Add New Blog";
  }, []);
  return (
    <div className="Form">
      <Form />
    </div>
  );
};

export default Add;
