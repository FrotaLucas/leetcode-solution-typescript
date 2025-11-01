

//solution with reduce 
function findUnpaired(A: number[]): number {

    const result = A.reduce((agregator: Record<number,number>, currentValue:number) =>
     {
         agregator[currentValue] = (agregator[currentValue] || 0) +1;

         return agregator;
     }, {});

    let unpaired : number = 0;

    for(const [key, value] of Object.entries(result))
    {
        if( value == 1)
            unpaired = Number(key);
    }
     
    return unpaired;

}


//solution more easy
function findUnpairedSimple(A: number[]): number 
{
    //nao precisa disso
    const keys = A.filter( (value, index, self) => self.indexOf(value) == index); 

    for(let item of A)
    {
        const count = A.filter( v => v == item).length;
        if(count == 1)
            return item;
    }

    return -1;
        
}

console.log(findUnpairedSimple([9, 3, 9, 3, 9, 0, 9]));