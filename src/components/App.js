import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  
  const [items, setItems] = useState(itemData);
  const [isLight, setIsLight] = useState(true)
  

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);
  console.log(isLight)
  function handleThemeClick() {
    setIsLight((isLight) => (!isLight))
  }
  
  return (
    <div className={"App " + (isLight? "light" : "dark")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleThemeClick}>{isLight?"Dark":"Light"} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
