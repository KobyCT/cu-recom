// app/allproduct.js
"use client";

import Product from "../component/card";
import { getCookie } from "cookies-next";

export default  function Products() {
  // Retrieve token from cookies
  const token = getCookie("token")
 return(<h1>{token}</h1>
  );
}
