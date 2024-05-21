// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => {
//     users.forEach((user) => {
//       console.log(`${user.id} - ${user.name}`);
//     });
//   })
//   .catch((error) => console.log(error));

// --- async / await

// const getUsers = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//     if (response.status == 404) {
//       throw Error("Not found");
//     }
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Se ejecuta siempre");
//   }
// };

// getUsers();

// https://fakestoreapi.com/docs

fetch("https://fakestoreapi.com/products", {
  method: "POST",
  body: JSON.stringify({
    title: "test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
    algo: 1,
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));
