// const user = new User();

const promise1 = new Promise(function (resolve, reject) {
  let name = "Omprakash";

  if (name === "Omprakash") {
    setTimeout(() => {
      resolve("Omprakash mil gaya");
    }, 2000);
  } else {
    reject("Omprakash nhi mila");
  }
});

promise1
  .then(function (value) {
    console.log("value:", value);
  })
  .catch((error) => {
    console.log("error:", error);
  });
