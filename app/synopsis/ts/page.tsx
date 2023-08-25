import {getAllPosts} from "@/services/postServices";
import Link from "next/link";

const TSPage = async () => {
  const {data} = await getAllPosts("ts");
  // console.log("data", data);
  return (
    <>
      <h1 style={{textAlign: "center"}}>TS-PAGE</h1>
      <ul>
        {data?.posts &&
          data?.posts.map(({_id, title}: Posts) => {
            return (
              <li key={_id}>
                <Link href={`/synopsis/ts/${_id}`} style={{color: "white"}}>
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default TSPage;
