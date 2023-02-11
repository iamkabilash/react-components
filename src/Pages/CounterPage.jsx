import { useState } from "react";
import Button from "../Components/Button";
import Panel from "../Components/Panel";

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const handleChange = (event) => {
    setValueToAdd(parseInt(event.target.value) || 0);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setCount(count + valueToAdd);
    setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row gap-2">
        <Button primary onClick={increment}>
          Increment
        </Button>
        <Button danger onClick={decrement}>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>
        <input
          type="number"
          onChange={handleChange}
          value={valueToAdd || ""}
          className="p-1 m-3 bg-gray-50 border border-gray-300 rounded"
        />
        <Button warning>Add it</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
