
function arrayRotation(array, numOfRotations){
    for (let index = 1; index <=numOfRotations; index++) {
       let elementToRotate = array.shift();
       array.push(elementToRotate);
        
    }

    // const result = [];
    // for (let i = 0; i < arr.length; i++){
    //    result.push(arr[(i + rotations) % arr.length]);  
    // }

    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);