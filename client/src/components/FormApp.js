import React, { useState } from "react";

import RichEditor from "./RichEditor";
 import ReadOnly from "./ReadOnly";
//by importing more we can add title and pics also 

const FormApp = () => {
  const [input, setInput] = useState(initialValue);
  console.log(JSON.stringify(input));
  return (
    <div>
      <RichEditor value={input} setValue={setInput} />
      <ReadOnly initialValue={initialValue} />
    </div>
  );
};

export default FormApp;

const initialValue = [
  {
    type: "paragraph",
    children: [
      { text: "" },
    ]
  },  
];
