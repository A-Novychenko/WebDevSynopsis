// const {BACKEND_SERVER_URL} = process.env;
// app / api / route.js;

// export async function GET() {
//   const db = await myDB.connect({
//     host: process.env.DB_HOST,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASS,
//   });
//   // ...
// }

const BACKEND_SERVER_URL = "https://webdevsynopsis-api.onrender.com";

export const addPost = async (data: AddPostData) => {
  try {
    // console.log("BACKEND_SERVER_URL111", BACKEND_SERVER_URL);

    const resp = await fetch(`${BACKEND_SERVER_URL}/api/posts/`, {
      method: "POST",
      body: JSON.stringify({...data}),
      headers: {"Content-Type": "application/json"},
    });

    return await resp.json();
  } catch (e) {
    console.log("e", e);
  }
};

export const getAllPosts = async (stack: string) => {
  try {
    const resp = await fetch(`${BACKEND_SERVER_URL}/api/posts?stack=${stack}`, {
      cache: "no-store",
    });

    return await resp.json();
  } catch (e) {
    console.log("e", e);
  }
};

export const getPost = async (id: string) => {
  try {
    const resp = await fetch(`${BACKEND_SERVER_URL}/api/posts/item?id=${id}`, {
      cache: "no-store",
    });

    return await resp.json();
  } catch (e) {
    console.log("e", e);
  }
};
