import { Fragment } from "react";

function Table({ data, config }) {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    } else {
      return (
        <th key={column.label} className="px-5">
          {column.label}
        </th>
      );
    }
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-3 text-center" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr key={rowData.name} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  return (
    <div className="text-white">
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">{renderedHeaders}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
}

export default Table;
