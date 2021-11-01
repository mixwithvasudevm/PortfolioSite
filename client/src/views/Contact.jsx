import React, { useEffect } from "react";
import ContactMain from "../components/ContactMain";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact-Mix With Vasudev";
  }, []);
  return (
    <div>
     <ContactMain/>
    </div>
  );
};


export default Contact;