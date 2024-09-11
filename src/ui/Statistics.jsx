/* eslint-disable react/prop-types */
import sumByProperty from "../helpers/sumByProperty";

const highlightTextBySearch = (text, search) => {

  const arr = text.split(search);

  return <span></span>
}

export default function Statistics({ items, search }) {

  const statItems = Object.entries(
    Object.groupBy(items, ({ description }) => description)
  )
    .map(([description, items]) => {
      return [
        description,
        items.reduce((acc, item) => (acc.push(item.amount), acc), []),
      ];
    })
    .sort((descriptionA, descriptionB) => {
      const a = descriptionA[0].toUpperCase();
      const b = descriptionB[0].toUpperCase();
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    })
    .map(([description, amounts]) => {
      return (
        <div key={description}>
          <div>{description}</div>
          <div>{amounts.join(", ")}</div>
          <div> {amounts.reduce((acc, amount) => acc + +amount, 0)}</div>
        </div>
      );
    });
  return (
    <details>
      <summary>Статистика</summary>
      <div className='statistic'>
        <div>
          <div>описание</div>
          <div>стоимости</div>
          <div>сумма</div>
        </div>
        {statItems}
        <div>
          <div>всего</div>
          <div>{items.length}</div>
          <div>{sumByProperty(items, "amount")}</div>
        </div>
      </div>
    </details>
  );
}
