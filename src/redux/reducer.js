const initialState = {
  result: 0,
};

export const reducer = (state = initialState, action) => {
  if (action.type === "PLUS") {
    if (action.payload.num1 === "" || action.payload.num2 === "") {
      return { ...state, result: "Введите число" };
    }
    return { ...state, result: +action.payload.num1 + +action.payload.num2 };
  } else if (action.type === "MINUS") {
    if (action.payload.num1 === "" || action.payload.num2 === "") {
      return { ...state, result: "Введите число" };
    }
    return { ...state, result: +action.payload.num1 - +action.payload.num2 };
  } else if (action.type === "UMNOJ") {
    if (action.payload.num1 === "" || action.payload.num2 === "") {
      return { ...state, result: "Введите число" };
    }
    return { ...state, result: +action.payload.num1 * +action.payload.num2 };
  } else if (action.type === "RAZD") {
    if (action.payload.num1 === "" || action.payload.num2 === "") {
      return { ...state, result: "Введите число" };
    }
    return { ...state, result: +action.payload.num1 / +action.payload.num2 };
  }
  return state;
};
