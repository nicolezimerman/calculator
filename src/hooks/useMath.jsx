import { useMemo, useState } from "react";
import calc from "../helpers/math.js";

function useMath() {
  const [actualValue, setActualValue] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [total, setTotal] = useState("");
  const [operator, setOperator] = useState("");

  //Create Flag to see what was the last movement?
  const [lastMovement, setLastMovement] = useState(null);

  const onClickNumber = (num) => {
    setActualValue((prevValue) => {
      if (prevValue === "") {
        return num;
      }
      return `${prevValue}${num}`;
    });
    setLastMovement("number");
  };

  const onClickPoint = () => {
    setActualValue((prevValue) => {
      if (prevValue === "") {
        return "0.";
      } else if (prevValue.includes(".")) {
        return prevValue;
      } else {
        return `${prevValue}.`;
      }
    });
  };

  const onClickOperator = (selectedOperator) => {
    if (operator !== "") {
      const newSubTotal = calc(
        parseFloat(subTotal),
        parseFloat(actualValue),
        operator
      );
      setSubTotal(newSubTotal.toFixed(2));
      setTotal("");
    } else {
      setSubTotal(actualValue);
    }
    setOperator(selectedOperator);
    setActualValue("");
    setLastMovement("operator");
  };

  const onClickTotal = () => {
    const result = calc(
      parseFloat(subTotal),
      parseFloat(actualValue),
      operator
    );

    setTotal(result.toFixed(2));
    setLastMovement("total");
  };

  const clearAll = () => {
    setActualValue("");
    setSubTotal("");
    setTotal("");
    setOperator("");
    setLastMovement(null);
  };

  const showTotal = useMemo(() => {
    if (lastMovement === "total") {
      return total;
    }
    if (lastMovement === "operator") {
      return subTotal;
    }
    return actualValue;
  }, [lastMovement]);

  const showSubTotal = useMemo(() => {
    return `${subTotal} ${operator} ${total && `${actualValue} =`}`;
  }, [total, subTotal, operator]);

  return {
    showSubTotal,
    showTotal,
    onClickNumber,
    onClickPoint,
    onClickOperator,
    onClickTotal,
    clearAll,
  };
}
export default useMath;
