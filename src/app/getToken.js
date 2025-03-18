import { getTokenAndSetCookie } from "./actions";
import { redirect } from "next/navigation";
import PassToken from "./smallchild";

export default async function ServerComponent({ searchParams }) {
  const { token, lang } = searchParams || {};
  console.log(token);
  // Only attempt to get token if one was provided
  let cunextoken = null;
  if (token) {
    cunextoken = await getTokenAndSetCookie(token);
  }
  const authtoken = cunextoken.token;
  console.log(authtoken);
  return (
    <div>
      <h2>Server Component</h2>
      <p>Token: {token ? "Received" : "Not provided"}</p>
      <p>Language: {lang || "Not provided"}</p>
      <p>
        Status:{" "}
        {cunextoken?.error ? `Error: ${cunextoken.error}` : "Token processed"}
      </p>
      <PassToken name="token" arg={authtoken} />
      <PassToken name="lang" arg={lang} />
    </div>
  );
}
