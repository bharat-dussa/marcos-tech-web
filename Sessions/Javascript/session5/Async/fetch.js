const url = "https://jsonplaceholder.typicode.com/posts/1";

function fetchSingleByPosts() {
  try {
    fetch(url)
      .then((postData) => {
        return postData.json();
      })
      .then((data) => {
        console.log("data:", data);
      });
  } catch (err) {
    console.log("err:", err);
  }
}

async function fetchSingleByPosts1() {
  try {
    const data = await fetch(url);

    const jsonPostData = await data.json();

    console.log("jsonPostData:", jsonPostData);
  } catch (err) {
    console.log("err:", err);
  }
}

fetchSingleByPosts1();
