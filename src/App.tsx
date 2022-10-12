import Chart from "./components/Chart";
import Table from "./components/Table";
import { TableProvider } from "./provide/TableContext";

export default function App() {
  return (
    <TableProvider>
      <Chart />
      <Table />
    </TableProvider>
  )
}