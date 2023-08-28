import Link from "next/link";
import {getAllPosts} from "@/services/postServices";

const TSPage = async () => {
  const {data} = await getAllPosts("other");

  return (
    <>
      <h1 style={{textAlign: "center"}}>TS-PAGE</h1>
      <ul>
        {data?.posts &&
          data?.posts.map(({_id, title}: Posts) => {
            return (
              <li key={_id}>
                <Link href={`/synopsis/other/${_id}`} style={{color: "white"}}>
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
