import {getAllPosts, getPost} from "@/services/postServices";

import styles from "./page.module.css";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  PromiseLikeOfReactNode,
} from "react";

const TsItemPage = async ({params: {postId}}: TitleParams) => {
  const {post} = await getPost(postId);
  // console.log("respsssss", post);

  const {title, description} = post;

  const section = description.split("<br/>");

  console.log("section", section);

  return (
    post && (
      <section>
        <h1 className={styles.title}>{title}</h1>
        {/* <p>{section}</p> */}
        {section && section.map((el: string, i: any) => <p key={i}>{el}</p>)}
      </section>
    )
  );
};

export async function generateStaticParams() {
  const {
    data: {posts},
  } = await getAllPosts("other");

  return posts.map(({_id}: {_id: string}) => ({postId: _id.toString()}));
}
export default TsItemPage;
