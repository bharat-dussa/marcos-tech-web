const url = "https://jsonplaceholder.typicode.com/posts/1";

// function fetchSingleByPosts() {
//   try {
//     fetch(url)
//       .then((postData) => {
//         return postData.json();
//       })
//       .then((data) => {
//         console.log("data:", data);
//       });
//   } catch (err) {
//     console.log("err:", err);
//   }
// }

async function fetchSingleDataFromPost() {
  try {
    const fetchData = await fetch(url);

    const data = await fetchData.json();


    // console.log("data:", data);
  } catch (err) {
    console.log("err:", err);
  }
}

fetchSingleDataFromPost();
