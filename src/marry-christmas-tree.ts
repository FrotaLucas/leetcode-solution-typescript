
function printTree()
{
    console.log("Merry Christmas Tree!");

    let tree : string = "";
    let line: string = "";

    for(let i=0; i<10; i++)
    {
        for(let j = 0; j <=i; j++)
        {
            line = line + "*";
        }
        line = line + "\n";

        tree = tree + line;
        line = "";
    }

    let arrayOfDots = tree.split("\n");
    console.log("hight of the tree" + arrayOfDots.length);//subtrair 1 para dar certo

    let newTree = "";
    let newLine = ""; 

    for(let e = 0; e < arrayOfDots.length; e++)
    {
        let element = arrayOfDots[e];   
        var nDots = arrayOfDots.length - e;

        for(let k = 0; k < nDots; k++)
        {
            newLine = " " + newLine;
        }
        
        newLine = newLine + element + element + "\n";
        newTree = newTree + newLine;
        newLine = "";
    }

    // let topPoint : string  = "*\n";
    // newTree = topPoint + newTree;  
    console.log(newTree);
}

printTree();