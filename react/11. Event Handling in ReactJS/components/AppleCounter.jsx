import AppleBasket from "./AppleBasket";
import Button from "./Button";
const LeftArrow = new URL("../assets/images/left-arrow.png", import.meta.url);
const ReftArrow = new URL("../assets/images/right-arrow.png", import.meta.url);
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const totalAppleCount = 10;
let rightAppleCount = 0;
let leftAppleCount = totalAppleCount - rightAppleCount;

const AppleCounter = () => {

  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      leftAppleCount++;
      rightAppleCount--;
      root.render(<AppleCounter />);
    }
  };

  const rifhtClickHandler = () => {
    if (leftAppleCount > 0) {
      leftAppleCount--;
      rightAppleCount++;
      root.render(<AppleCounter />);
    }
  };
  return (
    <>
      <section>
        <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
        <Button
          clickHandler={leftClickHandler}
          imgUrl={LeftArrow}
          buttonName="Left Arrow"
        />

        <Button
          clickHandler={rifhtClickHandler}
          imgUrl={ReftArrow}
          buttonName="Right Arrow"
        />
        <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />

        <button></button>
      </section>
      <p
        style={{
          textAlign: "center",
          marginTop: "32px",
        }}
      >
        <button
          onClick={() => {
            root.render(<AppleCounter />);
          }}
        >
          Re - Render
        </button>
      </p>
    </>
  );
};
export default AppleCounter;
