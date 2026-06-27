function calculateGrades(question, totalGrades, average) {
    if (average() >= 75) 
        
        return totalGrades() + "Passed";

    else {
        
        return "Failed";
    }

}

function totalGrades() {
    let grades = [80, 90,  87, 67, 99, 90, 90];
    let total = 0;

    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
}
    return total;
}

function average(){
    let total = totalGrades();
    let averaged = total / 7;
    console.log("Average " + averaged);
}


console.log(calculateGrades("Did student pass?", totalGrades, average));