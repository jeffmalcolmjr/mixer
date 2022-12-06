function changeColor() {
//Grabs the number from the input box and convert it to an integer
    var rValue = parseInt(document.getElementById("rValue").value);
    var gValue = parseInt(document.getElementById("gValue").value);
    var bValue = parseInt(document.getElementById("bValue").value);
//Checks to see if the number is within the ranges of 0-25 
   //checkVisibility(rValue,bValue,gValue)
    //Converts the numbers to an rgb(0,0,0) for the CSS to read
    var newColor = "rgb("+(rValue)+"," +(gValue)+","+bValue+")"
    //Sets the background equal to the color
    document.body.style.background = newColor
    checkVisibility(rValue,gValue,bValue)
    var rHex = rValue.toString(16).toUpperCase();
    var gHex = gValue.toString(16).toUpperCase();
    var bHex = bValue.toString(16).toUpperCase();
    document.getElementById("hexOutput").innerHTML = "#"+rHex+gHex+bHex;
}
//Makes the text white if the background color is too dark
function checkVisibility(rValue,gValue,bValue) {
    const header = document.getElementById("head")
    const bold = document.getElementById("bold")
    const footer = document.getElementById("footer")
    if ((rValue < 70 ) && (bValue < 70) && (gValue < 70)) {
        header.style.color = 'white'
        bold.style.color = 'white'    
        footer.style.color = 'white'  
    }
    if (!((rValue < 70 ) && (bValue < 70) && (gValue < 70))) {
        header.style.color = 'black'
        bold.style.color = 'black'
        footer.style.color = 'black' 
    }
    if((rValue > 199) && (bValue > 199) && (gValue > 199)) {
        header.style.color = 'black'
        bold.style.color = 'black'
        footer.style.color = 'black' 
    }
}

