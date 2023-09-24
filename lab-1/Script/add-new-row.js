function newentry() {
    let inputednames = document.getElementById("name");
    let inputedbirthday = document.getElementById("birthday");
    //let inputedliscence = document.getElementsByName("driving");
    let inputedbrand = document.getElementById("car-brand");
    let inputedtransportation = document.getElementsByName("way");
    let inputednumber = document.getElementById("car-number");
    let newrow = document.createElement("tr");
    let colnames = document.createElement("td")
    colnames.textContent = inputednames.value;
    let colbirthady = document.createElement("td")
    colbirthady.textContent = inputedbirthday.value;
    let colliscence = document.createElement("td")
    if(document.getElementById("driving-yes").checked) {
        colliscence.textContent = "Yes";
    }
    else {
        colliscence.textContent = "No";
    }
    //colliscence.textContent = inputedliscence.value;
    let colbrand = document.createElement("td")
    colbrand.textContent = inputedbrand.value;
    let coltransportation = document.createElement("td")
    coltransportation.textContent = "";
    if (document.getElementById("way-walk").checked) {
        coltransportation.textContent += "Walk "
    }
    if (document.getElementById("way-bycilce").checked) {
        coltransportation.textContent += "Bike "
    }
    if (document.getElementById("way-subway").checked) {
        coltransportation.textContent += "Subway"
    }
    let colnumber = document.createElement("td")
    colnumber.textContent = inputednumber.value;
    newrow.append(colnames, colbirthady, colliscence, coltransportation, colbrand, colnumber);
    document.getElementById("changing-table").appendChild(newrow);
}