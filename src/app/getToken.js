import getTokenAndSetCookie from "./actions";

export default async function ServerComponent({ searchParams }) {
    const { token, lang } = searchParams || {};
    
    // Only attempt to get token if one was provided
    let cunextoken = null;
    if (token) {
      cunextoken = await getTokenAndSetCookie(token);
    }
    
    return (
      <div>
        <h2>Server Component</h2>
        <p>Token: {token ? "Received" : "Not provided"}</p>
        <p>Language: {lang || "Not provided"}</p>
        <p>Status: {cunextoken?.error ? `Error: ${cunextoken.error}` : "Token processed"}</p>
      </div>
    );
  }