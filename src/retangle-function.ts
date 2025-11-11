//exercicio:
// um string S recebe comandos de seguir em frente, ir para traz, virar a direita e
//virar a esquerda. desenvolva uma funcao que recebe conjunto de comandos e diz
//se os comandos vao formar um retangulo ou nao true/false

function drawRetangle(s: string) : boolean
{
    //verify total commands for retangle
    if(s.length < 4)
        return false;

    let x =0;
    let y =0;

    const points = [[x,y]];

    for(let command of s)
    {
        switch(command)
        {
            case "u":
                y++;
                break;
            case "d":
                y--;
                break;
            case "r":
                x++;
                break;
            case "l":
                x--;
                break;
        }
        points.push([x,y]);

    }

    const [xf,yf] = points[points.length-1];

    //verify origin of retangle
    if(xf != 0 && yf !=0)
        return false;

    console.log(points);
    return false;
}

drawRetangle("uurrd");
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


var newElement = bidimensionalMatrix[2][1];

//2 destrurturing 3th tridimensional point
const [x,y,z] = tridimensionalMatrix[2];


//3 sum all elements
const firstSummup = tridimensionalMatrix.reduce( (sumup:number, element:number[]) => {
    sumup = sumup + element[0] + element[1] + element[2];
    return sumup;
},0);

const secondSummup = bidimensionalMatrix.reduce((summUp: number, elememt: number[]) => 
{
    summUp += elememt[0] + elememt[1];
    return summUp;
}, 0 );


//4 transform in single array
let flatArray = tridimensionalMatrix.flat();
