let total = 0;

function add() {
  let intitulé = document.getElementById("intitulé").value;
  let montant = parseFloat(document.getElementById("montant").value);
  total += montant;

  //document.getElementById("inutiluéDepense").innerText = intitulé;
  //document.getElementById("montantDepense").innerText = ":" + montant;

  let newRow = document.createElement("tr");

  // add new column with : intitulé and montant
  newRow.innerHTML = `<td>${intitulé}</td><td>${montant}</td>`;

  // add new row in the table
  document.getElementById("tableBody").appendChild(newRow);

  document.getElementById("totalDepenses").innerText =
    "Total des dépenses: " + total;

  filtrer();
}

function filtrer() {
  // get the value of filtre input
  let filtreMontant = parseFloat(document.getElementById("filtrer").value);

  // get the rows of table

  let rows = document.getElementById("tableBody").getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    // console.log("row ",row);

    // get the PRICE COLUMN

    let montantColonne = parseFloat(
      row.getElementsByTagName("td")[1].innerText
    );

    //console.log("colonne ",montantColonne);
    console.log("montantColonne   ", montantColonne);
    console.log("filtreMontant   ", filtreMontant);

    if (montantColonne > filtreMontant) {
        console.log("Highlighting row");

      row.classList.add("highlight");
    } else {
        console.log("Removing highlight from row");

      row.classList.remove("highlight");
    }
  }
}
