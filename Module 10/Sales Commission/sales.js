var count200 = 0;
var count300 = 0;
var count400 = 0;
var count500 = 0;
var count600 = 0;
var count700 = 0;
var count800 = 0;
var count900 = 0;
var count1000 = 0;

function weeklySalary(grossSales) {
    return 200 + (grossSales * 0.09);
}

function updateTable() {
    userInput = parseInt(document.getElementById("salaryInput").value);
    salary = weeklySalary(userInput);

    if (salary >= 200 && salary <= 299) {document.getElementById("200count").innerHTML = ++count200;}
    else if (salary >= 300 && salary <= 399) { document.getElementById("300count").innerHTML = ++count300;}
    else if (salary >= 400 && salary <= 499) { document.getElementById("400count").innerHTML = ++count400;}
    else if (salary >= 500 && salary <= 599) { document.getElementById("500count").innerHTML = ++count500;}
    else if (salary >= 600 && salary <= 699) { document.getElementById("600count").innerHTML = ++count600;}
    else if (salary >= 700 && salary <= 799) { document.getElementById("700count").innerHTML = ++count700;}
    else if (salary >= 800 && salary <= 899) { document.getElementById("800count").innerHTML = ++count800;}
    else if (salary >= 900 && salary <= 999) { document.getElementById("900count").innerHTML = ++count900;}
    else if (salary >= 1000) { document.getElementById("1000count").innerHTML = ++count1000;}
}

window.addEventListener("submit", updateTable, false);