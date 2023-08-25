import {getAllPosts} from "@/services/postServices";
import Link from "next/link";

const ReactPage = async () => {
  const {data} = await getAllPosts("react");
  // console.log("data", data);
  return (
    <>
      <h1 style={{textAlign: "center"}}>REACT-PAGE</h1>
      <ul>
        {data.posts &&
          data.posts.map(({_id, title}: Posts) => {
            return (
              <li key={_id}>
                <Link href={`/synopsis/react/${_id}`} style={{color: "white"}}>
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
