/* const calc = (operator) => {
  return (num1, num2) =>{
    const parsedNumber1 = parseFloat(num1);
    const parsedNumber2 = parseFloat(num2);

  }
}
 */
const calc = (num1, num2, operator) => {
  const parsedNumber1 = parseFloat(num1);
  const parsedNumber2 = parseFloat(num2);

  if (operator === "+") {
    return parsedNumber1 + parsedNumber2;
  } else if (operator === "-") {
    return parsedNumber1 - parsedNumber2;
  } else if (operator === "x") {
    return parsedNumber1 * parsedNumber2;
  } else if (operator === "/") {
    return parsedNumber1 / parsedNumber2;
  }
};

export default calc;
