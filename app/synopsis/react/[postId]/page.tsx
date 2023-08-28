import {getAllPosts, getPost} from "@/services/postServices";

import styles from "./page.module.css";

const ReactItemPage = async ({params: {postId}}: TitleParams) => {
  const {post} = await getPost(postId);

  const {title, description} = post;
  const section = description.split("\n");

  return (
    post && (
      <section>
        <h1 className={styles.title}>{title}</h1>
        {section && section.map((el: string, i: any) => <p key={i}>{el}</p>)}
      </section>
    )
  );
};

export async function generateStaticParams() {
  const {
    data: {posts},
  } = await getAllPosts("react");

  return posts.map(({_id}: {_id: string}) => ({postId: _id.toString()}));
}
export default ReactItemPage;
