//exercicio:
// um string S recebe comandos de seguir em frente, ir para traz, virar a direita e
//virar a esquerda. desenvolva uma funcao que recebe conjunto de comandos e diz
//se os comandos vao formar um retangulo ou nao true/false

function drawRetangle(s: string) : boolean
{
    return false;
}

//stepe by step

//retangle function
// < verificações >

// 1 verificar o total de comandos
// quantos comandos tem ?
// const points : [number, number] []


// 2 armazenar todos os pontos em coordenadas e verificar 
// se para no mesmo ponto de partida [0,0]

// const [xf, yx] = points[points.length -1]


// 3 verificar os vertices. ver as dimensões para descobrir se fez curva.

// const turns : [number,number][] = []

// 4 precisa ter no total 4 turns

// 5 verificar tamanho dos lados 

//duvida
// turn[0] eh mesma coisa que turn[0][0] ?

//  const [x1, y1] = turn[0];


//training
const tridimensionalMatrix = [[2,2,2], [2,2,3], [22,33,44]]
const bidimensionalMatrix = [[3,3],[4,4],[7,8]];

// 1 get 6th element from tridimensional and bidimensional matrix
var element = tridimensionalMatrix[1][2];
console.log("6th element tridimensional",element);


var newElement = bidimensionalMatrix[2][1];
console.log("6th element bidimensional",newElement);

//2 destrurturing 3th tridimensional point

const [x,y,z] = tridimensionalMatrix[2];
console.log("tridimensional point",x,y,z);


//sum all elements
const firstSummup = tridimensionalMatrix.reduce( (sumup:number, element:number[]) => {
    sumup = element[0] + element[1] + element[2];
    return sumup;
},0);


//transform in single array
let newArray = tridimensionalMatrix.map((value:number[]) => {
    const [x,y,z] = value;

    return 
})

console.log(newArray);
