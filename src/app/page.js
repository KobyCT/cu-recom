import ServerComponent from "./getToken";
import Redirect from "./check";

export default async function Main({ searchParams }) {
  const para = await searchParams;
  return (
    <div>
      <ServerComponent searchParams={para} />
    </div>
  );
}
