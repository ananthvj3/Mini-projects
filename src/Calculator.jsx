import React, { useState } from "react";

const Calculator = () => {
  const keys = [
    "AC",
    "C",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    ".",
    "0",
    "EQUALS",
  ];

  const equalClass =
    "col-[span_2] bg-[#4ccdc6] text-[#1a261a] font-semibold hover:bg-[#4ccdc6]";

  const [showResult, setShowResult] = useState(false);
  const [display, setDisplay] = useState("");

  function calculateResult() {
    if (display.length !== 0) {
      try {
        let calcResult = eval(display);
        calcResult = parseFloat(calcResult.toFixed(3));
        setDisplay(calcResult.toString());
        setShowResult(true);
      } catch (error) {
        setDisplay("Error");
      }
    }
  }

  function handleSubmit(value) {
    setShowResult(false);

    if (value === "AC") setDisplay("");

    else if (value === "C") setDisplay(display.slice(0, -1));

    else if (value === "EQUALS") calculateResult();

    else if (isOperator(value)) {
      if (display === "" || isOperator(display[display.length - 1])) return;
      setDisplay(display + value);
    }

    else setDisplay(display + value);
  }

  function isOperator(char) {
    return ["*", "/", "%", "+", "-"].includes(char);
  }

  return (
    <section className="min-h-screen bg-[#2f3640] flex items-center justify-center">
      <div className="min-w-[320px] bg-black flex flex-col gap-4 p-4 rounded-2xl">

        <div className="text-[rgba(255,255,255,0.5)] overflow-x-auto bg-[#141414] min-h-[100px] flex items-end justify-end rounded-[10px]">
          <div
            className={`${
              showResult
                ? "text-[1.2rem] tracking-[2px] flex gap-[5px] items-center text-[rgba(255,255,255,0.5)] justify-end"
                : "text-[1.7rem]"
            }`}
          >
            {display || "0"}
          </div>
        </div>

        <div className="grid grid-cols-[repeat(4,1fr)] gap-[0.3rem]">
          {keys.map((item, index) => (
            <div
              key={index}
              className={`text-white bg-[#141414] flex cursor-pointer items-center justify-center
              p-4 rounded-[5px] hover:bg-[#4ccdc742] ${
                item === "EQUALS" ? equalClass : ""
              }`}
              onClick={() => handleSubmit(item)}
            >
              {item === "EQUALS" ? "=" : item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calculator;