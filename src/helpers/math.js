/* const calc = (operator) => {
  return (num1, num2) =>{
    const parsedNumber1 = parseFloat(num1);
    const parsedNumber2 = parseFloat(num2);

  }
}
 */

const calc = (num1, num2, operator) => {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "x") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  }
};

export default calc;
