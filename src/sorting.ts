
//find the number of occurances
function solution(A: number[]): number {
    let occurances = new Set<number>();

    for(let element of A)
    {
        occurances.add(element);
    }

    return occurances.size;
}


//Task description
// A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

// For example, array A such that:

//   A[0] = -3
//   A[1] = 1
//   A[2] = 2
//   A[3] = -2
//   A[4] = 5
//   A[5] = 6
// contains the following example triplets:

// (0, 1, 2), product is −3 * 1 * 2 = −6
// (1, 2, 4), product is 1 * 2 * 5 = 10
// (2, 4, 5), product is 2 * 5 * 6 = 60
// Your goal is to find the maximal product of any triplet.

// Write a function:

// function solution(A: number[]): number;

// that, given a non-empty array A, returns the value of the maximal product of any triplet.

// For example, given array A such that:

//   A[0] = -3
//   A[1] = 1
//   A[2] = 2
//   A[3] = -2
//   A[4] = 5
//   A[5] = 6
// the function should return 60, as the product of triplet (2, 4, 5) is maximal.

// Write an efficient algorithm for the following assumptions:

function maximalProduct(A:number[]) : number
{
    const n = A.length;
    A.sort((a,b) => a-b);
    
    //case all number are positiv
    var product1 = A[n-1]*A[n-2]*A[n-3];

    //case with there are negativ numbers
    var product2 = A[0]*A[1]*A[n-1];



    return Math.max(product1, product2);
}



//v2 performance muito RUIM!!!!!!
function maximalProductV2(A: number[]): number
{
    const firstBiggest = Math.max(...A);
    let secArray = A.filter((item) => item != firstBiggest);
    
    const secondBiggest = Math.max(...secArray);
    let thArray = secArray.filter((item) => item != secondBiggest);

    const thirdBiggest = Math.max(...thArray);

    return firstBiggest*secondBiggest*thirdBiggest;
}



//triplet is triangular
// An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

// A[P] + A[Q] > A[R],
// A[Q] + A[R] > A[P],
// A[R] + A[P] > A[Q].
// For example, consider array A such that:

//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 20

// content_copy
// Triplet (0, 2, 4) is triangular.

// Write a function:

// function solution(A: number[]): number;
// content_copy

// that, given an array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

// For example, given array A such that:

//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 20

// content_copy
// the function should return 1, as explained above. Given array A such that:

//   A[0] = 10    A[1] = 50    A[2] = 5
//   A[3] = 1

// content_copy
// the function should return 0.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].


function findTriangular(A:number[]) : number
{
    const n = A.length;
    A.sort((a,b) => a-b);

    for(let i=0; i<n-2; i++)
    {
        if(A[i]+A[i+1] > A[i+2])
            return 1;
    }

    return 0;
}