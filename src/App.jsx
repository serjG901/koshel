import "./App.css";

import { useStore } from "./store/store";

import FormDataRange from "./ui/FormDataRange";

import Balance from "./Balance";

import FormAddTask from "./FormAddTask";
import TasksChecked from "./TasksChecked";
import TasksNochecked from "./TasksNochecked";

import FormAddPayment from "./FormAddPayment";
import PaymentsChecked from "./PaymentsChecked";
import PaymentsNochecked from "./PaymentsNochecked";

import filtredByPeriod from "./helpers/filtredByPeriod";
import filtredByChecked from "./helpers/filtredByChecked";

function App() {
  const [tasksAll, paymentsAll, dateRange, updateTasks, updatePayments] =
    useStore((state) => [
      state.tasks,
      state.payments,
      state.dateRange,
      state.updateTasks,
      state.updatePayments,
    ]);

  const [startDateRange, endDateRange] = dateRange;

  const tasks = filtredByPeriod(tasksAll, startDateRange, endDateRange);
  const payments = filtredByPeriod(paymentsAll, startDateRange, endDateRange);

  const tasksChecked = filtredByChecked(tasks, true);
  const paymentsChecked = filtredByChecked(payments, true);

  const tasksNochecked = filtredByChecked(tasks, false);
  const paymentsNochecked = filtredByChecked(payments, false);
  /*  <button onClick={updateTasks}>update tasks</button>
      <button onClick={updatePayments}>update payments</button>*/
  return (
    <>
      <h1>KOSHEL</h1>
      
      <FormDataRange
        startDateRange={startDateRange}
        endDateRange={endDateRange}
      />

      <Balance
        tasksChecked={tasksChecked}
        paymentsChecked={paymentsChecked}
        tasksNochecked={tasksNochecked}
        paymentsNochecked={paymentsNochecked}
      />
      <div className='group'>
        <FormAddTask />
        <TasksChecked tasksChecked={tasksChecked} />
        <TasksNochecked tasksNochecked={tasksNochecked} />
      </div>

      <div className='group'>
        <FormAddPayment />
        <PaymentsChecked paymentsChecked={paymentsChecked} />
        <PaymentsNochecked paymentsNochecked={paymentsNochecked} />
      </div>
    </>
  );
}

export default App;
