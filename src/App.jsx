import { useStore } from "./store/store";
import "./App.css";
import FormAddTask from "./FormAddTask";
import PopoverTask from "./PopoverTask";
import FormAddPayment from "./FormAddPayment";
import PopoverPayment from "./PopoverPayment";
import FormDataRange from "./FormDataRange";
import Balance from "./Balance";

function App() {
  const [tasksAll, paymentsAll, dateRange] = useStore((state) => [
    state.tasks,
    state.payments,
    state.dateRange,
  ]);

  const [startDateRange, endDateRange] = dateRange;

  const period = endDateRange - startDateRange;

  const tasks =
    period < 0 || !endDateRange
      ? tasksAll
      : tasksAll.filter((task) => {
          console.log(startDateRange, Date.parse(task.date), endDateRange);
          console.log(
            Date.parse(task.date) >= startDateRange &&
              Date.parse(task.date) <= endDateRange
          );
          return (
            Date.parse(task.date) >= startDateRange &&
            Date.parse(task.date) <= endDateRange
          );
        });

  const payments =
    period < 0 || !endDateRange
      ? paymentsAll
      : paymentsAll.filter((payment) => {
          return (
            Date.parse(payment.date) >= startDateRange &&
            Date.parse(payment.date) <= endDateRange
          );
        });

  const sumTasks = tasks
    .filter((task) => task.confirm)
    .reduce((acc, a) => acc + +a.cost, 0);

  const sumPayments = payments
    .filter((payment) => payment.confirm)
    .reduce((acc, a) => acc + +a.amount, 0);

  const sumTasksNochecked = tasks
    .filter((task) => !task.confirm)
    .reduce((acc, a) => acc + +a.cost, 0);

  const sumPaymentsNochecked = payments
    .filter((payment) => !payment.confirm)
    .reduce((acc, a) => acc + +a.amount, 0);

  const statTasks = Object.entries(
    Object.groupBy(tasks, ({ description }) => description)
  )
    .map((desk) => {
      return [
        desk[0],
        desk[1].reduce((acc, task) => (acc.push(task.cost), acc), []),
      ];
    })
    .map((desk) => {
      return (
        <div key={desk[0]}>
          {desk[0]}: {desk[1].join(", ")} ={" "}
          {desk[1].reduce((acc, cost) => acc + +cost, 0)}
        </div>
      );
    });

  const statPayments = Object.entries(
    Object.groupBy(payments, ({ description }) => description)
  )
    .map((desk) => {
      return [
        desk[0],
        desk[1].reduce((acc, payment) => (acc.push(payment.amount), acc), []),
      ];
    })
    .map((desk) => {
      return (
        <div key={desk[0]}>
          {desk[0]}: {desk[1].join(", ")} ={" "}
          {desk[1].reduce((acc, cost) => acc + +cost, 0)}
        </div>
      );
    });

  return (
    <>
      <h1>KOSHEL</h1>
      <FormDataRange />
      <Balance
        sumTasks={sumTasks}
        sumPayments={sumPayments}
        sumTasksNochecked={sumTasksNochecked}
        sumPaymentsNochecked={sumPaymentsNochecked}
      />
      <details>
        <summary>Затраты</summary>
        <FormAddTask />
        <div className='tasks'>
          {!tasks.length ||
            tasks
              .toSorted(
                (task1, task2) =>
                  Date.parse(new Date(task1.date)) -
                  Date.parse(new Date(task2.date))
              )
              .map((task) => {
                return <PopoverTask key={task.id} task={task} />;
              })}
        </div>
      </details>
      <div>
        <div>
          Статистика
          {period === 0 && endDateRange
            ? ` за ${new Date(startDateRange).toLocaleDateString()}`
            : period > 0
            ? ` c ${new Date(
                startDateRange
              ).toLocaleDateString()} по ${new Date(
                endDateRange
              ).toLocaleDateString()}`
            : ""}
        </div>
        <div>(предмет/услуга: затраты = общая сумма)</div>
        {statTasks}
        <div>всего оплат: {tasks.length}</div>
      </div>
      <details>
        <summary>Платежи</summary>
        <FormAddPayment />
        <div className='payments'>
          {!payments.length ||
            payments
              .toSorted(
                (payment1, payment2) =>
                  Date.parse(new Date(payment1.date)) -
                  Date.parse(new Date(payment2.date))
              )
              .map((payment) => {
                return <PopoverPayment key={payment.id} payment={payment} />;
              })}
        </div>
      </details>
      <div>
        <div>
          Статистика
          {period === 0 && endDateRange
            ? ` за ${new Date(startDateRange).toLocaleDateString()}`
            : period > 0
            ? ` c ${new Date(
                startDateRange
              ).toLocaleDateString()} по ${new Date(
                endDateRange
              ).toLocaleDateString()}`
            : ""}
        </div>
        <div>(За что / наличка / безнал: платежи = сумма)</div>
        {statPayments}
        <div>всего платежей: {payments.length}</div>
      </div>
    </>
  );
}

export default App;
