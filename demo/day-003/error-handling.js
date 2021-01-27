try {
  let isFinish = Math.random() < 0.5;

  if (!isFinish) throw "process not finish";
  console.log("process finish ");
} catch (error) {
  console.log({ error });
} finally {
  console.log("end of process finish");
}
