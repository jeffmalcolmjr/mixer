function changeColor() {
//Grabs the number from the input box and convert it to an integer
    var rValue = parseInt(document.getElementById("rValue").value);
    var gValue = parseInt(document.getElementById("gValue").value);
    var bValue = parseInt(document.getElementById("bValue").value);
//Checks to see if the number is within the ranges of 0-255
    if ((rValue > 255 || bValue > 255 || gValue > 255) || (rValue < 0 || bValue < 0 || gValue < 0)) {
        alert("Invalid Number. Please enter a number between 0-255")
    }
//Makes the text white if the background color is too dark
    if ((rValue < 45 ) || (bValue < 45) || (gValue < 45)) {
        const header = document.getElementById("head")
        header.style.color = 'white'
        const bold = document.getElementById("bold")
        bold.style.color = 'white'
    }
    if (!((rValue < 60 ) && (bValue < 60) && (gValue < 60))) {
        const header = document.getElementById("head")
        header.style.color = 'black'
        const bold = document.getElementById("bold")
        bold.style.color = 'black'
    }
    if((rValue > 199) && (bValue > 199) && (gValue > 199)) {
        const header = document.getElementById("head")
        header.style.color = 'black'
        const bold = document.getElementById("bold")
        bold.style.color = 'black'
    }
//Converts the numbers to an rgb(0,0,0) for the CSS to read
    var newColor = "rgb("+(rValue)+"," +(gValue)+","+bValue+")"
//Sets the background equal to the color
    document.body.style.background = newColor

}

function reset() {
    document.body.style.background = 'white'
    var header = document.getElementById("head")
    header.style.color = 'black'
    var bold = document.getElementById("bold")
    bold.style.color = 'black'
    document.getElementById("rValue").value = ''
    document.getElementById("bValue").value = ''
    document.getElementById("gValue").value = ''
}

