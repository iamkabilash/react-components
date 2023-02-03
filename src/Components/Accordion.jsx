import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (selectedIndex) => {
    if (expandedIndex === selectedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(selectedIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
      </span>
    );
    return (
      <div key={item.id}>
        <div
          className="flex p-3 bg-gray-500 border-b items-center justify-between cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return (
    <div className="border-x border-t rounded text-white">{renderedItems}</div>
  );
}

export default Accordion;
