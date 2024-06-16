import React from "react";
export const Card = ({ name, age, gender }) => {
  if (gender === "female") {
    return (
      <main className="p-4 bg-rose-200 text-rose-600 rounded-xl">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Gender: {gender}</div>
      </main>
    );
  }
  return (
    <main className="p-4 bg-blue-200 text-blue-600 rounded-xl">
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Gender: {gender}</div>
    </main>
  );
};
