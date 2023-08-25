import {getAllPosts} from "@/services/postServices";
import Link from "next/link";

const ReactNativePage = async () => {
  const {data} = await getAllPosts("reactnative");
  // console.log("data", data);
  return (
    <>
      <h1 style={{textAlign: "center"}}>REACT-NATIVE-PAGE</h1>
      <ul>
        {data.posts &&
          data.posts.map(({_id, title}: Posts) => {
            return (
              <li key={_id}>
                <Link
                  href={`/synopsis/reactnative/${_id}`}
                  style={{color: "white"}}
                >
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ReactNativePage;
