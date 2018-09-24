function areaOfCircle(n) {
    if(typeof(n) !== "number"){
        return "Error";
    }
    else if(arguments.length > 1) { //'arguments' is a built-in JavaScript array.
        return "Error";
    }
    let result = 3.1416 * (n * n);
    return Number(result.toFixed(2));
}

function squareMe(n) {
    if(typeof(n) !== "number"){
        return "Error";
    }
    let result = n * n;
    return Number(result.toFixed(2));
}

function squareRoot(n) {
    let result = Math.sqrt(n);
    return Number(result.toFixed(2));
}

//Added by Alex.
function cubeMe(n) {
    let result = Math.cbrt(n);
    return Number(result.toFixed(2));
}

//Added by Alex.
function areaOfTriangle(base, height) {
    let result = ((base * height) / 2);
    return Number(result.toFixed(2));
}

//Added by Alex.
function yearsRemaining(targetYear, currentYear) {
    let result = (targetYear % currentYear);
    return Number(result.toFixed(2));
}