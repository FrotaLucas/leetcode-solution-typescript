// that, given an array A, returns the value of the missing element.

// For example, given array A such that:

//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5

// content_copy
// the function should return 4, as it is the missing element.



function findMissingInteget(A: number[]): number 
{
    const n = A.length; 
    let referenceArray: number[] = new Array(n).fill(0);
    referenceArray = referenceArray.map( (item, index) => item = index +1  );

    // console.log(referenceArray);
    let missingInteger = -1;

    for(let i=0; i< n; i++)
    {   
        var isFound = A.find(element => element == referenceArray[i]);

        if(isFound == undefined)
            missingInteger = i+1;
    }
    return missingInteger;
}

console.log(findMissingInteget([2,3,1,3]));


