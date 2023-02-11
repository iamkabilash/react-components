import Table from "./Table";
import { CgArrowsExchangeAltV, CgArrowUp, CgArrowDown } from "react-icons/cg";
import useSort from "../Hooks/useSort";

function SortableTable(props) {
  const { config, data } = props;

  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

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
            onClick={() => setSortColumn(column.label)}
            className="flex flex-row items-center cursor-pointer hover:bg-gray-500"
          >
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </th>
        ),
      };
    }
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

export default SortableTable;
