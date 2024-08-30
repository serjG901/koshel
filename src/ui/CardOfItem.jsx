/* eslint-disable react/prop-types */
import CardUpdate from "./CardUpdate";

export default function CardOfItem({ item, typeOfCard, search }) {
  return (
    <div key={item.id} className='item'>
      <CardUpdate item={item} typeOfCard={typeOfCard} />
      <div className='date'>{item.date}</div>
      <div className='amount'>{item.amount}</div>
      <div className='description'>{item.description}</div>
      <div
        className='confirm'
        data-confirm={item.confirm ? "Confirm" : "Not confirm"}
      >
        {item.confirm ? "Подтверждена" : "Не подтверждена"}
      </div>
      <button className='update' popovertarget={`update-popover-${item.id}`}>
        Обновить
      </button>
    </div>
  );
}
