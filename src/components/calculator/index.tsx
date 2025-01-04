import { truncate } from "fs";
import { Fragment, JSX, useState, useEffect } from "react";

export default function Calculator(): JSX.Element {

    const [currentValue, setCurrentValue] = useState<string>("0");
    const [prevValue, setPrevValue] = useState<string | null>(null);
    const [operator, steOperator] = useState<string | null>(null);
    const [isEnteringNewValue, setIsEnteringNewValue] = useState<boolean>(false);

    const truncateValue = (value: string): string => {
        const maxDigits = 15; 
        return value.length > maxDigits ? value.slice(0, maxDigits) : value;
      };

    const addCommas = (value: string): string => {
        const truncatedValue = truncateValue(value);
        if (truncatedValue.includes(".")) {
          const [integerPart, decimalPart] = truncatedValue.split(".");
          return parseInt(integerPart).toLocaleString() + "." + decimalPart;
        }
        return parseInt(truncatedValue).toLocaleString();
      };
    
    const handleNumberClick = (value: string) => {
        if (currentValue === "0" || isEnteringNewValue)  {
            setCurrentValue(value);
            setIsEnteringNewValue(false)
        } else {
            setCurrentValue(currentValue + value);
        }
    }

    const handleOperatorClick = (selectedOperator: string) => {
        if (operator && prevValue !== null) {
            const result = calculate(prevValue, operator, currentValue);
            setPrevValue(result.toString());
            setCurrentValue(result.toString());
        } else {
            setPrevValue(currentValue);
            
        }
        steOperator(selectedOperator);
        setIsEnteringNewValue(true);
    }

    const handleEqualClick = () => {
        if (operator && prevValue !== null) {
            const result = calculate(prevValue, operator, currentValue);
            setCurrentValue(result.toString());
            setPrevValue(null);
            steOperator(null);
        }

    }

    const handleClear = () => {
        setCurrentValue('0');
        setPrevValue(null);
        steOperator(null);
    }

    const handleDelete = () => {
        if (currentValue.length > 1) {
            setCurrentValue(currentValue.slice(0, -1));
        } else {
            setCurrentValue('0');
        }
    };

    const handleDecimal = () => {
        if (!currentValue.includes('.')) {
            setCurrentValue(currentValue + '.');
        }
    };

    const calculate = (n1: string, operator: string, n2: string): number => {
        const firstNum = parseFloat(n1);
        const secondNum = parseFloat(n2);

        switch (operator) {
            case "add":
                return firstNum + secondNum;
            case 'subtract':
                return firstNum - secondNum;
            case 'multiply':
                return firstNum * secondNum;
            case 'divide':
                return secondNum !== 0 ? firstNum / secondNum : NaN;
            default:
                return 0;
        }
    }


    return (
        <Fragment>
            <div className="calculator">
                <div className="display flex justify-end mx-5 my-5 p-5 rounded-lg">
                    <div className="displayCurrent text-3xl lg:text-4xl overflow-hidden text-ellipsis whitespace-nowrap" id="displayValue">{addCommas(currentValue)}</div>
                </div>
                <div className="calculatorKeys grid grid-cols-4 lg:p-4 p-2  mt-[1rem] mx-5 rounded-lg">
                    <button className="buttonNumber text-lg lg:text-3xl m-2.5 p-2" onClick={() => handleNumberClick('7')}>7</button>
                    <button className="buttonNumber text-lg lg:text-3xl m-2.5 p-2" onClick={() => handleNumberClick('8')}>8</button>
                    <button className="buttonNumber  text-lg lg:text-3xl m-2.5 p-2" onClick={() => handleNumberClick('9')}>9</button>
                    <button className="uppercase buttonNumber  m-2.5 text-lg lg:text-3xl p-2" id="delete" onClick={handleDelete}>del</button>
                    <button className=" buttonNumber  text-lg lg:text-3xl m-2.5 p-2" onClick={() => handleNumberClick('4')}>4</button>
                    <button className=" buttonNumber  text-lg lg:text-3xl m-2.5 p-2" onClick={() => handleNumberClick('5')}>5</button>
                    <button className=" buttonNumber  text-lg lg:text-3xl m-2.5 p-2" onClick={() => handleNumberClick('6')}>6</button>
                    <button className=" buttonNumber  text-lg lg:text-3xl m-2.5 p-2" onClick={() => handleOperatorClick('add')}>+</button>
                    <button className=" buttonNumber  text-lg lg:text-3xl m-2.5 p-2" onClick={() => handleNumberClick('1')}>1</button>
                    <button className=" buttonNumber  text-lg lg:text-3xl m-2.5 p-2" onClick={() => handleNumberClick('2')}>2</button>
                    <button className=" buttonNumber  text-lg lg:text-3xl m-2.5 p-2" onClick={() => handleNumberClick('3')}>3</button>
                    <button className=" buttonNumber  text-lg lg:text-3xl m-2.5 p-2" onClick={() => handleOperatorClick('subtract')}>-</button>
                    <button className=" buttonNumber  text-lg lg:text-3xl m-2.5 p-2" id="dot" onClick={handleDecimal}>.</button>
                    <button className=" buttonNumber  text-lg lg:text-3xl m-2.5 p-2" onClick={() => handleNumberClick('0')}>0</button>
                    <button className=" buttonNumber  text-lg lg:text-3xl m-2.5 p-2" onClick={() => handleOperatorClick('divide')}>/</button>
                    <button className=" buttonNumber  text-lg lg:text-3xl m-2.5 p-2" onClick={() => handleOperatorClick('multiply')}>&times;</button>
                    <button className="uppercase buttonNumber  m-2.5 text-lg lg:text-3xl col-span-2 p-2" id="reset" onClick={handleClear}>reset</button>
                    <button className="buttonNumber  text-lg lg:text-3xl m-2.5 col-span-2 p-2" id="equal" onClick={handleEqualClick}>=</button>
                </div>
            </div>
        </Fragment>
    )
}