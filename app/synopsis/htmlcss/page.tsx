import Link from "next/link";
import {getAllPosts} from "@/services/postServices";

const HtmlCssPage = async () => {
  const {data} = await getAllPosts("htmlcss");
  // console.log("data", data);
  return (
    <>
      <h1 style={{textAlign: "center"}}>HTML+CSS-PAGE</h1>
      <ul>
        {data.posts &&
          data.posts.map(({_id, title}: Posts) => {
            return (
              <li key={_id}>
                <Link
                  href={`/synopsis/htmlcss/${_id}`}
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

export default HtmlCssPage;
