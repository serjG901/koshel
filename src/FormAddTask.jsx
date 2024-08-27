import { useStore } from "./store/store";

export default function FormAddTask() {
  const [addTask] = useStore((state) => [state.addTask]);

  const handleSubmitTask = (e) => {
    e.preventDefault();
    addTask({
      date: e.target["task-date"].value,
      cost: e.target["task-cost"].value,
      description: e.target["task-description"].value,
      confirm: e.target["task-confirm"].checked,
    });
    document.getElementById("add-task").reset();
  };

  return (
    <details>
      <summary>Добавить оплату</summary>
      <form action='submit' id='add-task' onSubmit={handleSubmitTask}>
        <div>
          <label htmlFor='task-date'>
            <span>Дата</span>
            <input type='date' id='task-date' required />
          </label>
          <label htmlFor='task-cost'>
            <span>Сумма</span>
            <input
              type='number'
              id='task-cost'
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
            <input type='checkbox' id='task-confirm' />
          </label>
        </div>
        <button type='submit'>Добавить оплату</button>
      </form>
    </details>
  );
}
