/* eslint-disable react/prop-types */
import { useStore } from "../store/store";

export default function CardUpdate({ item, typeOfCard }) {
  const [updateItem] = useStore((state) => [state.updateItem]);

  const handleSubmitTaskUpdate = (e, id) => {
    e.preventDefault();
    updateItem(
      {
        id,
        date: e.target["task-date"].value,
        amount: e.target["task-amount"].value,
        description: e.target["task-description"].value,
        confirm: e.target["task-confirm"].checked,
      },
      typeOfCard
    );
    document.getElementById(`update-popover-${id}`).hidePopover();
  };
  return (
    <div popover='auto' id={`update-popover-${item.id}`} className='popover'>
      <form
        action='submit'
        id='update-task'
        onSubmit={(e) => handleSubmitTaskUpdate(e, item.id)}
      >
        <div>
          <label htmlFor='task-date'>
            <span>Дата</span>
            <input
              type='date'
              id='task-date'
              required
              defaultValue={item.date}
            />
          </label>
          <label htmlFor='task-cost'>
            <span>Сумма</span>
            <input
              type='number'
              id='task-cost'
              required
              step='0.01'
              min='0.01'
              defaultValue={item.cost}
            />
          </label>
          <label htmlFor='task-description'>
            <span>Предмет/Услуга</span>
            <input
              type='text'
              id='task-description'
              required
              defaultValue={item.description}
            />
          </label>
          <label htmlFor='task-confirm'>
            Подтверждено
            <input
              type='checkbox'
              id='task-confirm'
              defaultChecked={item.confirm}
            />
          </label>
        </div>
        <button type='submit'>Обновить оплату</button>
      </form>
    </div>
  );
}
