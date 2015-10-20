total=0;


function addṔroduct(producto,precio) {
    var table = document.getElementById("lista");
    var dispTotal = document.getElementById("total");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = producto;
    cell2.innerHTML = precio;
    total=total+precio;
    dispTotal.innerHTML = total;

}
