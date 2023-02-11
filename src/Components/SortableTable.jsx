import { useState } from "react";
import Table from "./Table";
import { CgArrowsExchangeAltV, CgArrowUp, CgArrowDown } from "react-icons/cg";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
    }
  };

  const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
      return <CgArrowsExchangeAltV />;
    }
    if (sortOrder === null) {
      return <CgArrowsExchangeAltV />;
    } else if (sortOrder === "asc") {
      return <CgArrowUp />;
    } else if (sortOrder === "desc") {
      return <CgArrowDown />;
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    } else {
      return {
        ...column,
        header: () => (
          <th
            onClick={() => handleClick(column.label)}
            className="flex flex-row items-center cursor-pointer hover:bg-gray-500"
          >
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </th>
        ),
      };
    }
  });

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

export default SortableTable;
