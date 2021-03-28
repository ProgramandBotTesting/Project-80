values_1 = [];

function submit1() {
    for(var i = 1; i <= 6; i++) {
        values_1.push(document.getElementById("value_1_" + i).value);
    }
    console.log(values_1);
    document.getElementById("displayvalues_1").innerHTML = values_1.join(". ");
    document.getElementById("submit1").style.display = "none";
}

values_2 = [];

function submit2() {
    for(var i = 1; i <= 6; i++) {
        values_2.push(document.getElementById("value_2_" + i).value);
    }
    console.log(values_1);
    document.getElementById("displayvalues_2").innerHTML = values_2.join(". ");
    document.getElementById("submit2").style.display = "none";
}