// ServerComponentWrapper.jsx (Client Component)
"use client";

import { useState, useEffect } from "react";
import ServerComponent from "./getToken";
import Redirect from "/check";

export default async function ServerComponentWrapper({ para }) {
  const searchpara = await para;
  const [clientReady, setClientReady] = useState(false);
  useEffect(() => {
    setClientReady(true);
  }, []);
  // Function to be called when server component is loaded

  return (
    <div>
      <ServerComponent searchParams={para} />
      {clientReady && <Redirect />}
    </div>
  );
}
