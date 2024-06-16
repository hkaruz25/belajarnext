import React from "react";

export const Button = ({ variant, children }) => {
  if (variant === "secondary") {
    return <button className="bg-transparent border border-indigo-600 flex items-center text-indigo-600 p-2 rounded-xl gap-4">{variant}</button>;
  }
  return <button className="bg-indigo-600 flex items-center text-indigo-600 p-2 rounded-xl gap-4">{children}</button>;
};
