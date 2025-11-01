
function verifyStartAndEnd(str: string, start: string, end: string): boolean
{
    str.indexOf(start); 
    if(str.startsWith(start) && str.endsWith(end))
        return true;
    return false;
}

// console.log(verifyStartAndEnd("hello world", "hello", "world")); 


function verifyPadimdromo(str: string) : boolean    
{
    let str1 : string[] = str.split("");
    let str2: string[] = str.split("").reverse();

    let index = 0;  
    while(str2[index] == str1[index] && index < str1.length)
    {
        if(index == str1.length - 1)
        {
            return true;
        }
        index++;
    }
    return false;   
}

// console.log(verifyPadimdromo("atrrta"));   


function varifyStrongPassword(str: string) : boolean
{

    if(!(str.length > 10))
        return false;

    //tabulacao,espaco ou quebra de linha   
    if( str.match(/\s/)) 
        return false;

    //check lowerCase
    if( !str.match(/[a-z]/))
        return false;

    //check UpperCase
    if( !str.match(/[A-Z]/))
        return false;

    //check number
    if( !str.match(/[0-9]/))
        return false;

    //check special character
    if( !str.match(/[!@#$%^&*(),.?":{}|<>]/) )
        return false;
    
    //check sequences
    if( str.includes("123") || str.includes("abc") || str.includes("ABC"))
        return false;

    if( str.startsWith("password")  || str.endsWith("password"))
        return false;

    return true;
}
//  console.log(varifyStrongPassword("test2 02333@T"));

function getWordStatistics(stri: string, pattern: string): [number, number]
{
    let splitedStr = stri.split(" ");

    let count = 0;
    for(let word of splitedStr)
    {
        if( word.includes(pattern))
            count++;
    }

    return [splitedStr.length,count];
}

// console.log(getWordStatistics("test test2 tist3 test4 test5 test6","test"));


function findPositionOfPattern(str: string, pattern: string): number
{
    let index = str.indexOf(pattern);
    return index;
}
// console.log(findPositionOfPattern("this is a test string","x"));



function verifyPattern(str: string, pattern: string): boolean
{
    let result : boolean = str.indexOf(pattern) == -1 ? false : true;
    return result;
}


