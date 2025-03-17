import Show from "./servercomp";
import Home from "./clientcomp";
import ServerComponent from "./getToken";

export default function Index({searchParams}) {
  return (
    <>
    <ServerComponent searchParams={searchParams}/>
      <Home>
        <Show />
      </Home>
    </>
  );
}
