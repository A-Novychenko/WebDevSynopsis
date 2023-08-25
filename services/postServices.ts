export const addPost = async (data: AddPostData) => {
  try {
    const resp = await fetch("http://localhost:3001/api/posts/", {
      method: "POST",
      body: JSON.stringify({...data}),
      headers: {"Content-Type": "application/json"},
    });
    return resp.json();
  } catch (e) {
    console.log("e", e);
  }
};
export const getPosts = async (stack: string) => {
  try {
    const resp = await fetch(`http://localhost:3001/api/posts?stack=${stack}`);
    return resp.json();
  } catch (e) {
    console.log("e", e);
  }
};
