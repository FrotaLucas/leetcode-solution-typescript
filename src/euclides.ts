import { parse } from "path";


console.log("Hii module loaded");  

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