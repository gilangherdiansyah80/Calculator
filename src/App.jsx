import { useEffect, useState } from "react";
import Button from "./components/Elements/Button";
import ElementButton from "./utils/ElementNumber";

const App = () => {
  const [expression, setExpression] = useState("");
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    setButtons(ElementButton);
  }, []);

  const handleClickButton = (value) => {
    if (value === "AC") {
      setExpression("");
      return;
    }

    if (value === "=") {
      try {
        const result = Function(`return ${expression}`)();
        setExpression(String(result));
      } catch (error) {
        setExpression(error);
      }

      return;
    }

    if (value === "%") {
      setExpression((prev) => prev + "/100");

      return;
    }

    if (value === "x") {
      setExpression((prev) => prev + "*");
      return;
    }

    if (value === ",") {
      setExpression((prev) => prev + ".");
      return;
    }

    if (value === "DEL") {
      setExpression((prev) => prev.slice(0, -1));
      return;
    }

    setExpression((prev) => prev + value);
  };

  return (
    <main className="flex justify-center items-center w-full h-screen">
      <div className="text-black text-4xl flex flex-col gap-y-3 justify-end md:justify-center md:items-center bg-black h-screen p-3 md:w-1/2 lg:w-1/6 md:h-fit md:rounded-3xl">
        <section>
          <input
            type="text"
            className="border border-black w-full p-3 rounded-xl"
            value={expression}
          />
        </section>
        <section className="grid grid-cols-4 gap-3">
          {buttons.map((item, index) => (
            <Button key={index} onClick={() => handleClickButton(item.value)}>
              {item.value}
            </Button>
          ))}
        </section>
      </div>
    </main>
  );
};

export default App;
