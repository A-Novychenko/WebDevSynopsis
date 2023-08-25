import {getAllPosts} from "@/services/postServices";
import Link from "next/link";

const ReactPage = async () => {
  const {data} = await getAllPosts("node");
  // console.log("data", data);
  return (
    <>
      <h1 style={{textAlign: "center"}}>NODE-PAGE</h1>
      <ul>
        {data.posts &&
          data.posts.map(({_id, title}: Posts) => {
            return (
              <li key={_id}>
                <Link href={`/synopsis/node/${_id}`} style={{color: "white"}}>
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ReactPage;
