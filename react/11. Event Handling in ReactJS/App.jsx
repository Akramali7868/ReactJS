import AppleCounter from "./components/AppleCounter";

const RightArrow = new URL("./assets/images/right-arrow.png", import.meta.url);
const LeftArrow = new URL("./assets/images/left-arrow.png", import.meta.url);

export default function App() {
  return (
    <div>
      <AppleCounter/>
    </div>
  )
}