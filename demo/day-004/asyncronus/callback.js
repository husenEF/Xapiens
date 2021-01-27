function firstName(cb) {
  //   return "husen";
  setTimeout(() => {
    // return "Husen";
    return cb("husen");
  }, 3000);
}

function lastName(data) {
  console.log(data + "refactory");
}

function getFullName() {
  const first = firstName(lastName);

  console.log(first);
}

function halo3(data) {
  console.log(data());
}


