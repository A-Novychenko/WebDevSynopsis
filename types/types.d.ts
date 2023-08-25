type Inputs = {
  title: string;
  description: string;
  stack: string;
};

type AddPostData = {
  title: string;
  description: string;
  stack: string;
};

type Posts = {
  _id: string;
  title: string;
  description: string;
  stack: string;
};

type TitleParams = {
  params: {postId: string};
};
