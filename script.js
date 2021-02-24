function sum() {
    var n1 = document.getElementById("numero1").value
    var n2 = document.getElementById("numero2").value


    var numero1 = parseInt(n1)
    var numero2 = parseInt(n2)
    var result = numero1 + numero2
    var resultElement = document.getElementById("result")
    resultElement.innerText = "sum result: " + result
    var respuesta = 0



    var table = document.getElementById("tabla1");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = numero1;
    cell2.innerHTML = numero2;
    cell3.innerHTML = result;


    if (result < 10) {
        cell4.innerHTML = "-10";
    } else {
        cell4.innerHTML = "=10";
    }






}




