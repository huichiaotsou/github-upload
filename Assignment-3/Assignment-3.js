function countAandB(input) {
	let counter = 0; 
	for (var i = 0; i < input.length; i++)
	{
		if (input[i].charCodeAt() == 97 || input[i].charCodeAt() == 98)
		{
			counter ++;
		}
	}
	return counter;
}

function toNumber(input) {
	const newArray = [];
	for (var i = 0; i < input.length; i++)
	{
		let number = input[i].charCodeAt() - 96;
		newArray.push(number);
	}
	return newArray;
}


let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]

let input2 = ['e', 'd', 'c', 'd', 'e']
console.log(countAandB(input2));  // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]