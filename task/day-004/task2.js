const axios = require("axios").default;

const getPost = () =>
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      // console.log({ res: response.data });
      return response.data;
    })
    .catch((error) => console.log({ user: error }));

const getUser = () =>
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);

// Promise.all([getPost(), getUser()]).then((val) => {
//   console.log({ val: val[0] });
// });

const mapToUser = (post, users) => {
  const user = users.find((e) => e.id === post.userId);
  // const ul = users.filter((b) => b.id < 3);
  post.user = user;
  // post.ul = ul;
  return post;
};

const getAll = async () => {
  let post = await getPost();
  const user = await getUser();
  post = post.map((e) => mapToUser(e, user));
  console.log({ post1: post[0], u: user[0] });
};

getAll();
