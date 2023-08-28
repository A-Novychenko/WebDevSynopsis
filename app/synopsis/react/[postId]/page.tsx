import {getAllPosts, getPost} from "@/services/postServices";

import styles from "./page.module.css";

const ReactItemPage = async ({params: {postId}}: TitleParams) => {
  const {post} = await getPost(postId);

  const {title, description} = post;
  return (
    post && (
      <section>
        <h1 className={styles.title}>{title}</h1>
        <p>{description}</p>
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
