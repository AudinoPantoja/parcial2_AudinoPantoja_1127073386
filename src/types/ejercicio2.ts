const numbers: number[] = [1,2,3,4,5];
const fruits:string [] = ['manzana','pera','uva','fresa','sandia'];
const bools: boolean = true;
const tuple: [number, string ] = [1, 'uno']

//1
numbers.push(6);
console.log(numbers,'\n')
//2
numbers.pop();
console.log(numbers,'\n')
//3
const index3 = numbers.indexOf(3)
console.log('el 3 esta en el indice: ',index3,'\n')
//4
const slice = numbers.slice(2,4)
console.log('Extrayendo ',slice)
//6
const filter = numbers.filter(num => num % 2)
console.log(filter)

//8
const cadena: string= 'Este es un nuevo mundo';
const cadenaDividida = cadena.split(' ');
console.log('Cadena dividida: ', cadenaDividida);
const unirCadena = cadenaDividida.join(',');
console.log('Cadena unida: ', unirCadena);

//9
const number2: number[] = [10,20,30,40,50]
const filteredMay25 = number2.filter((num) => num > 25);
console.log('Los numeros mayores a 25 son: ',filteredMay25)

//10
const positive = number2.filter(num => num >= 0)
console.log('Numeros positivos:', positive)

//11
const may40 = number2.filter(num => num > 40)
console.log('Numeros mayores a 40: ', may40)

//12
const array1: number[]= [1,2,3]
const array2: number[]= [4,5,6]

const combinatedArray: number[] = array1.concat(array2);
console.log('Array combinado: ', combinatedArray)

//13
const array3: number[]= [5,1,4,2,3]
const orderArray = array3.sort((a, b) => a - b)
console.log('Array ordenado: ',orderArray)

//14
const arrayString: string[]= ['Fernando', 'Luis', 'Carlos', 'Andres'];


