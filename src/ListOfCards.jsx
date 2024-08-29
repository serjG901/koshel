/* eslint-disable react/prop-types */
import StatTasks from "./StatTasks";
import PopoverTask from "./PopoverTask";

export default function ListOfCards({
  listName,
  items,
  typeOfSort = "",
  search = "",
}) {
  let itemDate = "";
  return (
    <details>
      <summary>{listName}</summary>

      <StatTasks tasks={items} />

      <div className='items'>
        {!items.length ||
          items
            .toSorted((item1, item2) => {
              switch (typeOfSort) {
                case "dateUp":
                  return (
                    Date.parse(new Date(item2.date)) -
                    Date.parse(new Date(item1.date))
                  );
                case "datedaown":
                  return (
                    Date.parse(new Date(item1.date)) -
                    Date.parse(new Date(item2.date))
                  );
                default:
                  return (
                    Date.parse(new Date(item2.date)) -
                    Date.parse(new Date(item1.date))
                  );
              }
            })
            .map((item) => {
              let first = false;
              if (!itemDate) (itemDate = item.date), (first = true);
              let equal = item.date === itemDate;
              if (!equal) itemDate = item.date;
              return (
                <>
                  {!equal ? (
                    <div className='break-line'>{item.date}</div>
                  ) : first ? (
                    <div className='break-line'>{item.date}</div>
                  ) : null}
                  <PopoverTask key={item.id} task={item} />
                </>
              );
            })}
      </div>
    </details>
  );
}
