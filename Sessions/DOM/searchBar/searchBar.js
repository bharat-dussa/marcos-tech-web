const userList = ["Madhu", "Tajas", "vamshi", "Suresh", "Nadini"];


const initialization = () => {
    const ul = document.getElementById("result");

    userList.forEach((data, index) => {
        const liTag = document.createElement("li");
        liTag.textContent = data;
        liTag.setAttribute("class", `user-${index}`)
        ul.append(liTag);
      });
}
const searchInput = () => {
  const userInput = document.getElementById("search_bar").value.toLowerCase();

  const ul = document.getElementById("result");

  const filteredData = userList.filter((name) => name.includes(userInput));

  filteredData.forEach((data) => {
    const liTag = document.createElement("li");
    liTag.textContent = data;
    ul.append(liTag);
  });
};

document.getElementById("search_bar").addEventListener("input", searchInput);
window.addEventListener("DOMContentLoaded", initialization)