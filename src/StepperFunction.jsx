import { useState } from "react";
import Buttons from "./Buttons";
import Stepper from "./Stepper";
import Title from "./Title";
import Description from "./Description";

const StepperFunction = () => {
  const [count, setCount] = useState(1);
  const handleClick = (direction) => {
    console.log(count);
    if (direction == -1) {
      setCount((prev) => (prev - 1 > 0 ? prev - 1 : 1));
      return;
    }
    setCount((prev) => (prev + 1 < 6 ? prev + 1 : 5));
  };
  return (
    <>
      <h1 className="pt-9 text-center font-bold text-5xl">Stepper</h1>
      <Stepper count={count} />
      <Title />
      <Description count = {count}/>
      <Buttons count={count} handleClick={handleClick} />
    </>
  );
};

export default StepperFunction;
