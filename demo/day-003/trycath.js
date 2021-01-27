let isLoading = false;

function submitForm(data) {
  isLoading = true;
  console.log({ isLoading });
  try {
    //proses validasi form
    if (data.phone === "") throw new Error("Phone required");
    //proses pengiriman data
    if (data.sending !== true) throw new Error("Server error");
    console.log("data terkirim");
  } catch (error) {
    //tampilkan error
    console.log({ error });
  } finally {
    isLoading = false;
  }
}

submitForm({ phone: "08555555", sending: true });

console.log({ isLoading });

const userList = [
  {
    name: "name 1",
  },
  {
    name: "name2",
  },
];

function modelUser() {
  let response = {
    data: [],
    code: 200,
    message: "",
  };
  const validasi = true;
  const queryDb = true;
  try {
    //validaasi param from Fron End
    if (validasi == false) throw new Error("Data yang dikirim tidak valid");
    //query ke Database
    if (queryDb == false) throw new Error("ada kendalal koneksi ke database");
    //pengolahan data
    response = {
      data: userList,
      code: 200,
      message: "get user succes",
    };
    return response;
  } catch (error) {
    response = {
      data: [],
      code: 500,
      message: "Server Database mati",
    };
    return response;
  } finally {
    return response;
  }
}

console.log(modelUser());
