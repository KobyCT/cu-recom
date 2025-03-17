import { getTokenAndSetCookie } from "./actions";

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
  async function name() {
    fetch("http://localhost:3000//api/set-cookie?name=theme&value=dark")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  const res = await name();

  return (
    <div>
      <h2>Server Component</h2>
      <p>Token: {token ? "Received" : "Not provided"}</p>
      <p>Language: {lang || "Not provided"}</p>
      <p>
        Status:{" "}
        {cunextoken?.error ? `Error: ${cunextoken.error}` : "Token processed"}
      </p>
    </div>
  );
}
