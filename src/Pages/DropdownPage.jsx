import { useState } from "react";
import Dropdown from "../Components/Dropdown";

function DropdownPage() {
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Orange", value: "orange" },
    { label: "Gray", value: "gray" },
  ];

  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  return (
    <Dropdown options={options} value={selection} onChange={handleSelect} />
  );
}

export default DropdownPage;
