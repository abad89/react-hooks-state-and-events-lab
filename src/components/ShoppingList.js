import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filteredCat, setFilteredCat] = useState("All")

  function handleChangeFilter(event) {
    setFilteredCat(event.target.value)
  }

  const itemsList = items.filter((item) => {
    if (filteredCat === "All") return true
    return item.category === filteredCat
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChangeFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
