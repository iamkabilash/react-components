import Table from "../Components/Table";
import SortableTable from "../Components/SortableTable";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-green-500", score: 1 },
    { name: "Lime", color: "bg-yellow-500", score: 8 },
  ];

  const config = [
    {
      label: "Fruits",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: "Name length",
      render: (fruit) => fruit.name.length,
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      <Table data={data} config={config} />
      <SortableTable data={data} config={config} />
    </div>
  );
}

export default TablePage;
