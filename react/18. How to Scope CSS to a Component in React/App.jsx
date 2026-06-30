import AppleCounter from "./components/AppleCounter";
import Counter from "./components/Counter";
const RightArrow = new URL("./assets/images/right-arrow.png", import.meta.url);
const LeftArrow = new URL("./assets/images/left-arrow.png", import.meta.url);
import { RestCountriesApi } from "./components/RestCountriesApi";

export default function App() {
  return (
    <div>
      {/* <Counter counterName="Timer"></Counter>
      <AppleCounter/> */}

      <RestCountriesApi/>
    </div>
  )
}



























