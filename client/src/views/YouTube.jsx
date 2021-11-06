import React, { useEffect } from "react"; 
import YouTubePage from "../components/YouTubePage";

const YouMain = () => {
  useEffect(() => {
    document.title = "Mix With Vasudev";
  }, []);
  return (
    <div>
     <YouTubePage/>
    </div>
  );
};


export default YouMain;