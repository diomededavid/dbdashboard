import React from "react";
interface CardArgs {
  children?: any;
}

const Card = (args: CardArgs) => {
  return (
    <div className="bg-white rounded shadow border p-6 w-full">
      <h1>Title</h1>
      {args.children}
    </div>
  );
};
export default Card;
