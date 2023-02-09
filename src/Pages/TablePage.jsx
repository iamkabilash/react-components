import Table from "../Components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-green-500", score: 1 },
    { name: "Lime", color: "bg-yellow-500", score: 8 },
  ];
  return <Table data={data} />;
}

export default TablePage;
