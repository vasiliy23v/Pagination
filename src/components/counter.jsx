import React from "react";

const Counter = (props) => {
  const fromValue = () => {
    return props.value === 0 ? "НОЛЬ" : props.value;
  };
  const getBadgeClasses = () => {
    let classes = "badge badge-lg m-3 col-md-1 bg-";
    classes += props.value === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <div className="nav">
      <h4 className="col-md-5">{props.name}</h4>
      <span className={getBadgeClasses()}>{fromValue()}</span>
      <button
        onClick={() => props.onIncrement(props.value, props.id)}
        className="btn btn-secondary btn-sm m-1"
      >
        +
      </button>
      <button
        onClick={() => props.onDecrement(props.value, props.id)}
        className="btn btn-secondary btn-sm m-1"
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
      <button
      className="btn btn-danger btn-sm m-2"
      onClick={() => props.onReset()}
    >
      Reset
    </button>
    </div>
  );
};

export default Counter;

/*
  const handleIncrement = (productId) => {
    setValue(value + 1);
  };

  const handleDecrement = (productId) => {
    console.log(productId);
    setValue(value > 0 ? value - 1 : 0);
  };
*/
