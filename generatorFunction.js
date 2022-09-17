function add(a,b) {
	// console.log(a+b);
	return a+b;
}

function* generator(a,b) {
	// const sum = yield add(a,b);
	// return sum;
	// yield sum;
	// console.log(sum);	

	yield a;
	yield b;
	yield add(a,b);
	return 200;
}

const generat = generator(10,20)

console.log(generat.next());
console.log(generat.next());
console.log(generat.next());
console.log(generat.next());
console.log(generat.next());


