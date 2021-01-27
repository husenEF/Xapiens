const axios = require("axios").default;

// axios.get("https://reqres.in/api/users").then((result) => {
//   console.log({ data: result.data });
// });

// axios
//   .post("https://reqres.in/api/users", {
//     email: "google@email.com",
//     first_name: "Google",
//     last_name: "Email",
//     avatar: "https://reqres.in/img/faces/2-image.jpg",
//   })
//   .then((respon) => {
//     console.log({ respon });
//     axios
//       .get("https://reqres.in/api/users/579")
//       .then((result) => {
//         return result.data;
//       })
//       .then((result2) => {
//         console.log({ result2: result2.data });
//       });
//   })
//   .catch((error) => {
//     console.log({ error });
//   });
axios.post("http://localhost:8000/api/app", {}).then((response) => {
  console.log({ response });
});
axios.delete("http://localhost:8000/api/app/1").then((delRes) => {
  console.log({ delRes });
});
axios.get("http://localhost:8000/api/app/1").then((detResponse) => {
  console.log({ detResponse });
});

async function getUser() {
  const raw = await axios.get(url);
  const respone = raw.data;
  return response;
}
