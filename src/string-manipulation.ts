
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

console.log(verifyPadimdromo("atrrta"));   