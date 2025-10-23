import { parse } from "path";


console.log("Hii module loaded");  

function solution(a: number): number {


    //proof

    let binaryNumber = Number(a.toString(2)); 
    console.log(" Binary Number: " + binaryNumber);

    let s: string = ""; 
    while(a >= 1) {

        var b = a%2;
        a = Math.floor(a/2); 
        s = b + s;
        // console.log("new value of a: " + a + " resto: " + b);
    }

    if(s[0] == "0") {
        s = s.split(s[0])[1];
    }

    const binary =  parseInt(s);



    return binary;

}

console.log(solution(125));    