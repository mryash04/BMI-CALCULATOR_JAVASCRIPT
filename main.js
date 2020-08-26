var button = document.getElementById("buttones");
button.addEventListener("click", infoValues);

function infoValues(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    height = height * 12;
    height = height * 0.025;

    var bmivalue = weight / (height * height);

    bmivalue = Math.round(bmivalue);

    document.getElementById("bmivalue").value = bmivalue;
}