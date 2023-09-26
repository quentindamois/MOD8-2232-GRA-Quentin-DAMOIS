function newentry() {
    let inputednames = document.getElementById("name");
    let inputedbirthday = document.getElementById("birthday");
    let inputedbrand = document.getElementById("language");
    let inputednumber = document.getElementById("telephone-number");
    let newrow = document.createElement("tr");
    let colnames = document.createElement("td")
    colnames.textContent = inputednames.value;
    let colbirthady = document.createElement("td")
    colbirthady.textContent = inputedbirthday.value;
    let colliscence = document.createElement("td")
    if(document.getElementById("majority-yes").checked) {
        colliscence.textContent = "Yes";
    }
    else {
        colliscence.textContent = "No";
    }
    let colbrand = document.createElement("td")
    colbrand.textContent = inputedbrand.value;
    let coltransportation = document.createElement("td")
    coltransportation.textContent = "";
    if (document.getElementById("recommandation-commertial").checked) {
        coltransportation.textContent += "Commercial "
    }
    if (document.getElementById("recommandation-content").checked) {
        coltransportation.textContent += "Content "
    }
    if (document.getElementById("recommandation-product").checked) {
    }
    let colnumber = document.createElement("td")
    colnumber.textContent = inputednumber.value;
    newrow.append(colnames, colbirthady, colliscence, coltransportation, colbrand, colnumber);
    document.getElementById("changing-table").appendChild(newrow);
    let entreelist = document.createElement("li");
    entreelist.textContent = inputednames.value;
    document.getElementById("list-user").appendChild(entreelist);
}