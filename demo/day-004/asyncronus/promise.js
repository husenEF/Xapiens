function firstName() {
  return new Promise((resolve, reject) => {
    //get database
    //get from BE
    setTimeout(() => resolve("Husen"), 1000);
  });
}

function lastName(data) {}

function getFullName() {
  firstName()
    .then((dataFirstName) => {
      console.log({ dataFirstName });
      return dataFirstName.toUpperCase();
    })
    .then((result2) => {
      console.log({ result2 });
      return new Promise((resolve, reject) => {
        setTimeout(() => reject("ini error di method 2"), 3000);
        // setTimeout(() => resolve(result2 + " -> refactory"), 5000);
      });
    })
    .then((response3) => {
      console.log({ response3 });
    })
    .catch((error) => {
      console.log({ error });
    })
    .finally(() => {
      console.log("ini sudah selesai");
    });

  //   const last = lastName(first);
}

// getFullName();

// const promise1 = Promise.resolve("result 1");
const promise2 = 43;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("ini promise 3"), 3000);
});

Promise.race([promise2, promise3])
  .then((all) => {
    console.log({ all });
  })
  .catch((error) => {
    console.log({ error });
  });

Cart()
  .then(() => {
    //insert to cart table
  })
  .then(() => {
    //update status produk
    // reduce product stock
  })
  .then(() => {
    //calculate shiping
  })
  .finally(() => {});
