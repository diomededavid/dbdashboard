import React from "react";
interface CardArgs {
  title: string;
  body: string;
}

const CardList = (args: CardArgs) => {
  return (
    <div className="bg-white rounded shadow border p-6 w-full">
      <h1>{args.title}</h1>
    </div>
  );
};
export default CardList;
