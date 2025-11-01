

function solution(A: number[]): number {

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
