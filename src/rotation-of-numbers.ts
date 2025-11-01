// The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

// Write a function:
// function solution(A: number[], K: number): number[];
// that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

// For example, given

//     A = [3, 8, 9, 7, 6]
//     K = 3

// the function should return [9, 7, 6, 3, 8]. Three rotations were made:

//CERTO
function rotateArray(A: number[], K: number): number[] {

    let result: number[] = [];
    let nextMovement = K% A.length;
    // console.log("nextMovement", nextMovement);

    for (let i = 0; i < A.length; i++) {
        var restOfMovements = A.length - i - 1;

        if (nextMovement == 0) {
            result[i] = A[i];
        }
        else if (nextMovement > restOfMovements) {
            var initialMovement = nextMovement - restOfMovements;
            var j = initialMovement - 1;    
            result[j] = A[i];
        }
        else if (nextMovement <= restOfMovements) {
            var j = i + nextMovement;
            result[j] = A[i];
        }
    }

    return result;
}

console.log(rotateArray([1, 2, 3, 4], 13)); // [1,2,3,4]


//v2 ERRADO.
function rotateArrayV2(A: number[], K: number): number[] {
    let result: number[] = [];

    result = A.reduce((agregator: number[], currentValue: number, index: number) => {

        if (K > A.length - index - 1) {
            var restOfMovements = A.length - index - 1;
            var initialMovements = K - restOfMovements;
            var j = initialMovements - 1;
            agregator[j] = currentValue;
        }

        else if (K <= A.length - index - 1) {
            agregator[index + K] = currentValue;
        }

        else if (index == A.length - 1) {
            agregator[K - 1] = currentValue;
        }
        return agregator;
    }, []);

    return result;
}

// console.log(rotateArrayV2([1, 2, 3, 4, 5], 2)); // [9,7,6,3,8]