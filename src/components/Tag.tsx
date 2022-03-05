import React from "react";


interface TagArgs {
    status?: string;
    statusText: string
}

const Tag = (args: TagArgs) => {
    return(
        <div className="inline-block bg-pink-500 py-1 px-2 rounded border-pink-700 font-medium">
            <p className="text-xs">{args.statusText}</p>
        </div>
    )
}
export default Tag;
