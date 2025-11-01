//map
const numbers: number[] = [1, 4, 9, 16];

// Objetivo: Transformar cada número em uma string formatada.
const stringResults: string[] = numbers.map((num: number) => {
    // A função retorna o novo valor que será incluído no novo array.
    return `O número é ${num}`;
});

console.log(stringResults);
// Saída: [ 'O número é 1', 'O número é 4', 'O número é 9', 'O número é 16' ]


//reduce
//example Reduce
function aggregateString(): Record<string, number>
{
    const listofObjects : string[] = ["apple","banana","orange","apple","orange"];

    const result : Record<string, number> = listofObjects
    .reduce( (accumulator : Record<string, number>, currentValue: string) => {

        //nao precisa dessa inicializacao
        // if( !accumulator[currentValue])
        //     accumulator[currentValue] = 0;

        accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
        return accumulator; 
    }, {});


    return result;
}

console.log(aggregateString());


//filter
interface Product {
    name: string;
    price: number;
    inStock: boolean;
}

const products: Product[] = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Mouse", price: 25, inStock: true },
    { name: "Monitor", price: 300, inStock: false },
    { name: "Keyboard", price: 75, inStock: true },
];

// Objetivo: Criar um novo array contendo apenas produtos em estoque (inStock: true).
const inStockProducts: Product[] = products.filter((product: Product) => {
    // A função retorna TRUE para manter o elemento, FALSE para descartá-lo.
    return product.inStock === true;
});

console.log(inStockProducts);
/*
[
  { name: 'Laptop', price: 1200, inStock: true },
  { name: 'Mouse', price: 25, inStock: true },
  { name: 'Keyboard', price: 75, inStock: true }
]
*/
