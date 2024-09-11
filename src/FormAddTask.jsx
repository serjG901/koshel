import { useStore } from "./store/store";
import numMulty100 from "./helpers/numMulty100";

export default function FormAddTask() {
  const [addTask] = useStore((state) => [state.addTask]);

  const handleSubmitTask = (e) => {
    e.preventDefault();
    addTask({
      date: e.target["task-date"].value,
      amount: numMulty100(e.target["task-amount"].value),
      description: e.target["task-description"].value,
      confirm: e.target["task-confirm"].checked,
    });
    document.getElementById("add-task").reset();
  };

  return (
    <details>
      <summary>Добавить затрату</summary>
      <form action='submit' id='add-task' onSubmit={handleSubmitTask}>
        <div>
          <label htmlFor='task-date'>
            <span>Дата</span>
            <input type='date' id='task-date' required />
          </label>
          <label htmlFor='task-amount'>
            <span>Сумма</span>
            <input
              type='number'
              id='task-amount'
              required
              step='0.01'
              min='0.01'
            />
          </label>
          <label htmlFor='task-description'>
            <span>Предмет/Услуга</span>
            <input type='text' id='task-description' required />
          </label>
          <label htmlFor='task-confirm'>
            Подтверждено
            <input type='checkbox' id='task-confirm' defaultChecked={true} />
          </label>
        </div>
        <button type='submit'>Добавить оплату</button>
      </form>
    </details>
  );
}
