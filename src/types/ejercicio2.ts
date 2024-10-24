const numbers: number[] = [1,2,3,4,5];
const fruits:string [] = ['manzana','pera','uva','fresa','sandia'];
const bools: boolean = true;
const tuple: [number, string ] = [1, 'uno']

numbers.push(6);
console.log(numbers,'\n')
numbers.pop();
console.log(numbers,'\n')
const index3 = numbers.indexOf(3)
console.log('el 3 esta en el indice: ',index3,'\n')
const slice = numbers.slice(2,4)
console.log('Extrayendo ',slice)

const filter = numbers.filter(num => num % 2)
console.log(filter)

const cadena: string= 'Este es un nuevo mundo';
const cadenaDividida = cadena.split(' ');
console.log('Cadena dividida: ', cadenaDividida);
const unirCadena = cadenaDividida.join(',')
console.log('Cadena unida: ', unirCadena)

const number2: number[] = [10,20,30,40,50]