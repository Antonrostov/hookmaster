import React, { useEffect } from "react";
import { useStateValue } from "components/StateProvider";
function Example() {
  const [state, setState] = useStateValue();
  function increment() {
    setState({
      counter: state.counter + 1
    });
  }
  useEffect(() => {
    const intervalID = window.setInterval(increment, 1000);
    return () => {
      window.clearInterval(intervalID);
    };
  });
  return (
    <div>
      <p>You clicked {state.counter} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
}
export default Example;
