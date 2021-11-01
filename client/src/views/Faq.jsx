import React, { useEffect } from "react";
import Faq from "../components/Faq"; 

const FaqMain = () => {
  useEffect(() => {
    document.title = "FAQ-Mix With Vasudev";
  }, []);
  return (
    <div>
     <Faq/>
    </div>
  );
};


export default FaqMain;