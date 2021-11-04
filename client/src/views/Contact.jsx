import React, { useEffect } from "react";
import ContactMain from "../components/ContactMain";

const Contact = () => {
  useEffect(() => {
    document.title = "Mix With Vasudev | Contact";
  }, []);
  return (
    <div>
     <ContactMain/>
    </div>
  );
};


export default Contact;