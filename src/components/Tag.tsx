import React from "react";


interface TagArgs {
    status?: string;
    statusText: string
}

const Tag = (args: TagArgs) => {
    return(
        <div className="inline-block bg-pink-500 p-0.5 rounded border-pink-700">
            <p className="text-sm">{args.statusText}</p>
        </div>
    )
}
export default Tag;
