/* eslint-disable react/prop-types */
import { useStore } from "./store/store";

export default function FormAddItem({ formName, type }) {
  const [addItem] = useStore((state) => [state.addItem]);

  const handleSubmitTask = (e) => {
    e.preventDefault();
    addItem(
      {
        date: e.target["task-date"].value,
        amount: Math.trunc(e.target["task-amount"].value * 100),
        description: e.target["task-description"].value,
        confirm: e.target["task-confirm"].checked,
      },
      type
    );
    document.getElementById("add-task").reset();
  };

  return (
    <details>
      <summary>{formName} - записать</summary>
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
            <span>Описание</span>
            <input type='text' id='task-description' required />
          </label>
          <label htmlFor='task-confirm'>
            Проведена
            <input type='checkbox' id='task-confirm' checked />
          </label>
        </div>
        <button type='submit'>Записать</button>
      </form>
    </details>
  );
}
