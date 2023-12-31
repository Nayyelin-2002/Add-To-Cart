import React from "react";
import Card from "../components/Card";

let fruits = [
  {
    id: 1,
    name: "Apple",
    price: 12.98,
    describe: "fresh apple from thailand",
  },

  {
    id: 2,
    name: "Kiwi",
    price: 7.98,
    describe: "fresh kiwi from thailand",
  },
  {
    id: 3,
    name: "mango",
    price: 22.98,
    describe: "fresh mango from thailand",
  },
  {
    id: 4,
    name: "Orange",
    price: 20.98,
    describe: "fresh orange from thailand",
  },
];
function Body() {
  return (
    <section>
      {fruits.map((fruit) => {
        return <Card key={fruit.id} fruit={fruit} />;
      })}
    </section>
  );
}

export default Body;
