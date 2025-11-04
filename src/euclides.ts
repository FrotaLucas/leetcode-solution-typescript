import { parse } from "path";


//chocolates By Numbers

// Task description
// Two positive integers N and M are given. Integer N represents the number of chocolates arranged in a circle, numbered from 0 to N − 1.

// You start to eat the chocolates. After eating a chocolate you leave only a wrapper.

// You begin with eating chocolate number 0. Then you omit the next M − 1 chocolates or wrappers on the circle, and eat the following one.

// More precisely, if you ate chocolate number X, then you will next eat the chocolate with number (X + M) modulo N (remainder of division).

// You stop eating when you encounter an empty wrapper.

// For example, given integers N = 10 and M = 4. You will eat the following chocolates: 0, 4, 8, 2, 6.

// The goal is to count the number of chocolates that you will eat, following the above rules.

// Write a function:

// function solution(N: number, M: number): number;

// that, given two positive integers N and M, returns the number of chocolates that you will eat.

// For example, given integers N = 10 and M = 4. the function should return 5, as explained above.

// Write an efficient algorithm for the following assumptions:

// N and M are integers within the range [1..1,000,000,000].



function countChocolate(N: number, M: number): number  {
    let eaten = new Set<number>(); 
    let current = 0;

    while (!eaten.has(current)) {
        eaten.add(current);
        current = (current + M) % N; 
    }

    return eaten.size;
}





//Euclides to Binary convertion
function convertToBinary(decimalNumber: number): string {
    // 1proof
    // let binaryNumber = Number(decimalNumber.toString(2)); 
    // console.log(" Binary Number: " + binaryNumber);

    //2logic
    let binary: string = ""; 
    while(decimalNumber >= 1) {

        var binaryDigit = decimalNumber%2;
        decimalNumber = Math.floor(decimalNumber/2); 
        binary = binaryDigit + binary;
    }

    let trimmedBinary : string;
    binary[0] == "0" ? trimmedBinary = binary.split(binary[0])[1] : trimmedBinary = binary; 
    
    return trimmedBinary;   
  
}

console.log(convertToBinary(825000000));    


function countTotalZeros(binary: string): number
{
  
    let stringNumber = binary.split("1");

    let sequenceOfZeros = 0;

   for(let part of stringNumber)
   {
    //    console.log(part);
       if(part.length > sequenceOfZeros)
         sequenceOfZeros = part.length;
   }
    return sequenceOfZeros;
};


//convert to binary
const step1 = convertToBinary(825000000);

//count total zeros
const step2 = countTotalZeros(step1);

console.log(" Max sequence of zeros is: " + step2);