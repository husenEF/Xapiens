const getFirstName = () =>
  new Promise((resolve) => {
    console.log("get getFirstName run");
    setTimeout(() => {
      resolve("husen");
    }, 4000);
  });

const getLastName = (data) =>
  new Promise((resolve) => {
    console.log("get lasname run");
    setTimeout(() => {
      resolve(`${data} : Refactory`);
    }, 1000);
  });

const getFullName = async () => {
  const f = await getFirstName();
  const l = await getLastName(f);
  console.log({ f });
  console.log({ l });
  //   console.log({ f, l });
};
console.log("start");
getFullName();
console.log("end");

const InsertCart = async () => {
  const insertOrder = await modelInsertOrder();
  const updateStock = await modelUpdateStock(insertOrder);
  const calculateShipping = await modelCalculateShipping(
    insertOrder,
    updateStock
  );

  return {
    message: "insert succes",
    data: { order: insertOrder, shipping: calculateShipping },
  };
};
