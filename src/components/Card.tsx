import React from "react";

interface CardArgs {
    title: string;
    description: string;
}

const Card = (args: CardArgs) => {
    return (
        <div className="bg-white rounded shadow border p-6 w-64">
            <h5 className="text-3xl font-bold text-gray-500 mb-4 mt-0">{args.title}</h5>
            <p className="text-gray-500 text-sm">{args.description}</p>
        </div>
    )
}
export default Card;
