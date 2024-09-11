/* eslint-disable react/prop-types */
import { useStore } from "./store/store";
import numStrMulty100 from "./helpers/numStrMulty100";
import NumberDiv100 from "./ui/NumberDiv100";
import numberWithDot from "./helpers/numberWithDot";

export default function PopoverTask({ task }) {
  const [updateTask] = useStore((state) => [state.updateTask]);

  const handleSubmitTaskUpdate = (e, id) => {
    e.preventDefault();
    updateTask({
      id,
      date: e.target["task-date"].value,
      amount: numStrMulty100(e.target["task-amount"].value),
      description: e.target["task-description"].value,
      confirm: e.target["task-confirm"].checked,
    });
    document.getElementById(`update-popover-${id}`).hidePopover();
  };

  return (
    <div key={task.id} className='task'>
      <div
        // eslint-disable-next-line react/no-unknown-property
        popover='auto'
        id={`update-popover-${task.id}`}
        className='popover'
      >
        <form
          action='submit'
          id='update-task'
          onSubmit={(e) => handleSubmitTaskUpdate(e, task.id)}
        >
          <div>
            <label htmlFor='task-date'>
              <span>Дата</span>
              <input
                type='date'
                id='task-date'
                required
                defaultValue={task.date}
              />
            </label>
            <label htmlFor='task-amount'>
              <span>Сумма</span>
              <input
                type='number'
                id='task-amount'
                required
                step='0.01'
                min='0.01'
                defaultValue={numberWithDot(task.amount)}
              />
            </label>
            <label htmlFor='task-description'>
              <span>Предмет/Услуга</span>
              <input
                type='text'
                id='task-description'
                required
                defaultValue={task.description}
              />
            </label>
            <label htmlFor='task-confirm'>
              Подтверждено
              <input
                type='checkbox'
                id='task-confirm'
                defaultChecked={task.confirm}
              />
            </label>
          </div>
          <button type='submit'>Обновить оплату</button>
        </form>
      </div>

      <div className='date'>{task.date}</div>
      <div className='amount'>
        <NumberDiv100>{task.amount}</NumberDiv100>
      </div>
      <div className='description'>{task.description}</div>
      <div
        className='confirm'
        data-confirm={task.confirm ? "Confirm" : "Not confirm"}
      >
        {task.confirm ? "Подтверждена" : "Не подтверждена"}
      </div>
      <button
        className='update'
        // eslint-disable-next-line react/no-unknown-property
        popovertarget={`update-popover-${task.id}`}
      >
        Обновить
      </button>
    </div>
  );
}
