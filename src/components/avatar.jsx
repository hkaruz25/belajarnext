import { userAgent } from "next/server";
import React from "react";

export const Avatar = ({ username }) => {
  return <div className=" flex items-center justify-center w-8 h-8 bg-indigo-500 text-white font-semibold rounded-full">{username.charAt(0)}</div>;
};
