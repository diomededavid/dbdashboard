import React from "react";


interface CardArgs {
    children?: any;
}

const Card = (args: CardArgs) => {
    return (
        <div className="bg-white rounded shadow border p-2 w-64 text-left">

                         {args.children}
        </div>
    )
}
export default Card;
