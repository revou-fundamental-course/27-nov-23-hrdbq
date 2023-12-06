function hitungLuas(e) {
  e.preventDefault();
  let inputAlas = document.getElementById("base").value;
  let inputTinggi = document.getElementById("height").value;

  // if (inputAlas === "" || inputTinggi === "") {
  //   document.getElementById("button").disabled = true;
  //   document.getElementById("result").innerHTML = "test";
  // } else {
  //   document.getElementById("button").disabled = false;
  // }

  let luas = 0.5 * inputAlas * inputTinggi;

  document.getElementById("result").innerHTML =
    "Luas: " +
    inputAlas +
    "<br>Tinggi: " +
    inputTinggi +
    "<br>Luas Segitiga: " +
    luas.toFixed(2);
}

function hitungKeliling(e) {
  e.preventDefault();
  let inputSisiSatu = parseFloat(document.getElementById("one").value);
  let inputSisiDua = parseFloat(document.getElementById("two").value);
  let inputSisiTiga = parseFloat(document.getElementById("three").value);

  let keliling = inputSisiSatu + inputSisiDua + inputSisiTiga;

  document.getElementById("result-keliling").innerHTML =
    "Keliling: " + keliling.toFixed(2);
}

let button = document.getElementById("button");
let iniHasil = document.getElementById("iniHasil");
let button2 = document.getElementById("button2");
let iniHasil2 = document.getElementById("iniHasil2");

button.addEventListener("click", function () {
  if (iniHasil.style.display === "none" || iniHasil.style.display === "") {
    iniHasil.style.display = "block";
  } else {
    iniHasil.style.display = "none";
  }
});

button2.addEventListener("click", function () {
  if (iniHasil2.style.display === "none" || iniHasil2.style.display === "") {
    iniHasil2.style.display = "block";
  } else {
    iniHasil2.style.display = "none";
  }
});
