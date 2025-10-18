import { useState } from "react";
import "./App.css";
import AppInput from "./AppInput";

function App() {
  const [isPurple, setIsPurple] = useState("");
  const [textColor, setTextColor] = useState("");

  const [size, setSize] = useState(150);
  const [rotate, setRotate] = useState(0);

  const circleStyles = {
    height: `${size}px`,
    width: `${size}px`,
    lineHeight: `${size}px`,
    transform: `rotate(${rotate}deg)`,
  };

  return (
    <main>
      <label>
        Purple
        <input
          type="checkbox"
          value={isPurple}
          onChange={() => setIsPurple(!isPurple)}
        />
      </label>

      <label>
        Text Color
        <select
          onChange={(e) => setTextColor(e.target.value)}
          value={textColor}
        >
          <option value="" selected>
            White
          </option>
          <option value="text-black">Black</option>
          <option value="text-orange">Orange</option>
        </select>
      </label>

      <label>
        Circle Size
        <AppInput value={size} setState={setSize} />
      </label>

      <label>
        Circle Rotate
        <AppInput value={rotate} setState={setRotate} />
      </label>
      <div
        className={`circle ${isPurple ? "purple" : ""}${textColor}`}
        style={circleStyles}
      >
        Hi!
      </div>
    </main>
  );
}

export default App;
