//T1 permutation
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


//T2 max Counter
// You are given N counters, initially set to 0, and you have two possible operations on them:

// increase(X) − counter X is increased by 1,
// max counter − all counters are set to the maximum value of any counter.
// A non-empty array A of M integers is given. This array represents consecutive operations:

// if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
// if A[K] = N + 1 then operation K is max counter.
// For example, given integer N = 5 and array A such that:

//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the values of the counters after each consecutive operation will be:

//     (0, 0, 1, 0, 0)
//     (0, 0, 1, 1, 0)
//     (0, 0, 1, 2, 0)
//     (2, 2, 2, 2, 2)
//     (3, 2, 2, 2, 2)
//     (3, 2, 2, 3, 2)
//     (3, 2, 2, 4, 2)


function solutionMaxCounter(N: number, A: number[]): number[] {
    
    let counter: number[] = new Array(N).fill(0);

    let max = 0;
    for(let i=0;i<A.length;i++)
    {
        if(A[i]<N)
        {
            counter[A[i]-1]++;
            max = counter[A[i]-1];
        }

        else{
            counter = counter.fill(max);
        }

    }

    return counter;
}


//T3 find the smallest
// This is a demo task.

// Write a function:

// class Solution { public int solution(int[] A); }

// that, given an array A of N integers, returns the smallest missing positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function findSmallest(A: number[]): number {
    const occurances = new Set<number>();

    for(let element of A)
    {
        if(element >0)
            occurances.add(element);
    }
    
    let i=1;
    for(i=1;i<=A.length;i++)
    {
        if(!occurances.has(i) )
        {
            return i;
        }
    }

    //last i
    if(i-1==A.length)
        return i;

    return 1;

}

