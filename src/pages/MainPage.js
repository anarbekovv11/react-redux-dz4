import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MainPage = () => {
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result);
  const plus = () => {
    dispatch({
      type: "PLUS",
      payload: { num1: input1, num2: input2 },
    });
  };
  const minus = () => {
    dispatch({
      type: "MINUS",
      payload: { num1: input1, num2: input2 },
    });
  };
  const umnoj = () => {
    dispatch({
      type: "UMNOJ",
      payload: { num1: input1, num2: input2 },
    });
  };
  const razd = () => {
    dispatch({
      type: "RAZD",
      payload: { num1: input1, num2: input2 },
    });
  };
  return (
    <div>
      <input
        type="number"
        placeholder="Введите число"
        onChange={(event) => setInput1(event.target.value)}
      />
      <input
        type="number"
        placeholder="Введите число"
        onChange={(e) => setInput2(e.target.value)}
      />
      <div>
        <button className="plus" onClick={plus}>
          +
        </button>
        <button className="minus" onClick={minus}>
          -
        </button>
        <button className="umnoj" onClick={umnoj}>
          *
        </button>
        <button className="razd" onClick={razd}>
          /
        </button>
      </div>
      <p>{result}</p>
    </div>
  );
};

export default MainPage;
