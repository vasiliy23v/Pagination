import React, { useState } from "react";
const BookMark = ({  ...rest }) => {
  const[status, setStatus] = useState(0);
  const favouriteClick = () => {
    if (status) {
      setStatus(status+1);
    } else {
      setStatus(status-1);
    }
    console.log(status)
  };
  return (
    <button {...rest} onClick={favouriteClick}>
      <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}></i>
    </button>
    
  );
};

export default BookMark;
