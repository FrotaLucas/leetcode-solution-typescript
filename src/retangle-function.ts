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

//get 6th element
var element = tridimensionalMatrix[1][2];
console.log(element);

//destrurturing 3th tridimensional point

const [x,y,z] = tridimensionalMatrix[2];
console.log("tridimensional point",x,y,z);

