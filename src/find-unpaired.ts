

//solution with reduce 
// retornar o elemento que nao tem par

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
    //self.indexOf(value) devolve o index do array A. indexOf(9) por exemplo vai ser sempre 0
    const keys = A.filter( (value, index, self) => self.indexOf(value) == index); 
    console.log(keys);

    for(let item of A)
    {
        const count = A.filter( v => v == item).length;
        if(count == 1)
            return item;
    }

    return -1;
        
}

console.log(findUnpairedSimple([9, 3, 9, 3, 13, 9, 0, 9]));