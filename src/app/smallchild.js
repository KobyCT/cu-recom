"use client";

import { setCookie } from "cookies-next";

export default function PassToken({ name, arg }) {
  setCookie(name, arg);

  return <div></div>;
}
