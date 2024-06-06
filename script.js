function firstNonRepeatedChar(str) {
 // Write your code here
	let charcount = []

	for(let i of str){
		if(!charcount[i]){
			charcount[i] = 0
		}

		charcount[i]++
	}

	for(let i of str){
		if(charcount[i] === 1)
			return i
	}
	return null
}
//const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
