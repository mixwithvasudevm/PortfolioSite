import React, { useEffect } from "react";
import Faq from "../components/Faq"; 

const FaqMain = () => {
  useEffect(() => {
    document.title = "Mix With Vasudev | FAQ";
  }, []);
  return (
    <div>
     <Faq/>
    </div>
  );
};


export default FaqMain;