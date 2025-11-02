// A non-empty array A consisting of N integers is given.

// A permutation is a sequence containing each element from 1 to N once, and only once.

// For example, array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2

// content_copy
// is a permutation, but array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3

// content_copy
// is not a permutation, because value 2 is missing.

// The goal is to check whether array A is a permutation.

// Write a function:

// function solution(A: number[]): number;
// content_copy

// that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

function checkPermutation(A: number[]) : number
{
    
    const N = A.length;
    const occurance = new Set<Number>();

    for(let i=0; i< N; i++)
    {
        if(A[i] <= N)
            occurance.add(A[i]);
        
    }

    if(occurance.size == N)
        return 1;
    return 0;
}
