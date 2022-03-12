import React from "react";
interface CardArgs {
  children?: any;
}
const Avatar = (args: CardArgs) => {
  return <div className="avatar-group -space-x-6">{args.children}</div>;
};
export default Avatar;
