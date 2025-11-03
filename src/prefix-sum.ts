// Write a function:

// function solution(A: number, B: number, K: number): number;

// that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

// { i : A ≤ i ≤ B, i mod K = 0 }

// For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

// Write an efficient algorithm for the following assumptions:

// A and B are integers within the range [0..2,000,000,000];
// K is an integer within the range [1..2,000,000,000];
// A ≤ B.
// Copyright 2009–2025 

function solution(A: number, B: number, K: number): number {
  
  if(A == 0)
   return Math.floor(B/K) +1;

   else
      return Math.floor(B/K) - Math.floor((A-1)/K);

}


//pares 0 e 1 
// Task description
// A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

// Array A contains only 0s and/or 1s:

// 0 represents a car traveling east,
// 1 represents a car traveling west.
// The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

// For example, consider array A such that:

//   A[0] = 0
//   A[1] = 1
//   A[2] = 0
//   A[3] = 1
//   A[4] = 1
// We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

// Write a function:

// function solution(A: number[]): number;

// that, given a non-empty array A of N integers, returns the number of pairs of passing cars.

// The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

// For example, given:

//   A[0] = 0
//   A[1] = 1
//   A[2] = 0
//   A[3] = 1
//   A[4] = 1
// the function should return 5, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer that can have one of the following values: 0, 1.

function findPeers(A: number[]): number {
    
  let totZeros = 0;
  let totOnes = 0;
  let peers = 0;

 let i=0;
  for(i=0; i<A.length; i++)
  {
      if(A[i] == 0)
      {
          peers = peers + totZeros*totOnes;
          totZeros++;
          totOnes = 0;
      }

      else
      {
          totOnes++;
      }
  }

  if(A[i-1]==1)
  {
      peers = peers + totZeros*totOnes;
      return peers;
  }

  return peers;

}

// console.log(findPeers([0,0,1,0,1]))

//MinAvgTwoSlice
// Task description
// A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A (notice that the slice contains at least two elements). The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of the slice. To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

// For example, array A such that:

//     A[0] = 4
//     A[1] = 2
//     A[2] = 2
//     A[3] = 5
//     A[4] = 1
//     A[5] = 5
//     A[6] = 8
// contains the following example slices:

// slice (1, 2), whose average is (2 + 2) / 2 = 2;
// slice (3, 4), whose average is (5 + 1) / 2 = 3;
// slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
// The goal is to find the starting position of a slice whose average is minimal.

// Write a function:

// function solution(A: number[]): number;

// that, given a non-empty array A consisting of N integers, returns the starting position of the slice with the minimal average. If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.

// For example, given array A such that:

//     A[0] = 4
//     A[1] = 2
//     A[2] = 2
//     A[3] = 5
//     A[4] = 1
//     A[5] = 5
//     A[6] = 8
// the function should return 1, as explained above.



function minMean(A: number[]): number {
    
    const n = A.length;
    let mean = Math.max(...A);
    let index = 0;

    for(let i=0;i<n; i++)
    {
        if(i+2<=n-1)
        {
            var meanOfThreeValues = (A[i]+A[i+1]+A[i+2])/3;
            
            var meanOfTwoValues = (A[i]+A[i+1])/2;

            if(meanOfThreeValues < mean)
            {
                mean = meanOfThreeValues;
                index = i;
            }

            if(meanOfTwoValues < mean)
            {
                mean = meanOfTwoValues;
                index = i;
            }

        }

        else if(i+1<=n-1)
        {
            var meanOfTwoValues = (A[i]+A[i+1])/2;
            if(meanOfTwoValues < mean)
            {
                mean = meanOfTwoValues;
                index = i;
            }
        }
    }

    return index;
}


