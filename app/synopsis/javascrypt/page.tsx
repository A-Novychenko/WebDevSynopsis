import {getPosts} from "@/services/postServices";
import Link from "next/link";

const JavaScryptPage = async () => {
  const {data} = await getPosts("js");
  console.log("data", data);
  return (
    <>
      <h1 style={{textAlign: "center"}}>JavaScryptPage</h1>
      <ul>
        {data.posts &&
          data.posts.map(({_id, title}: Posts) => {
            return (
              <li key={_id}>
                <Link href="" style={{color: "white"}}>
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default JavaScryptPage;
