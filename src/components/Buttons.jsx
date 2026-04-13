import React from "react";
import "../styles/buttons.css";
// import { getByText } from "@testing-library/rea

function ButtonLarge({ text,classname,onclick,isSubmit,loading }) {
  return (
    <button type="submit" onClick={onclick} className={`button-large ${classname}`}>
      {isSubmit?<div className="loading-text">{loading}</div>:text}
      
    </button>
  );
}

export function ButtonPill({ text, className ,onclick,isSubmit,loading,}) {
  return (
    <button type="submit" className={`${className}  button-pill`} onClick={onclick}>
       {isSubmit?<div className="loading-text">{loading}</div>:text}
    </button>
  );
}

export default ButtonLarge;
