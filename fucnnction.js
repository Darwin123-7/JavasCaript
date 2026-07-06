function calculateGrades(question, yes, no) {
    if (averaged >= 75) 
        
        return yes() + "Passed";

    else {
        
        return no() + "Failed";
    }

}

    let grades = [80, 90,  87, 67, 99, 90, 90];
    let total = 0;

    for (let i = 0; i < grades.length; i++) {
        total += grades[i];

    }

    let averaged = total / 7;
    console.log(averaged);



calculateGrades( () => console.log("Did the student Passed?"),
                 (aveaged) => console.log("He did passed passed"),
                 (averaged)  => console.log("He did not passed") 
);
