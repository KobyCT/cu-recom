// ServerComponentWrapper.jsx (Client Component)
"use client";

import { useState, useEffect } from "react";
import ServerComponent from "./getToken";
import { redirect } from "next/navigation";

export default function ServerComponentWrapper({ para }) {
  useEffect(() => {
    redirect("/home");
  }, []);
  // Function to be called when server component is loaded

  return (
    <div>
      <ServerComponent searchParams={para} />
    </div>
  );
}
