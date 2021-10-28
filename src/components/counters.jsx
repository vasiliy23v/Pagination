import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const initialState =[
    { value: 0, id: 1 , name: "Ложка"},
    { value: 4, id: 2 , name: "Вилка"},
    { value: 0, id: 3 , name: "Тарелка"},
    { value: 0, id: 4 , name: "Стартовый набор минималиста"},
    { value: 0, id: 5 , name: "Ненужные вещи"},
  ]
  const [counters, setCounters] = useState(initialState);
  const handleReset = () => {
    setCounters(initialState)
  };
  const handleDelete=(counterId) => {
    const newCounters = counters.filter(c => c.id !== counterId);
    setCounters(newCounters)
  }
  const handleIncrement = (currentValue, currentId) => {
    const newCounters = counters.map(c =>{
      c.id === currentId ?
        c.value = currentValue+1 :
        c.value = c.value
      return c
    });
    setCounters(newCounters)
  };

  const handleDecrement = (currentValue, currentId) => {
    //setValue(value > 0 ? value - 1 : 0);
    const newCounters = counters.map(c =>{
      c.id === currentId && c.value > 0 ? c.value = currentValue-1 : c.value = c.value
      return c
    });
    setCounters(newCounters)
  };

  return (
    <div>
      {counters.map((counter) => (
        <Counter 
        key={counter.id}
        value={counter.value}
        name = {counter.name}
        onDelete={handleDelete}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
        id={counter.id}
        />
      ))}
    </div>
  );
};

export default Counters;