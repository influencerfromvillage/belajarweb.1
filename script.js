const inputNim = document.getElementById("nim");
const inputNama = document.getElementById("nama");
const inputJurusan = document.getElementById("jurusan");

function addData() {
  const nim = inputNim.value;
  const nama = inputNama.value;
  const jurusan = inputJurusan.value;

  const currentTime = new Date();
  const hours = currentTime.getHours(); 
  const minutes = currentTime.getMinutes();

  const timeString = hours + ":" + (minutes<10?"0":"")+minutes

  const tableData = document.getElementById("data-table");
  const row = document.createElement("tr");

  const values = [nim, nama, jurusan, timeString];

  for (let i = 0; i < values.length; i++) {
    const cell = document.createElement("td");
    cell.innerHTML = values[i];
    row.appendChild(cell);
  }

  tableData.appendChild(row);

  inputNim.value = "";
  inputNama.value = "";
  inputJurusan.value = "";

 }
