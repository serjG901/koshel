/* eslint-disable react/prop-types */
import sumByProperty from "../helpers/sumByProperty";

export default function Statistics({ items }) {
  const statItems = Object.entries(
    Object.groupBy(items, ({ description }) => description)
  )
    .map((desk) => {
      return [
        desk[0],
        desk[1].reduce((acc, item) => (acc.push(item.amount), acc), []),
      ];
    })
    .sort((deskA, deskB) => {
      const nameA = deskA[0].toUpperCase();
      const nameB = deskB[0].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    .map((desk) => {
      return (
        <div key={desk[0]}>
          <div>{desk[0]}</div>
          <div>{desk[1].join(", ")}</div>
          <div> {desk[1].reduce((acc, amount) => acc + +amount, 0)}</div>
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
