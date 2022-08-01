

// //Part A 

// // var BMI = mass/ (height * height);

// var lucasHeight = window.prompt("Enter Luca's Height in Meters.");
// var lucasMass = window.prompt("Enter Luca's Mass in KG.") ;

// var petersHeight = window.prompt("Enter Peter's Height in Meters.");
// var petersMass = window.prompt("Enter Peter's Mass in KG.") ;


// var lucasBMI = lucasMass/(lucasHeight * lucasHeight);
// var petersBMI = petersMass/(petersHeight * petersHeight);


// if(lucasBMI > petersBMI) {
//     console.log("TRUE");
// } else {
//     console.log("FALSE")
// }


// console.log("The BMI of Petter is " + petersBMI + " The BMI of Luca is " + lucasBMI + ". Peter's BMI is high than Luca's BMI that is " );

//PART A & C
function CalculateLucasBMI() {
    var lucasMass = document.getElementById("LMass").value;
    var lucasHeight = document.getElementById("LHeight").value;
    var LBMI = lucasMass / (lucasHeight * lucasHeight);
    alert("Lucas BMI is " + LBMI);
}

function CalculatePetersBMI() {
    var lucasMass = document.getElementById("PMass").value;
    var lucasHeight = document.getElementById("PHeight").value;
    var PBMI = lucasMass / (lucasHeight * lucasHeight);
    alert("Peters BMI is " + PBMI);
}

function CompareBMIs() {
    var lucasMass = document.getElementById("LMass").value;
    var lucasHeight = document.getElementById("LHeight").value;
    var LBMI = lucasMass / (lucasHeight * lucasHeight);

    var lucasMass = document.getElementById("PMass").value;
    var lucasHeight = document.getElementById("PHeight").value;
    var PBMI = lucasMass / (lucasHeight * lucasHeight);

    if(LBMI > PBMI) {
        alert("Luca's BMI (" + LBMI + ")" + " is higher than Peter's BMI (" + PBMI + ").")
    } else {
        alert("Peters's BMI (" + PBMI + ")" + " is higher than Lucas's BMI (" + LBMI + ").")
    }
}

// Part B & D
function ConvertCelsiusToFahrenheit() {
    var userInput = document.getElementById("Celsius").value;
    var Fahrenheit = (userInput * (9/5)) + 32;
    alert(userInput + "\u00B0 C is " + Fahrenheit + "\u00B0 F");
}


function ConvertFahrenheitToCelsius() {
    var userInput = document.getElementById("fahrenhiet").value;
    var Cesius = ((userInput - 32) * 5) / 9;
    alert(userInput + "\u00B0 F is " + Cesius + "\u00B0 C");
}
