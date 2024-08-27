import { useStore } from "./store/store";
import "./App.css";
import FormDataRange from "./FormDataRange";
import Balance from "./Balance";
import StatTasks from "./StatTasks";
import Tasks from "./Tasks";
import StatPayments from "./StatPayments";
import Payments from "./Payments";
import filtredByPeriod from "./helpres/filtredByPeriod";

function App() {
  const [tasksAll, paymentsAll, dateRange] = useStore((state) => [
    state.tasks,
    state.payments,
    state.dateRange,
  ]);

  const [startDateRange, endDateRange] = dateRange;

  const tasks = filtredByPeriod(tasksAll, startDateRange, endDateRange);
  const payments = filtredByPeriod(paymentsAll, startDateRange, endDateRange);

  return (
    <>
      <h1>KOSHEL</h1>
      <FormDataRange />
      <Balance tasks={tasks} payments={payments} />
      <Tasks tasks={tasks} />
      <StatTasks
        startDateRange={startDateRange}
        endDateRange={endDateRange}
        tasksAll={tasks}
      />
      <Payments payments={payments} />
      <StatPayments
        startDateRange={startDateRange}
        endDateRange={endDateRange}
        paymentsAll={payments}
      />
    </>
  );
}

export default App;
