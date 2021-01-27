const url = "https://mul14.github.io/data/employees.json";
const today = new Date(1611308820);
console.log({ today, day: today.toLocaleDateString() });
const getData = async () => {
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

const getSalary = async () => {
  const user = await getData();
  const above15 = user.filter((e) => e.salary >= 1000000);
  console.log({ above15 });
};
//above 15
console.log("salary:");
getSalary();

const jakarta = async () => {
  const user = await getData();
  console.log("live in jakarta:");
  const liveJakarta = user.filter((e) => {
    const live = e.addresses.filter((ad) => ad.city === "DKI Jakarta");
    // return (live)
    // console.log({ live });
    return live.length ? e : null;
  });
  console.log({ liveJakarta });
};

jakarta();

const birthday = async () => {
  const user = await getData();
  const userList = user.filter((ad) => {
    const date = new Date(ad.birthday);
    const month = date.getMonth();
    // console.log({ month });
    console.log({ month, d: ad.birthday, date });
    return month === 2 ? ad : null;
  });

  console.log({ userList });
};
birthday();

const absen = async () => {
  const user = await getData();
  const userList = user.filter((ad) => {
    const userAbsen = ad.presence_list.filter((p) => {
      const oct = new Date(p).getMonth();
      //   console.log({ oct, m: p });
      return oct === 9 ? p : null;
    });

    ad.presence_oct = userAbsen;
    ad.presence_oct_count = userAbsen.length;
    return ad;
    // console.log({ userAbsen });
  });
  console.log({ userList });
};

absen();
