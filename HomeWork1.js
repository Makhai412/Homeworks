const Array =[1,4,56,6,7,9,5,3,557,9,65,3,47,8,1,775,36,884,24,5];

//1) at
console.log(Array.at(-1));

//2) concat
const Array2= [7,8,"a","j",1,66,"a"];
console.log(Array.concat(Array2));

//3) copyWithin
const Array3= [7,"x",9,"k",1,87];
console.log(Array3.copyWithin(1,3,4));

//4 entries
const iterator1 = Array.entries();
console.log(iterator1.next().value());

//5) every
console.log(Array.every((x)=> x <884));

//6) fill
console.log(Array.fill(5,17,19));

//7) filter
console.log(Array.filter(x=>x>100));

//8) find
console.log(Array.find(x=>x>55));

//9) findIndex
console.log(Array.findIndex(x=>x>55));

//10) findLast
console.log(Array.findLast(x=>x>100));

//11) findLastIndex
console.log(Array.findLastIndex(x=>x>55));

//12) flat
const Array4 = [1,4,7,8,[6,9]];
console.log(Array4.flat());

//13) flatMap
console.log()

//14) forEach
console.log(Array.forEach(x=>x>100))

//15) from
console.log(Array5.from('mazda'));

//16) fromAsync
console.log(Array.fromAsync(arrayLike));

//17) includes
console.log(Array.include(56));

//18) indexOf
console.log(Array2.indexOf("a",2));

//19) isArray
console.log(Array.isArray(Array));

//20) join
const elements = ['Earth', 'Air', 'Dendro'];
console.log(elements.join());

//21) keys
const Array7 = ['p', 'q', 'r', 's'];
const iterator2 = array1.keys();

for (const key of iterator) {
  console.log(key);
}

//22) lastIndexOf
console.log(Array2.lastIndexOf("a"));

//23) map
console.log(Array.map((x)=>x*5));

//24) of
console.log(Array7.of('pizza',30,'Burger'))

//25) pop
const frutas= ["Manzana", "Pera", "Mango", "Fresa"];
console.log(frutas.pop());

//26) push
const newFrutas = frutas.push("Uva");

//27) reduce
const array = [1, 2, 3, 4, 5];
const suma = array.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(suma);

//28) reduceRight
const cadenaInversa = array.reduceRight((acumulador, elemento) => acumulador + elemento, '');
console.log(cadenaInversa);

//29) reverse
console.log(Array.reverse());

//30) shift
console.log(Array.shift());

//31) slice
console.log(Array.slice(15));

//32) some
console.log(Array.some((x)=>x>774));

//33) sort
console.log(Array.sort());

//34) splice
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');

//35) toLocaleString
const num = [1000, 2000, 3000];
console.log(num.toLocaleString());

//36) toReversed
console.log(Array.toReversed());

//37) toSorted
console.log(Array.toSorted());

//38) toSpliced
console.log(months.toSpliced(1, 0, 'Feb'));

//39) toString
console.log(Array.toString());

//40) unShift
console.log(Array.unShift(7,55));

//41) values
const Array6 = ['p', 'q', 'r', 's'];
const iterator = array6.values();

for (const value of iterator) {
  console.log(value);
}

//42) with
const objeto = {
  a: 1,
  b: 2,
  c: 3
};

with (objeto) {
  console.log(a + b + c); 
}